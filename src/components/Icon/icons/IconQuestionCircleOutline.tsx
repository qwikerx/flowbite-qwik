import { IconProps } from '@qwikest/icons'
import { FlQuestionCircleOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconQuestionCircleOutline = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})