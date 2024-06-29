import { createContextId, $, Signal, useContext, useOnDocument, useComputed$ } from '@builder.io/qwik'
import { useMediaQuery } from './use-media-query'
import { isBrowser } from '@builder.io/qwik/build'

const DARK_MODE_CONTEXT = 'FLOWBITE_DARK_MODE_CONTEXT'
export const DARK_MODE_LOCAL_STORAGE_KEY = DARK_MODE_CONTEXT

type darkModeTheme = 'light' | 'dark' | undefined

export const darkModeContext = createContextId<Signal<darkModeTheme>>(DARK_MODE_CONTEXT)

export function useDarkMode() {
  const darkModeTheme = useContext(darkModeContext)

  const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

  const init = $(() => {
    const darkTheme = localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY) ?? (isPreferredDark.value ? 'dark' : 'light')

    darkModeTheme.value = darkTheme as darkModeTheme
  })

  const setDarkModeValue = $((value: darkModeTheme) => {
    if (value) {
      darkModeTheme.value = value
      if (isBrowser) {
        localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, value)

        const html = document.firstElementChild
        if (!html) return
        html.classList.remove('dark', 'light')
        html.classList.add(value)
      }
    }
  })

  useOnDocument('DOMContentLoaded', init)

  const isDark = useComputed$(() => darkModeTheme.value === 'dark')

  return {
    isDark,
    setDarkModeValue,
  }
}
