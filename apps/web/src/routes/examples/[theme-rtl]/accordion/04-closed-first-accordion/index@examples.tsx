/**
 * title: Closed first accordion
 * description: First item is not open by default
 * height: 300
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel, Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Accordion openFirstItem={false}>
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
              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites
              even faster with components on top of Tailwind CSS.
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
              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites
              even faster with components on top of Tailwind CSS.
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
              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites
              even faster with components on top of Tailwind CSS.
            </p>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
