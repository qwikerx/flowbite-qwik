/**
 * title: Pills tabs
 * description: If you want to use pills as a style for the tabs component you can do so by using this example.
 */
import { component$ } from '@builder.io/qwik'
import { Tab, Tabs } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Tabs variant="pills">
      <Tab title="First">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
      </Tab>
      <Tab title="Second">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
      </Tab>
      <Tab title="Third">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque
        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
      </Tab>
      <Tab title="Fourth" disabled>
        Lorem ipsum dolor...
      </Tab>
    </Tabs>
  )
})
