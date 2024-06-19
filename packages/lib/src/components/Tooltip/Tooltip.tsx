import { JSXOutput, PropsOf, component$ } from '@builder.io/qwik'
import { Placement } from '@floating-ui/dom'
import { TooltipStyle } from './tooltip-types'
import { Floating } from '../Floating/Floating'
import { FloatingTrigger } from '../Floating/floating-types'

type TooltipProps = PropsOf<'div'> & {
  placement?: Placement
  style?: TooltipStyle
  triggerStrategy?: FloatingTrigger
  noArrow?: boolean
  trigger?: JSXOutput
  content?: JSXOutput
}

export const Tooltip = component$<TooltipProps>(
  ({ placement = 'top', trigger, content, triggerStrategy = 'hover', style = 'auto', noArrow = false }) => {
    return (
      <Floating
        placement={placement}
        trigger={triggerStrategy}
        noArrow={noArrow}
        triggerEl={trigger}
        floatingEl={content}
        styles={{
          tooltip: [
            'px-3 py-2 text-sm font-medium rounded-lg shadow-sm',
            {
              'bg-gray-900 text-white dark:bg-gray-700': style === 'dark',
              'border border-gray-200 bg-white text-gray-900': style === 'light',
              'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white': style === 'auto',
            },
          ],
          arrow: {
            'bg-gray-900 dark:bg-gray-700': style === 'dark',
            'bg-white': style === 'light',
            'bg-white dark:bg-gray-700': style === 'auto',
          },
        }}
      />
    )
  },
)
