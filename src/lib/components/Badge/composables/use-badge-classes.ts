import { JSXOutput, PropsOf, useComputed$ } from '@builder.io/qwik'
import type { BadgeSize, BadgeType } from '../badge-types'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const defaultBadgeClasses = 'mr-2 px-2.5 py-0.5 rounded flex items-center justify-center gap-1'
const badgeLinkClasses = 'bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300'
const onlyIconClasses = 'p-2 rounded-full mr-2'

const badgeTextClasses: Record<BadgeType, string> = {
  default: 'text-blue-800 dark:text-blue-800',
  dark: 'text-gray-800 dark:bg-gray-700',
  red: 'text-red-800 dark:text-red-900',
  green: 'text-green-800 dark:text-green-900',
  yellow: 'text-yellow-800 dark:text-yellow-900',
  indigo: 'text-indigo-800 dark:text-indigo-900',
  purple: 'text-purple-800 dark:text-purple-900',
  pink: 'text-pink-800 dark:text-pink-900',
}

const badgeBorderClasses: Record<BadgeType, string> = {
  default: 'border border-blue-800 dark:border-blue-800',
  dark: 'border border-gray-800 dark:border-gray-800',
  red: 'border border-red-800 dark:border-red-900',
  green: 'border border-green-800 dark:border-green-900',
  yellow: 'border border-yellow-800 dark:border-yellow-900',
  indigo: 'border border-indigo-800 dark:border-indigo-900',
  purple: 'border border-purple-800 dark:border-purple-900',
  pink: 'border border-pink-800 dark:border-pink-900',
}

const badgeTypeClasses: Record<BadgeType, string> = {
  default: 'bg-blue-100 dark:bg-blue-200',
  dark: 'bg-gray-100 dark:bg-gray-700',
  red: 'bg-red-100 dark:bg-red-200',
  green: 'bg-green-100 dark:bg-green-200',
  yellow: 'bg-yellow-100 dark:bg-yellow-200',
  indigo: 'bg-indigo-100 dark:bg-indigo-200',
  purple: 'bg-purple-100 dark:bg-purple-200',
  pink: 'bg-pink-100 dark:bg-pink-200',
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
  icon?: JSXOutput
} & PropsOf<'span'> &
  PropsOf<'a'>

export function useBadgeClasses({ content, size = 'xs', href, type = 'default', class: classNames, bordered, pills }: BadgeClassesProps) {
  const isContentEmpty = useComputed$(() => !content)

  const badgeClasses = useComputed$<string>(() => {
    return twMerge(
      badgeSizeClasses[size],
      href ? '' : badgeTypeClasses[type],
      href ? '' : badgeTextClasses[type],
      href ? badgeLinkClasses : '',
      bordered ? badgeBorderClasses[type] : '',
      isContentEmpty.value ? onlyIconClasses : defaultBadgeClasses,
      pills ? pillsClasses : '',
      clsx(classNames),
    )
  })

  return {
    badgeClasses,
  }
}
