import { $, useOnDocument, useSignal, useTask$ } from '@builder.io/qwik'
import { isBrowser } from '@builder.io/qwik/build'

export function useMediaQuery(query: string) {
  const matches = useSignal(false)
  const mediaChange = useSignal<undefined | (() => void)>(undefined)

  const mediaQueryHandler = $(() => {
    const mediaQuery: MediaQueryList | undefined = window!.matchMedia(query)

    if (!mediaQuery) return

    matches.value = mediaQuery.matches

    function handleMediaChange(event: MediaQueryListEvent) {
      matches.value = event.matches
    }

    mediaQuery?.addEventListener('change', handleMediaChange)

    return () => {
      mediaQuery?.removeEventListener('change', handleMediaChange)
    }
  })

  useOnDocument(
    'DOMContentLoaded',
    $(async () => {
      return await mediaQueryHandler()
    }),
  )

  useTask$(async ({ cleanup }) => {
    if (isBrowser) {
      mediaChange.value = await mediaQueryHandler()
    }

    cleanup(() => {
      mediaChange.value?.()
    })
  })

  return matches
}
