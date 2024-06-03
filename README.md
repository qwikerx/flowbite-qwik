<div style="text-align: center">
  <h1>flowbite-qwik</h1>

  <div>
    <a href="https://flowbite.com">
      <img alt="Flowbite Qwik - Tailwind CSS components" width="500"  src="./public/logo-light-bg.png">
  </div>
  <p>
    Build websites even faster with components on top of Qwik and Tailwind CSS
  </p>
  <p>
    <a href="https://www.npmjs.com/package/flowbite-qwik">
      <img src="https://img.shields.io/npm/dt/flowbite-qwik.svg" alt="Total Downloads">
    </a>
    <a href="https://badge.fury.io/js/flowbite-qwik">
      <img alt="Latest release" src="https://badge.fury.io/js/flowbite-qwik.svg">
    </a>
    <a href="https://flowbite.com/getting-started/license/">
      <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
    </a>
  </p>
</div>

---

### `flowbite-qwik` is an open source collection of UI components, built in Qwik, with utility classes from Tailwind CSS that you can use as a starting point for user interfaces and websites.

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

### Require via `npm`

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow" >Node.js</a> and <a href="https://tailwindcss.com/" rel="nofollow" >Tailwind CSS</a> installed.

1. Install `flowbite` as a dependency using `npm` by running the following command:

```bash
npm i flowbite flowbite-qwik
```

2. Require `flowbite` as a plugin inside the `tailwind.config.js` file:

```javascript
import flowbitePlugin from 'flowbite/plugin'

export default {
  theme: {
    extend: {
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
      },
      keyframes: {
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  content: ['node_modules/flowbite-qwik/**/*.{cjs,mjs}'],
  plugins: [flowbitePlugin],
}
```

### Setup `flowbite-qwik` providers

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

- Accordions
- Badges
- Breadcrumbs
- Buttons
- CodeBlock
- Drawer
- Dropdown
- Footer
- Inputs
- Jumbotron
- Modal
- Navbar
- Ratings
- Sidebar
- Spinner
- Tabs
- Toasts
- Toggle

## composables

- useToasts
- useDark
- useMediaQuery
- useOuterClick

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
