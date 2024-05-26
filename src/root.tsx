import './global.css'
import { component$, createContextId, useContextProvider, useSignal, Signal, useContext, useStyles$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { FlowbiteProvider } from './lib/components/FlowbiteProvider/FlowbiteProvider'
import { ToastPosition } from './lib/components/ToastList/toast-type'
import { FlowbiteProviderHeader } from './lib/components/FlowbiteProvider/FlowbiteProviderHeader'

export const toastPositionContext = createContextId<Signal<ToastPosition>>('toast-position-context')

export default component$(() => {
  useContextProvider(toastPositionContext, useSignal<ToastPosition>('top-right'))
  const toastPosition = useContext(toastPositionContext)

  useStyles$(`
    .dark {
      color-scheme: dark;
      background: #111827;
    }
  `)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <FlowbiteProviderHeader />
      </head>
      <body lang="fr">
        <FlowbiteProvider toastPosition={toastPosition.value}>
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  )
})
