import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type BlockquoteProps = PropsOf<'blockquote'>

export const Blockquote = component$<BlockquoteProps>(({ class: className, ...attrs }) => {
  return (
    <blockquote class={twMerge('text-xl font-semibold italic text-gray-900 dark:text-white', clsx(className))} {...attrs}>
      <Slot />
    </blockquote>
  )
})
