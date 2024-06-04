import { IconProps } from '@qwikest/icons'
import { FlTextCenterSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { updateFillOfChildren } from '~/utils/getChild'
import { JSXNode, component$ } from '@builder.io/qwik'

export const IconTextCenterSolid = component$<IconProps>((props) => {
  const el = QwikestIcon(props)
  el.children = updateFillOfChildren(el.children as JSXNode, 'currentColor')

  return <>{el}</>
})