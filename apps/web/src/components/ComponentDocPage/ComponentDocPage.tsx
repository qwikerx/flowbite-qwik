import { component$, useComputed$, useVisibleTask$ } from '@builder.io/qwik'
import { Preview } from '~/components/Preview/Preview'
import { TableOfContents } from '~/components/TableOfContents/TableOfContents'
import { scrollTo } from '~/utils/scroll-to'
import { examples } from '~/examples'

interface Item {
  name: string
  height?: number
}

export const ComponentDocPage = component$<Item>(({ name, height = 200 }) => {
  const previewItems = useComputed$(() => examples[name])
  const tableOfContentItems = useComputed$(() => previewItems.value?.map((item) => item.title))

  useVisibleTask$(() => {
    const hash = document.location.hash

    if (hash) {
      scrollTo(hash)
    }
  })

  return (
    <div class="flex">
      <div class="mx-auto flex min-w-0 max-w-6xl flex-col px-4">
        <section class="flex flex-col gap-8">
          <h1 class="capitalize text-4xl font-bold mb-7">{name}</h1>
          {previewItems.value?.map((item, i) => (
            <Preview
              key={i + item.title}
              title={item.title}
              url={item.url}
              description={item.description}
              codeContent={item.content}
              height={height}
            />
          ))}
        </section>
      </div>

      <div class="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
        <TableOfContents items={tableOfContentItems.value} />
      </div>
    </div>
  )
})
