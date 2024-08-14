import { component$, PropsOf, Slot } from '@builder.io/qwik'

export const DocumentPageContent = component$<PropsOf<'div'>>((attrs) => {
  return (
    <div class="flex" {...attrs}>
      <div class="mx-auto flex min-w-0 max-w-4xl flex-col px-4 pb-12 pt-6 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
        <Slot name="top" />
      </div>
      <div class="right-0 hidden w-64 flex-none py-8 xl:block xl:text-sm">
        <Slot name="bottom" />
      </div>
    </div>
  )
})
