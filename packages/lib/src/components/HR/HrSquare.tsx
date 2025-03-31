import { component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type HrSquareProps = PropsOf<'hr'>

export const HrSquare = component$<HrSquareProps>(({ class: className, ...attrs }) => {
  return (
    <hr class={twMerge('mx-auto my-8 h-8 w-8 rounded-sm border-0 bg-gray-200 dark:bg-gray-700 md:my-12', clsx(className))} role="separator" {...attrs} />
  )
})
