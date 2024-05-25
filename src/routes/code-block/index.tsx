import { component$ } from '@builder.io/qwik'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <section id="code-block" class="p-5">
      <h2 class="text-2xl font-semibold my-3">Default Code Block (js)</h2>
      <div class="flex gap-2">
        <CodeBlock
          language="js"
          content={`const a = 'a'

function coucou() {
  return a + 10
}
`}
        />
      </div>

      <h2 class="text-2xl font-semibold my-3">Prop - light (html)</h2>
      <div class="flex gap-2">
        <CodeBlock
          light
          language="html"
          content={`<body>
    <a href="...">lien</a>
    <button class="w-full">bouton</button>
</body>
`}
        />
      </div>
    </section>
  )
})
