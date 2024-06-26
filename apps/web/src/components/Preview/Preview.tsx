import { component$, PropsOf, useComputed$, useSignal, useStyles$, useTask$ } from '@builder.io/qwik'
import styles from './preview.css?inline'
import { toSlug } from '~/utils/slug'
import { Button, Heading, Link, useDark, useFlowbiteThemable, useToggle } from 'flowbite-qwik'
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
      <Heading tag="h2" class="group scroll-mt-20 mb-3" id={toSlug(title)}>
        {title}
        <Link class={['group-hover:inline hidden pl-2', textClasses.value]} href={`#${toSlug(title)}`}>
          #
        </Link>
      </Heading>
      {props.description && <p class="text-gray-600 dark:text-gray-400 mb-4">{props.description}</p>}
      <div class="flex relative justify-between p-4 bg-gray-50 w-full border border-gray-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
        <ul>
          <li>
            <Button color="light" href={fileUrl.value} prefix={IconGithubSolid} size="sm" class="dark:text-gray-400">
              Edit on GitHub
            </Button>
          </li>
        </ul>
        <ul class="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex gap-3 justify-center">
          <li>
            <Button color="light" square onClick$={() => (displaySize.value = 'mobile')} title="Toggle mobile view" class="dark:text-gray-400">
              <IconMobilePhoneOutline />
            </Button>
          </li>
          <li>
            <Button color="light" square onClick$={() => (displaySize.value = 'tablet')} title="Toggle tablet view" class="dark:text-gray-400">
              <IconTabletOutline />
            </Button>
          </li>
          <li>
            <Button color="light" square onClick$={() => (displaySize.value = 'desktop')} title="Toggle desktop view" class="dark:text-gray-400">
              <IconDesktopPcOutline />
            </Button>
          </li>
        </ul>
        <ul>
          <li>
            <Button color="light" square size="sm" onClick$={toggle$} title={`Toggle RTL mode`} class="dark:text-gray-400">
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
            'w-full mx-auto',
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
