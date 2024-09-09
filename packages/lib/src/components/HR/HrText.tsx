import { component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type HrTextProps = PropsOf<'hr'> & {
  text: string
}

export const HrText = component$<HrTextProps>(({ class: className, text, ...attrs }) => {
  return (
    <div class="relative inline-flex w-full items-center justify-center">
      <hr class={twMerge('my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700', clsx(className))} role="separator" {...attrs} />
      <span class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white">{text}</span>
    </div>
  )
})
