/**
 * title: Progress bar with labels
 * description: Use this example to show a progress bar with a label. You can set the label text using the textLabel prop and the progress text using the labelText prop.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ProgressBar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return <ProgressBar progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
