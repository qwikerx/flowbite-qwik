import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useBreadcrumbClasses } from './composables/use-breadcrumb-classes'

type BreadcrumbProps = {
  solid?: boolean
}

export const Breadcrumb = component$<BreadcrumbProps>(({ solid = false }) => {
  const { breadcrumbClasses, breadcrumbWrapperClasses } = useBreadcrumbClasses(useComputed$(() => solid))
  return (
    <nav aria-label="Breadcrumb" class={breadcrumbWrapperClasses.value}>
      <ol class={breadcrumbClasses.value}>
        <Slot />
      </ol>
    </nav>
  )
})
