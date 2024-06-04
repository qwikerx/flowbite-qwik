import { Component, JSXChildren, JSXNode } from '@builder.io/qwik'

type FoundComponent = {
  component: Component | string
  foundComponentCallback: (child: JSXNode, index: number) => void
}

export function getChild(children: JSXChildren, components: FoundComponent[]) {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  let index = 0
  while (childrenToProcess.length) {
    index = index + 1

    const child = childrenToProcess.shift() as JSXNode
    if (!child) {
      continue
    }
    if (Array.isArray(child)) {
      childrenToProcess.unshift(...child)
      continue
    }

    const type = child.type

    const foundComponent = components.find((comp) => comp.component === type)
    if (foundComponent) {
      foundComponent.foundComponentCallback(child, index - 1)
    }
  }
}

/**
 * Icons part
 */
function processChild(child: JSXNode, fill: string) {
  if (child.immutableProps?.fill && child.immutableProps.fill !== 'none') {
    child.immutableProps.fill = fill
  }
  if (child.immutableProps?.stroke && child.immutableProps.stroke !== 'none') {
    child.immutableProps.stroke = fill
  }
}

export function updateFillOfChildren(children: JSXNode, fill: string): any {
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
