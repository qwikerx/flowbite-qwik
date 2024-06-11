/**
 * title: Card with form
 * description: You can also add form elements inside the card component such as for sign up or login forms.
 * height: 500
 */

import { component$, useSignal } from '@builder.io/qwik'
import { Button, Card, Checkbox, Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'

export default component$(() => {
  const email = useSignal('')
  const password = useSignal('')
  const remember = useSignal(false)

  return (
    <Card class="max-w-sm">
      <form class="flex flex-col gap-4">
        <div>
          <div class="mb-2 block">
            <label for="email1">Your email"</label>
          </div>
          <Input bind:value={email} id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div class="mb-2 block">
            <label for="password1"> Your password</label>
          </div>
          <Input bind:value={password} id="password1" type="password" required />
        </div>
        <div class="flex items-center gap-2">
          <Checkbox bind:checked={remember} />
          <label form="remember">Remember me</label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
