import { component$, useComputed$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import { Preview } from '~/components/__Preview/__Preview'
import fs from 'fs'

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

  const items = fs.readdirSync(`src/routes/examples/${itemName}`).map((file) => {
    const path = `src/routes/examples/${itemName}/${file}`
    const content = fs.readFileSync(path + '/index@examples.tsx', 'utf-8')
    const { title, description } = getTitleAndDescription(content)
    return {
      title,
      description,
      url: `/examples/${itemName}/${file}`,
      height: '200',
    }
  })
  return items
})

interface Item {
  name: string
}

export const ComponentDocPage = component$<Item>(({ name }) => {
  const items = useComputed$(() => getItemsPreview(name))

  return (
    <section class="flex flex-col gap-8">
      {items.value.map((item) => (
        <Preview title={item.title} url={item.url} description={item.description} height={item.height} />
      ))}
    </section>
  )
})
