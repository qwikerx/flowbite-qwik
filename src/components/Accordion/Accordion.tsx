import { $, JSXChildren, JSXNode, JSXOutput, PropsOf, component$, useId } from '@builder.io/qwik'
import { AccordionHeaderProps, AccordionProps } from './accordion-types'

import { FunctionComponent } from '@builder.io/qwik/jsx-runtime'
import { AccordionPanel } from './AccordinPanel'
import uuid from '~/utils/uuid'
import { AccordionHeader } from './AccordionHeader'
import { AccordionContent } from './AccordionContent'
import { useAccordionState } from './composables/use-accordion-state'

type ChildrenType = {
  header: {
    children?: JSXOutput
    attrs?: AccordionHeaderProps
  }
  content: {
    children?: JSXOutput
  }
}

export type ComponentType = {
  id: string
} & ChildrenType

function getHeaderAndContentFromPanel({ children }: { children: JSXChildren }): ChildrenType {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  const components: ChildrenType = {
    header: {
      children: undefined,
    },
    content: {
      children: undefined,
    },
  }

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
      case AccordionHeader: {
        components.header = {
          children: child.children as JSXOutput,
          attrs: child.props,
        }
        break
      }
      case AccordionContent: {
        components.content = {
          children: child.children as JSXOutput,
        }
        break
      }
    }
  }

  return components
}

export const Accordion: FunctionComponent<AccordionProps & PropsOf<'div'>> = ({
  children,
  alwaysOpen = false,
  openFirstItem = true,
  flush = false,
  ...attrs
}) => {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  const components: ComponentType[] = []
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

    const id = uuid()
    const { header, content } = getHeaderAndContentFromPanel(child)

    switch (child.type) {
      case AccordionPanel: {
        components.push({
          id,
          header,
          content,
        })
      }
    }
  }

  return <InnerAccordion components={components} {...attrs} alwaysOpen={alwaysOpen} flush={flush} openFirstItem={openFirstItem} />
}

type InnerAccordionProps = AccordionProps & {
  components: ComponentType[]
}

export const InnerAccordion = component$<InnerAccordionProps>(({ components, alwaysOpen = false, openFirstItem = true, flush = false, ...attrs }) => {
  const accordionId = useId()

  const { toggle$, openedPanels } = useAccordionState(
    {
      alwaysOpen,
      openFirstItem,
      flush,
    },
    components,
  )

  return (
    <div {...attrs}>
      {components.map((component, i) => {
        return (
          <AccordionPanel>
            <AccordionHeader
              accordion-id={accordionId}
              id={component.id}
              {...component.header.attrs}
              flush={flush}
              isVisible={openedPanels.value.includes(component.id)}
              isFirst={i === 0}
              isLast={i === components.length - 1}
              onClick$={toggle$}
            >
              {component.header.children}
            </AccordionHeader>
            <AccordionContent
              accordion-id={accordionId}
              isLast={i === components.length - 1}
              id={component.id}
              flush={flush}
              isVisible={openedPanels.value.includes(component.id)}
            >
              {component.content.children}
            </AccordionContent>
          </AccordionPanel>
        )
      })}
    </div>
  )
})
