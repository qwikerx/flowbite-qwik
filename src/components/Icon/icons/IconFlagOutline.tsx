import { IconProps } from '@qwikest/icons'
import { FlFlagOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconFlagOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})