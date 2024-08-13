import { component$, Slot, useComputed$, useVisibleTask$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { Badge, Navbar, Tooltip, useDarkMode } from 'flowbite-qwik'
import { IconDiscordSolid, IconGithubSolid, IconMoonSolid, IconSunSolid } from 'flowbite-qwik-icons'
import pkg from 'flowbite-qwik/package.json'
import './NavbarPage.css'
import docsearch from '@docsearch/js'

export const NavbarPage = component$(() => {
  const { isDark, setDarkModeValue } = useDarkMode()
  const location = useLocation()

  const isHomePage = useComputed$(() => location.url.pathname === '/')

  useVisibleTask$(() => {
    docsearch({
      appId: 'KGN2EXYVMH',
      apiKey: '8127bdcdbef32915ef573c0759c118b3',
      indexName: 'flowbite-qwik',
      container: '#docsearch',
    })
  })

  return (
    <Navbar
      fluid
      separator
      sticky
      id="header__navbar"
      theme={{
        nav: { wrapper: 'max-w-8xl' },
        link: {
          main: 'text-sm font-medium',
        },
        toggle: !isHomePage.value && 'hidden',
      }}
    >
      <div class="flex gap-2">
        <Slot name="action" />
        <Navbar.Toggle />
        <Navbar.Brand tag={Link} href="/">
          <img src="/logo.svg" alt="Flowbite qwik small logo" width="36" height="36" class="h-8 w-auto" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
        </Navbar.Brand>
      </div>

      <div class="flex items-center justify-between lg:ml-8 lg:flex-1">
        <div id="docsearch" />
        <div class="flex items-center gap-1 lg:gap-2">
          <Navbar.Collapse class="absolute left-0 top-12 md:relative md:top-0">
            <Navbar.Link href="/docs/getting-started/introduction" tag={Link} active={location.url.pathname === '/docs/getting-started/introduction'}>
              Docs
            </Navbar.Link>
            <Navbar.Link href="/docs/getting-started/quickstart" tag={Link} active={location.url.pathname === '/docs/getting-started/quickstart'}>
              Quickstart
            </Navbar.Link>
            <Navbar.Link href="https://flowbite.com" target="_blank">
              Flowbite
            </Navbar.Link>
          </Navbar.Collapse>
          <Tooltip
            placement="bottom"
            theme={{
              element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
            }}
          >
            <span q:slot="content">Join Discord Community</span>
            <a
              q:slot="trigger"
              rel="nofollow noopener noreferrer"
              target="_blank"
              href="https://discord.gg/4eeurUVvTy"
              aria-label="Join Discord Community"
              class="hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:block"
            >
              <IconDiscordSolid aria-hidden class="size-5" />
            </a>
          </Tooltip>
          <Tooltip
            placement="bottom"
            theme={{
              element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
            }}
          >
            <span q:slot="content">View on GitHub</span>
            <a
              q:slot="trigger"
              rel="noopener"
              target="_blank"
              href="https://github.com/qwikerx/flowbite-qwik"
              aria-label="View on GitHub"
              class="hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:block"
            >
              <IconGithubSolid aria-hidden class="size-5" />
            </a>
          </Tooltip>
          <Tooltip
            placement="bottom"
            theme={{
              element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
            }}
          >
            <button
              q:slot="trigger"
              class="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              onClick$={() => {
                setDarkModeValue(isDark.value ? 'light' : 'dark')
              }}
            >
              {isDark.value ? <IconSunSolid class="h-4 w-4" /> : <IconMoonSolid class="h-4 w-4" />}
            </button>
            <span q:slot="content">Toggle dark mode</span>
          </Tooltip>
          <Badge class="hidden lg:block" size="sm" type="purple" content={'v' + pkg.version} />
        </div>
      </div>
    </Navbar>
  )
})
