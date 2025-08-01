import { $, component$, Slot, useComputed$, useOnDocument, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import { Preview } from '~/components/Preview/Preview'
import { TableOfContents } from '~/components/TableOfContents/TableOfContents'
import { scrollTo } from '~/utils/scroll-to'
import { examples } from '~/generated-examples'
import { toSlug } from '~/utils/slug'
import { Heading, useDebounce } from 'flowbite-qwik'
import styles from './ComponentDocPage.css?inline'
import { DocFooter } from '~/components/Footer/Footer'
import { DocumentPageContent } from '~/components/DocumentPageContent/DocumentPageContent'

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
      {previewItems.value.length ? (
        <DocumentPageContent ref={previewElements}>
          <section class="flex flex-col" q:slot="top">
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

            <DocFooter class="mt-16 border-t bg-white px-0 dark:border-gray-700 dark:bg-gray-900" />
          </section>

          {tableOfContentItems.value.length > 0 && (
            <TableOfContents q:slot="bottom" items={tableOfContentItems.value} activeElement={activeElement.value} />
          )}
        </DocumentPageContent>
      ) : (
        <Heading tag="h2" class="text-center">
          Component {name} does not exist
          <blockquote>${JSON.stringify(examples)}</blockquote>
        </Heading>
      )}
    </>
  )
})
