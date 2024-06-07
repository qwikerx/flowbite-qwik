import { component$, Slot, useComputed$, useVisibleTask$ } from '@builder.io/qwik'
import { Preview } from '~/components/Preview/Preview'
import { TableOfContents } from '~/components/TableOfContents/TableOfContents'
import { scrollTo } from '~/utils/scroll-to'
import { examples } from '~/examples'

interface Item {
  name: string
}

export const ComponentDocPage = component$<Item>(({ name }) => {
  const previewItems = useComputed$(() => examples[name])
  const tableOfContentItems = useComputed$(() => previewItems.value?.map((item) => item.title))

  useVisibleTask$(() => {
    const hash = document.location.hash

    if (hash) {
      scrollTo(hash)
    }
  })

  return (
    <>
      {previewItems.value ? (
        <div class="flex">
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
                />
              ))}
            </section>
          </div>

          <div class="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
            <TableOfContents items={tableOfContentItems.value} />
          </div>
        </div>
      ) : (
        <h2 class="text-center text-2xl font-bold">Component {name} does not exist</h2>
      )}
    </>
  )
})
