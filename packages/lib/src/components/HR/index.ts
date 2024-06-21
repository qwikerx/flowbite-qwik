import { Hr as HrRoot } from '~/components/HR/Hr'
import { HrTrimmed } from '~/components/HR/HrTrimmed'
import { HrIcon } from '~/components/HR/HrIcon'
import { HrText } from '~/components/HR/HrText'
import { HrSquare } from '~/components/HR/HrSquare'

export const Hr = Object.assign(HrRoot, {
  Trimmed: HrTrimmed,
  Icon: HrIcon,
  Text: HrText,
  Square: HrSquare,
})
