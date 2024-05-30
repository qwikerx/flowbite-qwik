import { $, Component, component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { IconProps } from '@qwikest/icons'
import { IconBarsOutline } from '~/components/Icon'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'

type NavbarToggleProps = PropsOf<'button'> & {
  barIcon?: Component<IconProps>
}

export const NavbarToggle = component$<NavbarToggleProps>(({ class: classNames, barIcon: BarIcon = IconBarsOutline, ...props }) => {
  const { setIsOpen, isOpen } = useNavbarContext()

  const handleClick = $(() => {
    setIsOpen(!isOpen.value)
  })

  return (
    <button
      onClick$={handleClick}
      class={twMerge(
        'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
        clsx(classNames),
      )}
      {...props}
    >
      <span class="sr-only">Open main menu</span>
      <BarIcon aria-hidden class="h-6 w-6 shrink-0" />
    </button>
  )
})
