import { Slot, component$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { Sidebar } from 'flowbite-qwik'
import type { SidebarItemProps } from 'flowbite-qwik'

export const SidebarItemWrapper = component$<SidebarItemProps>((props) => {
  const location = useLocation()

  function removeTrailingSlash(path: string) {
    return path.endsWith('/') ? path.slice(0, -1) : path
  }

  const isActive = removeTrailingSlash(location.url.pathname) === removeTrailingSlash(props.href ?? '')

  return (
    <Sidebar.Item {...props} tag={Link} isActive={isActive}>
      <Slot />
    </Sidebar.Item>
  )
})
