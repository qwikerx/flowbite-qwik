/**
 * title: Modular Forms
 * description: Use this example to use it with Modula Forms lib.
 * height: 300
 */

import { $, component$, QRL } from '@builder.io/qwik'
import { Button, Input } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/layout'
import { routeLoader$, StaticGenerateHandler, z } from '@builder.io/qwik-city'
import { formAction$, type InitialValues, SubmitHandler, useForm, zodForm$ } from '@modular-forms/qwik'

type LoginForm = {
  email: string
  password: string
}

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => {
  return {
    email: '',
    password: '',
  }
})

export const useFormAction = formAction$<LoginForm>((values) => {
  console.log('server side', { values })
}, zodForm$(LoginSchema))

export default component$(() => {
  const [, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(LoginSchema),
  })

  const handleSubmit: QRL<SubmitHandler<LoginForm>> = $((values) => {
    console.log('client side', { values })
  })

  return (
    <Form onSubmit$={handleSubmit}>
      <Field name="email">
        {(field, props) => (
          <div>
            <label for={field.name}>Email</label>
            <Input {...props} id={field.name} value={field.value} type="email" required />
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
      <Field name="password">
        {(field, props) => (
          <div>
            <label for={field.name}>Password</label>
            <Input {...props} id={field.name} value={field.value} type="password" required />
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
      <Button class="mt-2" type="submit">
        Login
      </Button>
    </Form>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
