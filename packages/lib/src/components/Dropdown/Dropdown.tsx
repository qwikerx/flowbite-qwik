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
  useContextProvider,
  useStore,
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
import { DropdownContext, useDropdownContext } from '~/components/Dropdown/composables/use-dropdown-context'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

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
    <InnerDropdown components={components} label={label} closeWhenSelect={closeWhenSelect} inline={inline} size={size} trigger={Trigger} {...attrs} />
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

type InnerDropdownProps = PropsOf<'div'> & {
  label?: string
  closeWhenSelect: boolean
  components: ComponentType[]
  inline: boolean
  size: DropdownSize
  title?: string
  trigger?: JSXOutput
}

const InnerDropdown = component$<InnerDropdownProps>(
  ({ label, trigger, title, closeWhenSelect, components, inline, size, class: classNames, ...attrs }) => {
    useContextProvider(DropdownContext, useStore({ size, inline }))

    const { dropdownModalClasses } = useDropdownClasses()

    const { value: visible, toggle$ } = useToggle(false)

    const TriggerButton = useComputed$(() => (inline ? InnerTriggerInline : InnerTriggerButton))
    const TriggerButtonAs = useComputed$(() => (!!trigger ? InnerTriggerAs : undefined))

    const { floatingRef, triggerRef } = useFloating('bottom', 'click', false, visible)

    return (
      <div class={twMerge('relative block max-w-max', clsx(classNames))} {...attrs}>
        {TriggerButtonAs.value ? (
          <TriggerButtonAs.value ref={triggerRef} visible={visible.value} trigger={trigger} />
        ) : (
          <TriggerButton.value ref={triggerRef} title={title} label={label} visible={visible.value} />
        )}

        <RenderFloatingElement
          tabIndex={0}
          isVisible={visible.value}
          ref={floatingRef}
          class={['py-1 focus:outline-none', dropdownModalClasses.value]}
        >
          <ul>
            {components.map((comp) => (
              <li role="menuitem" key={comp.id}>
                {comp.header ? (
                  <InnerDropdownHeader>{comp.content}</InnerDropdownHeader>
                ) : comp.divider ? (
                  <InnerDropdownDivider />
                ) : (
                  <InnerDropdownItem
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
  },
)

/**
 * InnerDropdownHeader
 */
const InnerDropdownHeader = component$(() => {
  const { dropdownHeaderContainerClasses, dropdownHeaderSeparatorClasses } = useDropdownClasses()

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
const InnerDropdownDivider = component$(() => {
  const { dropdownDividerClasses } = useDropdownClasses()

  return <div class={dropdownDividerClasses.value} />
})

/**
 * InnerDropdownItem
 */
type InnerDropdownItemProps = PropsOf<'button'> & {
  icon?: Component<IconProps>
  onClick$?: () => void
}
const InnerDropdownItem = component$<InnerDropdownItemProps>(({ icon: Icon, onClick$, ...props }) => {
  const { dropdownItemClasses } = useDropdownClasses()

  return (
    <button type="button" class={dropdownItemClasses.value} onClick$={onClick$} disabled={props.disabled}>
      {Icon && <Icon class="mr-2 h-4 w-4" />}
      <Slot />
    </button>
  )
})

/**
 * InnerTriggerInline
 */
type InnerTriggerInlineProps = {
  label?: string
  visible: boolean
  title?: string
  ref?: Signal<HTMLElement | undefined>
}
const InnerTriggerInline = component$<InnerTriggerInlineProps>(({ title, ref, label, visible }) => {
  const { triggerInlineClasses } = useDropdownClasses()

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
  visible: boolean
  title?: string
  ref?: Signal<HTMLElement | undefined>
}
const InnerTriggerButton = component$<InnerTriggerButtonProps>(({ title, ref, label, visible }) => {
  const { size } = useDropdownContext()
  const buttonSize: Record<string, ButtonSize> = {
    s: 'sm',
    m: 'md',
    l: 'lg',
  }

  return (
    <Button
      aria-haspopup="menu"
      title={title}
      size={buttonSize[size.value]}
      suffix={IconAngleDownOutline}
      aria-controls="dropdownMenu"
      aria-expanded={visible}
      ref={ref}
    >
      {label}
    </Button>
  )
})
