import { PropsOf, component$, useComputed$, useSignal, useTask$, useStyles$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import fs from 'fs'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { Button } from '../Button/Button'
import { IconDesktopPcOutline, IconGithubSolid, IconMobilePhoneOutline, IconTabletOutline } from '../Icon'
import { useDark } from '~/composables/use-dark'
import { useMediaQuery } from '~/composables/use-media-query'
import { Spinner } from '~/components/Spinner/Spinner'
import { isBrowser } from '@builder.io/qwik/build'
import styles from './preview.css?inline'

type PreviewProps = PropsOf<'iframe'> & {
  url: string
  title: string
  description?: string
}

type PreviewDisplaySize = 'mobile' | 'tablet' | 'desktop'

const getExampleFilePath = server$(function (url: string) {
  const liveDir = 'https://github.com/xmimiex/flowbite-qwik/blob/main'
  return `${liveDir}/src/routes${url}/index@examples.tsx`
})

const getExampleCode = server$(function (url: string) {
  const rootDir = process.cwd()
  const exampleUrl = `${rootDir}/src/routes${url}/index@examples.tsx`
  const codeContent = fs.readFileSync(exampleUrl, 'utf-8')
  return codeContent.replace(/\/\*\*[\s\S]*?\*\//, '').trim()
})

export const Preview = component$<PreviewProps>(({ url, class: classNames, title, ...props }) => {
  useStyles$(styles)
  const { isDark } = useDark()

  const desktopScreen = useMediaQuery('(min-width: 1024px)')
  const tabletScreen = useMediaQuery('(min-width: 768px)')
  const displaySize = useSignal<PreviewDisplaySize | undefined>()
  const rtl = useSignal(false)

  const iframe = useSignal<HTMLIFrameElement>()

  const code = useComputed$(() => getExampleCode(url))
  const fileUrl = useComputed$(() => getExampleFilePath(url))

  useTask$(({ track }) => {
    track(() => desktopScreen.value)
    track(() => tabletScreen.value)

    if (desktopScreen.value === null && tabletScreen.value === null) return
    displaySize.value = desktopScreen.value ? 'desktop' : tabletScreen.value ? 'tablet' : 'mobile'
  })

  useTask$(() => {
    if (isBrowser) {
      displaySize.value = desktopScreen.value ? 'desktop' : tabletScreen.value ? 'tablet' : 'mobile'
    }
  })

  useTask$(({ track }) => {
    track(() => isDark.value)

    iframe.value?.contentWindow?.location.reload()
  })

  return (
    <div>
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">{title}</h2>
      {props.description && <p class="text-gray-600 dark:text-gray-400 mb-4">{props.description}</p>}

      <div class="flex justify-between p-4 bg-gray-50 w-full border border-gray-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
        <ul>
          <li>
            <Button color="light" href={fileUrl.value} prefix={IconGithubSolid} size="sm">
              Edit on GitHub
            </Button>
          </li>
        </ul>
        <ul class="hidden lg:flex gap-3 justify-center">
          <li>
            <Button color="light" square onClick$={() => (displaySize.value = 'mobile')} title="Toggle mobile view">
              <IconMobilePhoneOutline />
            </Button>
          </li>
          <li>
            <Button color="light" square onClick$={() => (displaySize.value = 'tablet')} title="Toggle tablet view">
              <IconTabletOutline />
            </Button>
          </li>
          <li>
            <Button color="light" square onClick$={() => (displaySize.value = 'desktop')} title="Toggle desktop view">
              <IconDesktopPcOutline />
            </Button>
          </li>
        </ul>
        <ul>
          <li>
            <Button
              color="light"
              square
              size="sm"
              onClick$={() => {
                rtl.value = !rtl.value
              }}
              title={`Toggle RTL mode`}
            >
              {rtl.value ? 'LTR' : 'RTL'}
            </Button>
          </li>
        </ul>
      </div>
      <div
        data-el="preview__viewer"
        class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600"
      >
        <div
          class={[
            'w-full mx-auto p-5',
            {
              'max-w-md': displaySize.value === 'mobile',
              'max-w-screen-md': displaySize.value === 'tablet',
              'max-w-screen-lg': displaySize.value === 'desktop',
            },
          ]}
        >
          {displaySize.value ? (
            <iframe ref={iframe} src={`${url}${rtl.value ? '?rtl' : ''}`} {...props} class={['w-full', classNames]} />
          ) : (
            <div class="flex justify-center w-full">{<Spinner size="6" />}</div>
          )}
        </div>
      </div>

      <div class="relative">
        <CodeBlock content={code.value} language="tsx" />
      </div>
    </div>
  )
})
