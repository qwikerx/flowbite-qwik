import { IconProps } from '@qwikest/icons'
import { FlMessagesOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconMessagesOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})