import { component$ } from '@builder.io/qwik'
import { BadgeClassesProps, useBadgeClasses } from './composables/use-badge-classes'
import { IconCloseOutline } from 'flowbite-qwik-icons'

export const Badge = component$<BadgeClassesProps>(({ icon: Icon, tag = 'a', onClose$, ...rest }) => {
  const { badgeClasses, badgeChipsClasses } = useBadgeClasses(rest)

  const LinkComponent = tag !== 'a' ? tag : 'a'
  const BadgeComponent = rest.href ? LinkComponent : 'span'

  return (
    <BadgeComponent {...rest} class={badgeClasses.value}>
      {!!Icon && <Icon />}
      {rest.content}

      {rest.chips && (
        <button onClick$={onClose$} type="button" class={badgeChipsClasses.value} aria-label="Remove">
          <IconCloseOutline class="h-2 w-2" />
          <span class="sr-only">Remove badge</span>
        </button>
      )}
    </BadgeComponent>
  )
})
