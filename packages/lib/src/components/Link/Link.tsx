import { Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'
import { Button } from '~/components/Button'
import { IconProps } from 'flowbite-qwik-icons'

type LinkProps = PropsOf<'a'> &
  PropsOf<'button'> & {
    underline?: boolean
    tag?: Component<LinkProps> | 'button'
    iconRight?: Component<IconProps>
  }

export const Link = component$<LinkProps>(({ underline = false, tag = 'a', iconRight: IconRight, class: className, ...attrs }) => {
  const { textClasses } = useFlowbiteThemable()

  const LinkComponent = tag !== 'a' ? (tag === 'button' ? Button : tag) : 'a'

  return (
    <LinkComponent
      {...attrs}
      class={twMerge(
        'font-medium',
        tag !== 'button' && textClasses.value,
        tag === 'button' ? '' : underline ? 'hover:no-underline underline' : 'hover:underline',
        IconRight && 'items-center inline-flex',
        clsx(className),
      )}
    >
      <Slot />
      {IconRight && <IconRight class="ms-2" />}
    </LinkComponent>
  )
})
