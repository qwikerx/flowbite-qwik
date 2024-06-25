/**
 * title: Styling accordion
 * description: You can style accordion content and headers by passing tailwind classes into them.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Accordion, Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Header>Accordion 1</Accordion.Header>
        <Accordion.Content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,
              and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites
              even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Header class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">Accordion 2</Accordion.Header>
        <Accordion.Content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,
              and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites
              even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Header>Accordion 3</Accordion.Header>
        <Accordion.Content>
          <div>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,
              and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites
              even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
