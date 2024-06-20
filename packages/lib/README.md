<div style="text-align: center">
  <h1>Flowbite Qwik Components</h1>

  <div>
    <a href="https://flowbite-qwik.com">
      <img alt="Flowbite Qwik - Tailwind CSS components" width="500"  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/gjiop0re7dy2gkikpf6c.jpg" />
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
          <img alt="Qwik Accordion" src="https://flowbite.s3.amazonaws.com/github/accordion.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/alert">
          <img alt="Qwik Alert" src="https://flowbite.s3.amazonaws.com/github/alerts.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/avatar">
          <img alt="Qwik Avatar" src="https://flowbite.s3.amazonaws.com/github/avatar.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/badge">
          <img alt="Qwik Badge" src="https://flowbite.s3.amazonaws.com/github/badge.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/banner">
          <img alt="Qwik Banner" src="https://flowbite.s3.amazonaws.com/github/banner.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/blockquote">
          <img alt="Qwik Blockquote" src="https://flowbite.s3.amazonaws.com/github/blockquote.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/breadcrumb">
          <img alt="Qwik Breadcrumb" src="https://flowbite.s3.amazonaws.com/github/breadcrumbs.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/button">
          <img alt="Qwik Button" src="https://flowbite.s3.amazonaws.com/github/buttons.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/button-group">
          <img alt="Qwik ButtonGroup" src="https://flowbite.s3.amazonaws.com/github/button-group.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/card">
          <img alt="Qwik Card" src="https://flowbite.s3.amazonaws.com/github/cards.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/carousel">
          <img alt="Qwik Carousel" src="https://flowbite.s3.amazonaws.com/github/carousel.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/checkbox">
          <img alt="Qwik Checkbox" src="https://flowbite.s3.amazonaws.com/github/checkbox.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/drawer">
          <img alt="Qwik Drawer" src="https://flowbite.s3.amazonaws.com/github/drawer.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/dropdown">
          <img alt="Qwik Dropdown" src="https://flowbite.s3.amazonaws.com/github/dropdown.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/footer">
          <img alt="Qwik Footer" src="https://flowbite.s3.amazonaws.com/github/footer.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/hr">
          <img alt="Qwik HR" src="https://flowbite.s3.amazonaws.com/github/hr.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/heading">
          <img alt="Qwik Heading" src="https://flowbite.s3.amazonaws.com/github/heading.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/input">
          <img alt="Qwik Input" src="https://flowbite.s3.amazonaws.com/github/input-field.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/jumbotron">
          <img alt="Qwik Jumbotron" src="https://flowbite.s3.amazonaws.com/github/jumbotron.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/kbd">
          <img alt="Qwik Kbd" src="https://flowbite.s3.amazonaws.com/github/kbd.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/typography/link">
          <img alt="Qwik Link" src="https://flowbite.s3.amazonaws.com/github/link.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/list-group">
          <img alt="Qwik ListGroup" src="https://flowbite.s3.amazonaws.com/github/list-group.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/modal">
          <img alt="Qwik Modal" src="https://flowbite.s3.amazonaws.com/github/modal.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/navbar">
          <img alt="Qwik Navbar" src="https://flowbite.s3.amazonaws.com/github/navbar.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/pagination">
          <img alt="Qwik Pagination" src="https://flowbite.s3.amazonaws.com/github/pagination.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/radio">
          <img alt="Qwik Radio" src="https://flowbite.s3.amazonaws.com/github/radio.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/rating">
          <img alt="Qwik Rating" src="https://flowbite.s3.amazonaws.com/github/rating.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/select">
          <img alt="Qwik Select" src="https://flowbite.s3.amazonaws.com/github/select.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/sidebar">
          <img alt="Qwik Sidebar" src="https://flowbite.s3.amazonaws.com/github/sidebar.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/spinner">
          <img alt="Qwik Spinner" src="https://flowbite.s3.amazonaws.com/github/spinner.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/table">
          <img alt="Qwik Table" src="https://flowbite.s3.amazonaws.com/github/tables.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/tabs">
          <img alt="Qwik Tabs" src="https://flowbite.s3.amazonaws.com/github/tabs.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/textarea">
          <img alt="Qwik Textarea" src="https://flowbite.s3.amazonaws.com/github/textarea.jpg" />
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/toast">
          <img alt="Qwik ToastList" src="https://flowbite.s3.amazonaws.com/github/toast.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/forms/toggle">
          <img alt="Qwik Toggle" src="https://flowbite.s3.amazonaws.com/github/toggle.jpg" />
        </a>
      </td>
      <td>
        <a href="https://flowbite-qwik.com/docs/components/tooltip">
          <img alt="Qwik Tooltip" src="https://flowbite.s3.amazonaws.com/github/tooltips.jpg" />
        </a>
      </td>
    </tr>
  </table>
</div>

<!-- @qwikerx end -->

## Composables / hooks

- useToasts
- useDark
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
