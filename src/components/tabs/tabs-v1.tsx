import { $, component$, PropsOf, Slot, useVisibleTask$ } from '@builder.io/qwik'

export const TabsV1 = component$(() => {
  return (
    <div class="flex gap-5 bg-yellow-400">
      <Slot />
    </div>
  )
})

type TabV1Props = PropsOf<'div'> & {
  id: string
  selected?: boolean
}
export const TabV1 = component$<TabV1Props>((props) => {
  const onClick$ = $(() => {
    document.querySelectorAll(`[data-tabpane]`).forEach((item) => item.classList.add('hidden'))
    document.querySelector(`[data-tabpane="${props.id}"]`)?.classList.remove('hidden')
  })

  useVisibleTask$(() => {
    if (props.selected) {
      document.querySelector(`[data-tabpane="${props.id}"]`)?.classList.remove('hidden')
    }
  })

  return (
    <div class={['flex gap-5', { 'bg-yellow-400': props.selected }]} data-tab={props.id} onClick$={onClick$}>
      <Slot />
    </div>
  )
})

type TabPaneV1Props = PropsOf<'div'> & {
  id: string
}
export const TabPaneV1 = component$<TabPaneV1Props>((props) => {
  return (
    <div data-tabpane={props.id} class="hidden">
      <Slot />
    </div>
  )
})
