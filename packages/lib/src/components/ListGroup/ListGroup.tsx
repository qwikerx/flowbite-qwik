import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type ListGroupProps = PropsOf<'ul'>

export const ListGroup = component$<ListGroupProps>(({ class: className, ...attrs }) => {
  return (
    <ul
      class={twMerge(
        'list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </ul>
  )
})
