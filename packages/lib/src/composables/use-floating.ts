import { $, Signal, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { useDocumentOuterClick } from './use-outer-click'
import { computePosition, arrow, flip, shift, offset, Placement, autoUpdate } from '@floating-ui/dom'

export function useFloating(internalPlacement: Placement = 'top', trigger = 'hover', noArrow = false, isVisible: Signal<boolean>) {
  const floatingRef = useSignal<HTMLDivElement>()
  const arrowRef = useSignal<HTMLDivElement>()
  const triggerRef = useSignal<HTMLElement>()

  const set$ = $((val: boolean) => {
    isVisible.value = val
  })

  useVisibleTask$(({ track, cleanup }) => {
    track(() => floatingRef.value)
    track(() => triggerRef.value)

    if (!floatingRef.value || !triggerRef.value) return

    function onMouseEnter() {
      set$(true)
    }

    function onMouseLeave() {
      set$(false)
    }
    function onClick(event: MouseEvent) {
      if ([floatingRef.value].some((element) => element === event.target || (element && element.contains(event.target as HTMLElement)))) return

      set$(!isVisible.value)
    }

    if (trigger === 'hover') {
      triggerRef.value.addEventListener('mouseenter', onMouseEnter)
      triggerRef.value.addEventListener('mouseleave', onMouseLeave)
    }

    if (trigger === 'click') {
      triggerRef.value.addEventListener('click', onClick)
    }

    const cleanupFn = triggerRef.value && floatingRef.value ? autoUpdate(triggerRef.value, floatingRef.value, updatePosition) : () => {}

    cleanup(() => {
      if (!floatingRef.value || !triggerRef.value) return

      triggerRef.value.removeEventListener('mouseenter', onMouseEnter)

      triggerRef.value.removeEventListener('mouseleave', onMouseLeave)

      triggerRef.value.removeEventListener('click', onClick)

      cleanupFn()
    })

    function updatePosition() {
      if (!floatingRef.value || !triggerRef.value) return

      computePosition(triggerRef.value, floatingRef.value, {
        placement: internalPlacement,
        middleware: [
          flip(),
          shift(),
          !noArrow &&
            !!arrowRef.value &&
            arrow({
              element: arrowRef.value,
            }),

          offset(8),
        ],
      }).then(({ x, y, middlewareData, placement }) => {
        if (floatingRef.value) {
          floatingRef.value.style.left = `${x}px`
          floatingRef.value.style.top = `${y}px`
        }
        if (arrowRef.value) {
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[placement.split('-')[0]] as 'top' | 'bottom' | 'left' | 'right'

          arrowRef.value.style.left = `${middlewareData.arrow?.x}px`
          arrowRef.value.style.top = `${middlewareData.arrow?.y}px`
          arrowRef.value.style[staticSide] = '-4px'
        }
      })
    }
  })

  useDocumentOuterClick(
    [triggerRef, floatingRef],
    $(() => {
      set$(false)
    }),
    useComputed$(() => isVisible.value && trigger === 'click'),
  )

  return {
    floatingRef,
    arrowRef,
    triggerRef,
  }
}
