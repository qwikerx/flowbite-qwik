import { component$ } from '@builder.io/qwik'
import { TestComp, TestComp1 } from '~/components/test'

export default component$(() => {
  return (
    <section id="test">
      <TestComp>
        <TestComp1>a</TestComp1>
        <TestComp1>b</TestComp1>
      </TestComp>
    </section>
  )
})
