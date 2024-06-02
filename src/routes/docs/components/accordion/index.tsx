import { component$, useComputed$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import { Preview } from '~/components/__Preview/__Preview'
import fs from 'fs'

export const getAccordionsPreview = server$(() => {
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

  const accordions = fs.readdirSync('src/routes/examples/accordion').map((file) => {
    const path = 'src/routes/examples/accordion/' + file
    const content = fs.readFileSync(path + '/index@examples.tsx', 'utf-8')
    const { title, description } = getTitleAndDescription(content)
    return {
      title,
      description,
      url: '/examples/accordion/' + file,
      height: '300',
    }
  })
  return accordions
})

export default component$(() => {
  const accordions = useComputed$(() => getAccordionsPreview())

  return (
    <section class="flex flex-col gap-8">
      {accordions.value.map((accordion) => (
        <Preview title={accordion.title} url={accordion.url} description={accordion.description} height={accordion.height} />
      ))}
    </section>
  )
})
