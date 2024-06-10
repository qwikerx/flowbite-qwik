import styles from './global.css?inline'
import { component$, createContextId, useContextProvider, useSignal, Signal, useContext, useStyles$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { RouterHead } from '~/components/RouterHead/RouterHead'
import { FlowbiteProvider, FlowbiteProviderHeader } from 'flowbite-qwik'
import type { ToastPosition } from 'flowbite-qwik'

export const toastPositionContext = createContextId<Signal<ToastPosition>>('toast-position-context')

export default component$(() => {
  useContextProvider(toastPositionContext, useSignal('top-right'))
  const toastPosition = useContext(toastPositionContext)

  useStyles$(styles)

  return (
    <QwikCityProvider>
      <head>
        <RouterHead />
        <FlowbiteProviderHeader />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C8NPV5F" height="0" width="0" style="display:none;visibility:hidden" />
        </noscript>
        <FlowbiteProvider toastPosition={toastPosition.value} theme="blue">
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  )
})
