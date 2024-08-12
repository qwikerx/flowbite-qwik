import { component$, PrefetchServiceWorker, Slot, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'
import { Sidebar } from 'flowbite-qwik'
import { NavLink } from '~/components/NavLink/NavLink'
import { allDocs } from '~/generated-docs'
import { toPascalCase } from '~/utils/case'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'
import { useLocation } from '@builder.io/qwik-city'
import { IconChartBars3FromLeftSolid, IconCloseSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  const location = useLocation()
  const collapsed = useSignal(false)

  const isGettingStartedOpened = useComputed$(() => location.url.pathname.startsWith('/docs/getting-started'))
  const isComponentsOpened = useComputed$(() => location.url.pathname.startsWith('/docs/components'))
  const isCustomizeOpened = useComputed$(() => location.url.pathname.startsWith('/docs/customize'))
  const isFormsOpened = useComputed$(() => location.url.pathname.startsWith('/docs/forms'))
  const isTypographyOpened = useComputed$(() => location.url.pathname.startsWith('/docs/typography'))

  useTask$(({ track }) => {
    track(() => location.isNavigating)
    collapsed.value = false
  })

  return (
    <div>
      <NavbarPage>
        <button
          q:slot="action"
          class="sm:hidden"
          onClick$={() => {
            collapsed.value = !collapsed.value
          }}
        >
          {collapsed.value ? <IconCloseSolid class="size-5" /> : <IconChartBars3FromLeftSolid class="size-5" />}
          <span class="sr-only">Open sidebar</span>
        </button>
      </NavbarPage>

      <main class="mx-auto max-w-screen-xl sm:flex">
        <Sidebar
          collapsed={collapsed}
          theme={{
            aside: 'sm:sticky sm:top-16 sm:block',
            nav: 'max-sm:px-0 max-sm:pl-2 max-sm:pt-20',
            collapse: {
              main: 'text-sm font-semibold tracking-wide hover:bg-transparent text-gray-900 dark:hover:bg-transparent hover:text-purple-600 dark:hover:text-purple-400',
              itemGroup: 'space-y-0',
              icon: 'size-2',
            },
            item: {
              main: 'bg-transparent pl-2 text-sm capitalize font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white',
              active: 'text-purple-600 dark:text-purple-400 dark:hover:text-purple-400 hover:text-purple-600 bg-transparent hover:bg-transparent',
            },
          }}
        >
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label={'Getting Started'.toUpperCase()} opened={isGettingStartedOpened.value}>
              {allDocs['getting-started'].map((component) => (
                <Sidebar.Item key={component} tag={NavLink} href={`/docs/getting-started/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={'Customize'.toUpperCase()} opened={isCustomizeOpened.value}>
              {allDocs['customize'].map((component) => (
                <Sidebar.Item key={component} tag={NavLink} href={`/docs/customize/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Components (${allDocs.components.length})`.toUpperCase()} opened={isComponentsOpened.value}>
              {allDocs.components.map((component) => (
                <Sidebar.Item key={component} tag={NavLink} href={`/docs/components/${component}`}>
                  {toPascalCase(component)}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Forms (${allDocs.forms.length})`.toUpperCase()} opened={isFormsOpened.value}>
              {allDocs.forms.map((component) => (
                <Sidebar.Item key={component} tag={NavLink} href={`/docs/forms/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Typography (${allDocs.typography.length})`.toUpperCase()} opened={isTypographyOpened.value}>
              {allDocs.typography.map((component) => (
                <Sidebar.Item key={component} tag={NavLink} href={`/docs/typography/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar>

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
