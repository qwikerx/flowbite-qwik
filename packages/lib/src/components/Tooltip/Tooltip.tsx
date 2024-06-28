import { PropsOf, Slot, component$, useSignal } from '@builder.io/qwik'
import { Placement } from '@floating-ui/dom'
import { TooltipStyle } from './tooltip-types'
import { FloatingTrigger } from '../Floating/floating-types'
import { RenderFloatingArrow, RenderFloatingElement } from '../Floating/Floating'
import { useFloating } from '~/composables/use-floating'

type TooltipProps = PropsOf<'div'> & {
  placement?: Placement
  style?: TooltipStyle
  trigger?: FloatingTrigger
  noArrow?: boolean
}

export const Tooltip = component$<TooltipProps>(({ placement = 'top', class: className, trigger = 'hover', style = 'auto', noArrow = false }) => {
  const isVisible = useSignal(false)
  const { floatingRef, arrowRef, triggerRef } = useFloating(placement, trigger, noArrow, isVisible)

  return (
    <>
      <div ref={triggerRef} class={className}>
        <Slot name="trigger" />
      </div>

      <RenderFloatingElement
        q:slot="floating"
        ref={floatingRef}
        isVisible={isVisible.value}
        class={[
          'inline-block min-w-max rounded-lg px-3 py-2 text-sm font-medium shadow-sm transition-opacity duration-300',
          {
            'bg-gray-900 text-white dark:bg-gray-700': style === 'dark',
            'border border-gray-200 bg-white text-gray-900': style === 'light',
            'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white': style === 'auto',
          },
        ]}
      >
        <Slot name="content" />

        {!noArrow && (
          <RenderFloatingArrow
            ref={arrowRef}
            class={[
              {
                'bg-gray-900 dark:bg-gray-700': style === 'dark',
                'bg-white': style === 'light',
                'bg-white dark:bg-gray-700': style === 'auto',
              },
            ]}
          />
        )}
      </RenderFloatingElement>
    </>
  )
})
