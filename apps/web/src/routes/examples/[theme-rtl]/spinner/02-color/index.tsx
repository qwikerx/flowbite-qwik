/**
 * title: Spinner colors
 * description: Update the colors of the loading spinner by using the color Qwik prop.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { Spinner, SpinnerColor } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="flex gap-3 p-3">
      {(['blue', 'gray', 'green', 'red', 'yellow', 'pink', 'purple', 'white'] as SpinnerColor[]).map((color) => (
        <Spinner size="6" color={color} />
      ))}
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
