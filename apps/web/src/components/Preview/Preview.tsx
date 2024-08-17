import { component$, PropsOf, useComputed$, useSignal, useStyles$, useTask$ } from '@builder.io/qwik'
import styles from './preview.css?inline'
import { toSlug } from '~/utils/slug'
import { Button, Heading, Link, Tooltip, useDarkMode, useFlowbiteThemable, useToggle } from 'flowbite-qwik'
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

  const { isDark } = useDarkMode()
  const { themeName, textClasses } = useFlowbiteThemable()

  const displaySize = useSignal<PreviewDisplaySize>('desktop')

  const { value: rtl, toggle$ } = useToggle()

  const iframe = useSignal<HTMLIFrameElement>()

  const fileUrl = useComputed$(() => `${liveDir}${url}`)
  const iframeSrc = useComputed$(() => {
    return url.replace('[theme-rtl]', `${themeName.value}-${rtl.value ? 'rtl' : 'ltr'}`)
  })

  useTask$(({ track }) => {
    track(() => isDark.value)
    track(() => themeName.value)

    iframe.value?.contentWindow?.location.reload()
  })

  return (
    <div>
      <Heading tag="h2" class="group mb-4 scroll-mt-20 text-2xl font-bold" id={toSlug(title)}>
        {title}
        <Link class={['hidden pl-2 group-hover:inline', textClasses.value]} href={`#${toSlug(title)}`}>
          #
        </Link>
      </Heading>
      {props.description && <p class="mb-8 text-gray-600 dark:text-gray-400">{props.description}</p>}
      <div class="relative flex w-full justify-between rounded-t-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <Button
          color="light"
          href={fileUrl.value}
          prefix={IconGithubSolid}
          size="sm"
          class="hover:text-purple-600 dark:text-gray-400"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Edit on GitHub
        </Button>

        <ul class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 justify-center gap-3 lg:flex">
          <li>
            <Tooltip
              placement="top"
              theme={{
                element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
              }}
            >
              <span q:slot="content">Toggle desktop view</span>
              <Button
                q:slot="trigger"
                color="light"
                square
                onClick$={() => (displaySize.value = 'desktop')}
                class="hover:text-purple-600 dark:text-gray-400"
              >
                <IconDesktopPcOutline />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              placement="top"
              theme={{
                element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
              }}
            >
              <span q:slot="content">Toggle tablet view</span>
              <Button
                q:slot="trigger"
                color="light"
                square
                onClick$={() => (displaySize.value = 'tablet')}
                class="hover:text-purple-600 dark:text-gray-400"
              >
                <IconTabletOutline />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              placement="top"
              theme={{
                element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
              }}
            >
              <span q:slot="content">Toggle mobile view</span>
              <Button
                q:slot="trigger"
                color="light"
                square
                onClick$={() => (displaySize.value = 'mobile')}
                class="hover:text-purple-600 dark:text-gray-400"
              >
                <IconMobilePhoneOutline />
              </Button>
            </Tooltip>
          </li>
        </ul>
        <ul>
          <li>
            <Tooltip
              placement="top"
              theme={{
                element: 'bg-gray-800 dark:bg-gray-800 text-white dark:text-white',
              }}
            >
              <span q:slot="content">Toggle RTL mode</span>
              <Button q:slot="trigger" color="light" square size="sm" onClick$={toggle$} class="hover:text-purple-600 dark:text-gray-400">
                {rtl.value ? 'LTR' : 'RTL'}
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
      <div
        data-el="preview__viewer"
        class="code-preview flex border-x border-gray-200 bg-white bg-gradient-to-r p-0 dark:border-gray-600 dark:bg-gray-900"
      >
        <div
          class={[
            'mx-auto w-full',
            {
              'max-w-sm': displaySize.value === 'mobile',
              'max-w-lg': displaySize.value === 'tablet',
            },
          ]}
        >
          <iframe loading="lazy" ref={iframe} src={iframeSrc.value} height={height} {...props} title={title} class={['w-full', classNames]} />
        </div>
      </div>

      <div class="relative">
        <CodeBlock content={codeContent ?? ''} language="tsx" />
      </div>
    </div>
  )
})
