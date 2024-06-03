import { IconProps } from '@qwikest/icons'
import { FlCaretSortSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { getChild } from '~/utils/getChild'
import { JSXNode, component$ } from '@builder.io/qwik'

function processChild(child: JSXNode, fill: string) {
  if (child.immutableProps?.fill && child.immutableProps.fill !== 'none') {
    child.immutableProps.fill = fill
  }
  if (child.immutableProps?.stroke && child.immutableProps.stroke !== 'none') {
    child.immutableProps.stroke = fill
  }
}

function updateFillOfChildren(children: JSXNode, fill: string): any {
  getChild(children, [
    {
      component: 'path',
      foundComponentCallback: (child) => {
        processChild(child, fill)
      },
    },
    {
      component: 'g',
      foundComponentCallback: (child) => {
        processChild(child, fill)
      },
    },
  ])
  return children
}

export const IconCaretSortSolid = component$<IconProps>((props) => {
  const el = QwikestIcon(props)
  el.children = updateFillOfChildren(el.children as JSXNode, 'currentColor')

  return <>{el}</>
})