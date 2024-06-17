/**
 * title: Icon link
 * description: This example can be used to set a custom icon inside the hyperlink element.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconAngleRightOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <p class="text-gray-500 dark:text-gray-400">
      500,000 people & companies have made over a million apps with Glide.{' '}
      <Link href="#" iconRight={IconAngleRightOutline}>
        Read their stories
      </Link>
    </p>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
