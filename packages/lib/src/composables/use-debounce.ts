import { $, QRL, useSignal } from '@builder.io/qwik'

export const useDebounce = (fn: QRL<(args: unknown) => void>, delay: number) => {
  const timeoutId = useSignal<number>()

  return $((args: unknown) => {
    clearTimeout(timeoutId.value)
    timeoutId.value = Number(setTimeout(() => fn(args), delay))
  })
}
