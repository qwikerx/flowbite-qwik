/**
 * title: Default spinner
 * description: Use the default spinner element by adding the <Spinner> React component inside your code and integrate the aria-label attribute to allow screen readers parse the component for accessibility
 */

import { component$ } from '@builder.io/qwik'
import { Spinner } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="p-3 flex gap-3">
      <Spinner />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
