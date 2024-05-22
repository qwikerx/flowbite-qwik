import './global.css'
import { component$, createContextId, useContextProvider, useSignal, Signal, useContext } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { FlowbiteProvider } from './components/FlowbiteProvider/FlowbiteProvider'
import { ToastPosition } from './components/ToastList/toast-type'

export const toastPositionContext = createContextId<Signal<ToastPosition>>('toast-position-context')

export default component$(() => {
  useContextProvider(toastPositionContext, useSignal<ToastPosition>('top-right'))
  const toastPosition = useContext(toastPositionContext)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body lang="fr">
        <FlowbiteProvider toastPosition={toastPosition.value}>
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  )
})
