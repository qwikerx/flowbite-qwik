import { $, component$, useComputed$, useSignal, useStyles$ } from '@builder.io/qwik'
import rehypeHighlight from 'rehype-highlight'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import styles from './code-block.css?inline'
import { Button, Tooltip, useToggle } from 'flowbite-qwik'
import { IconCopySolid } from 'flowbite-qwik-icons'

type CodeBlockProps = {
  content: string
  language: string
  expandable?: boolean
  minimalist?: boolean
}

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

export const CodeBlock = component$<CodeBlockProps>(({ content, language, expandable = true, minimalist = false }) => {
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
    <div class={['border-x border-y border-gray-200 dark:border-gray-600', !minimalist && 'rounded-b-lg']}>
      {!minimalist && (
        <div class="flex justify-between border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div class="flex items-center border-r border-gray-200 bg-gray-100 p-1 px-3 text-xs font-medium text-gray-700 uppercase dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            {language}
          </div>
          <Tooltip
            placement="bottom"
            class="h-full"
            theme={{
              element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
            }}
          >
            <span q:slot="content">Copy to clipboard</span>
            <Button
              q:slot="trigger"
              onClick$={copy$}
              color="light"
              class="rounded-l-none rounded-r-none border-t-0 border-r-0 border-b-0 bg-gray-100 text-gray-700 hover:text-purple-600"
              prefix={IconCopySolid}
            >
              {copyLabel}
            </Button>
          </Tooltip>
        </div>
      )}
      <pre
        dangerouslySetInnerHTML={highlightedContent.value}
        class={['overflow-auto', !minimalist && 'p-4', isCollapsed.value && expandable ? 'max-h-48' : 'max-h-none']}
      />
      {expandable && !minimalist && (
        <Button
          color="light"
          size="md"
          full
          class="rounded-t-none border-t border-gray-200 bg-gray-100 text-gray-800 hover:text-purple-600 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          onClick$={toggle$}
        >
          {isCollapsed.value ? 'Expand code' : 'Collapse code'}
        </Button>
      )}
    </div>
  )
})
