import { component$, Slot, useSignal } from '@builder.io/qwik'
import { Toggle } from '~/lib/components/Toggle/Toggle'
import { useDark } from '~/lib/composables/use-dark'

export default component$(() => {
  const { isDark, setDarkModeValue } = useDark()

  const internalIsDark = useSignal(isDark.value)

  return (
    <>
      <header class="w-full px-5 flex justify-between items-center h-20 border-b shadow-sm">
        <img src={`/logo-${isDark.value ? 'dark' : 'light'}.png`} width={804} height={183} alt="logo" class="md:w-60 w-28" />

        <Toggle
          label={isDark.value ? 'Dark' : 'Light'}
          bind:checked={internalIsDark}
          size="sm"
          onChange$={(value: boolean) => {
            setDarkModeValue(value ? 'dark' : 'light')
          }}
        />
      </header>
      <Slot />
    </>
  )
})
