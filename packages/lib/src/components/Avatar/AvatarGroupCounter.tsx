import { component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type AvatarGroupCounterProps = PropsOf<'a'> & {
  total?: number
}

export const AvatarGroupCounter = component$<AvatarGroupCounterProps>(({ href, class: className, total, ...attrs }) => {
  return (
    <a
      href={href}
      class={twMerge(
        'relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500',
        clsx(className),
      )}
      {...attrs}
    >
      +{total}
    </a>
  )
})
