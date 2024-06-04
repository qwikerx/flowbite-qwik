import { IconProps } from '@qwikest/icons'
import { FlStarHalfStrokeSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { updateFillOfChildren } from '~/utils/getChild'
import { JSXNode, component$ } from '@builder.io/qwik'

export const IconStarHalfStrokeSolid = component$<IconProps>((props) => {
  const el = QwikestIcon(props)
  el.children = updateFillOfChildren(el.children as JSXNode, 'currentColor')

  return <>{el}</>
})