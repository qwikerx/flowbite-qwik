import { component$, PrefetchServiceWorker, Slot } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Sidebar } from 'flowbite-qwik'
import { NavLink } from '~/components/NavLink/NavLink'
import { allDocs } from '~/generated-docs'
import { toPascalCase } from '~/utils/case'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'

export default component$(() => {
  return (
    <div>
      <NavbarPage fullWidth withSidebar />

      <main>
        <Sidebar withNavbar>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse label={'Getting Started'.toUpperCase()} opened class="text-sm tracking-wide">
              {allDocs['getting-started'].map((component) => (
                <Sidebar.Item class="capitalize" key={component} tag={NavLink} href={`/docs/getting-started/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={'Customize'.toUpperCase()} class="text-sm tracking-wide">
              {allDocs['customize'].map((component) => (
                <Sidebar.Item class="capitalize" key={component} tag={NavLink} href={`/docs/customize/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Components (${allDocs.components.length})`.toUpperCase()} opened class="text-sm tracking-wide">
              {allDocs.components.map((component) => (
                <Sidebar.Item key={component} tag={NavLink} href={`/docs/components/${component}`}>
                  {toPascalCase(component)}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Forms (${allDocs.forms.length})`.toUpperCase()} class="text-sm tracking-wide">
              {allDocs.forms.map((component) => (
                <Sidebar.Item class="capitalize" key={component} tag={NavLink} href={`/docs/forms/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
            <Sidebar.Collapse label={`Typography (${allDocs.typography.length})`.toUpperCase()} class="text-sm tracking-wide">
              {allDocs.typography.map((component) => (
                <Sidebar.Item class="capitalize" key={component} tag={NavLink} href={`/docs/typography/${component}`}>
                  {component}
                </Sidebar.Item>
              ))}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar>

        <div class="lg:ml-64">
          <Slot />
          <DocFooter class="bg-white dark:bg-gray-900" />
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
