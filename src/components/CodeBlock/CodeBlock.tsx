import { component$, useComputed$, useStyles$ } from '@builder.io/qwik'
import rehypeHighlight from 'rehype-highlight'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import styles from './code-block.css?inline'

type CodeBlockProps = { content: string; language: string; light?: boolean }

async function highlight(content: string, language: string) {
  // Escape angle brackets using HTML character entities
  const escapedContent = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(`<pre><code class="language-${language}">${escapedContent}</code></pre>`)

  return String(file)
}

export const CodeBlock = component$<CodeBlockProps>(({ content, language, light = false }) => {
  useStyles$(styles)

  const highlightedContent = useComputed$(async () => {
    if (!content) return ''
    return await highlight(content, language)
  })

  return <pre class={{ light: light }} dangerouslySetInnerHTML={highlightedContent.value} />
})
