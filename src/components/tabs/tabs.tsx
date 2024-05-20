import { $, component$, PropsOf, Slot, useVisibleTask$ } from '@builder.io/qwik'

export const Tabs = component$(() => {
  return (
    <div class="flex gap-5 bg-yellow-400">
      <Slot />
    </div>
  )
})

type TabProps = PropsOf<'div'> & {
  id: string
  selected?: boolean
}
export const Tab = component$<TabProps>((props) => {
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

type TabPaneProps = PropsOf<'div'> & {
  id: string
}
export const TabPane = component$<TabPaneProps>((props) => {
  return (
    <div data-tabpane={props.id} class="hidden">
      <Slot />
    </div>
  )
})
