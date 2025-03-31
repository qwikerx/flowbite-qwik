import { component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type HrTrimmedProps = PropsOf<'hr'>

export const HrTrimmed = component$<HrTrimmedProps>(({ class: className, ...attrs }) => {
  return (
    <hr
      class={twMerge('mx-auto my-4 h-1 w-48 rounded-sm border-0 bg-gray-100 dark:bg-gray-700 md:my-10', clsx(className))}
      role="separator"
      {...attrs}
    />
  )
})
