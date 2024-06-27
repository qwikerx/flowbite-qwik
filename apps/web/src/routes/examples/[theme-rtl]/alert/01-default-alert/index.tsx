/**
 * title: Default alert
 * description: The default alert component is a simple alert box with a text inside it, and you can use the color prop to change the color of the alert box and the title prop to add a title to the alert box. Inside the <Alert> component you can add any type of content such as text, images, or other components as they will be considered children of the alert box.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Alert } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Alert color="info">
      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
