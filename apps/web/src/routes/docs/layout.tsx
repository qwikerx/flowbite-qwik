import { component$, PrefetchServiceWorker, Slot, useComputed$ } from '@builder.io/qwik'
import { Sidebar } from 'flowbite-qwik'
import { NavLink } from '~/components/NavLink/NavLink'
import { allDocs } from '~/generated-docs'
import { toPascalCase } from '~/utils/case'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'
import { useLocation } from '@builder.io/qwik-city'

export default component$(() => {
  const location = useLocation()

  const isGettingStartedOpened = useComputed$(() => location.url.pathname.startsWith('/docs/getting-started'))
  const isComponentsOpened = useComputed$(() => location.url.pathname.startsWith('/docs/components'))
  const isCustomizeOpened = useComputed$(() => location.url.pathname.startsWith('/docs/customize'))
  const isFormsOpened = useComputed$(() => location.url.pathname.startsWith('/docs/forms'))
  const isTypographyOpened = useComputed$(() => location.url.pathname.startsWith('/docs/typography'))

  const collapseClasses = 'text-sm tracking-wide hover:bg-transparent dark:hover:bg-transparent hover:text-purple-600 dark:hover:text-purple-400'
  const itemClasses =
    'bg-transparent pl-2 text-sm capitalize text-gray-500 hover:bg-transparent hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white'
  const itemActiveClasses =
    'text-purple-600 dark:text-purple-400 dark:hover:text-purple-400 hover:text-purple-600 bg-transparent hover:bg-transparent'

  return (
    <div>
      <NavbarPage fullWidth withSidebar />

      <main>
        <Sidebar withNavbar>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label={'Getting Started'.toUpperCase()} class={collapseClasses} opened={isGettingStartedOpened.value}>
              {allDocs['getting-started'].map((component) => (
                <Sidebar.Item
                  class={itemClasses}
                  activeClass={itemActiveClasses}
                  key={component}
                  tag={NavLink}
                  href={`/docs/getting-started/${component}`}
                >
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={'Customize'.toUpperCase()} class={collapseClasses} opened={isCustomizeOpened.value}>
              {allDocs['customize'].map((component) => (
                <Sidebar.Item class={itemClasses} activeClass={itemActiveClasses} key={component} tag={NavLink} href={`/docs/customize/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse
              label={`Components (${allDocs.components.length})`.toUpperCase()}
              class={collapseClasses}
              opened={isComponentsOpened.value}
            >
              {allDocs.components.map((component) => (
                <Sidebar.Item
                  key={component}
                  tag={NavLink}
                  href={`/docs/components/${component}`}
                  class={itemClasses}
                  activeClass={itemActiveClasses}
                >
                  {toPascalCase(component)}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Forms (${allDocs.forms.length})`.toUpperCase()} class={collapseClasses} opened={isFormsOpened.value}>
              {allDocs.forms.map((component) => (
                <Sidebar.Item class={itemClasses} activeClass={itemActiveClasses} key={component} tag={NavLink} href={`/docs/forms/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse
              label={`Typography (${allDocs.typography.length})`.toUpperCase()}
              class={collapseClasses}
              opened={isTypographyOpened.value}
            >
              {allDocs.typography.map((component) => (
                <Sidebar.Item
                  class={itemClasses}
                  activeClass={itemActiveClasses}
                  key={component}
                  tag={NavLink}
                  href={`/docs/typography/${component}`}
                >
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar>

        <div class="sm:ml-64">
          <Slot />
        </div>
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
