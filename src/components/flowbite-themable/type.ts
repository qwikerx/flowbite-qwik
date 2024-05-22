import { FlowbiteTheme } from '~/components/flowbite-themable/useFlowbiteThemable'

export type FlowbiteThemablePayload = {
  theme: FlowbiteTheme
}

export type ThemableChildrenApply = 'background' | 'disabled' | 'hover' | 'text' | 'border' | 'focus'
