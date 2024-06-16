/**
 * title: Comment box
 * description: Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.
 * height: 300
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Textarea, Button } from 'flowbite-qwik'
import { IconFileImportOutline, IconImageOutline, IconMapLocationOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const textareaValue = useSignal('')

  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Textarea
        bind:value={textareaValue}
        placeholder="Write a ccomment"
        class="w-full"
        footer={
          <div class="flex justify-between">
            <Button>Post comment</Button>
            <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              <button
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <IconFileImportOutline class="w-4 h-4" />
              </button>
              <button
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <IconMapLocationOutline class="w-4 h-4" />
              </button>
              <button
                type="button"
                class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <IconImageOutline class="w-4 h-4" />
              </button>
            </div>
          </div>
        }
      />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
