import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type ListProps = PropsOf<'ul'> &
  PropsOf<'ol'> & {
    ordered?: boolean
    unstyled?: boolean
    nested?: boolean
    horizontal?: boolean
  }

export const List = component$<ListProps>(({ class: className, ordered = false, unstyled = false, nested = false, horizontal = false, ...attrs }) => {
  const Component = ordered ? 'ol' : 'ul'

  return (
    <Component
      class={twMerge(
        'list-inside space-y-1 text-gray-500 dark:text-gray-400',
        ordered ? 'list-decimal' : 'list-disc',
        unstyled && 'list-none',
        nested && 'mt-2 ps-5',
        horizontal && 'flex list-none flex-wrap items-center justify-center space-x-4 space-y-0',
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </Component>
  )
})
