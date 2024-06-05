import { $, useSignal } from '@builder.io/qwik'

export function useToggle(initialValue = false) {
  const value = useSignal(initialValue)

  const toggle$ = $(() => {
    value.value = !value.value
  })

  const set$ = $((bool: boolean) => (value.value = bool))

  return { value, toggle$, set$ }
}
