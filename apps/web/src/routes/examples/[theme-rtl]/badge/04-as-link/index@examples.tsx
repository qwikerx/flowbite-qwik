/**
 * title: Badges as links
 * description: You can also use badges as anchor elements to link to another page. Prop – href
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge href="#" content="Link" bordered />
      <Badge href="#" size="sm" content="Link" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}
