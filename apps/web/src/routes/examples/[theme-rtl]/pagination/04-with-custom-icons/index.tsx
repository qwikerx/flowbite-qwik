/**
 * title: Pagination with custom icons
 * description: Add custom icons to the pagination component by passing the showIcons prop and no labels.
 * height: 150
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Pagination } from 'flowbite-qwik'
import { IconArrowLeftSolid, IconArrowRightSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  const currentPage = useSignal(1)

  return (
    <>
      <div class="flex gap-3 p-3 text-center">
        <Pagination totalPages={100} currentPage={currentPage} showIcons nextIcon={IconArrowRightSolid} previousIcon={IconArrowLeftSolid} />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
