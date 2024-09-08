import { RequestHandler } from '@builder.io/qwik-city'

export const onRequest: RequestHandler = (event) => {
  throw event.redirect(301, '/docs/getting-started/introduction')
}
