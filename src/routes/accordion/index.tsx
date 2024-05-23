import { component$ } from '@builder.io/qwik'
import { AccordionPanel } from '~/components/Accordion/AccordinPanel'
import { Accordion } from '~/components/Accordion/Accordion'
import { AccordionContent } from '~/components/Accordion/AccordionContent'
import { AccordionHeader } from '~/components/Accordion/AccordionHeader'

export default component$(() => {
  return (
    <section id="accordions" class="p-5">
      <div>
        <h2 class="my-3">Default accordion</h2>

        <Accordion>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 1</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 2</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 3</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
      <div>
        <h2 class="my-3">Always open accordion</h2>

        <Accordion alwaysOpen>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 1</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 2</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 3</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
      <div>
        <h2 class="my-3">Flush accordion</h2>

        <Accordion flush>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 1</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 2</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 3</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>

      <div>
        <h2 class="my-3">Styling accordion</h2>

        <Accordion>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 1</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">
              <h2>Accordion 2</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 3</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>

      <div>
        <h2 class="my-3">Closed first item</h2>

        <Accordion openFirstItem={false}>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 1</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 2</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionHeader>
              <h2>Accordion 3</h2>
            </AccordionHeader>
            <AccordionContent>
              <div>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals,
                  navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </section>
  )
})
