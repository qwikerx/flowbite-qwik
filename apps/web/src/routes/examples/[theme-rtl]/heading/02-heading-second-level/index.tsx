/**
 * title: Second-level heading
 * description: Use this example of a second-level H2 heading as the main subtitle for each section of your web page.
 * height: 300
 */

import { component$ } from '@builder.io/qwik'
import { Heading, Link } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { IconAngleRightOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <>
      <Heading tag="h2">Payments tool for companies</Heading>
      <p class="my-4 text-lg text-gray-500">
        Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS
        and designed in Figma.
      </p>
      <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate
        toil, and deploy changes with ease.
      </p>
      <Link href="#" iconRight={IconAngleRightOutline}>
        Read more
      </Link>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
