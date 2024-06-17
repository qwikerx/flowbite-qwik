/**
 * title: Default pagination
 * description: Use the following list of pagination items based on two sizes powered by Tailwind CSS utility classes to indicate a series of content for your website.
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
        <Pagination totalPages={100} currentPage={currentPage} />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
