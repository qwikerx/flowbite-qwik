import { DARK_MODE_LOCAL_STORAGE_KEY } from '~/lib/composables/use-dark'

export const FlowbiteProviderHeader = () => {
  const themeScript = `
        document.firstElementChild
            .classList.add(localStorage.getItem('${DARK_MODE_LOCAL_STORAGE_KEY}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))`
  return <script dangerouslySetInnerHTML={themeScript} />
}
