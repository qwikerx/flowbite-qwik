/**
 * title: Arrow keys
 * description: Use this example to show arrow keys inside the KBD styled element.
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Kbd } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { IconAngleDownSolid, IconAngleLeftSolid, IconAngleRightSolid, IconAngleUpSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-1">
      <Kbd icon={IconAngleUpSolid} />
      <Kbd icon={IconAngleDownSolid} />
      <Kbd icon={IconAngleLeftSolid} />
      <Kbd icon={IconAngleRightSolid} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
