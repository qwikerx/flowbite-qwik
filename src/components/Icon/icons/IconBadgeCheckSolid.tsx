import { IconProps } from '@qwikest/icons'
import { FlBadgeCheckSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconBadgeCheckSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})