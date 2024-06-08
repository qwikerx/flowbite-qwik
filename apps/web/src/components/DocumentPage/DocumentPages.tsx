import { $, component$, Slot, useOnDocument, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik'
import './DocumentPage.css'
import { toSlug } from '~/utils/slug'
import { TableOfContents } from '../TableOfContents/TableOfContents'
import { useDebounce } from 'flowbite-qwik'
import { scrollTo } from '~/utils/scroll-to'

export const DocumentPage = component$(() => {
  const page = useSignal<HTMLElement>()
  const activeElement = useSignal<string>()
  const sections = useStore<Array<string>>([])

  useVisibleTask$(() => {
    const sectionsTitles = document.querySelectorAll('h2')
    sectionsTitles.forEach((sectionTitle) => {
      sections.push(sectionTitle.textContent || '')
      sectionTitle.setAttribute('id', toSlug(sectionTitle.textContent || ''))
    })

    const hash = document.location.hash
    if (hash) {
      scrollTo(hash)
      activeElement.value = hash.slice(1)
    } else {
      activeElement.value = toSlug(sections[0])
    }
  })

  const handleScroll$ = $(() => {
    const elements = page.value?.querySelectorAll('h2')

    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement
        const rect = element.getBoundingClientRect()

        if (rect.top < 300 && rect.bottom > 100) {
          const slug = toSlug(sections[i])
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
    <div class="flex">
      <div ref={page} class="text-lg relative text-gray-600 dark:text-gray-400 max-w-6xl doc-page">
        <Slot />
      </div>
      <div class="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
        <TableOfContents items={sections} activeElement={activeElement.value} />
      </div>
    </div>
  )
})
