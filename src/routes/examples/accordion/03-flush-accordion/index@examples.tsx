/**
 * title: Flush accordion
 * description: Flush prop removes background color, side borders, and rounded corners
 */

import { component$ } from '@builder.io/qwik'
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from '~/components/Accordion'

export default component$(() => {
  return (
    <Accordion flush>
      <AccordionPanel>
        <AccordionHeader>
          <h2>Accordion 1</h2>
        </AccordionHeader>
        <AccordionContent>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,
              and more.
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
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,
              and more.
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
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,
              and more.
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
  )
})
