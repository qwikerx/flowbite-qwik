import { $, ClassList, component$, JSXOutput, PropsOf, Signal, Slot, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'
import { ModalSize } from '~/components/Modal/modal-types'
import { useComponentOuterClick } from '~/composables/use-outer-click'
import { isServer } from '@builder.io/qwik/build'
import { useModalClasses } from '~/components/Modal/composables/use-modal-classes'
import { IconCloseOutline } from 'flowbite-qwik-icons'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export type ModalTheme = {
  backdrop?: ClassList
  header?: ClassList
  content?: ClassList
  footer?: ClassList
}

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
  theme?: ModalTheme
}

export const Modal = component$<ModalProps>(
  ({ header, footer, notEscapable = false, persistent = false, popup = false, size = '2xl', onClickOutside$, onClose$, theme, ...props }) => {
    const modalRef = useSignal<HTMLDivElement>()
    const { rootClasses, footerClasses } = useModalClasses(
      useComputed$(() => size),
      useComputed$(() => popup),
    )

    const closeModal = $(() => {
      props['bind:show'].value = false
      onClose$?.()
    })

    const closeWithEsc = $(() => {
      if (!notEscapable && !persistent) closeModal()
    })

    useTask$(({ track }) => {
      track(() => modalRef.value)
      track(() => props['bind:show'].value)

      if (isServer) return

      if (props['bind:show'].value && modalRef.value) {
        modalRef.value.focus()
      }
    })

    useComponentOuterClick(
      [modalRef],
      $(() => {
        if (!persistent) {
          closeModal()
          onClickOutside$?.()
        }
      }),
      props['bind:show'],
    )

    return (
      <>
        {props['bind:show'].value && (
          <div>
            <div class={twMerge('fixed inset-0 z-50 bg-gray-900/50 dark:bg-gray-900/80', clsx(theme?.backdrop))} />
            <div
              class={[
                rootClasses.value,
                'h-modal fixed left-0 right-0 top-0 z-60 m-auto flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
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
                class={['relative w-full p-4 focus:outline-hidden focus-visible:outline-hidden']}
              >
                <div class="relative rounded-lg bg-white shadow-sm dark:bg-gray-700">
                  <div
                    class={twMerge(
                      'flex items-center justify-between rounded-t p-4',
                      !!header ? 'border-b border-gray-200 dark:border-gray-600' : '',
                      popup ? 'border-b-0 p-2!' : '',
                      clsx(theme?.header),
                    )}
                  >
                    {header}
                    {!persistent && (
                      <button
                        aria-label="close"
                        class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        type="button"
                        onClick$={closeModal}
                      >
                        <IconCloseOutline class="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div class={twMerge(!header ? 'pt-0' : '', 'p-6', clsx(theme?.content))}>
                    <Slot />
                  </div>
                  {footer && (
                    <div class={twMerge(footerClasses.value, 'rounded-b border-t border-gray-200 p-6 dark:border-gray-600', clsx(theme?.footer))}>
                      {footer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  },
)
