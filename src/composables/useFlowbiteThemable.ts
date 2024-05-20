import { Signal, useComputed$, useSignal } from '@builder.io/qwik'

export type FlowbiteTheme = 'blue' | 'green' | 'red' | 'pink' | 'purple'

type UseFlowbiteThemableReturns = {
  backgroundClasses: Signal<string>
  borderClasses: Signal<string>
  color: Signal<FlowbiteTheme | undefined>
  disabledClasses: Signal<string>
  focusClasses: Signal<string>
  hoverClasses: Signal<string>
  isActive: Signal<boolean>
  textClasses: Signal<string>
}

type FlowbiteThemeMap = {
  background: string
  border: string
  disabled: string
  focus: string
  hover: string
  text: string
}

type FlowbiteThemes<T extends string = string> = Record<T, FlowbiteThemeMap>

const flowbiteThemeClasses: FlowbiteThemes<FlowbiteTheme> = {
  blue: {
    background: 'bg-blue-700 dark:bg-blue-600',
    disabled: '',
    hover: 'hover:bg-blue-800 dark:hover:bg-blue-700',
    text: 'text-blue-600 dark:text-blue-500',
    border: 'border-blue-600 dark:border-blue-500',
    focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
  },
  green: {
    background: 'bg-green-700 dark:bg-green-600',
    disabled: '',
    hover: 'hover:bg-green-800 dark:hover:bg-green-700',
    text: 'text-green-600 dark:text-green-500',
    border: 'border-green-600 dark:border-green-500',
    focus: 'focus:ring-green-300 dark:focus:ring-green-800',
  },
  pink: {
    background: 'bg-pink-700 dark:bg-pink-600',
    disabled: '',
    hover: 'hover:bg-pink-800 dark:hover:bg-pink-700',
    text: 'text-pink-600 dark:text-pink-500',
    border: 'border-pink-600 dark:border-pink-500',
    focus: 'focus:ring-pink-300 dark:focus:ring-pink-900',
  },
  purple: {
    background: 'bg-purple-700 dark:bg-purple-600',
    disabled: '',
    hover: 'hover:bg-purple-800 dark:hover:bg-purple-700',
    text: 'text-purple-600 dark:text-purple-500',
    border: 'border-purple-600 dark:border-purple-500',
    focus: 'focus:ring-purple-300 dark:focus:ring-purple-900',
  },
  red: {
    background: 'bg-red-700 dark:bg-red-600',
    disabled: '',
    hover: 'hover:bg-red-800 dark:hover:bg-red-700',
    text: 'text-red-600 dark:text-red-500',
    border: 'border-red-600 dark:border-red-500',
    focus: 'focus:ring-red-300 dark:focus:ring-red-900',
  },
}

export function useFlowbiteThemable(_theme?: FlowbiteTheme): UseFlowbiteThemableReturns {
  const theme = useSignal<FlowbiteTheme | null>(null) // TODO : injection d'un thème à la volée

  const themeName = useComputed$(() => {
    return _theme || theme.value
  })

  const isActive = useComputed$(() => !!theme?.value)

  const backgroundClasses = useComputed$(() => (!themeName.value ? '' : flowbiteThemeClasses[themeName.value].background))

  const borderClasses = useComputed$(() => (!themeName.value ? '' : flowbiteThemeClasses[themeName.value].border))

  const color = useComputed$(() => theme?.value || undefined)

  const disabledClasses = useComputed$(() => (!themeName.value ? '' : flowbiteThemeClasses[themeName.value].disabled))

  const focusClasses = useComputed$(() => (!themeName.value ? '' : flowbiteThemeClasses[themeName.value].focus))

  const hoverClasses = useComputed$(() => (!themeName.value ? '' : flowbiteThemeClasses[themeName.value].hover))

  const textClasses = useComputed$(() => (!themeName.value ? '' : flowbiteThemeClasses[themeName.value].text))

  return {
    backgroundClasses,
    borderClasses,
    color,
    disabledClasses,
    focusClasses,
    hoverClasses,
    isActive,
    textClasses,
  }
}
