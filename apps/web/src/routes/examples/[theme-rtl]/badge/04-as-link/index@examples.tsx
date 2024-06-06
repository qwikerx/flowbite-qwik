/**
 * title: Badges as links
 * description: You can also use badges as anchor elements to link to another page. Prop – href
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge href="#" content="Link" bordered />
      <Badge href="#" size="sm" content="Link" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
