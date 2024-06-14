import { $, Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { LinkProps } from '@builder.io/qwik-city'
import { useNavbarContext } from '~/components/Navbar/composables/use-navbar-context'
import { FlowbiteTheme, useFlowbiteThemable } from '~/components/FlowbiteThemable/composables/use-flowbite-themable'

type NavbarLinkProps = PropsOf<'a'> & {
  active?: boolean
  tag?: Component<LinkProps> | string
  disabled?: boolean
}

const activeClasses: Record<FlowbiteTheme, string> = {
  blue: 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500',
  green: 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-green-500',
  red: 'text-white bg-red-700 md:bg-transparent md:text-red-700 md:dark:red-blue-500',
  purple: 'text-white bg-purple-700 md:bg-transparent md:text-purple-700 md:dark:text-purple-500',
  pink: 'text-white bg-pink-700 md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500',
}

const inactiveClasses: Record<FlowbiteTheme, string> = {
  blue: 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
  green:
    'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
  red: 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
  purple:
    'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
  pink: 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
}

export const NavbarLink = component$<NavbarLinkProps>(({ active = false, tag: Component = 'a', disabled, class: classNames, ...props }) => {
  const { setIsOpen } = useNavbarContext()
  const { themeName } = useFlowbiteThemable()

  const handleClick = $(() => {
    setIsOpen(false)
  })

  return (
    <li>
      <Component
        class={twMerge(
          'block py-2 pl-3 pr-4 md:p-0 rounded',
          active && activeClasses[themeName.value],
          !active && !disabled && inactiveClasses[themeName.value],
          disabled && 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
          clsx(classNames),
        )}
        onClick$={handleClick}
        {...props}
      >
        <Slot />
      </Component>
    </li>
  )
})
