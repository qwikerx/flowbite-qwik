/**
 * title: Custom theme
 * description: Use the theme prop to customize styles of the component : root/bar/label
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ProgressBar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return <ProgressBar progress={50} textLabel="Flowbite" size="lg" labelProgress labelText theme={{ root: 'p-4', bar: 'italic rounded-none' }} />
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
