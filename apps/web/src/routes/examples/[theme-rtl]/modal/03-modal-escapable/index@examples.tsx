/**
 * title: Modal escapable
 * description: The escapable property is true by default to improve user experience and accessibility. In some situations, your user may be required to interact with the modal content. If this is the case, you can set the notEscapable property to true. The developer can then choose when they want to close the modal.
 * height: 600
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Modal } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  const escapeModalVisible = useSignal(false)

  return (
    <div>
      <Button
        onClick$={() => {
          escapeModalVisible.value = true
        }}
      >
        Open Not Escapable Modal
      </Button>
      <Modal
        notEscapable
        header={<div class="flex items-center text-lg">Terms of Service</div>}
        footer={
          <div class="flex justify-between">
            <Button
              onClick$={() => {
                escapeModalVisible.value = false
              }}
              color="alternative"
            >
              Decline
            </Button>
          </div>
        }
        bind:show={escapeModalVisible}
      >
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are
          updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data
          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally
          affect them.
        </p>
      </Modal>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
