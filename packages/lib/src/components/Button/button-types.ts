import { FlowbiteTheme } from '~/components/FlowbiteThemable'

export type ButtonMonochromeGradient = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'
export type ButtonDuotoneGradient = 'purple-blue' | 'cyan-blue' | 'green-blue' | 'purple-pink' | 'pink-orange' | 'teal-lime' | 'red-yellow'
export type ButtonGradient = ButtonDuotoneGradient | ButtonMonochromeGradient
export type ButtonVariant = FlowbiteTheme | 'default' | 'alternative' | 'dark' | 'light' | 'yellow'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
