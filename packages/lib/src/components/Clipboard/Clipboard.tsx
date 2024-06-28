import { component$ } from '@builder.io/qwik'
import { Tooltip } from '../Tooltip'
import { useCopyToClipboard } from './composables/use-copy-to-clipboard'
import { Button } from '../Button'
import { ButtonProps } from '../Button/Button'
import { Placement } from '@floating-ui/dom'

type ClipboardProps = ButtonProps & {
  valueToCopy: string
  label: string
  tooltipCopyLabel?: string
  tooltipCopiedLabel?: string
  tooltipPlacement?: Placement
}

export const ClipboardRoot = component$<ClipboardProps>(
  ({ valueToCopy, label, tooltipCopiedLabel = 'Copied', tooltipPlacement, tooltipCopyLabel = 'Copy to clipboard', ...rest }) => {
    const { copyToClipboard$, isJustCopied } = useCopyToClipboard()

    return (
      <Tooltip placement={tooltipPlacement}>
        <q:template q:slot="content">{isJustCopied.value ? tooltipCopiedLabel : tooltipCopyLabel}</q:template>

        <Button q:slot="trigger" size="md" onClick$={() => copyToClipboard$(valueToCopy)} {...rest}>
          {label}
        </Button>
      </Tooltip>
    )
  },
)
