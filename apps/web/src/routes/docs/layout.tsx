import { component$, Slot } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Sidebar, useSidebarOpen } from 'flowbite-qwik'
import { NavLink } from '~/components/NavLink/NavLink'
import { allDocs } from '~/generated-docs'
import { toPascalCase } from '~/utils/case'

export default component$(() => {
  const { setIsOpen } = useSidebarOpen()

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

      <div class="sm:ml-64">
        <div class="pb-1 sm:hidden border-b border-gray-200 dark:border-gray-600">
          <button
            onClick$={() => {
              setIsOpen(true)
            }}
            type="button"
            class="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-5">
          <Slot />

          <DocFooter />
        </div>
      </div>
    </div>
  )
})
