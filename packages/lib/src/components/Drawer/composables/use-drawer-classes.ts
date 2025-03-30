import { Signal, useComputed$ } from '@builder.io/qwik'
import { DrawerPosition } from '../drawer-types'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { DrawerTheme } from '~/components/Drawer/Drawer'

export function useDrawerClasses(
  isOpen: Signal<boolean>,
  isEdge: Signal<boolean>,
  position: Signal<DrawerPosition>,
  theme: Signal<DrawerTheme | undefined>,
) {
  const defaultClasses = 'fixed z-60 overflow-y-auto bg-white transition-transform dark:bg-gray-800'
  const edgeClasses = 'rounded-t-lg border-t border-gray-200 rounded-t-lg dark:border-gray-700'
  const backdropClasses = 'fixed inset-0 z-50 bg-gray-900/50 dark:bg-gray-900/80'
  const edgeHandleClasses = 'absolute w-8 h-1 -translate-x-1/2 bg-gray-300 rounded-lg top-3 left-1/2 dark:bg-gray-600'
  const closeButtonClasses =
    'absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'

  const positionClasses = {
    position: {
      top: {
        on: 'left-0 right-0 top-0 w-full transform-none',
        off: 'left-0 right-0 top-0 w-full -translate-y-full',
      },
      right: {
        on: twMerge('right-0 top-0 h-screen w-80 transform-none', clsx(theme.value?.leftRightWidth)),
        off: twMerge('right-0 top-0 h-screen w-80 translate-x-full', clsx(theme.value?.leftRightWidth)),
      },
      bottom: {
        on: 'bottom-0 left-0 right-0 w-full transform-none',
        off: 'bottom-0 left-0 right-0 w-full translate-y-full',
      },
      left: {
        on: twMerge('left-0 top-0 h-screen w-80 transform-none', clsx(theme.value?.leftRightWidth)),
        off: twMerge('left-0 top-0 h-screen w-80 -translate-x-full', clsx(theme.value?.leftRightWidth)),
      },
      'bottom-edge': {
        on: 'bottom-0 left-0 right-0 w-full transform-none',
        off: 'bottom-0 left-0 right-0 w-full translate-y-[calc(100%-_60px)]',
      },
    },
  }

  const currentPositionClasses = useComputed$(() => {
    return positionClasses.position[position.value]
  })

  const rootClasses = useComputed$(() => {
    return twMerge(defaultClasses, isEdge.value ? edgeClasses : 'p-4', currentPositionClasses.value[isOpen.value ? 'on' : 'off'])
  })

  const headerClasses = useComputed$(() => {
    return twMerge(
      'inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400',
      isEdge.value ? 'p-4 w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700' : 'mb-4',
      clsx(theme.value?.header),
    )
  })

  return { rootClasses, backdropClasses, headerClasses, edgeHandleClasses, closeButtonClasses }
}
