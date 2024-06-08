import { component$, useComputed$ } from '@builder.io/qwik'
import { toSlug } from '~/utils/slug'

type TableOfContentsProps = {
  items: string[]
  activeElement?: string
}

export const TableOfContents = component$<TableOfContentsProps>((props) => {
  const itemsState = useComputed$(() => {
    return props.items.map((item) => ({
      label: item,
      href: '#' + toSlug(item),
      active: toSlug(item) === props.activeElement,
    }))
  })

  return (
    <div class="fixed top-18 flex flex-col pb-10 h-full overflow-y-auto">
      <h4 class="my-3 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">On this page</h4>
      <nav id="visible-table-of-contents">
        <ul class="list-outside list-none">
          {itemsState.value.map((content) => (
            <li key={content.label} class="pt-4">
              <a
                class={[
                  "hover:after:content-['#'] after:ml-2 pl-3 text-gray-700 dark:text-gray-400 inline-block border-l-2 border-white dark:border-[#111827] transition-none duration-75 hover:border-gray-200 dark:hover:border-gray-400 hover:text-black dark:hover:text-white",
                  { "after:content-['#'] !border-gray-200 dark:border-gray-400 text-black dark:text-white": content.active },
                ]}
                href={content.href}
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
