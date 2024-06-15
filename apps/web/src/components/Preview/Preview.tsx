import { PropsOf, component$, useComputed$, useSignal, useTask$, useStyles$ } from '@builder.io/qwik'
import { isBrowser } from '@builder.io/qwik/build'
import styles from './preview.css?inline'
import { toSlug } from '~/utils/slug'
import { Button, Spinner, useDark, useMediaQuery, useFlowbiteThemable, useToggle } from 'flowbite-qwik'
import { IconDesktopPcOutline, IconGithubSolid, IconMobilePhoneOutline, IconTabletOutline } from 'flowbite-qwik-icons'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

type PreviewProps = PropsOf<'iframe'> & {
  url: string
  title: string
  description?: string
  codeContent?: string
  height?: number | string
}

type PreviewDisplaySize = 'mobile' | 'tablet' | 'desktop'

const liveDir = 'https://github.com/qwikerx/flowbite-qwik/tree/main/apps/web/src/routes'

export const Preview = component$<PreviewProps>(({ url, class: classNames, height = 200, title, codeContent, ...props }) => {
  useStyles$(styles)

  const { isDark } = useDark()
  const { themeName, textClasses } = useFlowbiteThemable()

  const desktopScreen = useMediaQuery('(min-width: 1024px)')
  const tabletScreen = useMediaQuery('(min-width: 768px)')
  const displaySize = useSignal<PreviewDisplaySize | undefined>()

  const { value: rtl, toggle$ } = useToggle()

  const iframe = useSignal<HTMLIFrameElement>()

  const fileUrl = useComputed$(() => `${liveDir}${url}`)
  const iframeSrc = useComputed$(() => {
    return url.replace('[theme-rtl]', `${themeName.value}-${rtl.value ? 'rtl' : 'ltr'}`)
  })

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
    track(() => themeName.value)

    iframe.value?.contentWindow?.location.reload()
  })

  return (
    <div>
      <h2 class="group scroll-mt-20 text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3" id={toSlug(title)}>
        {title}
        <a class={['group-hover:inline hidden pl-2', textClasses.value]} href={`#${toSlug(title)}`}>
          #
        </a>
      </h2>
      {props.description && <p class="text-gray-600 dark:text-gray-400 mb-4">{props.description}</p>}
      <div class="flex relative justify-between p-4 bg-gray-50 w-full border border-gray-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
        <ul>
          <li>
            <Button color="light" href={fileUrl.value} prefix={IconGithubSolid} size="sm">
              Edit on GitHub
            </Button>
          </li>
        </ul>
        <ul class="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex gap-3 justify-center">
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
            <Button color="light" square size="sm" onClick$={toggle$} title={`Toggle RTL mode`}>
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
            <iframe ref={iframe} src={iframeSrc.value} height={height} {...props} title={title} class={['w-full', classNames]} />
          ) : (
            <div class="flex justify-center w-full mx-auto items-center" style={{ height: `${height}px` }}>
              {<Spinner size="6" />}
            </div>
          )}
        </div>
      </div>

      <div class="relative">
        <CodeBlock content={codeContent ?? ''} language="tsx" />
      </div>
    </div>
  )
})
