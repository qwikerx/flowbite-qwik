import { component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type HrProps = PropsOf<'hr'>

export const Hr = component$<HrProps>(({ class: className, ...attrs }) => {
  return <hr class={twMerge('my-8 h-px border-0 bg-gray-200 dark:bg-gray-700', clsx(className))} role="separator" {...attrs} />
})
