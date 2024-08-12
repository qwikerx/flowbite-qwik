import { createContextId, useComputed$, useContext } from '@builder.io/qwik'
import { SidebarTheme } from '~/components/Sidebar/Sidebar'

type SidebarContextProps = { theme?: SidebarTheme }
export const sidebarContext = createContextId<SidebarContextProps>('FLOWBITE_QWIK_SIDEBAR_CONTEXT')

export function useSidebarContext() {
  const state = useContext(sidebarContext)

  const theme = useComputed$(() => state.theme)

  return {
    theme,
  }
}
