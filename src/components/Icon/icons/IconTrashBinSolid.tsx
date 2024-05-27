import { IconProps } from '@qwikest/icons'
import { FlTrashBinSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconTrashBinSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})