import { IconProps } from '@qwikest/icons'
import { FlCloseOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconCloseOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})