/**
 * title: Paragraph context
 * description: Use this example to show a <Blockquote> component between multiple paragraph elements.
 * height: 400
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Blockquote } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <>
      <p class="mb-3 text-gray-500 dark:text-gray-400">
        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and
          changes.
        </p>
        <Blockquote class="mb-3">
          <p class="text-xl font-semibold italic text-gray-900 dark:text-white">
            " Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect
            choice for your next SaaS application. "
          </p>
        </Blockquote>
      </div>
      <p class="mb-3 text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate
        toil, and deploy changes with ease, with a complete audit trail for every change.
      </p>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
