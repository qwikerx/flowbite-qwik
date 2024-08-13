import { $, component$, Slot, useOnDocument, useSignal, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import styles from './DocumentPage.css?inline'
import { toSlug } from '~/utils/slug'
import { TableOfContents } from '../TableOfContents/TableOfContents'
import { useDebounce, useFlowbiteThemable } from 'flowbite-qwik'
import { scrollTo } from '~/utils/scroll-to'
import { DocFooter } from '~/components/Footer/Footer'

export const DocumentPage = component$(() => {
  useStyles$(styles)
  const { textClasses } = useFlowbiteThemable()

  const page = useSignal<HTMLElement>()
  const activeElement = useSignal<string>()
  const sections = useStore<Array<string>>([])

  useVisibleTask$(() => {
    const sectionsTitles = page.value?.querySelectorAll('h2')

    sectionsTitles?.forEach((sectionTitle) => {
      const slug = toSlug(sectionTitle.textContent || '')
      sections.push(sectionTitle.textContent || '')
      sectionTitle.setAttribute('id', slug)
      sectionTitle.classList.add('group')

      const link = document.createElement('a')
      link.href = `#${slug}`
      link.textContent = '#'
      link.classList.add('group-hover:inline', 'hidden', 'pl-2', 'font-medium', 'hover:underline', ...textClasses.value.split(' '))
      sectionTitle.appendChild(link)
    })

    const hash = document.location.hash
    if (hash) {
      scrollTo(hash)
      activeElement.value = hash.slice(1)
    } else if (sections.length > 0) {
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
      <div class="mx-auto flex min-w-0 max-w-3xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
        <div ref={page} class="doc-page">
          <Slot />
        </div>
        <DocFooter class="mt-16 border-t bg-white px-0 dark:border-gray-700 dark:bg-gray-900" />
      </div>
      <div class="right-0 hidden w-64 flex-none p-4 xl:block xl:text-sm">
        {sections.length > 0 && <TableOfContents items={sections} activeElement={activeElement.value} />}
      </div>
    </div>
  )
})
