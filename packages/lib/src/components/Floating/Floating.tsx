import { ClassList, JSXNode, JSXOutput, PropsOf, Signal, component$, useSignal } from '@builder.io/qwik'
import { Placement } from '@floating-ui/dom'
import { useFloating } from '~/composables/use-floating'
import { Button } from '../Button'
import { getChild } from '~/utils/children-inspector'

type TooltipProps = {
  placement?: Placement
  trigger?: 'hover' | 'click'
  noArrow?: boolean
  styles?: {
    tooltip?: ClassList
    arrow?: ClassList
  }
  'bind:visible'?: Signal<boolean>
  triggerEl?: JSXOutput
  floatingEl?: JSXOutput
}

export const Floating = component$<TooltipProps>(
  ({
    placement = 'top',
    floatingEl,
    triggerEl,
    trigger = 'hover',
    noArrow = false,
    styles,
    'bind:visible': isVisible = useSignal(false),
    ...props
  }) => {
    const { floatingRef, arrowRef, triggerRef } = useFloating(placement, trigger, noArrow, isVisible)

    return (
      <>
        <RenderTrigger ref={triggerRef} triggerEl={triggerEl} />

        <div
          ref={floatingRef}
          class={[
            'absolute z-10 inline-block left-0 top-0 transition-opacity duration-300',
            isVisible.value ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
            styles?.tooltip,
          ]}
          {...props}
        >
          <>{floatingEl}</>

          {!noArrow && <div ref={arrowRef} class={['absolute h-2 w-2 rotate-45', styles?.arrow]} />}
        </div>
      </>
    )
  },
)

type RenderTriggerProps = PropsOf<'button'> & {
  ref: Signal<HTMLElement | undefined>
  triggerEl: JSXOutput
}

const RenderTrigger = component$<RenderTriggerProps>((props) => {
  let isButton = false
  getChild(props.triggerEl, [
    {
      component: Button,
      foundComponentCallback: () => {
        isButton = true
      },
    },
    {
      component: 'button',
      foundComponentCallback: () => {
        isButton = true
      },
    },
  ])
  ;(props.triggerEl as JSXNode).props.ref = props.ref

  return !isButton ? <button {...props}>{props.triggerEl}</button> : <>{props.triggerEl}</>
})
