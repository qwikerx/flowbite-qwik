import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { DocumentPage } from '~/components/DocumentPage/DocumentPages'
import { Heading, Link } from 'flowbite-qwik'

export default component$(() => {
  return (
    <DocumentPage>
      <div>
        <Heading tag="h1">Quickstart - Flowbite Qwik</Heading>
        <p>
          Learn how to get started with the free and open-source Flowbite Qwik UI component library based on the utility classes from Tailwind CSS
        </p>
      </div>
      <div>
        <Heading tag="h2">Automatic Installation</Heading>
        <p>You can install Flowbite Qwik in your project by running the following command in your project directory:</p>
        <CodeBlock language="bash" expandable={false} content="npx flowbite-qwik-cli@latest init" />
      </div>
      <div>
        <Heading tag="h2">Or install it manually</Heading>
        <div>
          <Heading tag="h3">Setup Tailwind CSS</Heading>
          <p>
            Install Tailwind CSS by following the{' '}
            <Link target="_blank" rel="noreferrer" href="https://tailwindcss.com/docs/installation">
              official installation guide
            </Link>
            .
          </p>
        </div>
        <div>
          <Heading tag="h3">Install Flowbite Qwik</Heading>
          <p>Install Flowbite Qwik by running the following command in your project directory:</p>
          <CodeBlock language="bash" expandable={false} content="npm install flowbite-qwik" />
          <p>
            Add the Flowbite Qwik flowbite configuration in your <em>tailwind.config.js</em>
          </p>

          <CodeBlock
            language="javascript"
            expandable={false}
            content={`
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
  content: ['node_modules/flowbite-qwik/**/*.{cjs,mjs}', './src/**/*.{html,js,jsx,ts,tsx,mdx}'],
  plugins: [flowbitePlugin],
}
              `}
          />
        </div>
        <div>
          <Heading tag="h3">Set up the Flowbite Provider</Heading>
          <p>
            To use it, wrap the root component with the <em>FlowbiteProvider</em>, and specify the wanted toast position and theme.
          </p>
          <p>
            Actual available colors theme are : <em>blue</em>, <em>green</em>, <em>red</em>, <em>pink</em> and <em>purple</em>
          </p>
          <p>
            Available toast positions are : <em>top-right</em>, <em>top-left</em>, <em>bottom-right</em>, <em>bottom-left</em>
          </p>
          <p>
            If you use dark theme, also add <em>FlowbiteProviderHeader</em> into your head element
          </p>

          <CodeBlock
            language="tsx"
            expandable={false}
            content={`
<QwikCityProvider>
<head>
  <RouterHead />
  // Add the FlowbiteProviderHeader to the head
  <FlowbiteProviderHeader />
</head>
<body>
  // Add the FlowbiteProvider to the body
  <FlowbiteProvider toastPosition={toastPosition.value} theme="blue">
    <RouterOutlet />
  </FlowbiteProvider>
</body>
</QwikCityProvider>
            `}
          />
        </div>
        <div>
          <Heading tag="h3">Toggle Dark mode</Heading>
          <p>To use dark mode, we provide a composable useDark that you can use to toggle the dark mode.</p>

          <Heading tag="h3">Here is an example of Dark mode Toggle</Heading>
          <CodeBlock
            language="tsx"
            expandable={false}
            content={`
const { isDark, setDarkModeValue } = useDark()

<Button
  square
  color="light"
  title="Toggle dark mode"
  onClick$={() => {
    setDarkModeValue(isDark.value ? 'light' : 'dark')
  }}
>
  {isDark.value ? <IconSunOutline class="h-4 w-4" /> : <IconMoonOutline class="h-4 w-4" />}
</Button>
            `}
          />

          <Heading tag="h3">Add style to setup your dark mode</Heading>
          <CodeBlock
            language="css"
            expandable={false}
            content={`
.dark {
  color-scheme: dark;
  background: #111827;
}
.light {
  color-scheme: light;
  background: #fff;
}
            `}
          />

          <Heading tag="h3">Use dark mode in your tailwind classes</Heading>
          <p>
            To use dark mode in your tailwind classes, you can use the <em>dark:</em> prefix. Here is an example of how to use dark mode in your
            classes.
            <br />
            <Link href="https://tailwindcss.com/docs/dark-mode">Read more about Tailwind dark mode</Link>
          </p>
          <CodeBlock
            language="html"
            expandable={false}
            content={`
<div class="bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
  Dark mode content
</div>
            `}
          />
        </div>
      </div>
    </DocumentPage>
  )
})

export const head = () => ({
  title: 'Quickstart - Flowbite Qwik',
  meta: [
    {
      name: 'description',
      content:
        'Learn how to get started with the free and open-source Flowbite Qwik UI component library based on the utility classes from Tailwind CSS',
    },
  ],
})
