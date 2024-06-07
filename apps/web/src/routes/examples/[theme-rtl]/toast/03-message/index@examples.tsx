/**
 * title: Message
 * description: This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.
 * height: 400
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Toast } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex flex-col p-3 space-y-2">
      <Toast id="card" alignment="start" icon={<img alt="Avatar" class="w-8 h-8 rounded-full shadow-lg" src="/profile-picture.jpg" />}>
        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
        <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
        <Button size="xs" href="#">
          Reply
        </Button>
      </Toast>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
