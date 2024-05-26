import { FlowbiteTheme } from '~/lib/components/FlowbiteThemable/composables/use-flowbite-themable'

export type FlowbiteThemablePayload = {
  theme: FlowbiteTheme
}

export type ThemableChildrenApply = 'background' | 'disabled' | 'hover' | 'text' | 'border' | 'focus'
