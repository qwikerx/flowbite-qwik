import { component$ } from '@builder.io/qwik'
import { Button, useDark } from 'flowbite-qwik'
import { IconMoonSolid, IconSunSolid } from 'flowbite-qwik-icons'

export const DarkModeSwitcher = component$(() => {
  const { isDark, setDarkModeValue } = useDark()

  return (
    <div class="flex flex-row gap-8 text-cyan-500">
      <div class="flex flex-col items-center gap-2 font-medium text-gray-900 dark:text-gray-400">
        <Button size="xl" square color={isDark.value ? 'light' : 'default'} onClick$={() => setDarkModeValue('light')}>
          <IconSunSolid class="h-6 w-6" />
        </Button>
        Light
      </div>
      <div class="flex flex-col items-center gap-2 font-medium text-gray-400 dark:text-white">
        <Button size="xl" square color={isDark.value ? 'default' : 'light'} onClick$={() => setDarkModeValue('dark')}>
          <IconMoonSolid class="h-6 w-6" />
        </Button>
        Dark
      </div>
    </div>
  )
})
