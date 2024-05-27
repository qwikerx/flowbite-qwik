import { IconProps } from '@qwikest/icons'
import { FlPlusOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconPlusOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})