import { QRL, Slot, component$ } from '@builder.io/qwik'

type SidebarCtaProps = {
  onClose$?: QRL<() => void>
}

export const SidebarCta = component$<SidebarCtaProps>(({ onClose$ }) => {
  return (
    <div class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
      <div class="flex items-center mb-3">
        <Slot name="badge" />
        <button
          type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
          aria-label="Close"
          onClick$={() => onClose$?.()}
        >
          <span class="sr-only">Close</span>
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
      <Slot />
    </div>
  )
})
