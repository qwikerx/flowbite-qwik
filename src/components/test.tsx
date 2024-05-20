import { component$, FunctionComponent, JSXNode, PropsOf, Slot } from '@builder.io/qwik'

type TestProps = PropsOf<'div'>

export const TestComp: FunctionComponent<TestProps> = (props) => {
  const childrenToProcess = Array.isArray(props.children) ? [...props.children] : [props.children]
  console.log('children', childrenToProcess.length)

  const tabComponents: JSXNode[] = []
  while (childrenToProcess.length) {
    const child = childrenToProcess.shift() as JSXNode
    console.log(child.type === TestComp1)

    if (!child) {
      continue
    }
    if (Array.isArray(child)) {
      childrenToProcess.unshift(...child)
      continue
    }

    tabComponents.push(child)
  }

  return <div class="bg-green-100">ABCD</div>
}

type TestProps1 = PropsOf<'div'>

export const TestComp1 = component$<TestProps1>((props) => {
  const childrenToProcess = Array.isArray(props.children) ? [...props.children] : [props.children]
  console.log('children1', childrenToProcess.length)

  while (childrenToProcess.length) {
    const child = childrenToProcess.shift() as JSXNode
    console.log('type', child?.type)
    // if (!child) {
    //   continue
    // }
  }

  return (
    <div class="mr-2">
      <Slot />
    </div>
  )
})
