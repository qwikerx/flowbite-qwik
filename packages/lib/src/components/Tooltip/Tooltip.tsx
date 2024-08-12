import { $, ClassList, PropsOf, Slot, component$, useSignal } from '@builder.io/qwik'
import { Placement } from '@floating-ui/dom'
import { TooltipStyle } from './tooltip-types'
import { FloatingTrigger } from '../Floating/floating-types'
import { RenderFloatingArrow, RenderFloatingElement } from '../Floating/Floating'
import { useFloating } from '~/composables/use-floating'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useDocumentOuterClick } from '~/composables'

type TooltipTheme = {
  element?: ClassList
  arrow?: ClassList
}

type TooltipProps = PropsOf<'div'> & {
  placement?: Placement
  style?: TooltipStyle
  trigger?: FloatingTrigger
  noArrow?: boolean
  theme?: TooltipTheme
}

export const Tooltip = component$<TooltipProps>(
  ({ placement = 'top', class: className, trigger = 'hover', style = 'auto', noArrow = false, theme }) => {
    const isVisible = useSignal(false)
    const { floatingRef, arrowRef, triggerRef } = useFloating(placement, trigger, noArrow, isVisible)

    useDocumentOuterClick(
      [triggerRef],
      $(() => {
        isVisible.value = false
      }),
      isVisible,
    )

    return (
      <>
        <div ref={triggerRef} class={className}>
          <Slot name="trigger" />
        </div>

        <RenderFloatingElement
          q:slot="floating"
          ref={floatingRef}
          isVisible={isVisible.value}
          class={twMerge([
            'inline-block min-w-max rounded-lg px-3 py-2 text-sm font-medium shadow-sm transition-opacity duration-300',
            style === 'dark' && 'bg-gray-900 text-white dark:bg-gray-700',
            style === 'light' && 'border border-gray-200 bg-white text-gray-900',
            style === 'auto' && 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
            clsx(theme?.element),
          ])}
        >
          <Slot name="content" />

          {!noArrow && (
            <RenderFloatingArrow
              ref={arrowRef}
              class={twMerge([
                style === 'dark' && 'bg-gray-900 dark:bg-gray-700',
                style === 'light' && 'bg-white',
                style === 'auto' && 'bg-white dark:bg-gray-700',
                clsx(theme?.arrow),
              ])}
            />
          )}
        </RenderFloatingElement>
      </>
    )
  },
)
