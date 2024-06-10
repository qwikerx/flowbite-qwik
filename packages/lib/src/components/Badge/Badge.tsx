import { component$ } from '@builder.io/qwik'
import { BadgeClassesProps, useBadgeClasses } from './composables/use-badge-classes'
import { IconCloseOutline } from 'flowbite-qwik-icons'

export const Badge = component$<BadgeClassesProps>(({ icon: Icon, onClose$, ...props }) => {
  const { badgeClasses, badgeChipsClasses } = useBadgeClasses(props)

  const Tag = props.href ? 'a' : 'span'

  return (
    <Tag {...props} class={badgeClasses.value}>
      {!!Icon && <Icon />}
      {props.content}

      {props.chips && (
        <button onClick$={onClose$} type="button" class={badgeChipsClasses.value} aria-label="Remove">
          <IconCloseOutline class="w-2 h-2" />
          <span class="sr-only">Remove badge</span>
        </button>
      )}
    </Tag>
  )
})
