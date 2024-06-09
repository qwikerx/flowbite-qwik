import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { DocumentPage } from '~/components/DocumentPage/DocumentPages'

export default component$(() => {
  return (
    <DocumentPage>
      <div>
        <h1>Quickstart - Flowbite Qwik</h1>
        <p>
          Learn how to get started with the free and open-source Flowbite Qwik UI component library based on the utility classes from Tailwind CSS
        </p>
      </div>
      <div>
        <div>
          <h2>Setup Tailwind CSS</h2>
          <p>
            Install Tailwind CSS by following the{' '}
            <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/docs/installation">
              official installation guide
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Install Flowbite Qwik</h2>
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
                  content: ['node_modules/flowbite-qwik/**/*.{cjs,mjs}'],
                  plugins: [flowbitePlugin],
                }
              `}
          />
        </div>
        <div>
          <h2>Set up the Flowbite Provider</h2>
          <p>
            To use it, wrap the root component with the <em>FlowbiteProvider</em>, and specify the wanted toast position and theme.
          </p>
          <p>Actual available colors theme are : 'blue', 'green', 'red', 'pink' and 'purple'</p>
          <p>Available toast positions are : 'top-right', 'top-left', 'bottom-right', 'bottom-left'</p>
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
          <h2>Toggle Dark mode</h2>
          <p>To use dark mode, we provide a composable useDark that you can use to toggle the dark mode.</p>

          <h3>Here is an example of Dark mode Toggle</h3>
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

          <h3>Add style to setup your dark mode</h3>
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

          <h3>Use dark mode in your tailwind classes</h3>
          <p>
            To use dark mode in your tailwind classes, you can use the <em>dark:</em> prefix. Here is an example of how to use dark mode in your
            classes.
            <br />
            <a href="https://tailwindcss.com/docs/dark-mode">Read more about Tailwind dark mode</a>
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
