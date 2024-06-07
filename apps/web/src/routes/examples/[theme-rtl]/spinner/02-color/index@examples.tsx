/**
 * title: Spinner colors
 * description: Update the colors of the loading spinner by using the color React prop.
 */

import { component$ } from '@builder.io/qwik'
import { Spinner, SpinnerColor } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3 flex gap-3">
      {(['blue', 'gray', 'green', 'red', 'yellow', 'pink', 'purple', 'white'] as SpinnerColor[]).map((color) => (
        <Spinner size="6" color={color} />
      ))}
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
