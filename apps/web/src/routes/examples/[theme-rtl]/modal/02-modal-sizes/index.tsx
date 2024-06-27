/**
 * title: Modal sizes
 * description: You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.
 * height: 600
 */

import { component$, Signal, useSignal, useStore } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Modal, ModalSize } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const sizeModalVisible = useStore<Record<string, Signal<boolean>>>({
    xs: useSignal(false),
    md: useSignal(false),
    xl: useSignal(false),
    ['5xl']: useSignal(false),
  })

  return (
    <ul class="flex gap-2">
      {['xs', 'md', 'xl', '5xl'].map((size) => (
        <li key={size}>
          <Button
            onClick$={() => {
              sizeModalVisible[size].value = true
            }}
          >
            {size.toUpperCase()} Modal
          </Button>
          <Modal size={size as ModalSize} header={<div class="flex items-center text-lg">Size {size}</div>} bind:show={sizeModalVisible[size]}>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are
              updating their terms of service agreements to comply.
            </p>
            {size !== 'xs' && (
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of
                data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could
                personally affect them.
              </p>
            )}
          </Modal>
        </li>
      ))}
    </ul>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
