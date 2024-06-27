import { component$, PrefetchServiceWorker, Slot } from '@builder.io/qwik'
import { Link, useLocation } from '@builder.io/qwik-city'
import { Badge, Button, Dropdown, FlowbiteTheme, Navbar, useDark, useFlowbiteThemable } from 'flowbite-qwik'
import { IconCheckOutline, IconGithubSolid, IconLayersSolid, IconMoonOutline, IconSunOutline } from 'flowbite-qwik-icons'
import pkg from 'flowbite-qwik/package.json'

export default component$(() => {
  const { isDark, setDarkModeValue } = useDark()
  const location = useLocation()
  const { themeName, setThemeName } = useFlowbiteThemable()
  const isHomepage = location.url.pathname === '/'

  return (
    <div>
      <Navbar fluid fullWidth rounded separator sticky withSidebar={!isHomepage} id="header__navbar">
        <Navbar.Brand tag={Link} href="/">
          <img
            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto,w_43,h_39/v1718461602/flowbite-qwik/q91266o4fonn7zg3jtpj.png"
            alt="Flowbite qwik small logo"
            width="43"
            height="39"
            class="h-8 w-auto sm:h-9"
          />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>
        </Navbar.Brand>
        <div class="flex items-center gap-2 md:order-2">
          <Button class="hidden md:block" square href="https://github.com/qwikerx/flowbite-qwik" color="light" title="View on GitHub">
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
          <Dropdown
            title="Switch Flowbite theme"
            as={
              <Button square color="light" title="Switch Flowbite theme">
                <IconLayersSolid class="h-4 w-4" />
              </Button>
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
          <Badge class="hidden lg:block" size="sm" type="dark" content={'v' + pkg.version} />

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
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
      </Navbar>

      <main>
        <Slot />
      </main>

      {import.meta.env.PROD && (
        <>
          <PrefetchServiceWorker />
          {/*<PrefetchGraph />*/}
        </>
      )}
    </div>
  )
})

export const head = () => {
  return {
    scripts: [
      ...(import.meta.env.PROD
        ? [
            {
              props: {
                async: true,
                type: 'text/partytown',
                src: 'https://www.googletagmanager.com/gtag/js?id=G-78YXL53K0Y',
              },
            },
            {
              props: {
                type: 'text/partytown',
              },
              script: `
window.dataLayer = window.dataLayer || [];
window.gtag = function (){dataLayer.push(arguments);}
window.gtag('js', new Date());
window.gtag('config', 'G-78YXL53K0Y');
`,
            },
          ]
        : []),
    ],
  }
}
