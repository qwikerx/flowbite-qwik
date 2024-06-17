/**
 * title: Pagination with icons
 * description: Add next and previous icons to the pagination component by passing the showIcons prop.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Pagination } from 'flowbite-qwik'

export default component$(() => {
  const currentPage = useSignal(1)

  return (
    <>
      <div class="p-3 flex text-center gap-3">
        <Pagination totalPages={100} currentPage={currentPage} showIcons previousLabel="Go back" nextLabel="Go forward" />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
