/**
 * title: Pagination with icons only
 * description: Add next and previous icons only to the pagination component by passing the showIcons prop and no labels.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Pagination } from 'flowbite-qwik'

export default component$(() => {
  const currentPage = useSignal(1)

  return (
    <>
      <div class="flex gap-3 p-3 text-center">
        <Pagination totalPages={100} currentPage={currentPage} showIcons />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
