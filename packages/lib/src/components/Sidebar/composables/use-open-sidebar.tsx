import { $, createContextId, useComputed$, useContext } from '@builder.io/qwik'

type SidebarContextProps = { isOpen: boolean }
export const sidebarContext = createContextId<SidebarContextProps>('FLOWBITE_QWIK_SIDEBAR_CONTEXT')

export function useSidebarOpen() {
  const state = useContext(sidebarContext)

  const isOpen = useComputed$(() => state.isOpen)
  const setIsOpen = $((value: boolean) => {
    state.isOpen = value
  })

  return {
    isOpen,
    setIsOpen,
  }
}
