import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'
import { QwikPartytown } from '~/components/Partytown/Partytown'

/**
 * The RouterHead component is placed inside the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} {...(s.props?.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: s.style })} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} {...(s.props?.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: s.script })} />
      ))}

      <QwikPartytown forward={['gtag', 'dataLayer.push']} />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-78YXL53K0Y" />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function (){dataLayer.push(arguments);}
          window.gtag('js', new Date());
          window.gtag('config', 'G-78YXL53K0Y');
          `}
      />
    </>
  )
})
