import { component$, Slot } from '@builder.io/qwik'
import { Toggle } from '~/components/Toggle/Toggle'
import { useDark } from '~/composables/use-dark'

export default component$(() => {
  const { isDark, setDarkModeValue } = useDark()

  return (
    <div>
      <header class="w-full px-5 flex justify-between items-center h-20 border-b shadow-sm">
        <a href="/">
          <img src={`/logo-${isDark.value ? 'dark' : 'light'}.png`} width={804} height={183} alt="logo" class="md:w-60 w-28" />
        </a>

        <Toggle
          label={isDark.value ? 'Dark' : 'Light'}
          bind:checked={isDark}
          size="sm"
          onChange$={(value: boolean) => {
            setDarkModeValue(value ? 'dark' : 'light')
          }}
        />
      </header>
      <main class="p-6">
        <Slot />
      </main>
    </div>
  )
})
