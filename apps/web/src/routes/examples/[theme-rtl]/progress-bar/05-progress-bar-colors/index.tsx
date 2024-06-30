/**
 * title: Colors
 * description: Set your own custom colors for the progress bar component by using the color prop from Qwik and the utility classes from Tailwind CSS.
 * height: 650
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { ProgressBar } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="flex flex-col gap-2">
      <div class="text-base font-medium">Dark</div>
      <ProgressBar progress={45} color="dark" />
      <div class="text-base font-medium text-blue-700">Blue</div>
      <ProgressBar progress={45} color="blue" />
      <div class="text-base font-medium text-red-700">Red</div>
      <ProgressBar progress={45} color="red" />
      <div class="text-base font-medium text-green-700">Green</div>
      <ProgressBar progress={45} color="green" />
      <div class="text-base font-medium text-yellow-700">Yellow</div>
      <ProgressBar progress={45} color="yellow" />
      <div class="text-base font-medium text-indigo-700">Indigo</div>
      <ProgressBar progress={45} color="indigo" />
      <div class="text-base font-medium text-purple-700">Purple</div>
      <ProgressBar progress={45} color="purple" />
      <div class="text-base font-medium text-cyan-700">Cyan</div>
      <ProgressBar progress={45} color="cyan" />
      <div class="text-base font-medium text-gray-700">Gray</div>
      <ProgressBar progress={45} color="gray" />
      <div class="text-base font-medium text-lime-700">Lime</div>
      <ProgressBar progress={45} color="lime" />
      <div class="text-base font-medium text-pink-700">Pink</div>
      <ProgressBar progress={45} color="pink" />
      <div class="text-base font-medium text-teal-700">Teal</div>
      <ProgressBar progress={45} color="teal" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
