import { QRL, Signal, useOn } from '@builder.io/qwik'
import { isSignal } from '@builder.io/qwik'
import { $ } from '@builder.io/qwik'

export function useOuterClick(targets: Array<Signal<Element | undefined> | string>, handler$: QRL<() => void>, validCondition: Signal<boolean>) {
  useOn(
    'click',
    $(async (event: Event) => {
      if (!validCondition.value) return

      const targetElements = targets.flatMap((selector) => {
        const element = isSignal(selector) ? selector.value : document.querySelector(selector)
        return element ? [element] : []
      })

      if (targetElements.some((element) => element === event.target || element.contains(event.target as HTMLElement))) return

      await handler$()
    }),
  )
}
