/**
 * title: Label positioning
 * description: This example shows how you can position the label text inside the progress bar by using the Qwik props called progressLabelPosition and textLabelPosition on the <ProgressBar> component in Qwik.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ProgressBar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <ProgressBar progress={45} progressLabelPosition="inside" textLabel="Flowbite" textLabelPosition="outside" size="lg" labelProgress labelText />
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
