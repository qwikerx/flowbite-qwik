import { component$, useComputed$ } from '@builder.io/qwik'
import { Preview } from '~/components/__Preview/__Preview'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { extractExamples } from '~/routes'

export default component$(() => {
  const examples = useComputed$(() => extractExamples('accordion', 300))

  return (
    <section>
      <div class="pb-4 mb-5">
        <h1 class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Qwik Accordion - Flowbite</h1>
        <p class="mb-4 pb-4 text-lg text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
          Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute
          options
        </p>
        <p class="text-gray-600 dark:text-gray-400 mb-4">To start using the accordion component you need to import it from Flowbite Qwik :</p>
        <CodeBlock content={`import { Accordion } from "flowbite-qwik"`} language="tsx" simple />
      </div>

      <div class="flex flex-col gap-8">
        {examples.value.map((example) => (
          <Preview title={example.title} url={example.url} description={example.description} height={example.height} />
        ))}
      </div>
    </section>
  )
})
