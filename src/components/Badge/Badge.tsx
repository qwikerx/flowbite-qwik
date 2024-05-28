import { component$ } from '@builder.io/qwik'
import { BadgeClassesProps, useBadgeClasses } from './composables/use-badge-classes'

export const Badge = component$<BadgeClassesProps>(({ icon: Icon, onClose$, ...props }) => {
  const { badgeClasses, badgeChipsClasses } = useBadgeClasses(props)

  const Tag = props.href ? 'a' : 'span'

  return (
    <Tag {...props} class={badgeClasses.value}>
      {Boolean(Icon) && Icon && <Icon />}
      {props.content}

      {props.chips && (
        <button onClick$={onClose$} type="button" class={badgeChipsClasses.value} aria-label="Remove">
          <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Remove badge</span>
        </button>
      )}
    </Tag>
  )
})
