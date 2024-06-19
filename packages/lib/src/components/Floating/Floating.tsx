import { JSXNode, JSXOutput, PropsOf, Signal, Slot, component$ } from '@builder.io/qwik'

type RenderTriggerProps = PropsOf<'button'> & {
  ref: Signal<HTMLElement | undefined>
  triggerEl: JSXOutput
}

export const RenderFloatingTrigger = component$<RenderTriggerProps>((props) => {
  ;(props.triggerEl as JSXNode).props.ref = props.ref

  return <>{props.triggerEl}</>
})

type RenderFloatingElementProps = PropsOf<'div'> & {
  ref: Signal<HTMLDivElement | undefined>
  isVisible: boolean
}

export const RenderFloatingElement = component$<RenderFloatingElementProps>(({ ref, class: classList, isVisible, ...props }) => {
  return (
    <div
      ref={ref}
      class={[
        'absolute z-10 inline-block left-0 top-0 transition-opacity duration-300',
        isVisible ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
        classList,
      ]}
      {...props}
    >
      <Slot />
    </div>
  )
})

type RenderFloatingArrowProps = PropsOf<'div'> & {
  ref: Signal<HTMLDivElement | undefined>
}

export const RenderFloatingArrow = component$<RenderFloatingArrowProps>(({ class: classList, ...props }) => {
  return <div class={[classList, 'absolute h-2 w-2 rotate-45']} {...props} />
})
