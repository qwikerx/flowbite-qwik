import { ClassList, Component, component$, PropsOf } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { IconMoonOutline, IconProps, IconSunOutline } from 'flowbite-qwik-icons'
import { useDarkMode } from '~/composables'

type DarkModeTheme = {
  root?: ClassList
  icon?: ClassList
}

type DarkModeToggleProps = PropsOf<'button'> & {
  iconDark?: Component<IconProps>
  iconLight?: Component<IconProps>
  theme?: DarkModeTheme
}

export const DarkModeToggle = component$<DarkModeToggleProps>(
  ({ class: className, iconLight: IconLight = IconSunOutline, iconDark: IconDark = IconMoonOutline, theme, ...attrs }) => {
    const { isDark, setDarkModeValue } = useDarkMode()

    return (
      <button
        type="button"
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
        class={twMerge(
          'rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
          clsx(theme?.root),
          clsx(className),
        )}
        onClick$={() => {
          setDarkModeValue(isDark.value ? 'light' : 'dark')
        }}
        {...attrs}
      >
        {isDark.value ? (
          <IconLight aria-label="Currently light mode" class={twMerge('h-5 w-5', clsx(theme?.icon))} />
        ) : (
          <IconDark aria-label="Currently dark mode" class={twMerge('h-5 w-5', clsx(theme?.icon))} />
        )}
      </button>
    )
  },
)
