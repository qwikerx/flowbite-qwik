import { $, useSignal } from '@builder.io/qwik'

export function useCopyToClipboard() {
  const isJustCopied = useSignal(false)

  const copyToClipboard$ = $((value: string) => {
    navigator.clipboard.writeText(value)
    isJustCopied.value = true
    setTimeout(() => {
      isJustCopied.value = false
    }, 2000)
  })

  return { isJustCopied, copyToClipboard$ }
}
