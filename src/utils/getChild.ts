import { JSXChildren, JSXNode } from '@builder.io/qwik'

export function getChild(children: JSXChildren, expectedComponent: any) {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  let index = 0
  while (childrenToProcess.length) {
    index++

    const child = childrenToProcess.shift() as JSXNode
    if (!child) {
      continue
    }
    if (Array.isArray(child)) {
      childrenToProcess.unshift(...child)
      continue
    }

    switch (child.type) {
      case expectedComponent: {
        components.push({
          id,
          header,
          content,
        })
      }
    }
  }
}
