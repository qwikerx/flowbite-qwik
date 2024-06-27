/**
 * title: Sizing options
 * description: Make the size of the spinner smaller or larger by using the size prop. Choose from xs, sm, md, lg, or xl.
 */

import { component$ } from '@builder.io/qwik'
import { Spinner, SpinnerSize } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="flex gap-3 p-3">
      {(['0', '0.5', '1', '1.5', '2', '2.5', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as SpinnerSize[]).map((size) => (
        <Spinner size={size} />
      ))}
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
