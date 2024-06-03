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
