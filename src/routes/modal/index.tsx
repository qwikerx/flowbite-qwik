import { component$, Signal, useSignal, useStore } from '@builder.io/qwik'
import { Button } from '~/lib/components/Button/Button'
import { Modal } from '~/lib/components/Modal/Modal'
import { ModalSize } from '~/lib/components/Modal/modal-types'

export default component$(() => {
  const defaultModalVisible = useSignal(false)
  const sizeModalVisible = useStore<Record<string, Signal<boolean>>>({
    xs: useSignal(false),
    md: useSignal(false),
    xl: useSignal(false),
    ['5xl']: useSignal(false),
  })
  const escapeModalVisible = useSignal(false)
  const persistentModalVisible = useSignal(false)
  const popupModalVisible = useSignal(false)

  return (
    <section id="modal" class="p-5">
      <div>
        <h2 class="my-3">Default modal</h2>
        <Button
          onClick$={() => {
            defaultModalVisible.value = true
          }}
        >
          Open Modal
        </Button>
        <Modal
          header={<div class="flex items-center text-lg">Terms of Service</div>}
          footer={
            <div class="flex justify-between">
              <Button
                onClick$={() => {
                  defaultModalVisible.value = false
                }}
                color="alternative"
              >
                Decline
              </Button>
              <Button
                onClick$={() => {
                  defaultModalVisible.value = false
                }}
                color="green"
              >
                I accept
              </Button>
            </div>
          }
          bind:show={defaultModalVisible}
          onClickOutside$={() => {
            console.log('click outside !')
          }}
        >
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are
            updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data
            rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could
            personally affect them.
          </p>
        </Modal>
      </div>

      <div>
        <h2 class="my-3">Prop - size</h2>

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
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world
                  are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of
                  data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that
                  could personally affect them.
                </p>
              </Modal>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 class="my-3">Prop - escapable</h2>
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
            rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could
            personally affect them.
          </p>
        </Modal>
      </div>

      <div>
        <h2 class="my-3">Prop - persistent</h2>
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
            rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could
            personally affect them.
          </p>
        </Modal>
      </div>

      <div>
        <h2 class="my-3">Pop-up modal</h2>
        <Button
          onClick$={() => {
            popupModalVisible.value = true
          }}
        >
          Open Modal
        </Button>
        <Modal bind:show={popupModalVisible} size="md" popup>
          <div class="text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
            <div class="flex gap-2 justify-center">
              <Button color="red">Yes, I'm sure</Button>
              <Button outline>No, cancel</Button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
})
