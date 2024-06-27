/**
 * title: CTA link
 * description: Use this example to set a hyperlink on a CTA element with text and a custom icon.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { IconAngleRightOutline, IconFileSearchOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <Link
      href="#"
      class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <IconFileSearchOutline class="me-3 h-5 w-5" />
      <span class="w-full">Get started with our Figma Design System</span>
      <IconAngleRightOutline class="ms-2 h-4 w-4" />
    </Link>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
