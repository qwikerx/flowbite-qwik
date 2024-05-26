import { $, component$, FunctionComponent, JSXChildren, JSXOutput, PropsOf, Slot, useSignal, useStore } from '@builder.io/qwik'
import { getChild } from '~/utils/getChild'
import { Button } from '~/components/Button/Button'
import { useDocumentOuterClick } from '~/composables/use-outer-click'
import { ButtonSize } from '~/components/Button/button-types'

interface ComponentType {
  id: number
  value?: string
  header: boolean
  divider: boolean
  icon?: JSXOutput
  content: JSXChildren
}

export type DropdownSize = 's' | 'm' | 'l'

type DropdownProps = PropsOf<'div'> & {
  'bind:selected': { v: string }
  whenSelect$: (value: string) => void
  label: string
  closeWhenSelect?: boolean
  inline?: boolean
  size?: DropdownSize
  iconRotate?: string | number
}
export const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  label,
  closeWhenSelect = true,
  whenSelect$,
  inline = false,
  size = 'm',
  iconRotate,
  ...props
}) => {
  const childrenToProcess = Array.isArray(children) ? [...children] : [children]

  const components: ComponentType[] = []

  getChild(childrenToProcess, [
    {
      component: DropdownItem,
      foundComponentCallback: (child, index) => {
        components.push({
          id: index,
          value: child.props.value as string | undefined,
          header: Boolean(child.props.header),
          divider: Boolean(child.props.divider),
          icon: child.props.icon as JSXOutput | undefined,
          content: child.children,
        })
      },
    },
  ])

  return (
    <div>
      <InnerDropdown
        components={components}
        label={label}
        bind:selected={props['bind:selected']}
        closeWhenSelect={closeWhenSelect}
        whenSelect$={whenSelect$}
        inline={inline}
        size={size}
        iconRotate={iconRotate}
      />
    </div>
  )
}

type DropdownItemProps = {
  value?: string
  header?: boolean
  divider?: boolean
  icon?: JSXOutput
}
export const DropdownItem = component$<DropdownItemProps>(() => {
  return <Slot />
})

/**
 * Implementation
 */

type InnerDropdownProps = {
  'bind:selected': { v: string }
  whenSelect$: (value: string) => void
  label: string
  closeWhenSelect: boolean
  components: ComponentType[]
  inline: boolean
  size: DropdownSize
  iconRotate?: string | number
}

const InnerDropdown = component$<InnerDropdownProps>(({ label, closeWhenSelect, components, whenSelect$, inline, size, iconRotate, ...props }) => {
  const visible = useSignal(false)
  const dropdownRef = useSignal<HTMLDivElement>()
  const componentsAsSignals = useStore(() => components, { deep: true })

  const toggleVisible = $(() => {
    visible.value = !visible.value
  })
  const TriggerButton = inline ? InnerTriggerInline : InnerTriggerButton

  useDocumentOuterClick([dropdownRef], toggleVisible, visible) // FIXME first double-click

  return (
    <div class="inline-flex relative">
      <div ref={dropdownRef}>
        <TriggerButton onClick$={toggleVisible} label={label} size={size} iconRotate={iconRotate} />
        {visible.value && (
          <div
            role="menu"
            class="w-full z-10 absolute top-10 left-0 divide-y divide-gray-100 rounded shadow focus:outline-none transition-opacity duration-100 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
          >
            <ul tabIndex={0} class="py-1 focus:outline-none">
              {componentsAsSignals.map((comp) => (
                <li role="menuitem" key={comp.id}>
                  {comp.header ? (
                    <InnerDropdownHeader>{comp.content}</InnerDropdownHeader>
                  ) : comp.divider ? (
                    <InnerDropdownDivider />
                  ) : (
                    <InnerDropdownItem
                      icon={comp.icon}
                      handleWhenSelect={$(async () => {
                        // FIXME pas réactif on dirait
                        props['bind:selected'].v = comp.value ?? ''
                        whenSelect$(comp.value ?? '')

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

const InnerDropdownHeader = component$(() => {
  return (
    <>
      <div class="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
        <Slot />
      </div>
      <div class="my-1 h-px bg-gray-100 dark:bg-gray-600" />
    </>
  )
})

const InnerDropdownDivider = component$(() => {
  return <div class="my-1 h-px bg-gray-100 dark:bg-gray-600" />
})

type InnerDropdownItemProps = PropsOf<'button'> & {
  icon?: JSXOutput
  handleWhenSelect?: () => void
}
const InnerDropdownItem = component$<InnerDropdownItemProps>(({ icon, handleWhenSelect, ...props }) => {
  return (
    <button
      type="button"
      class={[
        'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
        {
          'gap-2': !!icon,
        },
      ]}
      onClick$={handleWhenSelect}
      //tabIndex={isActive ? 0 : -1}
      disabled={props.disabled}
    >
      {icon && <>{icon}</>}
      <Slot />
    </button>
  )
})

type InnerTriggerIconProps = PropsOf<'svg'> & {
  rotate?: string | number
}
const InnerTriggerIcon = component$<InnerTriggerIconProps>(({ rotate }) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      class="h-4 w-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
    </svg>
  )
})

type InnerTriggerInlineProps = {
  label: string
  onClick$: () => void
  size: DropdownSize
  iconRotate?: string | number
}
const InnerTriggerInline = component$<InnerTriggerInlineProps>(({ label, size, iconRotate, onClick$ }) => {
  const buttonSizeClasses: Record<DropdownSize, string> = {
    s: 'text-sm px-3 py-1.5',
    m: 'text-sm px-4 py-2',
    l: 'text-base px-5 py-2.5',
  }

  return (
    <button onClick$={onClick$} class={['inline-flex gap-2 items-center', buttonSizeClasses[size]]}>
      {label}
      <InnerTriggerIcon rotate={iconRotate} />
    </button>
  )
})

type InnerTriggerButtonProps = {
  label: string
  onClick$: () => void
  size: DropdownSize
  iconRotate?: string | number
}
const InnerTriggerButton = component$<InnerTriggerButtonProps>(({ label, size, iconRotate, onClick$ }) => {
  const buttonSize: Record<string, ButtonSize> = {
    s: 'sm',
    m: 'md',
    l: 'lg',
  }

  return (
    <Button onClick$={onClick$} size={buttonSize[size]} suffix={<InnerTriggerIcon rotate={iconRotate} />}>
      {label}
    </Button>
  )
})
