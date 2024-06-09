/**
 * title: Border accent
 * description: Add a border accent to the alert box by applying the withBorderAccent prop on the <Alert> component.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Alert } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Alert color="warning" withBorderAccent>
      <span>
        <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
      </span>
    </Alert>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
