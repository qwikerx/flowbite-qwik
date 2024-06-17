/**
 * title: Paragraph
 * description: Use this example to set a link inside a paragraph with an underline style.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <p class="text-gray-500 dark:text-gray-400">
      The free updates that will be provided is based on the{' '}
      <Link href="#" underline>
        roadmap
      </Link>{' '}
      that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
    </p>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
