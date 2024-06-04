/**
 * title: With icons
 * description: You can add icons to the tabs to make them more visually appealing and easier to understand.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { IconGridOutline, IconGridPlusOutline, IconProfileCardOutline, IconUserCircleSolid, Tab, Tabs } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Tabs>
      <Tab title="Profile" icon={IconProfileCardOutline}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
      </Tab>
      <Tab title="Dashboard" icon={IconGridOutline}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
      </Tab>
      <Tab title="Settings" icon={IconGridPlusOutline}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque
        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
      </Tab>
      <Tab title="Contacts" disabled icon={IconUserCircleSolid}>
        Lorem ipsum dolor...
      </Tab>
    </Tabs>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']
  const rtls = ['rtl', 'ltr']

  return {
    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),
  }
}
