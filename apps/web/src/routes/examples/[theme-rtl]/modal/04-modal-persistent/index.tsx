/**
 * title: Modal persistent
 * description: Clicking outside the element or pressing esc key will not send close event.
 * height: 600
 */

import { component$, useSignal } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Modal } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const persistentModalVisible = useSignal(false)

  return (
    <div>
      <Button
        onClick$={() => {
          persistentModalVisible.value = true
        }}
      >
        Open Persistent Modal
      </Button>
      <Modal
        notEscapable
        persistent
        header={<div class="flex items-center text-lg">Terms of Service</div>}
        footer={
          <div class="flex justify-between">
            <Button
              onClick$={() => {
                persistentModalVisible.value = false
              }}
              color="alternative"
            >
              Decline
            </Button>
          </div>
        }
        bind:show={persistentModalVisible}
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
