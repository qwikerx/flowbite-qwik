import { $, component$, JSXOutput, PropsOf, Signal, Slot, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'
import { ModalSize } from '~/lib/components/Modal/modal-types'
import { useOuterClick } from '~/lib/composables/use-outer-click'
import { isServer } from '@builder.io/qwik/build'
import { useModalClasses } from '~/lib/components/Modal/composables/use-modal-classes'

type ModalProps = PropsOf<'div'> & {
  'bind:show': Signal<boolean>
  header?: JSXOutput
  footer?: JSXOutput
  notEscapable?: boolean
  persistent?: boolean
  popup?: boolean
  size?: ModalSize
  onClose$?: () => void
  onClickOutside$?: () => void
}

export const Modal = component$<ModalProps>(
  ({ 'bind:show': show, header, footer, notEscapable = false, persistent = false, popup = false, size = '2xl', onClickOutside$, onClose$ }) => {
    const modalRef = useSignal<HTMLDivElement>()
    const { rootClasses, footerClasses } = useModalClasses(
      useComputed$(() => size),
      useComputed$(() => popup),
    )

    const closeModal = $(() => {
      show.value = false
      onClose$?.()
    })

    const closeWithEsc = $(() => {
      if (!notEscapable && !persistent) closeModal()
    })

    useTask$(({ track }) => {
      track(() => modalRef.value)

      if (isServer) return

      if (show.value && modalRef.value) {
        modalRef.value.focus()
      }
    })

    useOuterClick(
      [modalRef],
      $(() => {
        if (!persistent) {
          closeModal()
          onClickOutside$?.()
        }
      }),
      show,
    )

    return (
      <>
        {show.value && (
          <div>
            <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" />
            <div
              class={[
                rootClasses.value,
                'm-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex',
              ]}
            >
              <div
                ref={modalRef}
                onKeyDown$={(event: KeyboardEvent) => {
                  if ((event as KeyboardEvent).key === 'Escape') {
                    closeWithEsc()
                  }
                }}
                tabIndex={0}
                class={['relative p-4 w-full focus:outline-none focus-visible:outline-none']}
              >
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div
                    class={[
                      'p-4 rounded-t flex justify-between items-center',
                      { 'border-b border-gray-200 dark:border-gray-600': !!header, 'border-b-0 !p-2': popup },
                    ]}
                  >
                    {header}
                    {!persistent && (
                      <button
                        aria-label="close"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        type="button"
                        onClick$={closeModal}
                      >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            clip-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div class={[{ 'pt-0': !header }, 'p-6']}>
                    <Slot />
                  </div>
                  {footer && <div class={[footerClasses.value, 'p-6 rounded-b border-gray-200 border-t dark:border-gray-600']}>{footer}</div>}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  },
)
