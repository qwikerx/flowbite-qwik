/**
 * title: Button loading
 * description: Use the Spinner components to indicate a loader animation inside buttons:
 * height: 150
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, useToggle } from 'flowbite-qwik'
import { IconArrowLeftOutline } from 'flowbite-qwik-icons'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  const { value: loading, toggle$ } = useToggle()

  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button disabled={loading.value} loading={loading.value} gradient="purple-blue" outline size="xs" onClick$={toggle$}>
        Click me
      </Button>
      <Button loading={loading.value} gradient="red-yellow" size="sm" onClick$={toggle$}>
        Click me
      </Button>
      <Button loading={loading.value} color="default" loadingPosition="suffix" outline onClick$={toggle$} suffix={IconArrowLeftOutline}>
        Click me
      </Button>
      <Button loading={loading.value} gradient="green-blue" size="lg" onClick$={toggle$}>
        Click me
      </Button>
      <Button loading={loading.value} gradient="pink" size="xl" onClick$={toggle$}>
        Click me
      </Button>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
