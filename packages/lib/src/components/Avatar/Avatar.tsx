import { component$, JSXOutput, PropsOf, Slot, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type AvatarProps = PropsOf<'div'> & {
  alt?: string
  bordered?: boolean
  img?: string | JSXOutput
  color?: 'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'
  rounded?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  stacked?: boolean
  status?: 'away' | 'busy' | 'offline' | 'online'
  statusPosition?:
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
  placeholderInitials?: string
}

const AvatarImgColorsClasses: Record<string, string> = {
  dark: 'ring-gray-800 dark:ring-gray-800',
  failure: 'ring-red-500 dark:ring-red-700',
  gray: 'ring-gray-500 dark:ring-gray-400',
  info: 'ring-cyan-400 dark:ring-cyan-800',
  light: 'ring-gray-300 dark:ring-gray-500',
  purple: 'ring-purple-500 dark:ring-purple-600',
  success: 'ring-green-500 dark:ring-green-500',
  warning: 'ring-yellow-300 dark:ring-yellow-500',
  pink: 'ring-pink-500 dark:ring-pink-500',
}

const AvatarImgSizesClasses: Record<string, string> = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-20 w-20',
  xl: 'h-36 w-36',
}

const AvatarStatusClasses: Record<string, string> = {
  away: 'bg-yellow-400',
  busy: 'bg-red-400',
  offline: 'bg-gray-400',
  online: 'bg-green-400',
}

const AvatarStatusPositionClasses: Record<string, string> = {
  'bottom-left': '-bottom-1 -left-1',
  'bottom-center': '-bottom-1',
  'bottom-right': '-bottom-1 -right-1',
  'top-left': '-left-1 -top-1',
  'top-center': '-top-1',
  'top-right': '-right-1 -top-1',
  'center-right': '-right-1',
  center: '',
  'center-left': '-left-1',
}

export const Avatar = component$<AvatarProps>(
  ({
    alt = '',
    bordered = false,
    class: className,
    color = 'light',
    img,
    placeholderInitials = '',
    rounded = false,
    size = 'md',
    stacked = false,
    status,
    statusPosition = 'top-left',
    ...attrs
  }) => {
    const imgClassName = useComputed$(() =>
      twMerge(
        'rounded',
        bordered && 'p-1 ring-2',
        bordered && AvatarImgColorsClasses[color],
        rounded && 'rounded-full',
        stacked && 'ring-2 ring-gray-300 dark:ring-gray-500',
        AvatarImgSizesClasses[size],
      ),
    )

    return (
      <div class={twMerge('flex items-center justify-center space-x-4 rounded', clsx(className))} {...attrs}>
        <div class="relative">
          {img ? (
            typeof img === 'string' ? (
              <img alt={alt} src={img} class={imgClassName.value} />
            ) : (
              <>{img}</>
            )
          ) : placeholderInitials ? (
            <div
              class={twMerge(
                'relative overflow-hidden bg-gray-100 dark:bg-gray-600',
                'relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600',
                stacked && 'ring-2 ring-gray-300 dark:ring-gray-500',
                bordered && 'p-1 ring-2',
                bordered && AvatarImgColorsClasses[color],
                AvatarImgSizesClasses[size],
                rounded && 'rounded-full',
              )}
            >
              <span class="font-medium text-gray-600 dark:text-gray-300">{placeholderInitials}</span>
            </div>
          ) : (
            <div class={twMerge(imgClassName.value, 'relative overflow-hidden bg-gray-100 dark:bg-gray-600')}>
              <svg class="absolute -bottom-1 h-auto w-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
          )}

          {status && (
            <span
              class={twMerge(
                'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800',
                AvatarStatusClasses[status],
                AvatarStatusPositionClasses[statusPosition],
              )}
            />
          )}
        </div>

        <Slot />
      </div>
    )
  },
)
