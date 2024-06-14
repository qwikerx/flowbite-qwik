import { JSXChildren, PropsOf, component$ } from '@builder.io/qwik'
import { AccordionHeaderProps, AccordionProps } from './accordion-types'

import { FunctionComponent } from '@builder.io/qwik/jsx-runtime'
import { AccordionPanel } from './AccordionPanel'
import uuid from '~/utils/uuid'
import { AccordionHeader } from './AccordionHeader'
import { AccordionContent } from './AccordionContent'
import { useAccordionState } from './composables/use-accordion-state'
import { getChild } from '~/utils/children-inspector'

type ChildrenType = {
  header: {
    children?: JSXChildren
    attrs?: AccordionHeaderProps
  }
  content: {
    children?: JSXChildren
  }
}

export type ComponentType = {
  id: string
} & ChildrenType

function getHeaderAndContentFromPanel({ children }: { children: JSXChildren }): ChildrenType {
  const components: ChildrenType = {
    header: {
      children: undefined,
    },
    content: {
      children: undefined,
    },
  }

  getChild(children, [
    {
      component: AccordionHeader,
      foundComponentCallback: (child) => {
        components.header = {
          children: child.children,
          attrs: child.props,
        }
      },
    },
    {
      component: AccordionContent,
      foundComponentCallback: (child) => {
        components.content = {
          children: child.children,
        }
      },
    },
  ])

  return components
}

export const Accordion: FunctionComponent<AccordionProps & PropsOf<'div'>> = ({
  children,
  alwaysOpen = false,
  openFirstItem = true,
  flush = false,
  ...attrs
}) => {
  const components: ComponentType[] = []

  getChild(children, [
    {
      component: AccordionPanel,
      foundComponentCallback: (child) => {
        const { header, content } = getHeaderAndContentFromPanel(child)
        components.push({
          id: uuid(),
          header,
          content,
        })
      },
    },
  ])

  return <InnerAccordion components={components} {...attrs} alwaysOpen={alwaysOpen} flush={flush} openFirstItem={openFirstItem} />
}

type InnerAccordionProps = AccordionProps & {
  components: ComponentType[]
}

export const InnerAccordion = component$<InnerAccordionProps>(({ components, alwaysOpen = false, openFirstItem = true, flush = false, ...attrs }) => {
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
              {...component.header.attrs}
              id={component.id}
              flush={flush}
              isFirst={i === 0}
              openedPanels={openedPanels.value}
              isLast={i === components.length - 1}
              onClick$={toggle$}
            >
              {component.header.children}
            </AccordionHeader>
            <AccordionContent id={component.id} isLast={i === components.length - 1} openedPanels={openedPanels.value} flush={flush}>
              {component.content.children}
            </AccordionContent>
          </AccordionPanel>
        )
      })}
    </div>
  )
})
