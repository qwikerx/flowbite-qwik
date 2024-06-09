import { Slot, component$ } from '@builder.io/qwik'
import { Link, useLocation, type LinkProps } from '@builder.io/qwik-city'

export type NavLinkProps = LinkProps & { activeClass?: string }

export const NavLink = component$(({ activeClass, ...props }: NavLinkProps) => {
  const location = useLocation()

  function removeTrailingSlash(path: string) {
    return path.endsWith('/') ? path.slice(0, -1) : path
  }

  const isActive = removeTrailingSlash(location.url.pathname) === removeTrailingSlash(props.href ?? '')

  return (
    <Link {...props} class={[props.class, isActive ? activeClass : '']}>
      <Slot />
    </Link>
  )
})
