import { Component, PropsOf, QRL, Signal, Slot, component$, useComputed$, useId, useSignal, useStyles$, useTask$, ClassList } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useDrawerClasses } from './composables/use-drawer-classes'
import { DrawerPosition } from './drawer-types'
import type { IconProps } from 'flowbite-qwik-icons'
import { IconCloseOutline } from 'flowbite-qwik-icons'
import { isServer } from '@builder.io/qwik/build'

export type DrawerTheme = {
  header?: ClassList
  leftRightWidth?: ClassList
}

export type DrawerProps = PropsOf<'div'> & {
  'bind:open': Signal<boolean>
  title: string
  titleIcon?: Component<IconProps>
  position?: DrawerPosition
  backdrop?: boolean
  preventBodyScroll?: boolean
  onClose$?: QRL<() => void>
  theme?: DrawerTheme
}

export const Drawer = component$<DrawerProps>(
  ({ position = 'left', preventBodyScroll = true, backdrop = true, onClose$, class: classNames, title, titleIcon: TitleIcon, theme, ...attrs }) => {
    const id = useId()
    const drawerRef = useSignal<HTMLDivElement>()

    const isEdge = useComputed$(() => position === 'bottom-edge')
    const internalPosition = useComputed$<DrawerPosition>(() => position)
    const internalBackdrop = useComputed$(() => backdrop)
    const internalTheme = useComputed$(() => theme)

    const { rootClasses, backdropClasses, headerClasses, closeButtonClasses, edgeHandleClasses } = useDrawerClasses(
      attrs['bind:open'],
      isEdge,
      internalPosition,
      internalTheme,
    )

    useStyles$(`
      .no-scroll {
        overflow: hidden;
        -webkit-overflow-scrolling: none;
        overscroll-behavior: none;
      }
    `)

    useTask$(({ track }) => {
      track(() => drawerRef.value)
      track(() => attrs['bind:open'].value)

      if (isServer) return

      if (attrs['bind:open'].value && drawerRef.value) {
        if (preventBodyScroll) {
          document.body.classList.add('no-scroll')
        }
        drawerRef.value.focus()
      }

      if (!attrs['bind:open'].value && preventBodyScroll) {
        document.body.classList.remove('no-scroll')
      }
    })

    return (
      <>
        <div
          tabIndex={-1}
          aria-describedby={`drawer-dialog-${id}`}
          aria-modal="true"
          role="dialog"
          ref={drawerRef}
          class={twMerge(rootClasses.value, clsx(classNames))}
          onKeyDown$={(e) => {
            if (e.key === 'Escape') {
              attrs['bind:open'].value = false
              onClose$?.()
            }
          }}
        >
          <div
            class={headerClasses.value}
            onClick$={() => {
              if (isEdge.value) {
                attrs['bind:open'].value = !attrs['bind:open'].value
              }
            }}
          >
            {!!TitleIcon && <TitleIcon class="me-2.5 h-4 w-4" />}
            {title}

            {isEdge.value ? (
              <span class={edgeHandleClasses} />
            ) : (
              <button
                onClick$={() => {
                  attrs['bind:open'].value = false
                  onClose$?.()
                }}
                class={closeButtonClasses}
              >
                <IconCloseOutline aria-hidden class="h-4 w-4" />
                <span class="sr-only">Close menu</span>
              </button>
            )}
          </div>
          <div
            class={{
              'p-4': isEdge.value,
            }}
          >
            <Slot />
          </div>
        </div>
        {attrs['bind:open'].value && internalBackdrop.value && (
          <div
            class={backdropClasses}
            onClick$={() => {
              attrs['bind:open'].value = false
              onClose$?.()
            }}
          />
        )}
      </>
    )
  },
)
