import { ClipboardRoot } from './Clipboard'
import { ClipboardWithIcon } from './ClipboardWithIcon'
import { ClipboardWithIconText } from './ClipboardWithIconText'

export const Clipboard = Object.assign(ClipboardRoot, {
  WithIcon: ClipboardWithIcon,
  WithIconText: ClipboardWithIconText,
})
