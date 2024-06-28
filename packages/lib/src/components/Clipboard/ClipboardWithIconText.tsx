import { component$ } from '@builder.io/qwik'
import { Tooltip } from '../Tooltip'
import { useCopyToClipboard } from './composables/use-copy-to-clipboard'
import { Placement } from '@floating-ui/dom'
import { IconCheckOutline, IconCopySolid } from 'flowbite-qwik-icons'
import { Button } from '../Button'
import { ButtonProps } from '../Button/Button'

type ClipboardProps = ButtonProps & {
  valueToCopy: string
  tooltipCopyLabel?: string
  tooltipCopiedLabel?: string
  tooltipPlacement?: Placement
  label?: string
  copiedLabel?: string
}

export const ClipboardWithIconText = component$<ClipboardProps>(
  ({
    valueToCopy,
    label = 'Copy',
    copiedLabel = 'Copied',
    class: className,
    tooltipPlacement,
    tooltipCopiedLabel = 'Copied',
    tooltipCopyLabel = 'Copy to clipboard',
    ...rest
  }) => {
    const { copyToClipboard$, isJustCopied } = useCopyToClipboard()

    return (
      <Tooltip placement={tooltipPlacement} class={className}>
        <div q:slot="content">{isJustCopied.value ? tooltipCopiedLabel : tooltipCopyLabel}</div>

        <Button
          q:slot="trigger"
          prefix={isJustCopied.value ? IconCheckOutline : IconCopySolid}
          color={isJustCopied.value ? 'light' : 'alternative'}
          {...rest}
          size="xs"
          onClick$={() => copyToClipboard$(valueToCopy)}
        >
          {isJustCopied.value ? copiedLabel : label}
        </Button>
      </Tooltip>
    )
  },
)
