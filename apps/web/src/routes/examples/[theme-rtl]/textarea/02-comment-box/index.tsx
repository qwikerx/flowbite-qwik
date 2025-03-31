/**
 * title: Comment box
 * description: Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.
 * height: 300
 */
import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Textarea, Button } from 'flowbite-qwik'
import { IconFileImportOutline, IconImageOutline, IconMapLocationOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const textareaValue = useSignal('')

  return (
    <div class="flex flex-wrap gap-2 p-6">
      <Textarea
        bind:value={textareaValue}
        placeholder="Write a ccomment"
        class="w-full"
        footer={
          <div class="flex justify-between">
            <Button>Post comment</Button>
            <div class="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse">
              <button
                type="button"
                class="inline-flex cursor-pointer items-center justify-center rounded-sm p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconFileImportOutline class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="inline-flex cursor-pointer items-center justify-center rounded-sm p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconMapLocationOutline class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="inline-flex cursor-pointer items-center justify-center rounded-sm p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IconImageOutline class="h-4 w-4" />
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
