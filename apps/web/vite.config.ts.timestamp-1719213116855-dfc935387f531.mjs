// vite.config.ts
import { defineConfig } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/@builder.io+qwik@1.5.7_@types+node@20.14.2_undici@6.18.2/node_modules/@builder.io/qwik/optimizer.mjs";
import { qwikCity } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/@builder.io+qwik-city@1.5.7_@types+node@20.14.2_rollup@4.18.0/node_modules/@builder.io/qwik-city/vite/index.mjs";
import tsconfigPaths from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.3.1_@types+node@20.14.2_/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "flowbite-qwik-web",
  description: "Unofficial Qwik components built for Flowbite and Tailwind CSS",
  engines: {
    node: "^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  trustedDependencies: [
    "sharp"
  ],
  "trustedDependencies-annotation": "Needed for bun to allow running install scripts",
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/static/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    "scan.examples": "tsx ./src/scripts/scan-examples.ts",
    "scan.docs": "tsx src/scripts/scan-docs.ts",
    start: "vite --open --mode ssr",
    qwik: "qwik"
  },
  dependencies: {
    flowbite: "^2.3.0",
    "rehype-highlight": "^7.0.0",
    "rehype-parse": "^9.0.0",
    "rehype-sanitize": "^6.0.0",
    "rehype-stringify": "^10.0.0",
    sharp: "^0.33.4",
    "tailwind-merge": "^2.3.0",
    unified: "^11.0.4"
  },
  devDependencies: {
    "@builder.io/partytown": "^0.10.2",
    "@builder.io/qwik": "1.5.7",
    "@builder.io/qwik-city": "1.5.7",
    "@types/compression": "^1.7.5",
    "@types/eslint": "^8.56.10",
    "@types/node": "^20.14.2",
    "@vitest/ui": "^1.6.0",
    autoprefixer: "^10.4.19",
    chokidar: "^3.6.0",
    compression: "^1.7.4",
    dotenv: "^16.4.5",
    eslint: "^9.5.0",
    "eslint-config-prettier": "^9.1.0",
    "flowbite-qwik": "workspace:*",
    "flowbite-qwik-icons": "^0.1.5",
    postcss: "^8.4.38",
    prettier: "^3.3.2",
    "prettier-plugin-tailwindcss": "^0.6.4",
    tailwindcss: "3.4.4",
    tsx: "^4.15.5",
    typescript: "^5.4.5",
    vite: "^5.3.1",
    "vite-tsconfig-paths": "^4.3.2",
    vitest: "^1.6.0"
  }
};

// src/scripts/scan-examples.ts
import fs from "fs";
import prettier from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/prettier@3.3.2/node_modules/prettier/index.mjs";
function getMetadata(fileContent) {
  const pattern = /\*\*(?:\s|\n)*\* title:\s*(?<title>[^\n]*)(?:\s|\n)*\* description:\s*(?<description>[^\n]*)(?:(?:\s|\n)*\* height:\s*(?<height>\d+))?/;
  const match = pattern.exec(fileContent);
  let title = "";
  let description = "";
  let height = "";
  if (match) {
    title = match[1]?.trim() ?? "";
    description = match[2]?.trim() ?? "";
    height = match[3]?.trim() ?? "200";
  }
  return {
    title,
    description,
    height
  };
}
function JsonToTs(json) {
  return JSON.stringify(json, null, 2);
}
function getExamplesRoutes() {
  const examples = {};
  console.log("Scanning examples routes...");
  return fs.readdirSync(`src/routes/examples/[theme-rtl]`).filter((component) => fs.lstatSync(`src/routes/examples/[theme-rtl]/${component}`).isDirectory()).map((component) => {
    const path2 = `src/routes/examples/[theme-rtl]/${component}`;
    fs.readdirSync(path2).map((example) => {
      const path3 = `src/routes/examples/[theme-rtl]/${component}/${example}`;
      const content = fs.readFileSync(path3 + "/index@examples.tsx", "utf-8");
      const { title, description, height } = getMetadata(content);
      const codeContent = content.replace(/\/\*\*[\s\S]*?\*\//, "").replace("import { StaticGenerateHandler } from '@builder.io/qwik-city'\n", "").replace("import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'\n", "").replace("export const onStaticGenerate: StaticGenerateHandler = async () => {\n  return staticGenerateHandler()\n}", "").trim();
      if (!examples[component]) {
        examples[component] = [];
      }
      examples[component].push({
        title,
        description,
        url: `/examples/[theme-rtl]/${component}/${example}`,
        content: codeContent,
        height
      });
    });
    prettier.format(
      [
        "/**",
        " * DO NOT EDIT, GENERATED FILE",
        " */",
        "",
        "type Example = {",
        "  title: string",
        "  description: string",
        "  url: string",
        "  content: string",
        "  height: string",
        "}",
        "",
        `export const examples: Record<string, Example[]> = ${JsonToTs(examples)}`
      ].join("\n"),
      { semi: false, singleQuote: true, trailingComma: "all", printWidth: 150, parser: "typescript" }
    ).then((content) => {
      fs.writeFileSync("./src/generated-examples.ts", content);
    });
  });
}
getExamplesRoutes();

// src/scripts/scan-docs.ts
import fs2 from "fs";
import prettier2 from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/prettier@3.3.2/node_modules/prettier/index.mjs";
function scanDocsRoutes() {
  console.log("Scanning docs routes...");
  const docCategories = fs2.readdirSync("./src/routes/docs").filter((docCategory) => fs2.lstatSync(`./src/routes/docs/${docCategory}`).isDirectory());
  const docItems = docCategories.reduce((acc, docCategory) => {
    if (!acc[docCategory]) {
      acc[docCategory] = [];
    }
    acc[docCategory].push(
      ...fs2.readdirSync(`./src/routes/docs/${docCategory}`).filter((docItem) => fs2.lstatSync(`./src/routes/docs/${docCategory}/${docItem}`).isDirectory())
    );
    return acc;
  }, {});
  prettier2.format(["/**", " * DO NOT EDIT, GENERATED FILE", " */", "", `export const allDocs = ${JSON.stringify(docItems)}`].join("\n"), {
    semi: false,
    singleQuote: true,
    trailingComma: "all",
    printWidth: 150,
    parser: "typescript"
  }).then((content) => {
    fs2.writeFileSync("./src/generated-docs.ts", content);
  });
}
scanDocsRoutes();

// vite-plugin.ts
import { watch } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/chokidar@3.6.0/node_modules/chokidar/index.js";
var path = "./src/routes/examples";
function watchExamplesRoutes() {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    name: "watch-examples-plugin",
    buildStart() {
      if (isProduction) {
        getExamplesRoutes();
        return;
      }
      const watcher = watch(path, {
        persistent: true,
        ignoreInitial: true
      });
      watcher.on("all", (event, path2) => {
        console.log(`${path2} file changed due to ${event}`);
        getExamplesRoutes();
      });
    }
  };
}
function watchDocsRoutes() {
  const isProduction = process.env.NODE_ENV === "production";
  return {
    name: "watch-docs-plugin",
    buildStart() {
      if (isProduction) {
        scanDocsRoutes();
        return;
      }
      const watcher = watch(path, {
        persistent: true,
        ignoreInitial: true
      });
      watcher.on("all", (event, path2) => {
        console.log(`${path2} file changed due to ${event}`);
        scanDocsRoutes();
      });
    }
  };
}

// vite.config.ts
import { partytownVite } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/@builder.io+partytown@0.10.2/node_modules/@builder.io/partytown/utils/index.mjs";
import { join } from "path";
var __vite_injected_original_dirname = "/Users/fauchetjeancharles/www/perso/flowbite-qwik/apps/web";
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var isDuringVercelDeployment = Boolean(process.env.VERCEL);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      !isDuringVercelDeployment && watchExamplesRoutes(),
      !isDuringVercelDeployment && watchDocsRoutes(),
      partytownVite({ dest: join(__vite_injected_original_dirname, "dist", "~partytown") })
    ],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev depencies. (otherwise things will break in production)
     */
    ssr: command === "build" && mode === "production" ? {
      // All dev dependencies should be bundled in the server build
      noExternal: Object.keys(devDependencies),
      // Anything marked as a dependency will not be bundled
      // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
      // If a dep-of-dep needs to be external, add it here
      // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
      // external: [...Object.keys(dependencies), 'bcrypt']
      external: ["fs", ...Object.keys(dependencies)]
    } : void 0,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter((dep) => dependencies2[dep]);
  const qwikPkg = Object.keys(dependencies2).filter((value) => /qwik/i.test(value));
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIiwgInNyYy9zY3JpcHRzL3NjYW4tZXhhbXBsZXMudHMiLCAic3JjL3NjcmlwdHMvc2Nhbi1kb2NzLnRzIiwgInZpdGUtcGx1Z2luLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZmF1Y2hldGplYW5jaGFybGVzL3d3dy9wZXJzby9mbG93Yml0ZS1xd2lrL2FwcHMvd2ViL3ZpdGUuY29uZmlnLnRzXCI7LyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNvbmZpZyBmb3Igdml0ZS5cbiAqIFdoZW4gYnVpbGRpbmcsIHRoZSBhZGFwdGVyIGNvbmZpZyBpcyB1c2VkIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBhbmQgZXh0ZW5kcyBpdC5cbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcXdpa1ZpdGUgfSBmcm9tICdAYnVpbGRlci5pby9xd2lrL29wdGltaXplcidcbmltcG9ydCB7IHF3aWtDaXR5IH0gZnJvbSAnQGJ1aWxkZXIuaW8vcXdpay1jaXR5L3ZpdGUnXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuaW1wb3J0IHBrZyBmcm9tICcuL3BhY2thZ2UuanNvbidcbmltcG9ydCB7IHdhdGNoRXhhbXBsZXNSb3V0ZXMsIHdhdGNoRG9jc1JvdXRlcyB9IGZyb20gJy4vdml0ZS1wbHVnaW4nXG5pbXBvcnQgeyBwYXJ0eXRvd25WaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcGFydHl0b3duL3V0aWxzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5cbnR5cGUgUGtnRGVwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuY29uc3QgeyBkZXBlbmRlbmNpZXMgPSB7fSwgZGV2RGVwZW5kZW5jaWVzID0ge30gfSA9IHBrZyBhcyBhbnkgYXMge1xuICBkZXBlbmRlbmNpZXM6IFBrZ0RlcFxuICBkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcFxuICBba2V5OiBzdHJpbmddOiB1bmtub3duXG59XG5lcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoZGV2RGVwZW5kZW5jaWVzLCBkZXBlbmRlbmNpZXMpXG5jb25zdCBpc0R1cmluZ1ZlcmNlbERlcGxveW1lbnQgPSBCb29sZWFuKHByb2Nlc3MuZW52LlZFUkNFTClcblxuLyoqXG4gKiBOb3RlIHRoYXQgVml0ZSBub3JtYWxseSBzdGFydHMgZnJvbSBgaW5kZXguaHRtbGAgYnV0IHRoZSBxd2lrQ2l0eSBwbHVnaW4gbWFrZXMgc3RhcnQgYXQgYHNyYy9lbnRyeS5zc3IudHN4YCBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KTogVXNlckNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgcXdpa0NpdHkoKSxcbiAgICAgIHF3aWtWaXRlKCksXG4gICAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgICAhaXNEdXJpbmdWZXJjZWxEZXBsb3ltZW50ICYmIHdhdGNoRXhhbXBsZXNSb3V0ZXMoKSxcbiAgICAgICFpc0R1cmluZ1ZlcmNlbERlcGxveW1lbnQgJiYgd2F0Y2hEb2NzUm91dGVzKCksXG4gICAgICBwYXJ0eXRvd25WaXRlKHsgZGVzdDogam9pbihfX2Rpcm5hbWUsICdkaXN0JywgJ35wYXJ0eXRvd24nKSB9KSxcbiAgICBdLFxuICAgIC8vIFRoaXMgdGVsbHMgVml0ZSB3aGljaCBkZXBlbmRlbmNpZXMgdG8gcHJlLWJ1aWxkIGluIGRldiBtb2RlLlxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgLy8gUHV0IHByb2JsZW1hdGljIGRlcHMgdGhhdCBicmVhayBidW5kbGluZyBoZXJlLCBtb3N0bHkgdGhvc2Ugd2l0aCBiaW5hcmllcy5cbiAgICAgIC8vIEZvciBleGFtcGxlIFsnYmV0dGVyLXNxbGl0ZTMnXSBpZiB5b3UgdXNlIHRoYXQgaW4gc2VydmVyIGZ1bmN0aW9ucy5cbiAgICAgIGV4Y2x1ZGU6IFtdLFxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhbiBhZHZhbmNlZCBzZXR0aW5nLiBJdCBpbXByb3ZlcyB0aGUgYnVuZGxpbmcgb2YgeW91ciBzZXJ2ZXIgY29kZS4gVG8gdXNlIGl0LCBtYWtlIHN1cmUgeW91IHVuZGVyc3RhbmQgd2hlbiB5b3VyIGNvbnN1bWVkIHBhY2thZ2VzIGFyZSBkZXBlbmRlbmNpZXMgb3IgZGV2IGRlcGVuY2llcy4gKG90aGVyd2lzZSB0aGluZ3Mgd2lsbCBicmVhayBpbiBwcm9kdWN0aW9uKVxuICAgICAqL1xuICAgIHNzcjpcbiAgICAgIGNvbW1hbmQgPT09ICdidWlsZCcgJiYgbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLy8gQWxsIGRldiBkZXBlbmRlbmNpZXMgc2hvdWxkIGJlIGJ1bmRsZWQgaW4gdGhlIHNlcnZlciBidWlsZFxuICAgICAgICAgICAgbm9FeHRlcm5hbDogT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAgIC8vIEFueXRoaW5nIG1hcmtlZCBhcyBhIGRlcGVuZGVuY3kgd2lsbCBub3QgYmUgYnVuZGxlZFxuICAgICAgICAgICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgcHJvZHVjdGlvbiBiaW5hcnkgZGVwcyAoaW5jbHVkaW5nIGRlcHMgb2YgZGVwcyksIENMSSBkZXBzLCBhbmQgdGhlaXIgbW9kdWxlIGdyYXBoXG4gICAgICAgICAgICAvLyBJZiBhIGRlcC1vZi1kZXAgbmVlZHMgdG8gYmUgZXh0ZXJuYWwsIGFkZCBpdCBoZXJlXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZXRoaW5nIHVzZXMgYGJjcnlwdGAgYnV0IHlvdSBkb24ndCBoYXZlIGl0IGFzIGEgZGVwLCB5b3UgY2FuIHdyaXRlXG4gICAgICAgICAgICAvLyBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksICdiY3J5cHQnXVxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsnZnMnLCAuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpXSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIHNlcnZlcjoge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBEb24ndCBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIGRldiBtb2RlXG4gICAgICAgICdDYWNoZS1Db250cm9sJzogJ3B1YmxpYywgbWF4LWFnZT0wJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmV2aWV3OiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vIERvIGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gcHJldmlldyAobm9uLWFkYXB0ZXIgcHJvZHVjdGlvbiBidWlsZClcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAncHVibGljLCBtYXgtYWdlPTYwMCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG5cbi8vICoqKiB1dGlscyAqKipcbi8qKlxuICogRnVuY3Rpb24gdG8gaWRlbnRpZnkgZHVwbGljYXRlIGRlcGVuZGVuY2llcyBhbmQgdGhyb3cgYW4gZXJyb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXZEZXBlbmRlbmNpZXMgLSBMaXN0IG9mIGRldmVsb3BtZW50IGRlcGVuZGVuY2llc1xuICogQHBhcmFtIHtPYmplY3R9IGRlcGVuZGVuY2llcyAtIExpc3Qgb2YgcHJvZHVjdGlvbiBkZXBlbmRlbmNpZXNcbiAqL1xuZnVuY3Rpb24gZXJyb3JPbkR1cGxpY2F0ZXNQa2dEZXBzKGRldkRlcGVuZGVuY2llczogUGtnRGVwLCBkZXBlbmRlbmNpZXM6IFBrZ0RlcCkge1xuICBsZXQgbXNnID0gJydcbiAgLy8gQ3JlYXRlIGFuIGFycmF5ICdkdXBsaWNhdGVEZXBzJyBieSBmaWx0ZXJpbmcgZGV2RGVwZW5kZW5jaWVzLlxuICAvLyBJZiBhIGRlcGVuZGVuY3kgYWxzbyBleGlzdHMgaW4gZGVwZW5kZW5jaWVzLCBpdCBpcyBjb25zaWRlcmVkIGEgZHVwbGljYXRlLlxuICBjb25zdCBkdXBsaWNhdGVEZXBzID0gT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKS5maWx0ZXIoKGRlcCkgPT4gZGVwZW5kZW5jaWVzW2RlcF0pXG4gIC8vIGluY2x1ZGUgYW55IGtub3duIHF3aWsgcGFja2FnZXNcbiAgY29uc3QgcXdpa1BrZyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZmlsdGVyKCh2YWx1ZSkgPT4gL3F3aWsvaS50ZXN0KHZhbHVlKSlcbiAgLy8gYW55IGVycm9ycyBmb3IgbWlzc2luZyBcInF3aWstY2l0eS1wbGFuXCJcbiAgLy8gW1BMVUdJTl9FUlJPUl06IEludmFsaWQgbW9kdWxlIFwiQHF3aWstY2l0eS1wbGFuXCIgaXMgbm90IGEgdmFsaWQgcGFja2FnZVxuICBtc2cgPSBgTW92ZSBxd2lrIHBhY2thZ2VzICR7cXdpa1BrZy5qb2luKCcsICcpfSB0byBkZXZEZXBlbmRlbmNpZXNgXG4gIGlmIChxd2lrUGtnLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICB9XG4gIC8vIEZvcm1hdCB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBkdXBsaWNhdGVzIGxpc3QuXG4gIC8vIFRoZSBgam9pbmAgZnVuY3Rpb24gaXMgdXNlZCB0byByZXByZXNlbnQgdGhlIGVsZW1lbnRzIG9mIHRoZSAnZHVwbGljYXRlRGVwcycgYXJyYXkgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICBtc2cgPSBgXG4gICAgV2FybmluZzogVGhlIGRlcGVuZGVuY3kgXCIke2R1cGxpY2F0ZURlcHMuam9pbignLCAnKX1cIiBpcyBsaXN0ZWQgaW4gYm90aCBcImRldkRlcGVuZGVuY2llc1wiIGFuZCBcImRlcGVuZGVuY2llc1wiLlxuICAgIFBsZWFzZSBtb3ZlIHRoZSBkdXBsaWNhdGVkIGRlcGVuZGVuY2llcyB0byBcImRldkRlcGVuZGVuY2llc1wiIG9ubHkgYW5kIHJlbW92ZSBpdCBmcm9tIFwiZGVwZW5kZW5jaWVzXCJcbiAgYFxuICAvLyBUaHJvdyBhbiBlcnJvciB3aXRoIHRoZSBjb25zdHJ1Y3RlZCBtZXNzYWdlLlxuICBpZiAoZHVwbGljYXRlRGVwcy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZylcbiAgfVxufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiZmxvd2JpdGUtcXdpay13ZWJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlVub2ZmaWNpYWwgUXdpayBjb21wb25lbnRzIGJ1aWx0IGZvciBGbG93Yml0ZSBhbmQgVGFpbHdpbmQgQ1NTXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiXjIwLjMuMCB8fCA+PTIxLjAuMFwiXG4gIH0sXG4gIFwiZW5naW5lcy1hbm5vdGF0aW9uXCI6IFwiTW9zdGx5IHJlcXVpcmVkIGJ5IHNoYXJwIHdoaWNoIG5lZWRzIGEgTm9kZS1BUEkgdjkgY29tcGF0aWJsZSBydW50aW1lXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInRydXN0ZWREZXBlbmRlbmNpZXNcIjogW1xuICAgIFwic2hhcnBcIlxuICBdLFxuICBcInRydXN0ZWREZXBlbmRlbmNpZXMtYW5ub3RhdGlvblwiOiBcIk5lZWRlZCBmb3IgYnVuIHRvIGFsbG93IHJ1bm5pbmcgaW5zdGFsbCBzY3JpcHRzXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJxd2lrIGJ1aWxkXCIsXG4gICAgXCJidWlsZC5jbGllbnRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJidWlsZC5wcmV2aWV3XCI6IFwidml0ZSBidWlsZCAtLXNzciBzcmMvZW50cnkucHJldmlldy50c3hcIixcbiAgICBcImJ1aWxkLnNlcnZlclwiOiBcInZpdGUgYnVpbGQgLWMgYWRhcHRlcnMvc3RhdGljL3ZpdGUuY29uZmlnLnRzXCIsXG4gICAgXCJidWlsZC50eXBlc1wiOiBcInRzYyAtLWluY3JlbWVudGFsIC0tbm9FbWl0XCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlIC0tbW9kZSBzc3JcIixcbiAgICBcImRldi5kZWJ1Z1wiOiBcIm5vZGUgLS1pbnNwZWN0LWJyayAuL25vZGVfbW9kdWxlcy92aXRlL2Jpbi92aXRlLmpzIC0tbW9kZSBzc3IgLS1mb3JjZVwiLFxuICAgIFwiZm10XCI6IFwicHJldHRpZXIgLS13cml0ZSAuXCIsXG4gICAgXCJmbXQuY2hlY2tcIjogXCJwcmV0dGllciAtLWNoZWNrIC5cIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgXFxcInNyYy8qKi8qLnRzKlxcXCJcIixcbiAgICBcInByZXZpZXdcIjogXCJxd2lrIGJ1aWxkIHByZXZpZXcgJiYgdml0ZSBwcmV2aWV3IC0tb3BlblwiLFxuICAgIFwic2Nhbi5leGFtcGxlc1wiOiBcInRzeCAuL3NyYy9zY3JpcHRzL3NjYW4tZXhhbXBsZXMudHNcIixcbiAgICBcInNjYW4uZG9jc1wiOiBcInRzeCBzcmMvc2NyaXB0cy9zY2FuLWRvY3MudHNcIixcbiAgICBcInN0YXJ0XCI6IFwidml0ZSAtLW9wZW4gLS1tb2RlIHNzclwiLFxuICAgIFwicXdpa1wiOiBcInF3aWtcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJmbG93Yml0ZVwiOiBcIl4yLjMuMFwiLFxuICAgIFwicmVoeXBlLWhpZ2hsaWdodFwiOiBcIl43LjAuMFwiLFxuICAgIFwicmVoeXBlLXBhcnNlXCI6IFwiXjkuMC4wXCIsXG4gICAgXCJyZWh5cGUtc2FuaXRpemVcIjogXCJeNi4wLjBcIixcbiAgICBcInJlaHlwZS1zdHJpbmdpZnlcIjogXCJeMTAuMC4wXCIsXG4gICAgXCJzaGFycFwiOiBcIl4wLjMzLjRcIixcbiAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjIuMy4wXCIsXG4gICAgXCJ1bmlmaWVkXCI6IFwiXjExLjAuNFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBidWlsZGVyLmlvL3BhcnR5dG93blwiOiBcIl4wLjEwLjJcIixcbiAgICBcIkBidWlsZGVyLmlvL3F3aWtcIjogXCIxLjUuN1wiLFxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5XCI6IFwiMS41LjdcIixcbiAgICBcIkB0eXBlcy9jb21wcmVzc2lvblwiOiBcIl4xLjcuNVwiLFxuICAgIFwiQHR5cGVzL2VzbGludFwiOiBcIl44LjU2LjEwXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNC4yXCIsXG4gICAgXCJAdml0ZXN0L3VpXCI6IFwiXjEuNi4wXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOVwiLFxuICAgIFwiY2hva2lkYXJcIjogXCJeMy42LjBcIixcbiAgICBcImNvbXByZXNzaW9uXCI6IFwiXjEuNy40XCIsXG4gICAgXCJkb3RlbnZcIjogXCJeMTYuNC41XCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOS41LjBcIixcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcbiAgICBcImZsb3diaXRlLXF3aWtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiZmxvd2JpdGUtcXdpay1pY29uc1wiOiBcIl4wLjEuNVwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzhcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4yXCIsXG4gICAgXCJwcmV0dGllci1wbHVnaW4tdGFpbHdpbmRjc3NcIjogXCJeMC42LjRcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiMy40LjRcIixcbiAgICBcInRzeFwiOiBcIl40LjE1LjVcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS40LjVcIixcbiAgICBcInZpdGVcIjogXCJeNS4zLjFcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4zLjJcIixcbiAgICBcInZpdGVzdFwiOiBcIl4xLjYuMFwiXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0cy9zY2FuLWV4YW1wbGVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mYXVjaGV0amVhbmNoYXJsZXMvd3d3L3BlcnNvL2Zsb3diaXRlLXF3aWsvYXBwcy93ZWIvc3JjL3NjcmlwdHMvc2Nhbi1leGFtcGxlcy50c1wiO2ltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwcmV0dGllciBmcm9tICdwcmV0dGllcidcblxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEoZmlsZUNvbnRlbnQ6IHN0cmluZykge1xuICBjb25zdCBwYXR0ZXJuID1cbiAgICAvXFwqXFwqKD86XFxzfFxcbikqXFwqIHRpdGxlOlxccyooPzx0aXRsZT5bXlxcbl0qKSg/Olxcc3xcXG4pKlxcKiBkZXNjcmlwdGlvbjpcXHMqKD88ZGVzY3JpcHRpb24+W15cXG5dKikoPzooPzpcXHN8XFxuKSpcXCogaGVpZ2h0OlxccyooPzxoZWlnaHQ+XFxkKykpPy9cbiAgY29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoZmlsZUNvbnRlbnQpXG5cbiAgbGV0IHRpdGxlID0gJydcbiAgbGV0IGRlc2NyaXB0aW9uID0gJydcbiAgbGV0IGhlaWdodCA9ICcnXG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgdGl0bGUgPSBtYXRjaFsxXT8udHJpbSgpID8/ICcnXG4gICAgZGVzY3JpcHRpb24gPSBtYXRjaFsyXT8udHJpbSgpID8/ICcnXG4gICAgaGVpZ2h0ID0gbWF0Y2hbM10/LnRyaW0oKSA/PyAnMjAwJ1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBoZWlnaHQsXG4gIH1cbn1cblxuaW50ZXJmYWNlIEV4YW1wbGUge1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGhlaWdodDogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEpzb25Ub1RzKGpzb246IFJlY29yZDxzdHJpbmcsIEV4YW1wbGVbXT4pIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeGFtcGxlc1JvdXRlcygpIHtcbiAgY29uc3QgZXhhbXBsZXM6IFJlY29yZDxzdHJpbmcsIEV4YW1wbGVbXT4gPSB7fVxuICBjb25zb2xlLmxvZygnU2Nhbm5pbmcgZXhhbXBsZXMgcm91dGVzLi4uJylcblxuICByZXR1cm4gZnNcbiAgICAucmVhZGRpclN5bmMoYHNyYy9yb3V0ZXMvZXhhbXBsZXMvW3RoZW1lLXJ0bF1gKVxuICAgIC5maWx0ZXIoKGNvbXBvbmVudCkgPT4gZnMubHN0YXRTeW5jKGBzcmMvcm91dGVzL2V4YW1wbGVzL1t0aGVtZS1ydGxdLyR7Y29tcG9uZW50fWApLmlzRGlyZWN0b3J5KCkpXG4gICAgLm1hcCgoY29tcG9uZW50KSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gYHNyYy9yb3V0ZXMvZXhhbXBsZXMvW3RoZW1lLXJ0bF0vJHtjb21wb25lbnR9YFxuXG4gICAgICBmcy5yZWFkZGlyU3luYyhwYXRoKS5tYXAoKGV4YW1wbGUpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGBzcmMvcm91dGVzL2V4YW1wbGVzL1t0aGVtZS1ydGxdLyR7Y29tcG9uZW50fS8ke2V4YW1wbGV9YFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhdGggKyAnL2luZGV4QGV4YW1wbGVzLnRzeCcsICd1dGYtOCcpXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBoZWlnaHQgfSA9IGdldE1ldGFkYXRhKGNvbnRlbnQpXG4gICAgICAgIGNvbnN0IGNvZGVDb250ZW50ID0gY29udGVudFxuICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpcXCpbXFxzXFxTXSo/XFwqXFwvLywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoXCJpbXBvcnQgeyBTdGF0aWNHZW5lcmF0ZUhhbmRsZXIgfSBmcm9tICdAYnVpbGRlci5pby9xd2lrLWNpdHknXFxuXCIsICcnKVxuICAgICAgICAgIC5yZXBsYWNlKFwiaW1wb3J0IHsgc3RhdGljR2VuZXJhdGVIYW5kbGVyIH0gZnJvbSAnfi9yb3V0ZXMvZXhhbXBsZXMvW3RoZW1lLXJ0bF0vbGF5b3V0J1xcblwiLCAnJylcbiAgICAgICAgICAucmVwbGFjZSgnZXhwb3J0IGNvbnN0IG9uU3RhdGljR2VuZXJhdGU6IFN0YXRpY0dlbmVyYXRlSGFuZGxlciA9IGFzeW5jICgpID0+IHtcXG4nICsgJyAgcmV0dXJuIHN0YXRpY0dlbmVyYXRlSGFuZGxlcigpXFxuJyArICd9JywgJycpXG4gICAgICAgICAgLnRyaW0oKVxuICAgICAgICBpZiAoIWV4YW1wbGVzW2NvbXBvbmVudF0pIHtcbiAgICAgICAgICBleGFtcGxlc1tjb21wb25lbnRdID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGV4YW1wbGVzW2NvbXBvbmVudF0ucHVzaCh7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgdXJsOiBgL2V4YW1wbGVzL1t0aGVtZS1ydGxdLyR7Y29tcG9uZW50fS8ke2V4YW1wbGV9YCxcbiAgICAgICAgICBjb250ZW50OiBjb2RlQ29udGVudCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBwcmV0dGllclxuICAgICAgICAuZm9ybWF0KFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICcvKionLFxuICAgICAgICAgICAgJyAqIERPIE5PVCBFRElULCBHRU5FUkFURUQgRklMRScsXG4gICAgICAgICAgICAnICovJyxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ3R5cGUgRXhhbXBsZSA9IHsnLFxuICAgICAgICAgICAgJyAgdGl0bGU6IHN0cmluZycsXG4gICAgICAgICAgICAnICBkZXNjcmlwdGlvbjogc3RyaW5nJyxcbiAgICAgICAgICAgICcgIHVybDogc3RyaW5nJyxcbiAgICAgICAgICAgICcgIGNvbnRlbnQ6IHN0cmluZycsXG4gICAgICAgICAgICAnICBoZWlnaHQ6IHN0cmluZycsXG4gICAgICAgICAgICAnfScsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGBleHBvcnQgY29uc3QgZXhhbXBsZXM6IFJlY29yZDxzdHJpbmcsIEV4YW1wbGVbXT4gPSAke0pzb25Ub1RzKGV4YW1wbGVzKX1gLFxuICAgICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgICAgeyBzZW1pOiBmYWxzZSwgc2luZ2xlUXVvdGU6IHRydWUsIHRyYWlsaW5nQ29tbWE6ICdhbGwnLCBwcmludFdpZHRoOiAxNTAsIHBhcnNlcjogJ3R5cGVzY3JpcHQnIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCcuL3NyYy9nZW5lcmF0ZWQtZXhhbXBsZXMudHMnLCBjb250ZW50KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmdldEV4YW1wbGVzUm91dGVzKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0cy9zY2FuLWRvY3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0cy9zY2FuLWRvY3MudHNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcHJldHRpZXIgZnJvbSAncHJldHRpZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FuRG9jc1JvdXRlcygpIHtcbiAgY29uc29sZS5sb2coJ1NjYW5uaW5nIGRvY3Mgcm91dGVzLi4uJylcbiAgY29uc3QgZG9jQ2F0ZWdvcmllcyA9IGZzLnJlYWRkaXJTeW5jKCcuL3NyYy9yb3V0ZXMvZG9jcycpLmZpbHRlcigoZG9jQ2F0ZWdvcnkpID0+IGZzLmxzdGF0U3luYyhgLi9zcmMvcm91dGVzL2RvY3MvJHtkb2NDYXRlZ29yeX1gKS5pc0RpcmVjdG9yeSgpKVxuICBjb25zdCBkb2NJdGVtcyA9IGRvY0NhdGVnb3JpZXMucmVkdWNlKChhY2M6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiwgZG9jQ2F0ZWdvcnkpID0+IHtcbiAgICBpZiAoIWFjY1tkb2NDYXRlZ29yeV0pIHtcbiAgICAgIGFjY1tkb2NDYXRlZ29yeV0gPSBbXVxuICAgIH1cbiAgICBhY2NbZG9jQ2F0ZWdvcnldLnB1c2goXG4gICAgICAuLi5mc1xuICAgICAgICAucmVhZGRpclN5bmMoYC4vc3JjL3JvdXRlcy9kb2NzLyR7ZG9jQ2F0ZWdvcnl9YClcbiAgICAgICAgLmZpbHRlcigoZG9jSXRlbSkgPT4gZnMubHN0YXRTeW5jKGAuL3NyYy9yb3V0ZXMvZG9jcy8ke2RvY0NhdGVnb3J5fS8ke2RvY0l0ZW19YCkuaXNEaXJlY3RvcnkoKSksXG4gICAgKVxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgLy8gd3JpdGUgdG8gZmlsZVxuICBwcmV0dGllclxuICAgIC5mb3JtYXQoWycvKionLCAnICogRE8gTk9UIEVESVQsIEdFTkVSQVRFRCBGSUxFJywgJyAqLycsICcnLCBgZXhwb3J0IGNvbnN0IGFsbERvY3MgPSAke0pTT04uc3RyaW5naWZ5KGRvY0l0ZW1zKX1gXS5qb2luKCdcXG4nKSwge1xuICAgICAgc2VtaTogZmFsc2UsXG4gICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgIHRyYWlsaW5nQ29tbWE6ICdhbGwnLFxuICAgICAgcHJpbnRXaWR0aDogMTUwLFxuICAgICAgcGFyc2VyOiAndHlwZXNjcmlwdCcsXG4gICAgfSlcbiAgICAudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgZnMud3JpdGVGaWxlU3luYygnLi9zcmMvZ2VuZXJhdGVkLWRvY3MudHMnLCBjb250ZW50KVxuICAgIH0pXG59XG5cbnNjYW5Eb2NzUm91dGVzKClcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi92aXRlLXBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZmF1Y2hldGplYW5jaGFybGVzL3d3dy9wZXJzby9mbG93Yml0ZS1xd2lrL2FwcHMvd2ViL3ZpdGUtcGx1Z2luLnRzXCI7aW1wb3J0IHsgZ2V0RXhhbXBsZXNSb3V0ZXMgfSBmcm9tICcuL3NyYy9zY3JpcHRzL3NjYW4tZXhhbXBsZXMnXG5pbXBvcnQgeyBzY2FuRG9jc1JvdXRlcyB9IGZyb20gJy4vc3JjL3NjcmlwdHMvc2Nhbi1kb2NzJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgd2F0Y2ggfSBmcm9tICdjaG9raWRhcidcblxuY29uc3QgcGF0aCA9ICcuL3NyYy9yb3V0ZXMvZXhhbXBsZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEV4YW1wbGVzUm91dGVzKCk6IFBsdWdpbiB7XG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3YXRjaC1leGFtcGxlcy1wbHVnaW4nLFxuICAgIGJ1aWxkU3RhcnQoKSB7XG4gICAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIGdldEV4YW1wbGVzUm91dGVzKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdhdGNoZXIgPSB3YXRjaChwYXRoLCB7XG4gICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgIGlnbm9yZUluaXRpYWw6IHRydWUsXG4gICAgICB9KVxuXG4gICAgICB3YXRjaGVyLm9uKCdhbGwnLCAoZXZlbnQsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGF0aH0gZmlsZSBjaGFuZ2VkIGR1ZSB0byAke2V2ZW50fWApXG4gICAgICAgIGdldEV4YW1wbGVzUm91dGVzKClcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hEb2NzUm91dGVzKCk6IFBsdWdpbiB7XG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3YXRjaC1kb2NzLXBsdWdpbicsXG4gICAgYnVpbGRTdGFydCgpIHtcbiAgICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgICAgc2NhbkRvY3NSb3V0ZXMoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2F0Y2hlciA9IHdhdGNoKHBhdGgsIHtcbiAgICAgICAgcGVyc2lzdGVudDogdHJ1ZSxcbiAgICAgICAgaWdub3JlSW5pdGlhbDogdHJ1ZSxcbiAgICAgIH0pXG5cbiAgICAgIHdhdGNoZXIub24oJ2FsbCcsIChldmVudCwgcGF0aCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXRofSBmaWxlIGNoYW5nZWQgZHVlIHRvICR7ZXZlbnR9YClcbiAgICAgICAgc2NhbkRvY3NSb3V0ZXMoKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsU0FBUyxvQkFBcUM7QUFDOUMsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxnQkFBZ0I7QUFDekIsT0FBTyxtQkFBbUI7OztBQ1AxQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLHNCQUFzQjtBQUFBLEVBQ3RCLFNBQVc7QUFBQSxFQUNYLHFCQUF1QjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0Esa0NBQWtDO0FBQUEsRUFDbEMsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsZ0JBQWdCO0FBQUEsSUFDaEIsZUFBZTtBQUFBLElBQ2YsS0FBTztBQUFBLElBQ1AsYUFBYTtBQUFB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QUMvRSxNQUFJLE1BQU07QUFHVixRQUFNLGdCQUFnQixPQUFPLEtBQUtELGdCQUFlLEVBQUUsT0FBTyxDQUFDLFFBQVFDLGNBQWEsR0FBRyxDQUFDO0FBRXBGLFFBQU0sVUFBVSxPQUFPLEtBQUtBLGFBQVksRUFBRSxPQUFPLENBQUMsVUFBVSxRQUFRLEtBQUssS0FBSyxDQUFDO0FBRy9FLFFBQU0sc0JBQXNCLFFBQVEsS0FBSyxJQUFJLENBQUM7QUFDOUMsTUFBSSxRQUFRLFNBQVMsR0FBRztBQUN0QixVQUFNLElBQUksTUFBTSxHQUFHO0FBQUEsRUFDckI7QUFHQSxRQUFNO0FBQUEsK0JBQ3VCLGNBQWMsS0FBSyxJQUFJLENBQUM7QUFBQTtBQUFBO0FBSXJELE1BQUksY0FBYyxTQUFTLEdBQUc7QUFDNUIsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLEVBQ3JCO0FBQ0Y7IiwKICAibmFtZXMiOiBbInBhdGgiLCAiZnMiLCAicHJldHRpZXIiLCAiZnMiLCAicHJldHRpZXIiLCAicGF0aCIsICJkZXZEZXBlbmRlbmNpZXMiLCAiZGVwZW5kZW5jaWVzIl0KfQo=
