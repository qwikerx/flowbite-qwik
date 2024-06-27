/**
 * title: Pop-up modal
 * description: You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.
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
      <Modal bind:show={popupModalVisible} size="md" popup>
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
