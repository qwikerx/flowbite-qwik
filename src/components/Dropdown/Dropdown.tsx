import {
  $,
  ClassList,
  Component,
  component$,
  FunctionComponent,
  JSXChildren,
  JSXOutput,
  PropsOf,
  Slot,
  useComputed$,
  useSignal,
  useStore,
  createElement,
  Fragment,
} from '@builder.io/qwik'
import { getChild } from '~/utils/getChild'
import { Button } from '~/components/Button/Button'
import { useDocumentOuterClick } from '~/composables/use-outer-click'
import { ButtonSize } from '~/components/Button/button-types'
import { IconProps } from '@qwikest/icons'
import { IconAngleDownOutline } from '~/components/Icon'
import { DropdownSize } from '~/components/Dropdown/dropdown-types'
import { useDropdownClasses } from '~/components/Dropdown/composables/use-dropdown-classes'
import uuid from '~/utils/uuid'

interface ComponentType {
  id: number
  value?: string
  header: boolean
  divider: boolean
  icon?: Component<IconProps>
  content: JSXChildren
  onClick$?: () => void
}

type DropdownProps = PropsOf<'div'> & {
  label?: string
  as?: JSXOutput
  closeWhenSelect?: boolean
  inline?: boolean
  size?: DropdownSize
}
export const Dropdown: FunctionComponent<DropdownProps> = ({ children, label, as, closeWhenSelect = true, inline = false, size = 'm', ...attrs }) => {
  const components: ComponentType[] = []

  getChild(children, [
    {
      component: DropdownItem,
      foundComponentCallback: (child, index) => {
        components.push({
          id: index,
          value: child.props.value as string | undefined,
          header: Boolean(child.props.header),
          divider: Boolean(child.props.divider),
          icon: child.props.icon as Component | undefined,
          content: Array.isArray(child.children) ? createElement(Fragment, { key: uuid() }, child.children) : child.children,
          onClick$: child.props.onClick$ as () => void | undefined,
        })
      },
    },
  ])

  return (
    <div>
      <InnerDropdown
        components={components}
        label={label}
        as={as}
        closeWhenSelect={closeWhenSelect}
        inline={inline}
        size={size}
        class={attrs.class}
      />
    </div>
  )
}

type DropdownItemProps = {
  value?: string
  header?: boolean
  divider?: boolean
  icon?: Component<IconProps>
  onClick$?: () => void
}
export const DropdownItem = component$<DropdownItemProps>(() => {
  return <Slot />
})

/**
 * InnerDropdown
 */

type InnerDropdownProps = {
  label?: string
  as?: JSXOutput
  closeWhenSelect: boolean
  components: ComponentType[]
  inline: boolean
  size: DropdownSize
  class?: ClassList
}

const InnerDropdown = component$<InnerDropdownProps>(({ label, as, closeWhenSelect, components, inline, size }) => {
  const { dropdownModalClasses } = useDropdownClasses(useComputed$(() => size))

  const visible = useSignal(false)
  const dropdownRef = useSignal<HTMLDivElement>()
  const componentsAsSignals = useStore(() => components, { deep: true })

  const toggleVisible = $(() => {
    visible.value = !visible.value
  })
  const TriggerButton = inline ? InnerTriggerInline : InnerTriggerButton
  const TriggerButtonAs = as ? InnerTriggerAs : undefined

  useDocumentOuterClick([dropdownRef], toggleVisible, visible)

  return (
    <div class={['inline-flex relative justify-center']}>
      <div ref={dropdownRef}>
        {TriggerButtonAs ? (
          <TriggerButtonAs
            onClick$={() => {
              toggleVisible()
            }}
            size={size}
            as={as}
          />
        ) : (
          <TriggerButton
            onClick$={() => {
              toggleVisible()
            }}
            label={label}
            size={size}
          />
        )}

        {visible.value && (
          <div role="menu" class={[dropdownModalClasses.value]}>
            <ul tabIndex={0} class="py-1 focus:outline-none">
              {componentsAsSignals.map((comp) => (
                <li role="menuitem" key={comp.id}>
                  {comp.header ? (
                    <InnerDropdownHeader size={size}>{comp.content}</InnerDropdownHeader>
                  ) : comp.divider ? (
                    <InnerDropdownDivider size={size} />
                  ) : (
                    <InnerDropdownItem
                      size={size}
                      icon={comp.icon}
                      onClick$={$(() => {
                        comp.onClick$?.()

                        if (closeWhenSelect) {
                          toggleVisible()
                        }
                      })}
                    >
                      {comp.content}
                    </InnerDropdownItem>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
})

/**
 * InnerDropdownHeader
 */
type InnerDropdownHeaderProps = {
  size: DropdownSize
}
const InnerDropdownHeader = component$<InnerDropdownHeaderProps>(({ size }) => {
  const { dropdownHeaderContainerClasses, dropdownHeaderSeparatorClasses } = useDropdownClasses(useComputed$(() => size))

  return (
    <>
      <div class={dropdownHeaderContainerClasses.value}>
        <Slot />
      </div>
      <div class={dropdownHeaderSeparatorClasses.value} />
    </>
  )
})

/**
 * InnerDropdownDivider
 */
type InnerDropdownDividerProps = {
  size: DropdownSize
}
const InnerDropdownDivider = component$<InnerDropdownDividerProps>(({ size }) => {
  const { dropdownDividerClasses } = useDropdownClasses(useComputed$(() => size))

  return <div class={dropdownDividerClasses.value} />
})

/**
 * InnerDropdownItem
 */
type InnerDropdownItemProps = PropsOf<'button'> & {
  icon?: Component<IconProps>
  onClick$?: () => void
  size: DropdownSize
}
const InnerDropdownItem = component$<InnerDropdownItemProps>(({ icon: Icon, size, onClick$, ...props }) => {
  const { dropdownItemClasses } = useDropdownClasses(useComputed$(() => size))

  return (
    <button type="button" class={dropdownItemClasses.value} onClick$={onClick$} disabled={props.disabled}>
      {Icon && <Icon class="h-4 w-4 mr-2" />}
      <Slot />
    </button>
  )
})

/**
 * InnerTriggerInline
 */
type InnerTriggerInlineProps = {
  label?: string
  onClick$: () => void
  size: DropdownSize
}
const InnerTriggerInline = component$<InnerTriggerInlineProps>(({ label, size, onClick$ }) => {
  const { triggerInlineClasses } = useDropdownClasses(useComputed$(() => size))

  return (
    <button onClick$={onClick$} class={triggerInlineClasses.value}>
      {label}
      <IconAngleDownOutline />
    </button>
  )
})

/**
 * InnerTriggerAs
 */
type InnerTriggerAsProps = {
  onClick$: () => void
  size: DropdownSize
  as: JSXOutput
}
const InnerTriggerAs = component$<InnerTriggerAsProps>(({ as, size, onClick$ }) => {
  const { triggerInlineClasses } = useDropdownClasses(useComputed$(() => size))

  return (
    <button onClick$={onClick$} class={triggerInlineClasses.value}>
      {as}
    </button>
  )
})

/**
 * InnerTriggerButton
 */
type InnerTriggerButtonProps = {
  label: string
  onClick$: () => void
  size: DropdownSize
}
const InnerTriggerButton = component$<InnerTriggerButtonProps>(({ label, size, onClick$ }) => {
  const buttonSize: Record<string, ButtonSize> = {
    s: 'sm',
    m: 'md',
    l: 'lg',
  }

  return (
    <Button onClick$={onClick$} size={buttonSize[size]} suffix={IconAngleDownOutline}>
      {label}
    </Button>
  )
})
