import { $, component$, Slot, useComputed$, useOnDocument, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { Preview } from '~/components/Preview/Preview'
import { TableOfContents } from '~/components/TableOfContents/TableOfContents'
import { scrollTo } from '~/utils/scroll-to'
import { examples } from '~/examples'
import { toSlug } from '~/utils/slug'
import { useDebounce } from 'flowbite-qwik'

interface Item {
  name: string
}

export const ComponentDocPage = component$<Item>(({ name }) => {
  const previewElements = useSignal<HTMLDivElement>()
  const previewItems = useComputed$(() => examples[name])
  const tableOfContentItems = useComputed$(() => previewItems.value?.map((item) => item.title))
  const activeElement = useSignal<string>()

  useVisibleTask$(() => {
    const hash = document.location.hash

    if (hash) {
      scrollTo(hash)
      activeElement.value = hash.slice(1)
    } else {
      activeElement.value = toSlug(previewItems.value[0].title)
    }
  })

  const handleScroll$ = $(() => {
    const elements = previewElements.value?.querySelectorAll('[data-preview]')

    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement
        const rect = element.getBoundingClientRect()

        if (rect.top < 300 && rect.bottom > 100) {
          const slug = toSlug(previewItems.value[i].title)
          history.replaceState(null, '', `#${slug}`)
          activeElement.value = slug
          break
        }
      }
    }
  })

  const debounceHandleScroll$ = useDebounce(handleScroll$, 100)

  useOnDocument('scroll', debounceHandleScroll$)

  return (
    <>
      {previewItems.value ? (
        <div class="flex" ref={previewElements}>
          <div class="mx-auto flex min-w-0 max-w-6xl flex-col px-4">
            <section class="flex flex-col gap-8">
              <h1 class="capitalize text-4xl font-bold">{name}</h1>
              <Slot name="explanation" />

              {previewItems.value?.map((item, i) => (
                <Preview
                  key={i + item.title}
                  title={item.title}
                  url={item.url}
                  description={item.description}
                  codeContent={item.content}
                  height={item.height}
                  data-preview={item.title}
                />
              ))}
            </section>
          </div>

          <div class="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
            <TableOfContents items={tableOfContentItems.value} activeElement={activeElement.value} />
          </div>
        </div>
      ) : (
        <h2 class="text-center text-2xl font-bold">Component {name} does not exist</h2>
      )}
    </>
  )
})
