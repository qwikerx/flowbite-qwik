/**
 * title: CTA link
 * description: Use this example to set a hyperlink on a CTA element with text and a custom icon.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconAngleRightOutline, IconFileSearchOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <Link
      href="#"
      class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <IconFileSearchOutline class="w-5 h-5 me-3" />
      <span class="w-full">Get started with our Figma Design System</span>
      <IconAngleRightOutline class="w-4 h-4 ms-2" />
    </Link>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
