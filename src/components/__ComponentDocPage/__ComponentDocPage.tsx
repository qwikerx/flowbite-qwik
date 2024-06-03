import { component$, useComputed$, useVisibleTask$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import { Preview } from '~/components/__Preview/__Preview'
import fs from 'fs'
import { TableOfContents } from '~/components/__TableOfContents/__TableOfContents'
import { scrollTo } from '~/utils/scroll-to'

export const getItemsPreview = server$((itemName: string) => {
  function getTitleAndDescription(fileContent: string) {
    const pattern = /\/\*\*[^]*?title:\s*(.*?)\s*\*[^]*?description:\s*(.*?)\s*\*\//
    const match = pattern.exec(fileContent)

    let title = ''
    let description = ''

    if (match) {
      title = match[1].trim()
      description = match[2].trim()
    }

    return {
      title,
      description,
    }
  }

  return fs.readdirSync(`src/routes/examples/${itemName}`).map((file) => {
    const path = `src/routes/examples/${itemName}/${file}`
    const content = fs.readFileSync(path + '/index@examples.tsx', 'utf-8')
    const { title, description } = getTitleAndDescription(content)
    return {
      title,
      description,
      url: `/examples/${itemName}/${file}`,
    }
  })
})

interface Item {
  name: string
  height?: number
}

export const ComponentDocPage = component$<Item>(({ name, height = 200 }) => {
  const previewItems = useComputed$(() => getItemsPreview(name))
  const tableOfContentItems = useComputed$(() => previewItems.value.map((item) => item.title))

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
          {previewItems.value.map((item) => (
            <Preview title={item.title} url={item.url} description={item.description} height={height} />
          ))}
        </section>
      </div>

      <div class="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
        <TableOfContents items={tableOfContentItems.value} />
      </div>
    </div>
  )
})
