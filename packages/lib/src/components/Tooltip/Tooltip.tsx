import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import { Placement } from '@floating-ui/dom'
import { TooltipStyle } from './tooltip-types'
import { Floating } from '../Floating/Floating'
import { FloatingTrigger } from '../Floating/floating-types'

type TooltipProps = PropsOf<'div'> & {
  placement?: Placement
  style?: TooltipStyle
  trigger?: FloatingTrigger
  noArrow?: boolean
}

export const Tooltip = component$<TooltipProps>(({ placement = 'top', trigger = 'hover', style = 'auto', noArrow = false }) => {
  return (
    <Floating
      placement={placement}
      trigger={trigger}
      noArrow={noArrow}
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
    >
      <q-slot q:slot="trigger">
        <Slot name="trigger" />
      </q-slot>

      <q-slot q:slot="content">
        <Slot name="content" />
      </q-slot>
    </Floating>
  )
})
