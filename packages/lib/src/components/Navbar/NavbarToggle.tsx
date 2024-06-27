import { $, Component, component$, PropsOf } from '@builder.io/qwik'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconBarsOutline } from 'flowbite-qwik-icons'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'
import { Button } from '~/components/Button'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type NavbarToggleProps = PropsOf<'button'> & {
  barIcon?: Component<IconProps>
}

export const NavbarToggle = component$<NavbarToggleProps>(({ class: classNames, barIcon: BarIcon = IconBarsOutline }) => {
  const { setIsOpen, isOpen } = useNavbarContext()

  const handleClick = $(() => {
    setIsOpen(!isOpen.value)
  })

  return (
    <Button color="light" square noBorder class={twMerge('md:hidden', clsx(classNames))} onClick$={handleClick}>
      <span class="sr-only">Open main menu</span>
      <BarIcon aria-hidden class="h-4 w-4 shrink-0" />
    </Button>
  )
})
