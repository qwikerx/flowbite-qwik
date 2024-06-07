import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type AvatarGroupProps = PropsOf<'div'>

export const AvatarGroup = component$<AvatarGroupProps>(({ class: className, ...attrs }) => {
  return (
    <div class={twMerge('flex -space-x-4', clsx(className))} {...attrs}>
      <Slot />
    </div>
  )
})
