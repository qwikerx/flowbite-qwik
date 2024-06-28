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
      <NavbarPage withCollapse />
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
})
