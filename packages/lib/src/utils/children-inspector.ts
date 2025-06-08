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
 *
 * HACK: this messes with internal props of the child, but it's the only way to change the fill of the icon. Need to check if this works in v2
 */
function processChild(child: JSXNode, fill: string) {
  let currentFill: string | undefined
  const immutableProps = (child as unknown as { immutableProps: Record<string, unknown> } | undefined)?.immutableProps
  // v1
  if (immutableProps?.fill) {
    currentFill = immutableProps.fill as string
  } else {
    currentFill = child.props.fill as string
  }
  if (currentFill && currentFill !== 'none') {
    child.props.fill = fill
    if (immutableProps) {
      delete immutableProps.fill
    }
  }
  if (immutableProps?.stroke && immutableProps.stroke !== 'none') {
    child.props.stroke = fill
    if (immutableProps) {
      delete immutableProps.stroke
    }
  }
}

export function updateFillOfChildren(children: JSXNode, fill: string) {
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
