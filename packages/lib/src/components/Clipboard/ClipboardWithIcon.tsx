import { PropsOf, component$ } from '@builder.io/qwik'
import { Tooltip } from '../Tooltip'
import { useCopyToClipboard } from './composables/use-copy-to-clipboard'
import { IconCheckOutline, IconCopySolid } from 'flowbite-qwik-icons'
import { Placement } from '@floating-ui/dom'

type ClipboardProps = PropsOf<'button'> & {
  valueToCopy: string
  tooltipCopyLabel?: string
  tooltipCopiedLabel?: string
  tooltipPlacement?: Placement
}

export const ClipboardWithIcon = component$<ClipboardProps>(
  ({ valueToCopy, class: className, tooltipPlacement, tooltipCopiedLabel = 'Copied', tooltipCopyLabel = 'Copy to clipboard', ...rest }) => {
    const { copyToClipboard$, isJustCopied } = useCopyToClipboard()

    return (
      <Tooltip placement={tooltipPlacement} class={className}>
        <div q:slot="content">{isJustCopied.value ? tooltipCopiedLabel : tooltipCopyLabel}</div>

        <button
          q:slot="trigger"
          class="items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          onClick$={() => copyToClipboard$(valueToCopy)}
          {...rest}
        >
          {isJustCopied.value ? (
            <IconCheckOutline aria-hidden class="h-4 w-4 text-blue-700 dark:text-blue-500" />
          ) : (
            <IconCopySolid aria-hidden class="h-4 w-4" />
          )}
        </button>
      </Tooltip>
    )
  },
)
