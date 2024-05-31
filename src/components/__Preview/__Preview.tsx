import { PropsOf, component$, useComputed$, useSignal, useTask$ } from '@builder.io/qwik'
import { server$ } from '@builder.io/qwik-city'
import fs from 'fs'
import { CodeBlock } from '../CodeBlock/CodeBlock'
import { Button } from '../Button/Button'
import { IconDesktopPcOutline, IconMobilePhoneOutline, IconTabletOutline } from '../Icon'
import { useDark } from '~/composables/use-dark'
import { isBrowser } from '@builder.io/qwik/build'

type PreviewProps = PropsOf<'iframe'> & {
  url: string
}

export const getExampleCode = server$(function (url: string) {
  const rootDir = process.cwd()
  const exampleUrl = `${rootDir}/src/routes${url}/index@examples.tsx`
  return fs.readFileSync(exampleUrl, 'utf-8')
})

export const Preview = component$<PreviewProps>(({ url, class: classNames, ...props }) => {
  const { isDark } = useDark()
  const iframe = useSignal<HTMLIFrameElement>()

  const code = useComputed$(() => getExampleCode(url))

  const displaySize = useSignal('mobile')

  useTask$(({ track }) => {
    track(() => isDark.value)

    iframe.value?.contentWindow?.location.reload()
  })

  return (
    <div>
      <ul class="p-4 flex gap-3 justify-center bg-gray-400 w-full border border-gray-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
        <li>
          <Button color="dark" square onClick$={() => (displaySize.value = 'mobile')}>
            <IconMobilePhoneOutline />
          </Button>
        </li>
        <li>
          <Button color="dark" square onClick$={() => (displaySize.value = 'tablet')}>
            <IconTabletOutline />
          </Button>
        </li>
        <li>
          <Button color="dark" square onClick$={() => (displaySize.value = 'desktop')}>
            <IconDesktopPcOutline />
          </Button>
        </li>
      </ul>
      <div class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600">
        <div
          class={[
            'w-full mx-auto pt-5',
            {
              'max-w-xs': displaySize.value === 'mobile',
              'max-w-2xl': displaySize.value === 'tablet',
              'max-w-7xl': displaySize.value === 'desktop',
            },
          ]}
        >
          <iframe ref={iframe} src={url} {...props} class={['w-full', classNames]} />
        </div>
      </div>

      <div class="relative">
        <CodeBlock content={code.value} language="tsx" />
      </div>
    </div>
  )
})
