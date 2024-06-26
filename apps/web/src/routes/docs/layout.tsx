import { component$, Slot } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Sidebar } from 'flowbite-qwik'
import { NavLink } from '~/components/NavLink/NavLink'
import { allDocs } from '~/generated-docs'
import { toPascalCase } from '~/utils/case'

export default component$(() => {
  return (
    <div>
      <Sidebar withNavbar>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label="Getting Started" opened>
            {allDocs['getting-started'].map((component) => (
              <Sidebar.Item class="capitalize" key={component} tag={NavLink} href={`/docs/getting-started/${component}`}>
                {component}
              </Sidebar.Item>
            ))}
          </Sidebar.Collapse>
          <Sidebar.Collapse label={`Components (${allDocs.components.length})`} opened>
            {allDocs.components.map((component) => (
              <Sidebar.Item key={component} tag={NavLink} href={`/docs/components/${component}`}>
                {toPascalCase(component)}
              </Sidebar.Item>
            ))}
          </Sidebar.Collapse>
          <Sidebar.Collapse label={`Forms (${allDocs.forms.length})`}>
            {allDocs.forms.map((component) => (
              <Sidebar.Item class="capitalize" key={component} tag={NavLink} href={`/docs/forms/${component}`}>
                {component}
              </Sidebar.Item>
            ))}
          </Sidebar.Collapse>
          <Sidebar.Collapse label={`Typography (${allDocs.typography.length})`}>
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
        <DocFooter />
      </div>
    </div>
  )
})
