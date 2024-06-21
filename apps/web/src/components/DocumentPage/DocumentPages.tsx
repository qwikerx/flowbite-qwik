import { component$, Slot, useSignal, useStore, useStyles$ } from '@builder.io/qwik'
import styles from './DocumentPage.css?inline'
// import { toSlug } from '~/utils/slug'
import { TableOfContents } from '../TableOfContents/TableOfContents'
// import { useDebounce } from 'flowbite-qwik'
// import { scrollTo } from '~/utils/scroll-to'

export const DocumentPage = component$(() => {
  useStyles$(styles)

  const page = useSignal<HTMLElement>()
  const activeElement = useSignal<string>()
  const sections = useStore<Array<string>>([])

  // useVisibleTask$(() => {
  //   const sectionsTitles = document.querySelectorAll('h2')
  //   sectionsTitles.forEach((sectionTitle) => {
  //     const slug = toSlug(sectionTitle.textContent || '')
  //     sections.push(sectionTitle.textContent || '')
  //     sectionTitle.setAttribute('id', slug)
  //     sectionTitle.classList.add('group')

  //     const link = document.createElement('a')
  //     link.href = `#${slug}`
  //     link.textContent = '#'
  //     link.classList.add('group-hover:inline')
  //     link.classList.add('hidden')
  //     link.classList.add('pl-2')
  //     sectionTitle.appendChild(link)
  //   })

  //   const hash = document.location.hash
  //   if (hash) {
  //     scrollTo(hash)
  //     activeElement.value = hash.slice(1)
  //   } else if (sections.length > 0) {
  //     activeElement.value = toSlug(sections[0])
  //   }
  // })

  // const handleScroll$ = $(() => {
  //   const elements = page.value?.querySelectorAll('h2')

  //   if (elements) {
  //     for (let i = 0; i < elements.length; i++) {
  //       const element = elements[i] as HTMLElement
  //       const rect = element.getBoundingClientRect()

  //       if (rect.top < 300 && rect.bottom > 100) {
  //         const slug = toSlug(sections[i])
  //         history.replaceState(null, '', `#${slug}`)
  //         activeElement.value = slug
  //         break
  //       }
  //     }
  //   }
  // })

  // const debounceHandleScroll$ = useDebounce(handleScroll$, 100)

  // useOnDocument('scroll', debounceHandleScroll$)

  return (
    <div class="flex">
      <div ref={page} class="text-lg flex flex-col xl:px-4 text-gray-600 dark:text-gray-400 max-w-6xl w-full xl:w-3/4 doc-page">
        <Slot />
      </div>
      {sections.length > 0 && (
        <div class="hidden w-1/4 flex-none pl-8 xl:block xl:text-sm">
          <TableOfContents items={sections} activeElement={activeElement.value} />
        </div>
      )}
    </div>
  )
})
