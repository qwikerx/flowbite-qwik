import { component$, useComputed$ } from '@builder.io/qwik'
import { toSlug } from '~/utils/slug'
import { Heading } from 'flowbite-qwik'

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
    <div class="fixed flex h-full flex-col overflow-y-auto pb-10">
      <Heading tag="h4" class="my-3 pl-2.5 text-sm uppercase tracking-wide">
        On this page
      </Heading>
      <nav id="visible-table-of-contents">
        <ul class="list-outside list-none">
          {itemsState.value.map((content) => (
            <li key={content.label} class="pt-4">
              <a
                class={[
                  "inline-block border-l-2 border-white pl-3 text-gray-700 transition-none duration-75 after:ml-2 hover:border-gray-200 hover:text-black hover:after:content-['#'] dark:border-[#111827] dark:text-gray-400 dark:hover:border-gray-400 dark:hover:text-white",
                  { "!border-gray-200 text-black after:content-['#'] dark:border-gray-400 dark:text-white": content.active },
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
