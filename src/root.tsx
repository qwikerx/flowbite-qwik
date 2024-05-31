import './global.css'
import { component$, createContextId, useContextProvider, useSignal, Signal, useContext, useStyles$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city'
import { FlowbiteProvider } from './components/FlowbiteProvider/FlowbiteProvider'
import { ToastPosition } from './components/ToastList/toast-type'
import { FlowbiteProviderHeader } from './components/FlowbiteProvider/FlowbiteProviderHeader'
import { RouterHead } from './components/__RouterHead/__RouterHead'

export const toastPositionContext = createContextId<Signal<ToastPosition>>('toast-position-context')

export default component$(() => {
  useContextProvider(toastPositionContext, useSignal('top-right'))
  const toastPosition = useContext(toastPositionContext)

  useStyles$(`
    .dark {
      color-scheme: dark;
      background: #111827;
    }
    .light {
      color-scheme: light;
      background: #fff;
    }
  `)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
        <FlowbiteProviderHeader />
      </head>
      <body lang="fr">
        <FlowbiteProvider toastPosition={toastPosition.value} theme="blue">
          <RouterOutlet />
        </FlowbiteProvider>
      </body>
    </QwikCityProvider>
  )
})
