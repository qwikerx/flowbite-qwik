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
      </div>
    </DocumentPage>
  )
})
