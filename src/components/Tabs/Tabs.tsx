import { $, component$, FunctionComponent, JSXChildren, JSXNode, JSXOutput, PropsOf, Slot, useComputed$, useId, useStore } from '@builder.io/qwik'
import { useTabsClasses } from '~/components/Tabs/composables/use-tabs-classes'
import { TabsVariant } from '~/components/Tabs/tabs-types'
import { useTabClasses } from '~/components/Tabs/composables/use-tab-classes'

interface ComponentType {
  id: number
  active: boolean
  disabled: boolean
  tab: {
    title: string
    icon?: JSXOutput
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
            icon: child.props.icon as JSXOutput | undefined,
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
  icon?: JSXOutput
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
  const tabsId = useId()
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
              <InnerTab
                id={String(comp.id)}
                withIcon={!!comp.tab.icon}
                tabsId={tabsId}
                active={comp.active}
                disabled={comp.disabled}
                variant={props.variant}
              >
                {comp.tab.icon}
                {comp.tab.title}
              </InnerTab>
            </li>
          ))}
        </ul>
      </div>
      <div class="p-5">
        {componentsAsSignals.map((comp) => (
          <InnerTabPanel key={comp.id} id={String(comp.id)} tabsId={tabsId} active={comp.active} directive={props.directive}>
            {comp.pane.children}
          </InnerTabPanel>
        ))}
      </div>
    </>
  )
})

type InnerTabProps = PropsOf<'div'> & {
  tabsId: string
  variant: TabsVariant
  active: boolean
  disabled: boolean
  withIcon: boolean
}
const InnerTab = component$<InnerTabProps>((props) => {
  const { tabClasses } = useTabClasses({
    variant: useComputed$(() => props.variant),
    active: useComputed$(() => props.active),
    disabled: useComputed$(() => props.disabled),
    withIcon: useComputed$(() => props.withIcon),
  })

  return (
    <button
      class={tabClasses.value}
      role="tab"
      tabIndex={props.active ? 0 : -1}
      aria-selected={props.active}
      aria-disabled={props.disabled}
      aria-controls={`${props.tabsId}-tabpanel-${props.id}`}
    >
      <Slot />
    </button>
  )
})

type InnerTabPanelProps = PropsOf<'div'> & {
  tabsId: string
  active: boolean
  directive: 'if' | 'show'
}
const InnerTabPanel = component$<InnerTabPanelProps>((props) => {
  return (
    <>
      {props.directive === 'if' && (
        <>
          {props.active && (
            <div aria-labelledby={`${props.tabsId}-tab-${props.id}`} role="tabpanel" tabIndex={0}>
              <Slot />
            </div>
          )}
        </>
      )}

      {props.directive === 'show' && (
        <div aria-labelledby={`${props.tabsId}-tab-${props.id}`} role="tabpanel" tabIndex={0} class={!props.active ? 'hidden' : ''}>
          <Slot />
        </div>
      )}
    </>
  )
})
