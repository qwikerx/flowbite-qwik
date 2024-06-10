/**
 * title: Alert with icon
 * description: Use the icon prop to add an icon to the alert box, and you can use any icon from the Flowbite Qwik Icons library.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Alert } from 'flowbite-qwik'
import { IconInfoCircleOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <Alert color="failure" icon={IconInfoCircleOutline}>
      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
