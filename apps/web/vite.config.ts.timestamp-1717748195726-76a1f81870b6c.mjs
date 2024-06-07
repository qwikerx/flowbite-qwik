// vite.config.ts
import { defineConfig } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/vite@5.2.12_@types+node@20.14.1/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/@builder.io+qwik@1.5.5_@types+node@20.14.1_undici@6.18.2/node_modules/@builder.io/qwik/optimizer.mjs";
import { qwikCity } from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/@builder.io+qwik-city@1.5.5_@types+node@20.14.1_rollup@4.18.0/node_modules/@builder.io/qwik-city/vite/index.mjs";
import tsconfigPaths from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.12_@types+node@20.14.1_/node_modules/vite-tsconfig-paths/dist/index.mjs";

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
    "@builder.io/qwik": "1.5.5",
    "@builder.io/qwik-city": "1.5.5",
    "@types/compression": "^1.7.5",
    "@types/eslint": "^8.56.10",
    "@types/node": "^20.14.1",
    "@vitest/ui": "^1.6.0",
    autoprefixer: "^10.4.19",
    chokidar: "^3.6.0",
    compression: "^1.7.4",
    dotenv: "^16.4.5",
    eslint: "^9.4.0",
    "eslint-config-prettier": "^9.1.0",
    "flowbite-qwik": "workspace:*",
    postcss: "^8.4.38",
    prettier: "^3.3.0",
    "prettier-plugin-tailwindcss": "^0.6.1",
    tailwindcss: "3.4.3",
    tsx: "^4.11.2",
    typescript: "^5.4.5",
    vite: "^5.2.12",
    "vite-tsconfig-paths": "^4.3.2",
    vitest: "^1.6.0"
  }
};

// src/scripts/scan-examples.ts
import fs from "fs";
import prettier from "file:///Users/fauchetjeancharles/www/perso/flowbite-qwik/node_modules/.pnpm/prettier@3.3.0/node_modules/prettier/index.mjs";
function getTitleAndDescription(fileContent) {
  const pattern = /\/\*\*[^]*?title:\s*(.*?)\s*\*[^]*?description:\s*(.*?)\s*\*\//;
  const match = pattern.exec(fileContent);
  let title = "";
  let description = "";
  if (match) {
    title = match[1].trim();
    description = match[2].trim();
  }
  return {
    title,
    description
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
      const { title, description } = getTitleAndDescription(content);
      const codeContent = content.replace(/\/\*\*[\s\S]*?\*\//, "").trim();
      if (!examples[component]) {
        examples[component] = [];
      }
      examples[component].push({
        title,
        description,
        url: `/examples/[theme-rtl]/${component}/${example}`,
        content: codeContent
      });
    });
    prettier.format(
      [
        "type Example = {",
        "  title: string",
        "  description: string",
        "  url: string",
        "  content: string",
        "}",
        "",
        `export const examples: Record<string, Example[]> = ${JsonToTs(examples)}`
      ].join("\n"),
      { semi: false, singleQuote: true, trailingComma: "all", printWidth: 150, parser: "typescript" }
    ).then((content) => {
      fs.writeFileSync("./src/examples.ts", content);
    });
  });
}
getExamplesRoutes();

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

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), watchExamplesRoutes()],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIiwgInNyYy9zY3JpcHRzL3NjYW4tZXhhbXBsZXMudHMiLCAidml0ZS1wbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmF1Y2hldGplYW5jaGFybGVzL3d3dy9wZXJzby9mbG93Yml0ZS1xd2lrL2FwcHMvd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZmF1Y2hldGplYW5jaGFybGVzL3d3dy9wZXJzby9mbG93Yml0ZS1xd2lrL2FwcHMvd2ViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mYXVjaGV0amVhbmNoYXJsZXMvd3d3L3BlcnNvL2Zsb3diaXRlLXF3aWsvYXBwcy93ZWIvdml0ZS5jb25maWcudHNcIjsvKipcbiAqIFRoaXMgaXMgdGhlIGJhc2UgY29uZmlnIGZvciB2aXRlLlxuICogV2hlbiBidWlsZGluZywgdGhlIGFkYXB0ZXIgY29uZmlnIGlzIHVzZWQgd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGFuZCBleHRlbmRzIGl0LlxuICovXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBxd2lrVml0ZSB9IGZyb20gJ0BidWlsZGVyLmlvL3F3aWsvb3B0aW1pemVyJ1xuaW1wb3J0IHsgcXdpa0NpdHkgfSBmcm9tICdAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZSdcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5pbXBvcnQgcGtnIGZyb20gJy4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IHdhdGNoRXhhbXBsZXNSb3V0ZXMgZnJvbSAnLi92aXRlLXBsdWdpbidcblxudHlwZSBQa2dEZXAgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG5jb25zdCB7IGRlcGVuZGVuY2llcyA9IHt9LCBkZXZEZXBlbmRlbmNpZXMgPSB7fSB9ID0gcGtnIGFzIGFueSBhcyB7XG4gIGRlcGVuZGVuY2llczogUGtnRGVwXG4gIGRldkRlcGVuZGVuY2llczogUGtnRGVwXG4gIFtrZXk6IHN0cmluZ106IHVua25vd25cbn1cbmVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhkZXZEZXBlbmRlbmNpZXMsIGRlcGVuZGVuY2llcylcblxuLyoqXG4gKiBOb3RlIHRoYXQgVml0ZSBub3JtYWxseSBzdGFydHMgZnJvbSBgaW5kZXguaHRtbGAgYnV0IHRoZSBxd2lrQ2l0eSBwbHVnaW4gbWFrZXMgc3RhcnQgYXQgYHNyYy9lbnRyeS5zc3IudHN4YCBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KTogVXNlckNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW3F3aWtDaXR5KCksIHF3aWtWaXRlKCksIHRzY29uZmlnUGF0aHMoKSwgd2F0Y2hFeGFtcGxlc1JvdXRlcygpXSxcbiAgICAvLyBUaGlzIHRlbGxzIFZpdGUgd2hpY2ggZGVwZW5kZW5jaWVzIHRvIHByZS1idWlsZCBpbiBkZXYgbW9kZS5cbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIC8vIFB1dCBwcm9ibGVtYXRpYyBkZXBzIHRoYXQgYnJlYWsgYnVuZGxpbmcgaGVyZSwgbW9zdGx5IHRob3NlIHdpdGggYmluYXJpZXMuXG4gICAgICAvLyBGb3IgZXhhbXBsZSBbJ2JldHRlci1zcWxpdGUzJ10gaWYgeW91IHVzZSB0aGF0IGluIHNlcnZlciBmdW5jdGlvbnMuXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhbiBhZHZhbmNlZCBzZXR0aW5nLiBJdCBpbXByb3ZlcyB0aGUgYnVuZGxpbmcgb2YgeW91ciBzZXJ2ZXIgY29kZS4gVG8gdXNlIGl0LCBtYWtlIHN1cmUgeW91IHVuZGVyc3RhbmQgd2hlbiB5b3VyIGNvbnN1bWVkIHBhY2thZ2VzIGFyZSBkZXBlbmRlbmNpZXMgb3IgZGV2IGRlcGVuY2llcy4gKG90aGVyd2lzZSB0aGluZ3Mgd2lsbCBicmVhayBpbiBwcm9kdWN0aW9uKVxuICAgICAqL1xuICAgIHNzcjpcbiAgICAgIGNvbW1hbmQgPT09ICdidWlsZCcgJiYgbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLy8gQWxsIGRldiBkZXBlbmRlbmNpZXMgc2hvdWxkIGJlIGJ1bmRsZWQgaW4gdGhlIHNlcnZlciBidWlsZFxuICAgICAgICAgICAgbm9FeHRlcm5hbDogT2JqZWN0LmtleXMoZGV2RGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAgIC8vIEFueXRoaW5nIG1hcmtlZCBhcyBhIGRlcGVuZGVuY3kgd2lsbCBub3QgYmUgYnVuZGxlZFxuICAgICAgICAgICAgLy8gVGhlc2Ugc2hvdWxkIG9ubHkgYmUgcHJvZHVjdGlvbiBiaW5hcnkgZGVwcyAoaW5jbHVkaW5nIGRlcHMgb2YgZGVwcyksIENMSSBkZXBzLCBhbmQgdGhlaXIgbW9kdWxlIGdyYXBoXG4gICAgICAgICAgICAvLyBJZiBhIGRlcC1vZi1kZXAgbmVlZHMgdG8gYmUgZXh0ZXJuYWwsIGFkZCBpdCBoZXJlXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZXRoaW5nIHVzZXMgYGJjcnlwdGAgYnV0IHlvdSBkb24ndCBoYXZlIGl0IGFzIGEgZGVwLCB5b3UgY2FuIHdyaXRlXG4gICAgICAgICAgICAvLyBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKGRlcGVuZGVuY2llcyksICdiY3J5cHQnXVxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsnZnMnLCAuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpXSxcbiAgICAgICAgICB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuXG4gICAgc2VydmVyOiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vIERvbid0IGNhY2hlIHRoZSBzZXJ2ZXIgcmVzcG9uc2UgaW4gZGV2IG1vZGVcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAncHVibGljLCBtYXgtYWdlPTAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gRG8gY2FjaGUgdGhlIHNlcnZlciByZXNwb25zZSBpbiBwcmV2aWV3IChub24tYWRhcHRlciBwcm9kdWN0aW9uIGJ1aWxkKVxuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICdwdWJsaWMsIG1heC1hZ2U9NjAwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSlcblxuLy8gKioqIHV0aWxzICoqKlxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGlkZW50aWZ5IGR1cGxpY2F0ZSBkZXBlbmRlbmNpZXMgYW5kIHRocm93IGFuIGVycm9yXG4gKiBAcGFyYW0ge09iamVjdH0gZGV2RGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmNpZXMgLSBMaXN0IG9mIHByb2R1Y3Rpb24gZGVwZW5kZW5jaWVzXG4gKi9cbmZ1bmN0aW9uIGVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcCwgZGVwZW5kZW5jaWVzOiBQa2dEZXApIHtcbiAgbGV0IG1zZyA9ICcnXG4gIC8vIENyZWF0ZSBhbiBhcnJheSAnZHVwbGljYXRlRGVwcycgYnkgZmlsdGVyaW5nIGRldkRlcGVuZGVuY2llcy5cbiAgLy8gSWYgYSBkZXBlbmRlbmN5IGFsc28gZXhpc3RzIGluIGRlcGVuZGVuY2llcywgaXQgaXMgY29uc2lkZXJlZCBhIGR1cGxpY2F0ZS5cbiAgY29uc3QgZHVwbGljYXRlRGVwcyA9IE9iamVjdC5rZXlzKGRldkRlcGVuZGVuY2llcykuZmlsdGVyKChkZXApID0+IGRlcGVuZGVuY2llc1tkZXBdKVxuXG4gIC8vIGluY2x1ZGUgYW55IGtub3duIHF3aWsgcGFja2FnZXNcbiAgY29uc3QgcXdpa1BrZyA9IE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZmlsdGVyKCh2YWx1ZSkgPT4gL3F3aWsvaS50ZXN0KHZhbHVlKSlcblxuICAvLyBhbnkgZXJyb3JzIGZvciBtaXNzaW5nIFwicXdpay1jaXR5LXBsYW5cIlxuICAvLyBbUExVR0lOX0VSUk9SXTogSW52YWxpZCBtb2R1bGUgXCJAcXdpay1jaXR5LXBsYW5cIiBpcyBub3QgYSB2YWxpZCBwYWNrYWdlXG4gIG1zZyA9IGBNb3ZlIHF3aWsgcGFja2FnZXMgJHtxd2lrUGtnLmpvaW4oJywgJyl9IHRvIGRldkRlcGVuZGVuY2llc2BcblxuICBpZiAocXdpa1BrZy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZylcbiAgfVxuXG4gIC8vIEZvcm1hdCB0aGUgZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBkdXBsaWNhdGVzIGxpc3QuXG4gIC8vIFRoZSBgam9pbmAgZnVuY3Rpb24gaXMgdXNlZCB0byByZXByZXNlbnQgdGhlIGVsZW1lbnRzIG9mIHRoZSAnZHVwbGljYXRlRGVwcycgYXJyYXkgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICBtc2cgPSBgXG4gICAgV2FybmluZzogVGhlIGRlcGVuZGVuY3kgXCIke2R1cGxpY2F0ZURlcHMuam9pbignLCAnKX1cIiBpcyBsaXN0ZWQgaW4gYm90aCBcImRldkRlcGVuZGVuY2llc1wiIGFuZCBcImRlcGVuZGVuY2llc1wiLlxuICAgIFBsZWFzZSBtb3ZlIHRoZSBkdXBsaWNhdGVkIGRlcGVuZGVuY2llcyB0byBcImRldkRlcGVuZGVuY2llc1wiIG9ubHkgYW5kIHJlbW92ZSBpdCBmcm9tIFwiZGVwZW5kZW5jaWVzXCJcbiAgYFxuXG4gIC8vIFRocm93IGFuIGVycm9yIHdpdGggdGhlIGNvbnN0cnVjdGVkIG1lc3NhZ2UuXG4gIGlmIChkdXBsaWNhdGVEZXBzLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICB9XG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJmbG93Yml0ZS1xd2lrLXdlYlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVW5vZmZpY2lhbCBRd2lrIGNvbXBvbmVudHMgYnVpbHQgZm9yIEZsb3diaXRlIGFuZCBUYWlsd2luZCBDU1NcIixcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCJeMjAuMy4wIHx8ID49MjEuMC4wXCJcbiAgfSxcbiAgXCJlbmdpbmVzLWFubm90YXRpb25cIjogXCJNb3N0bHkgcmVxdWlyZWQgYnkgc2hhcnAgd2hpY2ggbmVlZHMgYSBOb2RlLUFQSSB2OSBjb21wYXRpYmxlIHJ1bnRpbWVcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidHJ1c3RlZERlcGVuZGVuY2llc1wiOiBbXG4gICAgXCJzaGFycFwiXG4gIF0sXG4gIFwidHJ1c3RlZERlcGVuZGVuY2llcy1hbm5vdGF0aW9uXCI6IFwiTmVlZGVkIGZvciBidW4gdG8gYWxsb3cgcnVubmluZyBpbnN0YWxsIHNjcmlwdHNcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInF3aWsgYnVpbGRcIixcbiAgICBcImJ1aWxkLmNsaWVudFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkLnByZXZpZXdcIjogXCJ2aXRlIGJ1aWxkIC0tc3NyIHNyYy9lbnRyeS5wcmV2aWV3LnRzeFwiLFxuICAgIFwiYnVpbGQuc2VydmVyXCI6IFwidml0ZSBidWlsZCAtYyBhZGFwdGVycy9zdGF0aWMvdml0ZS5jb25maWcudHNcIixcbiAgICBcImJ1aWxkLnR5cGVzXCI6IFwidHNjIC0taW5jcmVtZW50YWwgLS1ub0VtaXRcIixcbiAgICBcImRldlwiOiBcInZpdGUgLS1tb2RlIHNzclwiLFxuICAgIFwiZGV2LmRlYnVnXCI6IFwibm9kZSAtLWluc3BlY3QtYnJrIC4vbm9kZV9tb2R1bGVzL3ZpdGUvYmluL3ZpdGUuanMgLS1tb2RlIHNzciAtLWZvcmNlXCIsXG4gICAgXCJmbXRcIjogXCJwcmV0dGllciAtLXdyaXRlIC5cIixcbiAgICBcImZtdC5jaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLlwiLFxuICAgIFwibGludFwiOiBcImVzbGludCBcXFwic3JjLyoqLyoudHMqXFxcIlwiLFxuICAgIFwicHJldmlld1wiOiBcInF3aWsgYnVpbGQgcHJldmlldyAmJiB2aXRlIHByZXZpZXcgLS1vcGVuXCIsXG4gICAgXCJzY2FuLmV4YW1wbGVzXCI6IFwidHN4IC4vc3JjL3NjcmlwdHMvc2Nhbi1leGFtcGxlcy50c1wiLFxuICAgIFwic3RhcnRcIjogXCJ2aXRlIC0tb3BlbiAtLW1vZGUgc3NyXCIsXG4gICAgXCJxd2lrXCI6IFwicXdpa1wiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImZsb3diaXRlXCI6IFwiXjIuMy4wXCIsXG4gICAgXCJyZWh5cGUtaGlnaGxpZ2h0XCI6IFwiXjcuMC4wXCIsXG4gICAgXCJyZWh5cGUtcGFyc2VcIjogXCJeOS4wLjBcIixcbiAgICBcInJlaHlwZS1zYW5pdGl6ZVwiOiBcIl42LjAuMFwiLFxuICAgIFwicmVoeXBlLXN0cmluZ2lmeVwiOiBcIl4xMC4wLjBcIixcbiAgICBcInNoYXJwXCI6IFwiXjAuMzMuNFwiLFxuICAgIFwidGFpbHdpbmQtbWVyZ2VcIjogXCJeMi4zLjBcIixcbiAgICBcInVuaWZpZWRcIjogXCJeMTEuMC40XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJ1aWxkZXIuaW8vcGFydHl0b3duXCI6IFwiXjAuMTAuMlwiLFxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpa1wiOiBcIjEuNS41XCIsXG4gICAgXCJAYnVpbGRlci5pby9xd2lrLWNpdHlcIjogXCIxLjUuNVwiLFxuICAgIFwiQHR5cGVzL2NvbXByZXNzaW9uXCI6IFwiXjEuNy41XCIsXG4gICAgXCJAdHlwZXMvZXNsaW50XCI6IFwiXjguNTYuMTBcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjE0LjFcIixcbiAgICBcIkB2aXRlc3QvdWlcIjogXCJeMS42LjBcIixcbiAgICBcImF1dG9wcmVmaXhlclwiOiBcIl4xMC40LjE5XCIsXG4gICAgXCJjaG9raWRhclwiOiBcIl4zLjYuMFwiLFxuICAgIFwiY29tcHJlc3Npb25cIjogXCJeMS43LjRcIixcbiAgICBcImRvdGVudlwiOiBcIl4xNi40LjVcIixcbiAgICBcImVzbGludFwiOiBcIl45LjQuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuICAgIFwiZmxvd2JpdGUtcXdpa1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zOFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4zLjBcIixcbiAgICBcInByZXR0aWVyLXBsdWdpbi10YWlsd2luZGNzc1wiOiBcIl4wLjYuMVwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCIzLjQuM1wiLFxuICAgIFwidHN4XCI6IFwiXjQuMTEuMlwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjQuNVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjIuMTJcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4zLjJcIixcbiAgICBcInZpdGVzdFwiOiBcIl4xLjYuMFwiXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZhdWNoZXRqZWFuY2hhcmxlcy93d3cvcGVyc28vZmxvd2JpdGUtcXdpay9hcHBzL3dlYi9zcmMvc2NyaXB0cy9zY2FuLWV4YW1wbGVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mYXVjaGV0amVhbmNoYXJsZXMvd3d3L3BlcnNvL2Zsb3diaXRlLXF3aWsvYXBwcy93ZWIvc3JjL3NjcmlwdHMvc2Nhbi1leGFtcGxlcy50c1wiO2ltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwcmV0dGllciBmcm9tICdwcmV0dGllcidcblxuZnVuY3Rpb24gZ2V0VGl0bGVBbmREZXNjcmlwdGlvbihmaWxlQ29udGVudDogc3RyaW5nKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXFwvXFwqXFwqW15dKj90aXRsZTpcXHMqKC4qPylcXHMqXFwqW15dKj9kZXNjcmlwdGlvbjpcXHMqKC4qPylcXHMqXFwqXFwvL1xuICBjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhmaWxlQ29udGVudClcblxuICBsZXQgdGl0bGUgPSAnJ1xuICBsZXQgZGVzY3JpcHRpb24gPSAnJ1xuXG4gIGlmIChtYXRjaCkge1xuICAgIHRpdGxlID0gbWF0Y2hbMV0udHJpbSgpXG4gICAgZGVzY3JpcHRpb24gPSBtYXRjaFsyXS50cmltKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gIH1cbn1cblxuaW50ZXJmYWNlIEV4YW1wbGUge1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEpzb25Ub1RzKGpzb246IFJlY29yZDxzdHJpbmcsIEV4YW1wbGVbXT4pIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeGFtcGxlc1JvdXRlcygpIHtcbiAgY29uc3QgZXhhbXBsZXM6IFJlY29yZDxzdHJpbmcsIEV4YW1wbGVbXT4gPSB7fVxuICBjb25zb2xlLmxvZygnU2Nhbm5pbmcgZXhhbXBsZXMgcm91dGVzLi4uJylcblxuICByZXR1cm4gZnNcbiAgICAucmVhZGRpclN5bmMoYHNyYy9yb3V0ZXMvZXhhbXBsZXMvW3RoZW1lLXJ0bF1gKVxuICAgIC5maWx0ZXIoKGNvbXBvbmVudCkgPT4gZnMubHN0YXRTeW5jKGBzcmMvcm91dGVzL2V4YW1wbGVzL1t0aGVtZS1ydGxdLyR7Y29tcG9uZW50fWApLmlzRGlyZWN0b3J5KCkpXG4gICAgLm1hcCgoY29tcG9uZW50KSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gYHNyYy9yb3V0ZXMvZXhhbXBsZXMvW3RoZW1lLXJ0bF0vJHtjb21wb25lbnR9YFxuXG4gICAgICBmcy5yZWFkZGlyU3luYyhwYXRoKS5tYXAoKGV4YW1wbGUpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGBzcmMvcm91dGVzL2V4YW1wbGVzL1t0aGVtZS1ydGxdLyR7Y29tcG9uZW50fS8ke2V4YW1wbGV9YFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKHBhdGggKyAnL2luZGV4QGV4YW1wbGVzLnRzeCcsICd1dGYtOCcpXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBnZXRUaXRsZUFuZERlc2NyaXB0aW9uKGNvbnRlbnQpXG4gICAgICAgIGNvbnN0IGNvZGVDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9cXC9cXCpcXCpbXFxzXFxTXSo/XFwqXFwvLywgJycpLnRyaW0oKVxuICAgICAgICBpZiAoIWV4YW1wbGVzW2NvbXBvbmVudF0pIHtcbiAgICAgICAgICBleGFtcGxlc1tjb21wb25lbnRdID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGV4YW1wbGVzW2NvbXBvbmVudF0ucHVzaCh7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgdXJsOiBgL2V4YW1wbGVzL1t0aGVtZS1ydGxdLyR7Y29tcG9uZW50fS8ke2V4YW1wbGV9YCxcbiAgICAgICAgICBjb250ZW50OiBjb2RlQ29udGVudCxcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHByZXR0aWVyXG4gICAgICAgIC5mb3JtYXQoXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ3R5cGUgRXhhbXBsZSA9IHsnLFxuICAgICAgICAgICAgJyAgdGl0bGU6IHN0cmluZycsXG4gICAgICAgICAgICAnICBkZXNjcmlwdGlvbjogc3RyaW5nJyxcbiAgICAgICAgICAgICcgIHVybDogc3RyaW5nJyxcbiAgICAgICAgICAgICcgIGNvbnRlbnQ6IHN0cmluZycsXG4gICAgICAgICAgICAnfScsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGBleHBvcnQgY29uc3QgZXhhbXBsZXM6IFJlY29yZDxzdHJpbmcsIEV4YW1wbGVbXT4gPSAke0pzb25Ub1RzKGV4YW1wbGVzKX1gLFxuICAgICAgICAgIF0uam9pbignXFxuJyksXG4gICAgICAgICAgeyBzZW1pOiBmYWxzZSwgc2luZ2xlUXVvdGU6IHRydWUsIHRyYWlsaW5nQ29tbWE6ICdhbGwnLCBwcmludFdpZHRoOiAxNTAsIHBhcnNlcjogJ3R5cGVzY3JpcHQnIH0sXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCcuL3NyYy9leGFtcGxlcy50cycsIGNvbnRlbnQpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZ2V0RXhhbXBsZXNSb3V0ZXMoKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmF1Y2hldGplYW5jaGFybGVzL3d3dy9wZXJzby9mbG93Yml0ZS1xd2lrL2FwcHMvd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZmF1Y2hldGplYW5jaGFybGVzL3d3dy9wZXJzby9mbG93Yml0ZS1xd2lrL2FwcHMvd2ViL3ZpdGUtcGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mYXVjaGV0amVhbmNoYXJsZXMvd3d3L3BlcnNvL2Zsb3diaXRlLXF3aWsvYXBwcy93ZWIvdml0ZS1wbHVnaW4udHNcIjtpbXBvcnQgeyBnZXRFeGFtcGxlc1JvdXRlcyB9IGZyb20gJy4vc3JjL3NjcmlwdHMvc2Nhbi1leGFtcGxlcydcbmltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHdhdGNoIH0gZnJvbSAnY2hva2lkYXInXG5cbmNvbnN0IHBhdGggPSAnLi9zcmMvcm91dGVzL2V4YW1wbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXRjaEV4YW1wbGVzUm91dGVzKCk6IFBsdWdpbiB7XG4gIGNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd3YXRjaC1leGFtcGxlcy1wbHVnaW4nLFxuICAgIGJ1aWxkU3RhcnQoKSB7XG4gICAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIGdldEV4YW1wbGVzUm91dGVzKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdhdGNoZXIgPSB3YXRjaChwYXRoLCB7XG4gICAgICAgIHBlcnNpc3RlbnQ6IHRydWUsXG4gICAgICAgIGlnbm9yZUluaXRpYWw6IHRydWUsXG4gICAgICB9KVxuXG4gICAgICB3YXRjaGVyLm9uKCdhbGwnLCAoZXZlbnQsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cGF0aH0gZmlsZSBjaGFuZ2VkIGR1ZSB0byAke2V2ZW50fWApXG4gICAgICAgIGdldEV4YW1wbGVzUm91dGVzKClcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUlBLFNBQVMsb0JBQXFDO0FBQzlDLFNBQVMsZ0JB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LGVBQWUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEVBQUUsSUFBSTtBQUtwRCx5QkFBeUIsaUJBQWlCLFlBQVk7QUFLdEQsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBa0I7QUFDN0QsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0FBQUE7QUFBQSxJQUV4RSxjQUFjO0FBQUE7QUFBQTtBQUFBLE1BR1osU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS0EsS0FDRSxZQUFZLFdBQVcsU0FBUyxlQUM1QjtBQUFBO0FBQUEsTUFFRSxZQUFZLE9BQU8sS0FBSyxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTXZDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxLQUFLLFlBQVksQ0FBQztBQUFBLElBQy9DLElBQ0E7QUFBQSxJQUVOLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLFFBRVAsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUE7QUFBQSxRQUVQLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDO0FBU0QsU0FBUyx5QkFBeUJDLGtCQUF5QkMsZUFBc0I7QUFDL0UsTUFBSSxNQUFNO0FBR1YsUUFBTSxnQkFBZ0IsT0FBTyxLQUFLRCxnQkFBZSxFQUFFLE9BQU8sQ0FBQyxRQUFRQyxjQUFhLEdBQUcsQ0FBQztBQUdwRixRQUFNLFVBQVUsT0FBTyxLQUFLQSxhQUFZLEVBQUUsT0FBTyxDQUFDLFVBQVUsUUFBUSxLQUFLLEtBQUssQ0FBQztBQUkvRSxRQUFNLHNCQUFzQixRQUFRLEtBQUssSUFBSSxDQUFDO0FBRTlDLE1BQUksUUFBUSxTQUFTLEdBQUc7QUFDdEIsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLEVBQ3JCO0FBSUEsUUFBTTtBQUFBLCtCQUN1QixjQUFjLEtBQUssSUFBSSxDQUFDO0FBQUE7QUFBQTtBQUtyRCxNQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzVCLFVBQU0sSUFBSSxNQUFNLEdBQUc7QUFBQSxFQUNyQjtBQUNGOyIsCiAgIm5hbWVzIjogWyJwYXRoIiwgInBhdGgiLCAiZGV2RGVwZW5kZW5jaWVzIiwgImRlcGVuZGVuY2llcyJdCn0K
