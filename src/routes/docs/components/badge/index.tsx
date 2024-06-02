import { component$, useComputed$ } from '@builder.io/qwik'
import { extractExamples } from '~/routes'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'
import { Preview } from '~/components/__Preview/__Preview'

export default component$(() => {
  const examples = useComputed$(() => extractExamples('badge', 70))

  return (
    <section>
      <div class="pb-4 mb-5">
        <h1 class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Qwik Badge - Flowbite</h1>
        <p class="mb-4 pb-4 text-lg text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
          Get started with the badge component to add labels or counters inside paragraphs, buttons, and inputs based on multiple colors and sizes
          from Qwik and Tailwind CSS
        </p>
        <p class="text-gray-600 dark:text-gray-400 mb-4">To start using the navbar component you need to import it from Flowbite Qwik :</p>
        <CodeBlock content={`import { Badge } from "flowbite-qwik"`} language="tsx" simple />
      </div>

      <div class="flex flex-col gap-8">
        {examples.value.map((example) => (
          <Preview title={example.title} url={example.url} description={example.description} height={example.height} />
        ))}
      </div>
    </section>
  )
})
