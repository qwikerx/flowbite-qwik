/**
 * title: Dismissible alert
 * description: You can use the onDismiss prop on the <Alert> component to add a dismiss button to the alert box by adding a function inside of it that will be called when the user clicks on the dismiss button.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Alert } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <Alert
      color="success"
      onDismiss$={() => {
        alert('Alert dismissed!')
      }}
    >
      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
