/**
 * title: Trimmed
 * description: Use this example to show a shorter version of the horizontal line.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { Hr } from 'flowbite-qwik'

export default component$(() => {
  return (
    <>
      <p class="text-gray-500 dark:text-gray-400">
        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <Hr.Trimmed />
      <p class="text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate
        toil, and deploy changes with ease, with a complete audit trail for every change.
      </p>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
