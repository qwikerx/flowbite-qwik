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
          <CodeBlock language="bash" expandable={false} content="npm install flowbite flowbite-qwik flowbite-qwik-icons" />
          <p>
            Update you root CSS file (global.css) adding this configuration
          </p>

          <CodeBlock
            language="css"
            expandable={false}
            content={`
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
const { isDark, setDarkModeValue } = useDarkMode()

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
