import { IconProps } from '@qwikest/icons'
import { FlQuestionCircleSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconQuestionCircleSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})