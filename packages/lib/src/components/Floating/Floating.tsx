import { PropsOf, Signal, Slot, component$ } from '@builder.io/qwik'

type RenderFloatingElementProps = PropsOf<'div'> & {
  ref: Signal<HTMLDivElement | undefined>
  isVisible: boolean
}

export const RenderFloatingElement = component$<RenderFloatingElementProps>(({ ref, class: classList, isVisible, ...props }) => {
  return (
    <div
      ref={ref}
      class={[
        'absolute z-10 inline-block transition-opacity duration-300',
        isVisible ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
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
