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
  useSignal,
  createElement,
  Fragment,
  useVisibleTask$,
} from '@builder.io/qwik'
import { getChild } from '~/utils/getChild'
import { Button } from '~/components/Button/Button'
import { useDocumentOuterClick } from '~/composables/use-outer-click'
import { ButtonSize } from '~/components/Button/button-types'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconAngleDownOutline } from 'flowbite-qwik-icons'
import { DropdownSize } from '~/components/Dropdown/dropdown-types'
import { useDropdownClasses } from '~/components/Dropdown/composables/use-dropdown-classes'
import uuid from '~/utils/uuid'
import { useToggle } from '~/composables'

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
    <div>
      <InnerDropdown
        components={components}
        label={label}
        closeWhenSelect={closeWhenSelect}
        inline={inline}
        size={size}
        title={attrs.title}
        asTrigger={!!Trigger}
        triggerIsButton={triggerIsButton}
      >
        {Trigger}
      </InnerDropdown>
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
  closeWhenSelect: boolean
  components: ComponentType[]
  inline: boolean
  size: DropdownSize
  title?: string
  asTrigger?: boolean
  triggerIsButton?: boolean
}

const InnerDropdown = component$<InnerDropdownProps>(({ label, asTrigger, triggerIsButton, closeWhenSelect, components, inline, size, title }) => {
  const { dropdownModalClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  const { value: visible, toggle$ } = useToggle(false)
  const dropdownRef = useSignal<HTMLDivElement>()
  const dropdownModalRef = useSignal<HTMLDivElement>()

  const TriggerButton = useComputed$(() => (inline ? InnerTriggerInline : InnerTriggerButton))
  const TriggerButtonAs = useComputed$(() => (asTrigger ? InnerTriggerAs : undefined))

  useDocumentOuterClick([dropdownRef], toggle$, visible)

  useVisibleTask$(() => {
    const dropdownWidth = dropdownRef.value?.offsetWidth ?? 0
    const dropdownModalWidth = dropdownModalRef.value?.offsetWidth ?? 0

    if (dropdownWidth === dropdownModalWidth) return
    if (dropdownWidth > dropdownModalWidth) {
      dropdownModalRef.value!.style.left = `-${(dropdownWidth - dropdownModalWidth) / 2}px`
    } else {
      dropdownModalRef.value!.style.left = `-${(dropdownModalWidth - dropdownWidth) / 2}px`
    }
  })

  return (
    <div class={['inline-flex relative justify-center']} title={title}>
      <div ref={dropdownRef}>
        {TriggerButtonAs.value ? (
          <TriggerButtonAs.value
            onClick$={() => {
              toggle$()
            }}
            size={size}
            inline={inline}
            visible={visible.value}
            triggerIsAlreadyButton={triggerIsButton}
          >
            <Slot />
          </TriggerButtonAs.value>
        ) : (
          <TriggerButton.value
            onClick$={() => {
              toggle$()
            }}
            label={label}
            size={size}
            inline={inline}
            visible={visible.value}
          />
        )}

        <div ref={dropdownModalRef} role="menu" class={[dropdownModalClasses.value, visible.value ? 'visible' : 'invisible']}>
          <ul tabIndex={0} class="py-1 focus:outline-none">
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
      </div>
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
  onClick$: () => void
  size: DropdownSize
  inline: boolean
  visible: boolean
}
const InnerTriggerInline = component$<InnerTriggerInlineProps>(({ label, size, inline, visible, onClick$ }) => {
  const { triggerInlineClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  return (
    <button onClick$={onClick$} class={triggerInlineClasses.value} aria-expanded={visible}>
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
  inline: boolean
  visible: boolean
  triggerIsAlreadyButton?: boolean
}
const InnerTriggerAs = component$<InnerTriggerAsProps>(({ size, inline, visible, onClick$, triggerIsAlreadyButton }) => {
  const { triggerInlineClasses } = useDropdownClasses(
    useComputed$(() => size),
    useComputed$(() => inline),
  )

  const Tag = triggerIsAlreadyButton ? 'div' : 'button'

  return (
    <Tag onClick$={onClick$} class={triggerInlineClasses.value} aria-expanded={visible} aria-label="Dropdown">
      <Slot />
    </Tag>
  )
})

/**
 * InnerTriggerButton
 */
type InnerTriggerButtonProps = {
  label: string
  onClick$: () => void
  size: DropdownSize
  inline: boolean
  visible: boolean
}
const InnerTriggerButton = component$<InnerTriggerButtonProps>(({ label, size, visible, onClick$ }) => {
  const buttonSize: Record<string, ButtonSize> = {
    s: 'sm',
    m: 'md',
    l: 'lg',
  }

  return (
    <Button onClick$={onClick$} size={buttonSize[size]} suffix={IconAngleDownOutline} aria-expanded={visible}>
      {label}
    </Button>
  )
})
