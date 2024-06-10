/**
 * title: Alert All options
 * description: This is an example with all the available options and props for the alert component.
 * height: 250
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Alert } from 'flowbite-qwik'
import { IconEyeOutline, IconInfoCircleOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Alert
      additionalContent={<ExampleAdditionalContent />}
      color="success"
      icon={IconInfoCircleOutline}
      onDismiss$={() => {
        alert('Alert dismissed!')
      }}
      rounded
    >
      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  )
})

const ExampleAdditionalContent = component$(() => {
  return (
    <>
      <div class="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert
        works with this kind of content.
      </div>
      <div class="flex">
        <button
          type="button"
          class="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
        >
          <IconEyeOutline class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </button>
        <button
          type="button"
          class="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
        >
          Dismiss
        </button>
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
