import { FlowbiteTheme } from '~/components/FlowbiteThemable/useFlowbiteThemable'

export type FlowbiteThemablePayload = {
  theme: FlowbiteTheme
}

export type ThemableChildrenApply = 'background' | 'disabled' | 'hover' | 'text' | 'border' | 'focus'
