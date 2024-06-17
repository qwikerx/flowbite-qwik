import { $, PropsOf, Slot, component$, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Placement, computePosition, arrow, flip, shift, offset } from '@floating-ui/dom'
import { TooltipStyle, TooltipTrigger } from './tooltip-types'
import { useDocumentOuterClick, useToggle } from '~/composables'

type TooltipProps = PropsOf<'div'> & {
  placement?: Placement
  style?: TooltipStyle
  trigger?: TooltipTrigger
  noArrow?: boolean
}

export const Tooltip = component$<TooltipProps>(({ placement = 'top', trigger = 'hover', style = 'auto', noArrow = false }) => {
  const tooltip = useSignal<HTMLDivElement>()
  const wrapper = useSignal<HTMLDivElement>()
  const arrowEl = useSignal<HTMLDivElement>()

  const leftPosition = useSignal(0)
  const topPosition = useSignal(0)

  const arrowLeftPosition = useSignal()
  const arrowTopPosition = useSignal()

  const staticSide = useComputed$(() => {
    return {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]] as string
  })

  const { value: isVisible, set$ } = useToggle()

  useVisibleTask$(() => {
    if (!tooltip.value || !wrapper.value) return

    computePosition(wrapper.value, tooltip.value, {
      placement,
      middleware: [
        !noArrow &&
          !!arrowEl.value &&
          arrow({
            element: arrowEl.value,
          }),
        flip(),
        shift(),
        offset(8),
      ],
    }).then(({ x, y, middlewareData }) => {
      leftPosition.value = x
      topPosition.value = y

      arrowLeftPosition.value = middlewareData.arrow?.x !== undefined ? middlewareData.arrow.x : undefined
      arrowTopPosition.value = middlewareData.arrow?.y !== undefined ? middlewareData.arrow.y : undefined
    })
  })

  useDocumentOuterClick(
    [wrapper],
    $(() => {
      set$(false)
    }),
    useComputed$(() => isVisible.value && trigger === 'click'),
  )

  return (
    <div
      ref={wrapper}
      onMouseEnter$={() => {
        if (trigger === 'hover') set$(true)
      }}
      onMouseLeave$={() => {
        if (trigger === 'hover') set$(false)
      }}
      onClick$={() => {
        if (trigger === 'click') set$(!isVisible.value)
      }}
    >
      <Slot name="trigger" />

      <div
        ref={tooltip}
        role="tooltip"
        class={[
          'absolute z-10 inline-block px-3 left-0 top-0 py-2 text-sm font-medium transition-opacity duration-300 rounded-lg shadow-sm',
          isVisible.value ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
          {
            'bg-gray-900 text-white dark:bg-gray-700': style === 'dark',
            'border border-gray-200 bg-white text-gray-900': style === 'light',
            'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white': style === 'auto',
          },
        ]}
        style={{
          left: leftPosition.value + 'px',
          top: topPosition.value + 'px',
        }}
      >
        <Slot name="content" />

        {!noArrow && (
          <div
            ref={arrowEl}
            class={[
              'absolute h-2 w-2 rotate-45',
              {
                'bg-gray-900 dark:bg-gray-700': style === 'dark',
                'bg-white': style === 'light',
                'bg-white dark:bg-gray-700': style === 'auto',
              },
            ]}
            style={{
              left: arrowLeftPosition.value + 'px',
              top: arrowTopPosition.value + 'px',
              [staticSide.value]: '-4px',
            }}
          />
        )}
      </div>
    </div>
  )
})
