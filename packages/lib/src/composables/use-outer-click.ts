import { QRL, Signal, useOn, useOnDocument } from '@builder.io/qwik'
import { isSignal } from '@builder.io/qwik'
import { $ } from '@builder.io/qwik'

const action = $(
  async (event: Event, targets: Array<Signal<Element | undefined> | string>, handler$: QRL<() => void>, validCondition: Signal<boolean>) => {
    if (!validCondition.value) return

    const targetElements = targets.flatMap((selector) => {
      const element = isSignal(selector) ? selector.value : document.querySelector(selector)
      return element ? [element] : []
    })

    if (targetElements.some((element) => element === event.target || element.contains(event.target as HTMLElement))) return

    await handler$()
  },
)

export function useComponentOuterClick(
  targets: Array<Signal<Element | undefined> | string>,
  handler$: QRL<() => void>,
  validCondition: Signal<boolean>,
) {
  useOn(
    'click',
    $((event: Event) => action(event, targets, handler$, validCondition)),
  )
}

export function useDocumentOuterClick(
  targets: Array<Signal<Element | undefined> | string>,
  handler$: QRL<() => void>,
  validCondition: Signal<boolean>,
) {
  useOnDocument(
    'click',
    $((event: Event) => action(event, targets, handler$, validCondition)),
  )
}
