import styles from './global.css?inline'
import { component$, createContextId, useContextProvider, useSignal, Signal, useContext, useStyles$, PrefetchServiceWorker } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { RouterHead } from '~/components/RouterHead/RouterHead'
import { FlowbiteProvider, FlowbiteProviderHeader } from 'flowbite-qwik'
import type { ToastPosition } from 'flowbite-qwik'

export const toastPositionContext = createContextId<Signal<ToastPosition>>('FLOWBITE_TOAST_POSITION_CONTEXT')

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
        <FlowbiteProvider toastPosition={toastPosition.value} theme="blue">
          <RouterOutlet />
        </FlowbiteProvider>
        <PrefetchServiceWorker />
        {/*<PrefetchGraph />*/}
      </body>
    </QwikCityProvider>
  )
})
