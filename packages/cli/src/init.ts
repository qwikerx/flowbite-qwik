#!/usr/bin/env node

import { intro, outro, confirm, isCancel, spinner, log, select } from '@clack/prompts'
import * as fs from 'fs'
import { readFile } from 'fs/promises'
import { spawn } from 'child_process'
import * as prettier from 'prettier'
import * as path from 'path'
import { pathToFileURL } from 'url'
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

function hasTailwindConfig(): boolean {
  return (
    fs.existsSync('tailwind.config.js') ||
    fs.existsSync('tailwind.config.cjs') ||
    fs.existsSync('tailwind.config.mjs') ||
    fs.existsSync('tailwind.config.ts')
  )
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

function hasPostCSSConfig(): boolean {
  return (
    fs.existsSync('postcss.config.js') ||
    fs.existsSync('postcss.config.cjs') ||
    fs.existsSync('postcss.config.mjs') ||
    fs.existsSync('postcss.config.ts')
  )
}

function hasCssUtilities(): boolean {
  const globalCssPath = path.resolve(process.cwd(), './src/global.css')
  if (!fs.existsSync(globalCssPath)) {
    console.error('global.css not found at:', globalCssPath)
    return false
  }

  const content = fs.readFileSync(globalCssPath, 'utf8')
  return content.includes('@tailwind')
}

async function detectTailwindCSS(): Promise<boolean> {
  return hasTailwindConfig() && (await tailwindInstalledInProject()) && hasPostCSSConfig() && hasCssUtilities()
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
    command = `yarn add ${packageName}`
  } else if (packageManager === 'pnpm') {
    command = `pnpm add ${packageName}`
  } else {
    command = `npm install ${packageName}`
  }

  await executeCommand(command, false)
}

function getTailwindConfig(): string | undefined {
  return fs.readdirSync('.').find((file) => file.includes('tailwind.config'))
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

async function addFlowbiteToTailwind(): Promise<void> {
  const tailwindConfigName = getTailwindConfig()
  const tailwindConfigPath = path.resolve(process.cwd(), tailwindConfigName || 'tailwind.config.js')

  if (!fs.existsSync(tailwindConfigPath)) {
    console.error('tailwind.config not found at:', tailwindConfigPath)
    return
  }

  const configFileContent = fs.readFileSync(tailwindConfigPath, 'utf8')
  if (configFileContent.includes('flowbitePlugin')) return

  let tailwindConfig: any = {}
  try {
    tailwindConfig = await import(pathToFileURL(tailwindConfigPath).href).then((m) => m.default)
  } catch (e) {
    console.error('fail to load tailwind config file, generating a default one ...')
  }

  tailwindConfig.content = ['node_modules/flowbite-qwik/**/*.{cjs,mjs}', './src/**/*.{js,ts,jsx,tsx,mdx}']

  if (!tailwindConfig.plugins) tailwindConfig.plugins = []

  tailwindConfig.plugins.push('flowbitePlugin')

  if (!tailwindConfig.theme)
    tailwindConfig.theme = {
      extend: {},
    }

  if (!tailwindConfig.theme.extend) tailwindConfig.theme.extend = {}

  if (!tailwindConfig.theme.extend.animation) tailwindConfig.theme.extend.animation = {}

  if (!tailwindConfig.theme.extend.keyframes) tailwindConfig.theme.extend.keyframes = {}

  Object.assign(tailwindConfig.theme.extend.animation ?? {}, {
    'from-left': 'slideFromLeft 0.2s 1',
    'from-right': 'slideFromRight 0.2s 1',
  })

  Object.assign(tailwindConfig.theme.extend.keyframes ?? {}, {
    slideFromLeft: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' },
    },
    slideFromRight: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(0)' },
    },
  })

  const content = await prettier.format(
    `
  import flowbitePlugin from 'flowbite/plugin'

  /** @type {import('tailwindcss').Config} */
  export default ${JSON.stringify(tailwindConfig, null, 2).replace('"flowbitePlugin"', 'flowbitePlugin')}`,
    {
      singleQuote: true,
      parser: 'babel',
    },
  )

  fs.writeFileSync(tailwindConfigPath, content)
}

async function installFlowbiteQwik(): Promise<void> {
  const packageManager = detectPackageManager()
  const loader = spinner()

  loader.start('Installing flowbite-qwik...')
  await installDependency(packageManager, 'flowbite-qwik flowbite')
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
  await addFlowbiteToTailwind()
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
