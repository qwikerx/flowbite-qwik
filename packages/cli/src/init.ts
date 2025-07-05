#!/usr/bin/env node

import { intro, outro, confirm, isCancel, spinner, log, select } from '@clack/prompts'
import * as fs from 'fs'
import { readFile } from 'fs/promises'
import { spawn } from 'child_process'
import * as prettier from 'prettier'
import * as path from 'path'
import { identifyMonorepoRoot } from 'identify-monorepo-root'

async function readJsonFile(path: string) {
  const file = await readFile(path, 'utf8')
  return JSON.parse(file)
}

function detectPackageManager(): string {
  const rootFolder = identifyMonorepoRoot() || './'
  if (fs.existsSync(path.resolve(rootFolder, 'yarn.lock'))) {
    return 'yarn'
  } else if (fs.existsSync(path.resolve(rootFolder, 'pnpm-lock.yaml'))) {
    return 'pnpm'
  } else if (fs.existsSync(path.resolve(rootFolder, 'package-lock.json'))) {
    return 'npm'
  } else {
    return 'npm' // as default
  }
}

async function tailwindInstalledInProject(): Promise<boolean> {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json')

  if (!fs.existsSync(packageJsonPath)) {
    console.error('package.json not found at:', packageJsonPath)
    return false
  }

  const packageJson = await readJsonFile('./package.json')

  const { dependencies, devDependencies } = packageJson
  return dependencies?.['tailwindcss'] || devDependencies?.['tailwindcss']
}

function hasCssUtilities(): boolean {
  const globalCssPath = path.resolve(process.cwd(), './src/global.css')
  if (!fs.existsSync(globalCssPath)) {
    console.error('global.css not found at:', globalCssPath)
    return false
  }

  const content = fs.readFileSync(globalCssPath, 'utf8')
  return content.includes('tailwindcss')
}

async function detectTailwindCSS(): Promise<boolean> {
  return (await tailwindInstalledInProject()) && hasCssUtilities()
}

async function executeCommand(command: string, printMessages = true): Promise<string> {
  return new Promise((resolve, reject) => {
    const cli = spawn(command, [], { stdio: printMessages ? 'inherit' : 'ignore', shell: true })

    cli.on('close', (code) => {
      if (code !== 0) {
        reject(`Command ${command} exited with code ${code}`)
      } else {
        resolve(`Command ${command} completed successfully`)
      }
    })
  })
}

async function runCommand(cmd: string, packageManager: string): Promise<void> {
  let command

  if (packageManager === 'yarn') {
    command = `yarn ${cmd}`
  } else if (packageManager === 'pnpm') {
    command = `pnpm ${cmd}`
  } else {
    command = `npm run ${cmd}`
  }

  await executeCommand(command)
}

async function installDependency(packageManager: string, packageName: string): Promise<void> {
  let command
  if (packageManager === 'yarn') {
    command = `yarn add -D ${packageName}`
  } else if (packageManager === 'pnpm') {
    command = `pnpm add -D ${packageName}`
  } else {
    command = `npm install --save-dev ${packageName}`
  }

  await executeCommand(command, false)
}

async function addFlowbiteWrapper(theme: string, toastPosition: string, useDarkTheme: boolean): Promise<void> {
  const rootPath = path.resolve(process.cwd(), './src/root.tsx')
  if (!fs.existsSync(rootPath)) {
    console.error('root.tsx not found at:', rootPath)
    return
  }

  const rootContent = fs.readFileSync(rootPath, 'utf8')
  if (rootContent.includes('FlowbiteProvider')) {
    return
  }

  const hasRouterHead = rootContent.includes('<RouterHead />')
  const hasRouterOutlet = rootContent.includes('<RouterOutlet />')

  if (!hasRouterHead && useDarkTheme) {
    log.error('We did not manage to include the FlowbiteProviderHeader component. Please follow the manual installation steps.')
  }

  if (!hasRouterOutlet) {
    log.error('We did not manage to include the FlowbiteProvider component. Please follow the manual installation steps.')
    return
  }

  const content = `
import { FlowbiteProvider ${useDarkTheme ? ', FlowbiteProviderHeader' : ''} } from 'flowbite-qwik';

  ${rootContent
    .replace('<RouterHead />', useDarkTheme ? `<FlowbiteProviderHeader /><RouterHead />` : '<RouterHead />')
    .replace('<RouterOutlet />', `<FlowbiteProvider theme="${theme}" toastPosition="${toastPosition}"><RouterOutlet /></FlowbiteProvider>`)}
  `

  const prettified = await prettier.format(content, {
    singleQuote: true,
    parser: 'babel',
  })

  fs.writeFileSync(rootPath, prettified)
}

async function addFlowbiteToGlobalCss() {
  const globalCssPath = './src/global.css'
  const globalCssContent = fs.readFileSync(globalCssPath, 'utf8')

  if (!globalCssContent) {
    log.error('global.css file not found')
    return
  }

  if (globalCssContent.includes('flowbite/plugin')) return

  const content = await prettier.format(
    `
${globalCssContent}
@plugin 'flowbite/plugin';

@source "../node_modules/flowbite-qwik";

@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-bgContrast: #fff;
}
@layer theme {
  .dark {
    --color-bgContrast: #111827;
  }
}

@theme {
  --animate-from-left: slideFromLeft 0.2s 1;
  --animate-from-right: slideFromRight 0.2s 1;

  --min-width-screen-lg: 1024px;

  --container-8xl: 90rem;

  @keyframes slideFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  --color-green-50: #ecfdf5;
  --color-green-100: #d1fae5;
  --color-green-200: #a7f3d0;
  --color-green-300: #6ee7b7;
  --color-green-400: #34d399;
  --color-green-500: #10b981;
  --color-green-600: #059669;
  --color-green-700: #047857;
  --color-green-800: #065f46;
  --color-green-900: #064e3b;
  --color-green-950: oklch(.266 .065 152.934);

  --color-pink-50: #fdf2f8;
  --color-pink-100: #fce7f3;
  --color-pink-200: #fbcfe8;
  --color-pink-300: #f9a8d4;
  --color-pink-400: #f472b6;
  --color-pink-500: #ec4899;
  --color-pink-600: #db2777;
  --color-pink-700: #be185d;
  --color-pink-800: #9d174d;
  --color-pink-900: #831843;

  --color-purple-50: #f5f3ff;
  --color-purple-100: #ede9fe;
  --color-purple-200: #ddd6fe;
  --color-purple-300: #c4b5fd;
  --color-purple-400: #a78bfa;
  --color-purple-500: #8b5cf6;
  --color-purple-600: #7c3aed;
  --color-purple-700: #6d28d9;
  --color-purple-800: #5b21b6;
  --color-purple-900: #4c1d95;
  --color-purple-950: oklch(.291 .149 302.717);

  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: oklch(.13 .028 261.692);

  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-200: #bfdbfe;
  --color-blue-300: #93c5fd;
  --color-blue-400: #60a5fa;
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --color-blue-800: #1e40af;
  --color-blue-900: #1e3a8a;
  --color-blue-950: oklch(.282 .091 267.935);
}

@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}

.dark {
  color-scheme: dark;
  background: #111827;
}
.light {
  color-scheme: light;
  background: #fff;
}`,
    {
      singleQuote: true,
      parser: 'css',
    },
  )

  fs.writeFileSync(globalCssPath, content)
}

async function installFlowbiteQwik(): Promise<void> {
  const packageManager = detectPackageManager()
  const loader = spinner()

  loader.start('Installing flowbite-qwik...')
  await installDependency(packageManager, 'flowbite-qwik flowbite flowbite-qwik-icons')
  loader.stop('Flowbite Qwik installed! 🎉')

  const hasTailwindInstalled = await detectTailwindCSS()
  if (!hasTailwindInstalled) {
    log.info("Tailwind CSS is not installed in your project. Let's install it!")
    await runCommand('qwik add tailwind', packageManager)
  }

  const colorTheme = await select({
    message: 'Choose your color theme',
    initialValue: 'blue',
    options: [
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'red', label: 'Red' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'purple', label: 'Purple' },
      { value: 'pink', label: 'Pink' },
    ],
  })

  const toastPosition = await select({
    message: 'Choose your toast position',
    initialValue: 'top-right',
    options: [
      { value: 'top-right', label: 'Top Right' },
      { value: 'top-left', label: 'Top Left' },
      { value: 'bottom-right', label: 'Bottom Right' },
      { value: 'bottom-left', label: 'Bottom Left' },
    ],
  })

  const useDarkTheme = await confirm({
    message: 'Do you use dark theme?',
    initialValue: true,
  })

  loader.start('Setup flowbite-qwik...')
  try {
    await addFlowbiteToGlobalCss()
    await addFlowbiteWrapper(colorTheme as string, toastPosition as string, useDarkTheme as boolean)
  } catch (error) {
    console.log(error)
  }
  loader.stop('Flowbite Qwik configured! 🎉')
}

function bye() {
  outro('Take care, see you soon! 👋')
  process.exit(0)
}

async function init() {
  intro(`Add flowbite-qwik to your project!`)

  const proceed = await confirm({
    message: 'Do you want to set flowbite integration?',
    initialValue: true,
  })

  if (isCancel(proceed) || !proceed) {
    bye()
  }

  await installFlowbiteQwik()
  outro(`You're all set!`)
}

;(async () => {
  await init()
})()
