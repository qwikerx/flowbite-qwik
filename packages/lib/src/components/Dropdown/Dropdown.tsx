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

  let triggerIsButton = false

  getChild(Trigger, [
    {
      component: Button,
      foundComponentCallback: () => {
        triggerIsButton = true
      },
    },
    {
      component: 'button',
      foundComponentCallback: () => {
        triggerIsButton = true
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
      asTrigger={!!Trigger}
      triggerIsButton={triggerIsButton}
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
  asTrigger?: boolean
  triggerIsButton?: boolean
  trigger?: JSXOutput
}

const InnerDropdown = component$<InnerDropdownProps>(
  ({ label, trigger, triggerIsButton, title, asTrigger, closeWhenSelect, components, inline, size }) => {
    const { dropdownModalClasses } = useDropdownClasses(
      useComputed$(() => size),
      useComputed$(() => inline),
    )

    const { value: visible, toggle$ } = useToggle(false)

    const TriggerButton = useComputed$(() => (inline ? InnerTriggerInline : InnerTriggerButton))
    const TriggerButtonAs = useComputed$(() => (asTrigger ? InnerTriggerAs : undefined))

    const { floatingRef, triggerRef } = useFloating('bottom', 'click', false, visible)

    return (
      <div class="block max-w-max relative">
        {TriggerButtonAs.value ? (
          <TriggerButtonAs.value
            ref={triggerRef}
            size={size}
            inline={inline}
            visible={visible.value}
            triggerIsButton={triggerIsButton}
            trigger={trigger}
          />
        ) : (
          <TriggerButton.value ref={triggerRef} title={title} label={label} size={size} inline={inline} visible={visible.value} />
        )}

        <ul
          tabIndex={0}
          ref={floatingRef}
          class={[
            'py-1 focus:outline-none',
            'absolute z-10 inline-block left-0 top-0 transition-opacity duration-300',
            dropdownModalClasses.value,
            visible.value ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none',
          ]}
        >
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
      </div>
    )
  },
)

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
  triggerIsButton?: boolean
  title?: string
  ref: Signal<HTMLElement | undefined>
  trigger?: JSXOutput
}
type CompProps = Partial<PropsOf<'button'>>

const InnerTriggerAs = component$<InnerTriggerAsProps>(({ size, trigger, triggerIsButton, ref, title, inline, visible }) => {
  const { triggerInlineClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  const internalProps = useComputed$<CompProps>(() => {
    return {
      'aria-expanded': visible,
      'aria-haspopup': 'menu',
      ref,
      title,
    }
  })

  ;(trigger as JSXNode).props.ref = ref
  ;(trigger as JSXNode).props.title = title
  ;(trigger as JSXNode).props['aria-expanded'] = visible
  ;(trigger as JSXNode).props['aria-haspopup'] = 'menu'

  return triggerIsButton ? (
    <>{trigger}</>
  ) : (
    <button {...internalProps.value} class={triggerInlineClasses.value}>
      <Slot />
    </button>
  )
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
