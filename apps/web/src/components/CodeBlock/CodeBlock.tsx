import { $, component$, useComputed$, useSignal, useStyles$ } from '@builder.io/qwik'
import rehypeHighlight from 'rehype-highlight'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import styles from './code-block.css?inline'
import { Button, useToggle } from 'flowbite-qwik'
import { IconCopySolid } from 'flowbite-qwik-icons'

type CodeBlockProps = { content: string; language: string; expandable?: boolean }

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

export const CodeBlock = component$<CodeBlockProps>(({ content, language, expandable = true }) => {
  useStyles$(styles)
  const { value: isCollapsed, toggle$ } = useToggle(true)

  const highlightedContent = useComputed$(async () => {
    if (!content) return ''
    return await highlight(content, language)
  })

  const copyLabel = useSignal('Copy')

  const copy$ = $(() => {
    navigator.clipboard.writeText(content)
    copyLabel.value = 'Copied!'
    setTimeout(() => {
      copyLabel.value = 'Copy'
    }, 2000)
  })

  return (
    <div class="border-gray-200 border-y border-x dark:border-gray-600 rounded-b-lg">
      <div class="flex text-sm font-medium text-center justify-between text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 border-b">
        <div class="inline-block p-2 px-3 text-gray-800 bg-gray-100 border-r border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600">
          {language}
        </div>
        <div class="flex justify-end">
          <Button
            onClick$={copy$}
            color="light"
            size="xs"
            class="rounded-r-none border-t-0 border-r-0 border-b-0 rounded-l-none"
            prefix={IconCopySolid}
            title="Copy to clipboard"
          >
            {copyLabel}
          </Button>
        </div>
      </div>
      <pre
        dangerouslySetInnerHTML={highlightedContent.value}
        class={['p-4 overflow-auto', isCollapsed.value && expandable ? 'max-h-48' : 'max-h-none']}
      />
      {expandable && (
        <Button
          color="light"
          size="md"
          full
          class="rounded-t-none border-t text-gray-800 bg-gray-100 border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600"
          onClick$={toggle$}
        >
          {isCollapsed.value ? 'Expand code' : 'Collapse code'}
        </Button>
      )}
    </div>
  )
})
