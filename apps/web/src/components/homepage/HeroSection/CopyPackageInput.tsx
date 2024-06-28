import { Input, Tooltip } from 'flowbite-qwik'
import { $, component$, useSignal } from '@builder.io/qwik'
import { IconClipboardCheckSolid } from 'flowbite-qwik-icons'

type CopyPackageInputProps = {
  value: string
}

export const CopyPackageInput = component$<CopyPackageInputProps>(({ value }) => {
  const copy = useSignal('')
  const justCopied = useSignal(false)

  const copyToClipboard = $(() => {
    justCopied.value = true
    navigator.clipboard.writeText(value)
    setTimeout(() => (justCopied.value = false), 2000)
  })

  return (
    <Tooltip style="dark">
      <Input
        bind:value={copy}
        q:slot="trigger"
        onClick$={copyToClipboard}
        placeholder={value}
        readOnly
        suffix={<IconClipboardCheckSolid />}
        size="md"
      />

      <div q:slot="content">{justCopied.value ? 'Copied!' : 'Copy to clipboard'}</div>
    </Tooltip>
  )
})
