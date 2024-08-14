import { $, component$, Slot, useComputed$, useOnDocument, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import { Preview } from '~/components/Preview/Preview'
import { TableOfContents } from '~/components/TableOfContents/TableOfContents'
import { scrollTo } from '~/utils/scroll-to'
import { examples } from '~/generated-examples'
import { toSlug } from '~/utils/slug'
import { Heading, useDebounce } from 'flowbite-qwik'
import styles from './ComponentDocPage.css?inline'

interface Item {
  name: string
}

export const ComponentDocPage = component$<Item>(({ name }) => {
  useStyles$(styles)

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

    if (elements?.length) {
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

  const debounceHandleScroll$ = useDebounce(handleScroll$, 200)

  useOnDocument('scroll', debounceHandleScroll$)

  return (
    <>
      {previewItems.value ? (
        <div class="flex" ref={previewElements}>
          <div class="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
            <section class="flex flex-col">
              <Heading tag="h1" class="mb-2 text-3xl font-extrabold capitalize">
                Qwik {name} - Flowbite
              </Heading>

              <div data-el="component-doc-page__description" class="mb-8 text-gray-600 dark:text-gray-400">
                <Slot name="description" />
              </div>

              <div class="flex flex-col gap-8">
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
              </div>
            </section>
          </div>

          <div class="right-0 hidden w-64 flex-none py-8 xl:block xl:text-sm">
            <TableOfContents items={tableOfContentItems.value} activeElement={activeElement.value} />
          </div>
        </div>
      ) : (
        <Heading tag="h2" class="text-center">
          Component {name} does not exist
        </Heading>
      )}
    </>
  )
})
