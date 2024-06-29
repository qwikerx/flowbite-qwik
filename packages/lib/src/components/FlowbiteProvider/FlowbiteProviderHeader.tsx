import { DARK_MODE_LOCAL_STORAGE_KEY } from '~/composables/use-dark-mode'

export const FlowbiteProviderHeader = () => {
  const themeScript = `
        document.firstElementChild
            .classList.add(localStorage.getItem('${DARK_MODE_LOCAL_STORAGE_KEY}') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))`
  return <script dangerouslySetInnerHTML={themeScript} />
}
