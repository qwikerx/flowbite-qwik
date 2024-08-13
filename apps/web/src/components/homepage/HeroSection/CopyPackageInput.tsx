import { Input, Clipboard } from 'flowbite-qwik'
import { component$, useSignal } from '@builder.io/qwik'

type CopyPackageInputProps = {
  value: string
}

export const CopyPackageInput = component$<CopyPackageInputProps>(({ value }) => {
  const inputValue = useSignal('')

  return (
    <div class="relative w-full">
      <Input
        placeholder={value}
        bind:value={inputValue}
        disabled
        readOnly
        class="w-full"
        suffix={<Clipboard.WithIcon valueToCopy={value} class="absolute end-2 top-1/2 inline-flex -translate-y-1/2" />}
      />
    </div>
  )
})
