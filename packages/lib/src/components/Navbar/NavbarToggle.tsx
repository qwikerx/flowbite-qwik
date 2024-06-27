import { $, Component, component$, PropsOf } from '@builder.io/qwik'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconBarsOutline } from 'flowbite-qwik-icons'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'
import { NavbarBurgerButton } from '~/components/Navbar/NavbarBurgerButton'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type NavbarToggleProps = PropsOf<'button'> & {
  barIcon?: Component<IconProps>
}

export const NavbarToggle = component$<NavbarToggleProps>(({ class: className, barIcon: BarIcon = IconBarsOutline }) => {
  const { setIsOpen, isOpen } = useNavbarContext()

  const handleClick = $(() => {
    setIsOpen(!isOpen.value)
  })

  return (
    <NavbarBurgerButton class={twMerge('md:hidden', clsx(className))} onClick$={handleClick}>
      <span class="sr-only">Open main menu</span>
      <BarIcon aria-hidden class="h-4 w-4 shrink-0" />
    </NavbarBurgerButton>
  )
})
