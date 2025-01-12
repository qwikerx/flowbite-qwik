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
    iconLeft?: Component<IconProps>
  }

export const Link = component$<LinkProps>(
  ({ underline = false, tag = 'a', iconRight: IconRight, iconLeft: IconLeft, class: className, ...attrs }) => {
    const { textClasses } = useFlowbiteThemable()

    const LinkComponent = tag !== 'a' ? (tag === 'button' ? Button : tag) : 'a'

    return (
      <LinkComponent
        {...attrs}
        class={twMerge(
          'font-medium',
          tag !== 'button' && textClasses.value,
          tag === 'button' ? '' : underline ? 'underline hover:no-underline' : 'hover:underline',
          (IconLeft || IconRight) && 'inline-flex items-center',
          clsx(className),
        )}
      >
        {IconLeft && <IconLeft class="me-2" />}
        <Slot />
        {IconRight && <IconRight class="ms-2" />}
      </LinkComponent>
    )
  },
)
