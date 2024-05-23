import { component$, JSXOutput, Slot, useComputed$, PropsOf, QRL, useTask$ } from '@builder.io/qwik'
import { isBrowser } from '@builder.io/qwik/build'
import { useToastClasses } from './composables/use-toast-class'
import { FlowbiteChildThemable } from '~/components/FlowbiteThemable/FlowbiteChildThemable'
import { ToastAlign, ToastType } from './toast-type'

type ToastProps = PropsOf<'div'> & {
  id: string
  type?: ToastType
  time?: number
  alignment?: ToastAlign
  divide?: boolean
  closable?: boolean
  onClose$?: QRL<(id: string) => void>
  icon?: JSXOutput
}

export const Toast = component$<ToastProps>(
  ({ id, type = 'empty', alignment = 'center', divide = false, closable = false, onClose$, icon, time }) => {
    const internalDivide = useComputed$(() => divide)
    const internalAlignment = useComputed$(() => alignment)
    const internalType = useComputed$(() => type)

    const { typeClasses, wrapperClasses, contentClasses } = useToastClasses({
      type: internalType,
      divide: internalDivide,
      alignment: internalAlignment,
    })

    const hasIcon = useComputed$(() => Boolean(icon) || type !== 'empty')

    useTask$(() => {
      if (isBrowser && time) {
        setTimeout(() => {
          onClose$?.(id)
        }, time)
      }
    })

    return (
      <div id="toast-default" role="alert" class={wrapperClasses.value}>
        {hasIcon.value && (
          <FlowbiteChildThemable
            apply={['background', 'text']}
            class={['inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg', typeClasses.value]}
          >
            {Boolean(icon) ? (
              <>{icon}</>
            ) : (
              <>
                {type === 'success' && (
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clip-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fill-rule="evenodd"
                    />
                  </svg>
                )}
                {type === 'danger' && (
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clip-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      fill-rule="evenodd"
                    />
                  </svg>
                )}
                {type === 'warning' && (
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clip-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      fill-rule="evenodd"
                    />
                  </svg>
                )}
              </>
            )}
          </FlowbiteChildThemable>
        )}

        <div class={[contentClasses.value, { 'ml-3': hasIcon.value, 'mr-3': closable }]}>
          <Slot />
        </div>

        {closable && (
          <button
            aria-label="Close"
            class="border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            type="button"
            onClick$={() => onClose$?.(id)}
          >
            <span class="sr-only">Close</span>
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
    )
  },
)
