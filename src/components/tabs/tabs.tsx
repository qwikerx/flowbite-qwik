import { $, component$, FunctionComponent, JSXChildren, JSXNode, PropsOf, Slot, useComputed$, useStore } from '@builder.io/qwik'
import { useTabsClasses } from '~/components/tabs/useTabsClasses'
import { TabsVariant } from '~/components/tabs/tabs-types'
import { useTabClasses } from '~/components/tabs/useTabClasses'

interface ComponentType {
  id: number
  active: boolean
  disabled: boolean
  tab: {
    title: string
  }
  pane: {
    children: JSXChildren
  }
}

type TabsProps = PropsOf<'div'> & {
  variant?: TabsVariant
  directive?: 'if' | 'show'
  onClickInteraction$?: () => void
}
export const Tabs: FunctionComponent<TabsProps> = ({ children, variant = 'default', directive = 'if', ...props }) => {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  if (!childrenToProcess.some((child) => (child as JSXNode).props.active)) {
    ;(childrenToProcess[0] as JSXNode).props.active = true
  }

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

    switch (child.type) {
      case Tab: {
        components.push({
          id: index,
          active: Boolean(child.props.active),
          disabled: Boolean(child.props.disabled),
          tab: {
            title: child.props.title as string,
          },
          pane: {
            children: child.children,
          },
        })
      }
    }
  }

  return (
    <div>
      <InnerTabs components={components} variant={variant} directive={directive} onClickInteraction$={props.onClickInteraction$} />
    </div>
  )
}

type TabProps = PropsOf<'div'> & {
  active?: boolean
  disabled?: boolean
}
export const Tab = component$<TabProps>(() => {
  return <Slot />
})

/**
 * Implemention
 */

type InnerTabsProps = PropsOf<'div'> & {
  variant: TabsVariant
  directive: 'if' | 'show'
  components: ComponentType[]
  onClickInteraction$?: () => void
}

const InnerTabs = component$<InnerTabsProps>((props) => {
  const { divClasses, ulClasses } = useTabsClasses({
    variant: useComputed$(() => props.variant),
  })
  const componentsAsSignals = useStore(() => props.components, { deep: true })

  const selectTabPane = $((tabId: number) => {
    props.onClickInteraction$?.()
    componentsAsSignals.forEach((comp) => {
      comp.active = comp.id === tabId
    })
  })

  return (
    <>
      <div class={divClasses.value}>
        <ul class={ulClasses.value}>
          {componentsAsSignals.map((comp) => (
            <li
              key={comp.id}
              onClick$={async () => {
                if (comp.disabled) return
                await selectTabPane(comp.id)
              }}
            >
              <InnerTabPane id={String(comp.id)} active={comp.active} disabled={comp.disabled} variant={props.variant}>
                {comp.tab.title}
              </InnerTabPane>
            </li>
          ))}
        </ul>
      </div>
      <div class="p-5">
        {componentsAsSignals.map((comp) => (
          <InnerTab key={comp.id} active={comp.active} directive={props.directive}>
            {comp.pane.children}
          </InnerTab>
        ))}
      </div>
    </>
  )
})

type InnerTabPaneProps = PropsOf<'div'> & {
  variant: TabsVariant
  active: boolean
  disabled: boolean
}
const InnerTabPane = component$<InnerTabPaneProps>((props) => {
  const { tabClasses } = useTabClasses({
    variant: useComputed$(() => props.variant),
    active: useComputed$(() => props.active),
    disabled: useComputed$(() => props.disabled),
  })

  return (
    <div class={tabClasses.value}>
      <Slot />
    </div>
  )
})

type InnerTabProps = PropsOf<'div'> & {
  active: boolean
  directive: 'if' | 'show'
}
const InnerTab = component$<InnerTabProps>((props) => {
  return (
    <>
      {props.directive === 'if' && (
        <>
          {props.active && (
            <div>
              <Slot />
            </div>
          )}
        </>
      )}

      {props.directive === 'show' && (
        <div class={!props.active ? 'hidden' : ''}>
          <Slot />
        </div>
      )}
    </>
  )
})
