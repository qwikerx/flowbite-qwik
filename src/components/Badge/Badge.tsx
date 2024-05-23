import { component$ } from '@builder.io/qwik'
import { BadgeClassesProps, useBadgeClasses } from './composables/use-badge-classes'

export const Badge = component$<BadgeClassesProps>((props) => {
  const { badgeClasses } = useBadgeClasses(props)

  const Tag = props.href ? 'a' : 'span'

  return (
    <Tag {...props} class={badgeClasses.value}>
      {props.icon && <>{props.icon}</>}
      {props.content}
    </Tag>
  )
})
