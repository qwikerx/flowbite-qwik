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

  const content = await prettier.format(
    `
${globalCssContent}
@plugin 'flowbite/plugin';

@source "../node_modules/flowbite-qwik";

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
}`,
    {
      singleQuote: true,
      parser: 'babel',
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
  await addFlowbiteToGlobalCss()
  await addFlowbiteWrapper(colorTheme as string, toastPosition as string, useDarkTheme as boolean)
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
