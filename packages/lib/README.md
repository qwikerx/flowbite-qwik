<div style="text-align: center">
  <h1>Flowbite Qwik - UI Component Library</h1>

  <div>
    <a href="https://flowbite-qwik.com">
      <img alt="Flowbite Qwik - Tailwind CSS components" width="500"  src="https://res.cloudinary.com/dkht4mwqi/image/upload/v1729891002/fowbite-qwik/logo_readme_a2qemq.svg" />
      </a>
  </div>
  <p>
    Build websites even faster with components on top of Qwik and Tailwind CSS
  </p>
  <p>
    <a href="https://www.npmjs.com/package/flowbite-qwik">
      <img src="https://img.shields.io/npm/dt/flowbite-qwik.svg" alt="Total Downloads" />
    </a>
    <a href="https://badge.fury.io/js/flowbite-qwik">
      <img alt="Latest release" src="https://badge.fury.io/js/flowbite-qwik.svg" />
    </a>
    <a href="https://flowbite.com/getting-started/license/">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
    </a>
  </p>
</div>

---

### `flowbite-qwik` is an open source collection of UI components, built in Qwik, with utility classes from Tailwind CSS that you can use as a starting point for user interfaces and websites.

[Online documentation](https://flowbite-qwik.com)

## Table of Contents

- [Documentation](#documentation)
- [Getting started](#getting-started)
  - [Require via `npm`](#require-via--npm-)
- [Components](#components)
- [Copyright and license](#copyright-and-license)

## Documentation

Documentation for `flowbite-qwik` is not yet finished.

[//]: # 'If you want to browse the components, visit [flowbite.com](https://flowbite.com/).'

If you want to learn more about Flowbite, visit [Flowbite docs](https://flowbite.com/docs/getting-started/introduction/).

## Getting started

To use `flowbite-qwik`, you just need to setup `flowbite` normally and install `flowbite-qwik` from `npm`.

`flowbite` can be included as a plugin into an existing Tailwind CSS project.

### 😎 Automatic way using CLI

Flowbite-qwik can be automatically installed using its CLI, simply use this command :

```
npx flowbite-qwik-cli@latest init
```

Click [here](https://github.com/qwikerx/flowbite-qwik/blob/main/packages/cli/README.md) for more details.

### 🐓 Manual way via `npm`

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/docs/installation" rel="nofollow" >Tailwind CSS</a> installed.

1. Install `flowbite-qwik` as a dependency using `npm` by running the following command:

```bash
yarn add -D flowbite flowbite-qwik flowbite-qwik-icons
pnpm add -D flowbite flowbite-qwik flowbite-qwik-icons
npm i --save-dev flowbite flowbite-qwik flowbite-qwik-icons
```

2. Update you root CSS file (global.css) adding this configuration :

```css
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
```

3. Setup `flowbite-qwik` providers

In your `src/root.tsx` file, import the `FlowbiteProvider` and wrap your app with it and define the theme and toast position.

Default values are `theme="blue"` and `toastPosition="top-right"`.

If you want to use the dark mode, you will also need to add the `FlowbiteProviderHeader` component in the head of your app.

```tsx
import { FlowbiteProvider } from 'flowbite-qwik'

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        // Add this line to detect user's system preference
        <FlowbiteProviderHeader />
      </head>
      <body lang="fr">
        // Add the FlowbiteProvider component to wrap your app
        <FlowbiteProvider toastPosition="top-right" theme="blue">
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  )
})
```

## Components

<!-- @qwikerx start -->
<div style="display: flex">
  <table>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/accordion">
          <img alt="Qwik Accordion" src="https://flowbite-qwik.com/thumbnails/website/accordion-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/alert">
          <img alt="Qwik Alert" src="https://flowbite-qwik.com/thumbnails/website/alerts-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/avatar">
          <img alt="Qwik Avatar" src="https://flowbite-qwik.com/thumbnails/website/avatar-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/badge">
          <img alt="Qwik Badge" src="https://flowbite-qwik.com/thumbnails/website/badges-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/banner">
          <img alt="Qwik Banner" src="https://flowbite-qwik.com/thumbnails/website/banner-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/blockquote">
          <img alt="Qwik Blockquote" src="https://flowbite-qwik.com/thumbnails/website/blockquote-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/breadcrumb">
          <img alt="Qwik Breadcrumb" src="https://flowbite-qwik.com/thumbnails/website/breadcrumbs-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/button">
          <img alt="Qwik Button" src="https://flowbite-qwik.com/thumbnails/website/buttons-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/button-group">
          <img alt="Qwik ButtonGroup" src="https://flowbite-qwik.com/thumbnails/website/button-group-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/card">
          <img alt="Qwik Card" src="https://flowbite-qwik.com/thumbnails/website/cards-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/carousel">
          <img alt="Qwik Carousel" src="https://flowbite-qwik.com/thumbnails/website/carousel-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/checkbox">
          <img alt="Qwik Checkbox" src="https://flowbite-qwik.com/thumbnails/website/checkbox-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/clipboard">
          <img alt="Qwik Clipboard" src="https://flowbite-qwik.com/thumbnails/website/clipboard-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/date-picker">
          <img alt="Qwik DatePicker" src="https://flowbite-qwik.com/thumbnails/website/datepicker-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/drawer">
          <img alt="Qwik Drawer" src="https://flowbite-qwik.com/thumbnails/website/drawer-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/dropdown">
          <img alt="Qwik Dropdown" src="https://flowbite-qwik.com/thumbnails/website/dropdown-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/footer">
          <img alt="Qwik Footer" src="https://flowbite-qwik.com/thumbnails/website/footer-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/hr">
          <img alt="Qwik HR" src="https://flowbite-qwik.com/thumbnails/website/horizontal-rule-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/heading">
          <img alt="Qwik Heading" src="https://flowbite-qwik.com/thumbnails/website/headings-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/input">
          <img alt="Qwik Input" src="https://flowbite-qwik.com/thumbnails/website/input-field-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/jumbotron">
          <img alt="Qwik Jumbotron" src="https://flowbite-qwik.com/thumbnails/website/jumbotron-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/kbd">
          <img alt="Qwik Kbd" src="https://flowbite-qwik.com/thumbnails/website/kbd-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/link">
          <img alt="Qwik Link" src="https://flowbite-qwik.com/thumbnails/website/link-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/list">
          <img alt="Qwik List" src="https://flowbite-qwik.com/thumbnails/website/list-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/list-group">
          <img alt="Qwik ListGroup" src="https://flowbite-qwik.com/thumbnails/website/list-group-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/modal">
          <img alt="Qwik Modal" src="https://flowbite-qwik.com/thumbnails/website/modal-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/navbar">
          <img alt="Qwik Navbar" src="https://flowbite-qwik.com/thumbnails/website/navbar-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/pagination">
          <img alt="Qwik Pagination" src="https://flowbite-qwik.com/thumbnails/website/pagination-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/progress-bar">
          <img alt="Qwik ProgressBar" src="https://flowbite-qwik.com/thumbnails/website/progress-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/radio">
          <img alt="Qwik Radio" src="https://flowbite-qwik.com/thumbnails/website/radio-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/range">
          <img alt="Qwik Range" src="https://flowbite-qwik.com/thumbnails/website/range-slider-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/rating">
          <img alt="Qwik Rating" src="https://flowbite-qwik.com/thumbnails/website/rating-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/select">
          <img alt="Qwik Select" src="https://flowbite-qwik.com/thumbnails/website/select-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/sidebar">
          <img alt="Qwik Sidebar" src="https://flowbite-qwik.com/thumbnails/website/sidebar-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/spinner">
          <img alt="Qwik Spinner" src="https://flowbite-qwik.com/thumbnails/website/spinner-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/table">
          <img alt="Qwik Table" src="https://flowbite-qwik.com/thumbnails/website/table-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/tabs">
          <img alt="Qwik Tabs" src="https://flowbite-qwik.com/thumbnails/website/tabs-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/textarea">
          <img alt="Qwik Textarea" src="https://flowbite-qwik.com/thumbnails/website/textarea-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/time-picker">
          <img alt="Qwik TimePicker" src="https://flowbite-qwik.com/thumbnails/website/timepicker-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/timeline">
          <img alt="Qwik Timeline" src="https://flowbite-qwik.com/thumbnails/website/timeline-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/toast">
          <img alt="Qwik ToastList" src="https://flowbite-qwik.com/thumbnails/website/toasts-light.svg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/toggle">
          <img alt="Qwik Toggle" src="https://flowbite-qwik.com/thumbnails/website/toggle-light.svg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/tooltip">
          <img alt="Qwik Tooltip" src="https://flowbite-qwik.com/thumbnails/website/tooltips-light.svg" />
        </a>
      </td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>

<!-- @qwikerx end -->

## Composables / hooks

- useToasts
- useDarkMode
- useDebounce
- useMediaQuery
- useOuterClick
- useToggle

[//]: # '## Community'
[//]: #
[//]: # 'If you need help or just want to discuss about the library join the community on Github:'
[//]: #
[//]: # '⌨️ [Discuss about Flowbite on GitHub](https://github.com/themesberg/flowbite/discussions)'
[//]: #
[//]: # 'For casual chatting with others using the library:'
[//]: #
[//]: # '💬 [Join the Flowbite Discord Server](https://discord.gg/4eeurUVvTy)'
[//]: #
[//]: # '## Contributing'
[//]: #
[//]: # 'Thank you for your interest in helping! Feel free to get started.'
[//]: #
[//]: # '## Figma'
[//]: #
[//]: # 'If you need the Figma files for the components you can check out our website for more information:'
[//]: #
[//]: # '🎨 [Get access to the Figma design files](https://flowbite.com/figma/)'

## Copyright and license

The Flowbite name and logos are trademarks of Crafty Dwarf Inc.

📝 [Read about the licensing terms](https://flowbite.com/getting-started/license/)
