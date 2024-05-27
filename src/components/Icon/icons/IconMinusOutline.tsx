import { IconProps } from '@qwikest/icons'
import { FlMinusOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconMinusOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})