import { component$ } from '@builder.io/qwik'
import { Spinner } from '~/components/Spinner/Spinner'
import { SpinnerColor, SpinnerSize } from '~/components/Spinner/spinner-types'

export default component$(() => {
  return (
    <section id="spinner">
      <h2 class="my-3">Default</h2>
      <div class="flex gap-2">
        <Spinner />
      </div>

      <h2 class="my-3">Prop - color</h2>
      <div class="flex gap-2">
        {(['blue', 'gray', 'green', 'red', 'yellow', 'pink', 'purple', 'white'] as SpinnerColor[]).map((color) => (
          <Spinner size="6" color={color} />
        ))}
      </div>

      <h2 class="my-3">Prop - size</h2>
      <div class="flex gap-2">
        {(['0', '0.5', '1', '1.5', '2', '2.5', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as SpinnerSize[]).map((size) => (
          <Spinner size={size} />
        ))}
      </div>
    </section>
  )
})
