#!/usr/bin/env node
'use strict';

const prompts = require('@clack/prompts');
const fs = require('fs');
const child_process = require('child_process');
const prettier = require('prettier');
const path = require('path');
const url = require('url');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const fs__namespace = /*#__PURE__*/_interopNamespaceDefault(fs);
const prettier__namespace = /*#__PURE__*/_interopNamespaceDefault(prettier);
const path__namespace = /*#__PURE__*/_interopNamespaceDefault(path);

function detectPackageManager() {
  if (fs__namespace.existsSync("yarn.lock")) {
    return "yarn";
  } else if (fs__namespace.existsSync("pnpm-lock.yaml")) {
    return "pnpm";
  } else if (fs__namespace.existsSync("package-lock.json")) {
    return "npm";
  } else {
    return "npm";
  }
}
function hasTailwindConfig() {
  return fs__namespace.existsSync("tailwind.config.js") || fs__namespace.existsSync("tailwind.config.cjs") || fs__namespace.existsSync("tailwind.config.mjs") || fs__namespace.existsSync("tailwind.config.ts");
}
async function tailwindInstalledInProject() {
  const packageJsonPath = path__namespace.resolve(process.cwd(), "package.json");
  console.log("Checking package.json at:", packageJsonPath);
  if (!fs__namespace.existsSync(packageJsonPath)) {
    console.error("package.json not found at:", packageJsonPath);
    return false;
  }
  const packageJson = await import(url.pathToFileURL(packageJsonPath).href).then((m) => m);
  console.log("Loaded package.json:", packageJson);
  const { dependencies, devDependencies } = packageJson;
  return dependencies?.["tailwindcss"] || devDependencies?.["tailwindcss"];
}
function hasPostCSSConfig() {
  return fs__namespace.existsSync("postcss.config.js") || fs__namespace.existsSync("postcss.config.cjs") || fs__namespace.existsSync("postcss.config.mjs") || fs__namespace.existsSync("postcss.config.ts");
}
function hasCssUtilities() {
  const globalCssPath = path__namespace.resolve(process.cwd(), "./src/global.css");
  if (!fs__namespace.existsSync(globalCssPath)) {
    console.error("global.css not found at:", globalCssPath);
    return false;
  }
  const content = fs__namespace.readFileSync(globalCssPath, "utf8");
  return content.includes("@tailwind");
}
async function detectTailwindCSS() {
  return hasTailwindConfig() && await tailwindInstalledInProject() && hasPostCSSConfig() && hasCssUtilities();
}
async function executeCommand(command, printMessages = true) {
  return new Promise((resolve, reject) => {
    const cli = child_process.spawn(command, [], { stdio: printMessages ? "inherit" : "ignore", shell: true });
    cli.on("close", (code) => {
      if (code !== 0) {
        reject(`Command ${command} exited with code ${code}`);
      } else {
        resolve(`Command ${command} completed successfully`);
      }
    });
  });
}
async function runCommand(cmd, packageManager) {
  let command;
  if (packageManager === "yarn") {
    command = `yarn ${cmd}`;
  } else if (packageManager === "pnpm") {
    command = `pnpm ${cmd}`;
  } else {
    command = `npm run ${cmd}`;
  }
  await executeCommand(command);
}
async function installDependency(packageManager, packageName) {
  let command;
  if (packageManager === "yarn") {
    command = `yarn add ${packageName}`;
  } else if (packageManager === "pnpm") {
    command = `pnpm add ${packageName}`;
  } else {
    command = `npm install ${packageName}`;
  }
  await executeCommand(command, false);
}
function getTailwindConfig() {
  return fs__namespace.readdirSync(".").find((file) => file.includes("tailwind.config"));
}
async function addFlowbiteWrapper(theme, toastPosition, useDarkTheme) {
  const rootPath = path__namespace.resolve(process.cwd(), "./src/root.tsx");
  if (!fs__namespace.existsSync(rootPath)) {
    console.error("root.tsx not found at:", rootPath);
    return;
  }
  const rootContent = fs__namespace.readFileSync(rootPath, "utf8");
  if (rootContent.includes("FlowbiteProvider")) {
    return;
  }
  const hasRouterHead = rootContent.includes("<RouterHead />");
  const hasRouterOutlet = rootContent.includes("<RouterOutlet />");
  if (!hasRouterHead && useDarkTheme) {
    prompts.log.error("We did not manage to include the FlowbiteProviderHeader component. Please follow the manual installation steps.");
  }
  if (!hasRouterOutlet) {
    prompts.log.error("We did not manage to include the FlowbiteProvider component. Please follow the manual installation steps.");
    return;
  }
  const content = `
import { FlowbiteProvider ${useDarkTheme ? ", FlowbiteProviderHeader" : ""} } from 'flowbite-qwik';

  ${rootContent.replace("<RouterHead />", useDarkTheme ? `<FlowbiteProviderHeader /><RouterHead />` : "<RouterHead />").replace("<RouterOutlet />", `<FlowbiteProvider theme="${theme}" toastPosition="${toastPosition}"><RouterOutlet /></FlowbiteProvider>`)}
  `;
  const prettified = await prettier__namespace.format(content, {
    singleQuote: true,
    parser: "babel"
  });
  fs__namespace.writeFileSync(rootPath, prettified);
}
async function addFlowbiteToTailwind() {
  const tailwindConfigName = getTailwindConfig();
  const tailwindConfigPath = path__namespace.resolve(process.cwd(), tailwindConfigName || "tailwind.config.js");
  console.log("Tailwind config path:", tailwindConfigPath);
  if (!fs__namespace.existsSync(tailwindConfigPath)) {
    console.error("tailwind.config not found at:", tailwindConfigPath);
    return;
  }
  if (fs__namespace.readFileSync(tailwindConfigPath, "utf8").includes("flowbitePlugin"))
    return;
  const tailwindConfig = {};
  tailwindConfig.content = ["node_modules/flowbite-qwik/**/*.{cjs,mjs}", "./src/**/*.{js,ts,jsx,tsx,mdx}"];
  if (!tailwindConfig.plugins)
    tailwindConfig.plugins = [];
  tailwindConfig.plugins.push("flowbitePlugin");
  if (!tailwindConfig.theme)
    tailwindConfig.theme = {
      extend: {}
    };
  if (!tailwindConfig.theme.extend)
    tailwindConfig.theme.extend = {};
  if (!tailwindConfig.theme.extend.animation)
    tailwindConfig.theme.extend.animation = {};
  if (!tailwindConfig.theme.extend.keyframes)
    tailwindConfig.theme.extend.keyframes = {};
  Object.assign(tailwindConfig.theme.extend.animation ?? {}, {
    "from-left": "slideFromLeft 0.2s 1",
    "from-right": "slideFromRight 0.2s 1"
  });
  Object.assign(tailwindConfig.theme.extend.keyframes ?? {}, {
    slideFromLeft: {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(0)" }
    },
    slideFromRight: {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(0)" }
    }
  });
  const content = await prettier__namespace.format(
    `
  import flowbitePlugin from 'flowbite/plugin'

  /** @type {import('tailwindcss').Config} */
  export default ${JSON.stringify(tailwindConfig, null, 2).replace('"flowbitePlugin"', "flowbitePlugin")}`,
    {
      singleQuote: true,
      parser: "babel"
    }
  );
  fs__namespace.writeFileSync(tailwindConfigPath, content);
}
async function installFlowbiteQwik() {
  const packageManager = detectPackageManager();
  const loader = prompts.spinner();
  loader.start("Installing flowbite-qwik...");
  await installDependency(packageManager, "flowbite-qwik flowbite");
  loader.stop("Flowbite Qwik installed! 🎉");
  const hasTailwindInstalled = await detectTailwindCSS();
  if (!hasTailwindInstalled) {
    prompts.log.info("Tailwind CSS is not installed in your project. Let's install it!");
    await runCommand("qwik add tailwind", packageManager);
  }
  const colorTheme = await prompts.select({
    message: "Choose your color theme",
    options: [
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "red", label: "Red" },
      { value: "yellow", label: "Yellow" },
      { value: "purple", label: "Purple" },
      { value: "pink", label: "Pink" }
    ]
  });
  const toastPosition = await prompts.select({
    message: "Choose your toast position",
    options: [
      { value: "top-right", label: "Top Right" },
      { value: "top-left", label: "Top Left" },
      { value: "bottom-right", label: "Bottom Right" },
      { value: "bottom-left", label: "Bottom Left" }
    ]
  });
  const useDarkTheme = await prompts.confirm({
    message: "Do you use dark theme?",
    initialValue: true
  });
  loader.start("Setup flowbite-qwik...");
  await addFlowbiteToTailwind();
  await addFlowbiteWrapper(colorTheme, toastPosition, useDarkTheme);
  loader.stop("Flowbite Qwik configured! 🎉");
}
function bye() {
  prompts.outro("Take care, see you soon! 👋");
  process.exit(0);
}
async function init() {
  prompts.intro(`Add flowbite-qwik to your project!`);
  const proceed = await prompts.confirm({
    message: "Do you want to set flowbite integration?",
    initialValue: true
  });
  if (prompts.isCancel(proceed) || !proceed) {
    bye();
  }
  await installFlowbiteQwik();
  prompts.outro(`You're all set!`);
}
(async () => {
  await init();
})();
