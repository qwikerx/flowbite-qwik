import { $, ClassList, PropsOf, Signal, Slot, component$, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Placement, computePosition, arrow, flip, shift, offset } from '@floating-ui/dom'
import { useDocumentOuterClick } from '~/composables'

type TooltipProps = PropsOf<'div'> & {
  placement?: Placement
  trigger?: 'hover' | 'click'
  noArrow?: boolean
  styles?: {
    tooltip?: ClassList
    arrow?: ClassList
  }
  'bind:visible'?: Signal<boolean>
}

export const Floating = component$<TooltipProps>(
  ({ placement = 'top', trigger = 'hover', noArrow = false, styles, class: className, 'bind:visible': isVisible = useSignal(false), ...props }) => {
    const floating = useSignal<HTMLDivElement>()
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

    useVisibleTask$(() => {
      if (!floating.value || !wrapper.value) return

      computePosition(wrapper.value, floating.value, {
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

    const set$ = $((value: boolean) => {
      isVisible.value = value
    })

    useDocumentOuterClick(
      [wrapper, floating],
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
        onClick$={(event) => {
          if (trigger === 'click') {
            if ([floating.value].some((element) => element === event.target || (element && element.contains(event.target as HTMLElement)))) return
            set$(!isVisible.value)
          }
        }}
        class={className}
      >
        <Slot name="trigger" />

        <div
          ref={floating}
          class={[
            'absolute z-10 inline-block left-0 top-0 transition-opacity duration-300',
            isVisible.value ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
            styles?.tooltip,
          ]}
          style={{
            left: leftPosition.value + 'px',
            top: topPosition.value + 'px',
          }}
          {...props}
        >
          <Slot name="content" />

          {!noArrow && (
            <div
              ref={arrowEl}
              class={['absolute h-2 w-2 rotate-45', styles?.arrow]}
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
  },
)
