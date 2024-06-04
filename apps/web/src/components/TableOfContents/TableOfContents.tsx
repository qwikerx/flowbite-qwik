import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik'
import { toSlug } from '~/utils/slug'

type TableOfContentsProps = {
  items: string[]
}

export const TableOfContents = component$<TableOfContentsProps>((props) => {
  const itemsState = useStore({
    elements: props.items.map((item) => ({
      label: item,
      href: '#' + toSlug(item),
      active: false,
    })),
  })

  function getActiveStateOfElement(label: string) {
    return itemsState.elements.find((el) => el.label === label)?.active
  }

  const toggleActiveStateOfElement = $((href: string) => {
    itemsState.elements.forEach((el) => {
      el.active = el.href === href
    })
  })

  useVisibleTask$(() => {
    const hash = document.location.hash

    if (hash) {
      toggleActiveStateOfElement(hash)
    }
  })

  return (
    <div class="fixed top-18 flex flex-col justify-between overflow-y-auto">
      <h4 class="my-3 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">On this page</h4>
      <nav id="visible-table-of-contents">
        <ul class="list-outside list-none">
          {itemsState.elements.map((content) => (
            <li key={content.label} class="pt-4">
              <a
                class={[
                  "hover:after:content-['#'] after:ml-2 pl-3 text-gray-700 dark:text-gray-400 inline-block border-l-2 border-white dark:border-[#111827] transition-none duration-75 hover:border-gray-200 dark:hover:border-gray-400 hover:text-black dark:hover:text-white",
                  { "after:content-['#'] !border-gray-200 dark:border-gray-400 text-black dark:text-white": getActiveStateOfElement(content.label) },
                ]}
                href={content.href}
                onClick$={() => {
                  toggleActiveStateOfElement(content.href)
                }}
              >
                {content.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
})
