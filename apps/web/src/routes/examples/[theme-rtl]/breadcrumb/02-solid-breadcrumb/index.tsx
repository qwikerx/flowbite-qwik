/**
 * title: Solid Breadcrumb
 * description: You can alternatively also use the breadcrumb components with a solid background.
 * height: 100
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Breadcrumb } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'

export default component$(() => {
  return (
    <div class="p-3">
      <Breadcrumb solid>
        <Breadcrumb.Item home href="#">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
