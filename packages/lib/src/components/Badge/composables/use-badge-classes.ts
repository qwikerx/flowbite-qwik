import { Component, PropsOf, useComputed$ } from '@builder.io/qwik'
import type { BadgeSize, BadgeType } from '../badge-types'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { IconProps } from 'flowbite-qwik-icons'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable/composables/use-flowbite-themable'

const defaultBadgeClasses = 'mr-2 px-2.5 py-0.5 rounded flex items-center justify-center gap-1'
const badgeLinkClasses = 'bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300'
const onlyIconClasses = 'p-2 rounded-full mr-2'

const badgeTextClasses: Record<BadgeType, string> = {
  default: '',
  blue: 'text-blue-800 dark:text-blue-300',
  dark: 'text-gray-800 dark:text-gray-300',
  red: 'text-red-800 dark:text-red-300',
  green: 'text-green-800 dark:text-green-300',
  yellow: 'text-yellow-800 dark:text-yellow-300',
  indigo: 'text-indigo-800 dark:text-indigo-300',
  purple: 'text-purple-800 dark:text-purple-300',
  pink: 'text-pink-800 dark:text-pink-300',
}

const badgeBorderClasses: Record<BadgeType, string> = {
  default: '',
  blue: 'border border-blue-400 dark:text-blue-400 dark:bg-gray-700',
  dark: 'border border-gray-500 text-grey-400 dark:text-gray-400 dark:bg-gray-700',
  red: 'border border-red-400 dark:text-red-400 dark:bg-gray-700',
  green: 'border border-green-400 dark:text-green-400 dark:bg-gray-700',
  yellow: 'border border-yellow-300 dark:text-yellow-400 dark:bg-gray-700',
  indigo: 'border border-indigo-400 dark:text-indigo-400 dark:bg-gray-700',
  purple: 'border border-purple-400 dark:text-purple-400 dark:bg-gray-700',
  pink: 'border border-pink-400 dark:text-pink-400 dark:bg-gray-700',
}

const badgeTypeClasses: Record<BadgeType, string> = {
  default: '',
  blue: 'bg-blue-100 dark:bg-blue-900',
  dark: 'bg-gray-100 dark:bg-gray-700',
  red: 'bg-red-100 dark:bg-red-900',
  green: 'bg-green-100 dark:bg-green-900',
  yellow: 'bg-yellow-100 dark:bg-yellow-900',
  indigo: 'bg-indigo-100 dark:bg-indigo-900',
  purple: 'bg-purple-100 dark:bg-purple-900',
  pink: 'bg-pink-100 dark:bg-pink-900',
}

const badgeHoverChipsClasses: Record<BadgeType, string> = {
  default: '',
  blue: 'hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-600 dark:hover:text-blue-300',
  dark: 'hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
  red: 'hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-600 dark:hover:text-red-300',
  green: 'hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-600 dark:hover:text-green-300',
  yellow: 'hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-600 dark:hover:text-yellow-300',
  indigo: 'hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-600 dark:hover:text-indigo-300',
  purple: 'hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-600 dark:hover:text-purple-300',
  pink: 'hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-600 dark:hover:text-pink-300',
}

const badgeSizeClasses: Record<BadgeSize, string> = {
  xs: 'text-xs font-semibold',
  sm: 'text-sm font-medium',
}

const pillsClasses = 'rounded-full'

export type BadgeClassesProps = {
  type?: BadgeType
  size?: BadgeSize
  content?: string
  bordered?: boolean
  pills?: boolean
  icon?: Component<IconProps>
  chips?: boolean
  onClose$?: () => void
} & PropsOf<'span'> &
  PropsOf<'a'>

export function useBadgeClasses({ content, size = 'xs', href, type = 'default', class: classNames, bordered, pills }: BadgeClassesProps) {
  const isContentEmpty = useComputed$(() => !content)
  const { themeName } = useFlowbiteThemable()

  const internalType = useComputed$<BadgeType>(() => (type === 'default' ? (themeName.value as BadgeType) : type))

  const badgeClasses = useComputed$(() => {
    return twMerge(
      badgeSizeClasses[size],
      href ? '' : badgeTypeClasses[internalType.value],
      href ? '' : badgeTextClasses[internalType.value],
      href ? badgeLinkClasses : '',
      bordered ? badgeBorderClasses[internalType.value] : '',
      isContentEmpty.value ? onlyIconClasses : defaultBadgeClasses,
      pills ? pillsClasses : '',
      clsx(classNames),
    )
  })

  const badgeChipsClasses = useComputed$(() =>
    twMerge(badgeHoverChipsClasses[internalType.value], 'inline-flex items-center p-1 ms-2 text-sm bg-transparent rounded-sm'),
  )

  return {
    badgeClasses,
    badgeChipsClasses,
  }
}
