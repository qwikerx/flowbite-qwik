import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { Badge, Dropdown, FlowbiteTheme, Navbar, Tooltip, useDarkMode, useFlowbiteThemable } from 'flowbite-qwik'
import {
  IconCheckOutline,
  IconDiscordSolid,
  IconGithubSolid,
  IconLayersSolid,
  IconMoonSolid,
  IconSearchOutline,
  IconSunSolid,
} from 'flowbite-qwik-icons'
import pkg from 'flowbite-qwik/package.json'
import './NavbarPage.css'
import docsearch from '@docsearch/js'

type NavbarPageProps = {
  fullWidth?: boolean
  withSidebar?: boolean
  withCollapse?: boolean
}

export const NavbarPage = component$<NavbarPageProps>(({ fullWidth = false, withCollapse = false, withSidebar = false }) => {
  const { isDark, setDarkModeValue } = useDarkMode()
  const location = useLocation()
  const { themeName, setThemeName } = useFlowbiteThemable()

  useVisibleTask$(() => {
    docsearch({
      appId: 'KGN2EXYVMH',
      apiKey: '8127bdcdbef32915ef573c0759c118b3',
      indexName: 'flowbite-qwik',
      container: '#docsearch',
    })
  })

  return (
    <Navbar fluid fullWidth={fullWidth} rounded separator withSidebar={withSidebar} sticky id="header__navbar">
      <div class="flex gap-2">
        {withCollapse && <Navbar.Toggle />}
        <Navbar.Brand tag={Link} href="/">
          <img src="/logo.svg" alt="Flowbite qwik small logo" width="36" height="36" class="h-8 w-auto" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite <span class="hidden sm:inline">Qwik</span>
          </span>
        </Navbar.Brand>
      </div>

      <div class="flex justify-between lg:ml-8 lg:flex-1">
        <div class="relative hidden lg:block">
          <button type="button" class="DocSearch DocSearch-Button" disabled>
            <span class="DocSearch-Button-Container">
              <IconSearchOutline class="DocSearch-Search-Icon" />
              <span class="DocSearch-Button-Placeholder">Search</span>
            </span>
          </button>
          <div id="docsearch" class="absolute left-0 top-0" />
        </div>
        <div class="flex items-center gap-1 lg:gap-2">
          {withCollapse && (
            <Navbar.Collapse class="absolute left-0 top-12 md:relative md:top-0">
              <Navbar.Link
                href="/docs/getting-started/introduction"
                tag={Link}
                active={location.url.pathname === '/docs/getting-started/introduction'}
              >
                Docs
              </Navbar.Link>
              <Navbar.Link href="/docs/getting-started/quickstart" tag={Link} active={location.url.pathname === '/docs/getting-started/quickstart'}>
                Quickstart
              </Navbar.Link>
              <Navbar.Link href="https://flowbite.com" target="_blank">
                Flowbite
              </Navbar.Link>
            </Navbar.Collapse>
          )}

          <Tooltip placement="bottom">
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
          <Tooltip placement="bottom">
            <span q:slot="content">View on GitHub</span>
            <a
              q:slot="trigger"
              rel="noopener"
              target="_blank"
              href="https://github.com/themesberg/flowbite-react"
              aria-label="View on GitHub"
              class="hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:block"
            >
              <IconGithubSolid aria-hidden class="size-5" />
            </a>
          </Tooltip>
          <Tooltip placement="bottom">
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
          <Tooltip placement="bottom">
            <span q:slot="content">Change theme</span>
            <Dropdown
              title="Switch Flowbite theme"
              class="hidden lg:block"
              q:slot="trigger"
              as={
                <button
                  class="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  title="Switch Flowbite theme"
                >
                  <IconLayersSolid />
                </button>
              }
            >
              {(['blue', 'green', 'red', 'pink', 'purple'] as FlowbiteTheme[]).map((theme) => (
                <Dropdown.Item
                  key={theme}
                  onClick$={() => {
                    setThemeName(theme)
                  }}
                >
                  {theme}
                  {theme === themeName.value && <IconCheckOutline class="ml-2" />}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Tooltip>

          <Badge size="sm" type="purple" content={'v' + pkg.version} />
        </div>
      </div>
    </Navbar>
  )
})
