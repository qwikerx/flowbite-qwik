import { component$ } from '@builder.io/qwik'
import { Tab, TabPane, Tabs } from '~/components/tabs/tabs'

export default component$(() => {
  return (
    <section id="tabs" class="p-5">
      <h2 class="my-3">Prop - color</h2>
      <div class="flex gap-2">
        <Tabs>
          <Tab id="A" selected>
            Titre A
          </Tab>
          <Tab id="B">Titre B</Tab>
          <Tab id="C">Titre C</Tab>
        </Tabs>
        {/*<TabPanes>*/}
        <TabPane id="A">Contenu A</TabPane>
        <TabPane id="B">Contenu B</TabPane>
        <TabPane id="C">Contenu C</TabPane>
        {/*</TabPanes>*/}
      </div>
    </section>
  )
})
