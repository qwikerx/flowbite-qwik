import {
  $,
  Component,
  component$,
  FunctionComponent,
  JSXChildren,
  JSXOutput,
  PropsOf,
  Slot,
  useComputed$,
  createElement,
  Fragment,
  Signal,
  JSXNode,
} from '@builder.io/qwik'
import { getChild } from '~/utils/children-inspector'
import { Button } from '~/components/Button/Button'
import { ButtonSize } from '~/components/Button/button-types'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconAngleDownOutline } from 'flowbite-qwik-icons'
import { DropdownSize } from '~/components/Dropdown/dropdown-types'
import { useDropdownClasses } from '~/components/Dropdown/composables/use-dropdown-classes'
import uuid from '~/utils/uuid'
import { useToggle } from '~/composables'
import { useFloating } from '~/composables/use-floating'
import { RenderFloatingElement } from '../Floating/Floating'

interface ComponentType {
  id: string
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
export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  label,
  as: Trigger,
  closeWhenSelect = true,
  inline = false,
  size = 'm',
  ...attrs
}) => {
  const components: ComponentType[] = []

  getChild(children, [
    {
      component: DropdownItem,
      foundComponentCallback: (child, index) => {
        components.push({
          id: `${index}-${uuid()}`,
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
    <InnerDropdown
      components={components}
      label={label}
      closeWhenSelect={closeWhenSelect}
      inline={inline}
      size={size}
      title={attrs.title}
      trigger={Trigger}
    />
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
  closeWhenSelect: boolean
  components: ComponentType[]
  inline: boolean
  size: DropdownSize
  title?: string
  trigger?: JSXOutput
}

const InnerDropdown = component$<InnerDropdownProps>(({ label, trigger, title, closeWhenSelect, components, inline, size }) => {
  const { dropdownModalClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  const { value: visible, toggle$ } = useToggle(false)

  const TriggerButton = useComputed$(() => (inline ? InnerTriggerInline : InnerTriggerButton))
  const TriggerButtonAs = useComputed$(() => (!!trigger ? InnerTriggerAs : undefined))

  const { floatingRef, triggerRef } = useFloating('bottom', 'click', false, visible)

  return (
    <div class="block max-w-max relative">
      {TriggerButtonAs.value ? (
        <TriggerButtonAs.value ref={triggerRef} size={size} inline={inline} visible={visible.value} trigger={trigger} />
      ) : (
        <TriggerButton.value ref={triggerRef} title={title} label={label} size={size} inline={inline} visible={visible.value} />
      )}

      <RenderFloatingElement tabIndex={0} isVisible={visible.value} ref={floatingRef} class={['py-1 focus:outline-none', dropdownModalClasses.value]}>
        <ul>
          {components.map((comp) => (
            <li role="menuitem" key={comp.id}>
              {comp.header ? (
                <InnerDropdownHeader size={size} inline={inline}>
                  {comp.content}
                </InnerDropdownHeader>
              ) : comp.divider ? (
                <InnerDropdownDivider size={size} inline={inline} />
              ) : (
                <InnerDropdownItem
                  size={size}
                  inline={inline}
                  icon={comp.icon}
                  onClick$={$(() => {
                    comp.onClick$?.()
                    if (closeWhenSelect) {
                      toggle$()
                    }
                  })}
                >
                  {comp.content}
                </InnerDropdownItem>
              )}
            </li>
          ))}
        </ul>
      </RenderFloatingElement>
    </div>
  )
})

/**
 * InnerDropdownHeader
 */
type InnerDropdownHeaderProps = {
  size: DropdownSize
  inline: boolean
}
const InnerDropdownHeader = component$<InnerDropdownHeaderProps>(({ size, inline }) => {
  const { dropdownHeaderContainerClasses, dropdownHeaderSeparatorClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

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
  inline: boolean
}
const InnerDropdownDivider = component$<InnerDropdownDividerProps>(({ size, inline }) => {
  const { dropdownDividerClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  return <div class={dropdownDividerClasses.value} />
})

/**
 * InnerDropdownItem
 */
type InnerDropdownItemProps = PropsOf<'button'> & {
  icon?: Component<IconProps>
  onClick$?: () => void
  size: DropdownSize
  inline: boolean
}
const InnerDropdownItem = component$<InnerDropdownItemProps>(({ icon: Icon, inline, size, onClick$, ...props }) => {
  const { dropdownItemClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

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
  size: DropdownSize
  inline: boolean
  visible: boolean
  title?: string
  ref?: Signal<HTMLElement | undefined>
}
const InnerTriggerInline = component$<InnerTriggerInlineProps>(({ title, ref, label, size, inline, visible }) => {
  const { triggerInlineClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  return (
    <button aria-haspopup="menu" ref={ref} title={title} class={triggerInlineClasses.value} aria-expanded={visible}>
      {label}
      <IconAngleDownOutline />
    </button>
  )
})

/**
 * InnerTriggerAs
 */
type InnerTriggerAsProps = {
  size: DropdownSize
  inline: boolean
  visible: boolean
  title?: string
  ref: Signal<HTMLElement | undefined>
  trigger?: JSXOutput
}

type CompProps = Partial<PropsOf<'button'>>

const InnerTriggerAs = component$<InnerTriggerAsProps>(({ trigger, ref, title, visible }) => {
  const internalProps = useComputed$<CompProps>(() => {
    return {
      'aria-expanded': visible,
      'aria-haspopup': 'menu',
      ref,
      title,
    }
  })

  const jsxNodeTrigger = trigger as JSXNode

  const internalTrigger = useComputed$(() => {
    const isButton =
      jsxNodeTrigger.type === Button ? jsxNodeTrigger.props?.tag === 'button' || !jsxNodeTrigger.props?.tag : jsxNodeTrigger.type === 'button'

    const type = isButton ? (jsxNodeTrigger.type as string) : 'button'
    const triggerProps = jsxNodeTrigger.props || {}
    const children = isButton ? jsxNodeTrigger.children : trigger

    return createElement(type, {
      ...internalProps.value,
      ...triggerProps,
      children,
    })
  })

  return internalTrigger.value
})

/**
 * InnerTriggerButton
 */
type InnerTriggerButtonProps = {
  label: string
  size: DropdownSize
  inline: boolean
  visible: boolean
  title?: string
  ref?: Signal<HTMLElement | undefined>
}
const InnerTriggerButton = component$<InnerTriggerButtonProps>(({ title, ref, label, size, visible }) => {
  const buttonSize: Record<string, ButtonSize> = {
    s: 'sm',
    m: 'md',
    l: 'lg',
  }

  return (
    <Button
      aria-haspopup="menu"
      title={title}
      size={buttonSize[size]}
      suffix={IconAngleDownOutline}
      aria-controls="dropdownMenu"
      aria-expanded={visible}
      ref={ref}
    >
      {label}
    </Button>
  )
})
