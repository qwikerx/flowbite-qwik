import { TabsVariant } from '~/lib/components/Tabs/tabs-types'
import { Signal, useComputed$ } from '@builder.io/qwik'
import { useFlowbiteThemable } from '~/lib/components/FlowbiteThemable/composables/use-flowbite-themable'
import { twMerge } from 'tailwind-merge'

export type TabClassMap = {
  active: string
  default: string
  disabled: string
}

export type UseTabClassesProps = {
  active: Signal<boolean>
  disabled: Signal<boolean>
  variant?: Signal<TabsVariant | undefined>
  withIcon: Signal<boolean>
}

const defaultTabClasses = {
  default: 'cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300',
  active: 'cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500',
  disabled: 'inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500',
}
const underlineTabClasses: TabClassMap = {
  default:
    'cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
  active: 'cursor-pointer inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
  disabled: 'inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500',
}
const pillsTabClasses: TabClassMap = {
  default: 'cursor-pointer inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
  active: 'cursor-pointer inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active',
  disabled: 'inline-block py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500',
}

export function useTabClasses(props: UseTabClassesProps): {
  tabClasses: Signal<string>
} {
  const theme = useFlowbiteThemable()

  const tabClasses = useComputed$(() => {
    const isActiveTheme = theme.isActive.value

    const tabClassType: keyof TabClassMap = props.active.value ? 'active' : props.disabled.value ? 'disabled' : 'default'
    const withIconClasses = props.withIcon.value ? 'gap-2 inline-flex items-center' : ''

    if (props.variant?.value === 'default') {
      return twMerge(defaultTabClasses[tabClassType], (isActiveTheme && tabClassType) === 'active' ? theme.textClasses.value : '', withIconClasses)
    } else if (props.variant?.value === 'underline') {
      return twMerge(
        underlineTabClasses[tabClassType],
        (isActiveTheme && tabClassType) === 'active' ? [theme.borderClasses.value, theme.textClasses.value] : '',
        withIconClasses,
      )
    } else if (props.variant?.value === 'pills') {
      return twMerge(
        pillsTabClasses[tabClassType],
        (isActiveTheme && tabClassType) === 'active' ? [theme.backgroundClasses.value, 'text-white'] : '',
        withIconClasses,
      )
    }

    return ''
  })

  return { tabClasses }
}
