import { component$, PrefetchServiceWorker } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { NavbarPage } from '~/components/NavbarPage/NavbarPage'
import { TailwindSection } from '~/components/homepage/TailwindSection/TailwindSection'
import { SocialProofSection } from '~/components/homepage/SocialProofSection/SocialProofSection'
import { FigmaSection } from '~/components/homepage/FigmaSection/FigmaSection'
import { ContributorSection } from '~/components/homepage/ContributorSection/ContributorSection'
import { DarkModeSection } from '~/components/homepage/DarkModeSection/DarkModeSection'
import { QwikSection } from '~/components/homepage/QwikSection/QwikSection'
import { ComponentsSection } from '~/components/homepage/ComponentSection/ComponentSection'
import { FeaturedSection } from '~/components/homepage/FeaturedSection/FeaturedSection'
import { HeroSection } from '~/components/homepage/HeroSection/HeroSection'

export default component$(() => {
  return (
    <div>
      <NavbarPage />
      <main class="min-w-0 flex-auto divide-y dark:divide-gray-700">
        <HeroSection />
        <FeaturedSection />
        <ComponentsSection />
        <QwikSection />
        <DarkModeSection />
        <TailwindSection />
        <SocialProofSection />
        <FigmaSection />
        <ContributorSection />
      </main>
      <DocFooter class="lg:px-20" />

      {import.meta.env.PROD && (
        <>
          <PrefetchServiceWorker />
          {/*<PrefetchGraph />*/}
        </>
      )}
    </div>
  )
})

export const head = () => ({
  title: 'Flowbite Qwik - UI Component Library',
  meta: [{ name: 'description', content: '⚡ Flowbite Qwik, component library based on Tailwind CSS' }],
  scripts: [
    ...(import.meta.env.PROD
      ? [
          {
            props: {
              async: true,
              type: 'text/partytown',
              src: 'https://www.googletagmanager.com/gtag/js?id=G-78YXL53K0Y',
            },
          },
          {
            props: {
              type: 'text/partytown',
            },
            script: `
window.dataLayer = window.dataLayer || [];
window.gtag = function (){dataLayer.push(arguments);}
window.gtag('js', new Date());
window.gtag('config', 'G-78YXL53K0Y');
`,
          },
        ]
      : []),
    ...(import.meta.env.PROD
      ? [
          {
            props: {
              defer: true,
              type: 'text/partytown',
              src: 'https://cdn.usefathom.com/script.js',
              ['data-site']: 'ICKPULKH',
            },
          },
        ]
      : []),
  ],
})
