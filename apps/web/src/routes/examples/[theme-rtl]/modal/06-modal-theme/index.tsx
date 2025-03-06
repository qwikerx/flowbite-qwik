/**
 * title: Theming modal
 * description: You can use this modal example to customize using theme property.
 * height: 600
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Modal } from 'flowbite-qwik'
import { IconBullhornSolid } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const popupModalVisible = useSignal(false)

  return (
    <div>
      <Button
        onClick$={() => {
          popupModalVisible.value = true
        }}
      >
        Open Modal
      </Button>
      <Modal bind:show={popupModalVisible} size="md" popup theme={{ content: 'h-[calc(200px-2rem)] overflow-y-auto', header: 'bg-gray-100' }}>
        <div class="text-center">
          <IconBullhornSolid class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />

          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
          <div class="flex justify-center gap-2">
            <Button color="red">Yes, I'm sure</Button>
            <Button outline>No, cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
