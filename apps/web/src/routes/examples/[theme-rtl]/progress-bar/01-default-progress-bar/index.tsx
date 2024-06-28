/**
 * title: Default progress bar
 * description: Use this example to show a progress bar where you can set the progress rate using the progress prop from Qwik which should be a number from 1 to 100.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ProgressBar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return <ProgressBar progress={45} />
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
