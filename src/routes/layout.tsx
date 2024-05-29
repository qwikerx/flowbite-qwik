import { component$, Slot } from '@builder.io/qwik'
import { useDark } from '~/composables/use-dark'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from '~/components/Navbar'
import { Link, useLocation } from '@builder.io/qwik-city'
import { IconGithubSolid, IconMoonOutline, IconSunOutline } from '~/components/Icon'
import { Button } from '~/components/Button/Button'

export default component$(() => {
  const { isDark, setDarkModeValue } = useDark()
  const location = useLocation()

  return (
    <div>
      <Navbar fluid rounded separator>
        <NavbarBrand as={Link} href="/">
          <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
        </NavbarBrand>
        <div class="flex md:order-2 items-center gap-2">
          <Button square href="https://github.com/xmimiex/flowbite-qwik" color="light" title="View on GitHub">
            <IconGithubSolid class="h-4 w-4" />
          </Button>
          <Button
            square
            color="light"
            title="Toggle dark mode"
            onClick$={() => {
              setDarkModeValue(isDark.value ? 'light' : 'dark')
            }}
          >
            {isDark.value ? <IconSunOutline class="h-4 w-4" /> : <IconMoonOutline class="h-4 w-4" />}
          </Button>

          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/docs/getting-started/introduction" as={Link} active={location.url.pathname === '/docs/getting-started/introduction'}>
            Docs
          </NavbarLink>
          <NavbarLink href="/docs/getting-started/quickstart" as={Link} active={location.url.pathname === '/docs/getting-started/quickstart'}>
            Quickstart
          </NavbarLink>
          <NavbarLink href="https://flowbite.com">Flowbite</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <main class="px-6">
        <Slot />
      </main>
    </div>
  )
})
