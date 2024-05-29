import { component$ } from '@builder.io/qwik'
import { Tabs, Tab } from '~/components/Tabs/Tabs'
import { IconGridOutline, IconGridPlusOutline, IconProfileCardOutline, IconUserCircleSolid } from '~/components/Icon'

export default component$(() => {
  return (
    <section id="tabs" class="max-w-[640px]">
      <h2 class="my-3">Prop - variant (default)</h2>
      <div class="flex gap-2">
        <Tabs>
          <Tab title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab title="Second">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Fourth" disabled>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>

      <h2 class="my-3">Prop - variant (underline)</h2>
      <div class="flex gap-2">
        <Tabs variant="underline">
          <Tab title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab title="Second">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Fourth" disabled>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>

      <h2 class="my-3">Prop - variant (pills)</h2>
      <div class="flex gap-2">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Fourth" disabled>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>

      <h2 class="my-3">Prop - directive</h2>
      <div class="flex gap-2">
        <Tabs directive="show">
          <Tab title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab title="Second">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Fourth" disabled>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>

      <h2 class="my-3">Tab with icons</h2>
      <div class="flex gap-2">
        <Tabs>
          <Tab title="Profile" icon={<IconProfileCardOutline class="h-4 w-4" />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab title="Dashboard" icon={<IconGridOutline class="h-4 w-4" />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab title="Settings" icon={<IconGridPlusOutline class="h-4 w-4" />}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Contacts" disabled icon={<IconUserCircleSolid class="h-4 w-4" />}>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>

      <h2 class="my-3">Tab pane active</h2>
      <div class="flex gap-2">
        <Tabs>
          <Tab title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab title="Second" active>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Fourth" disabled>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>

      <h2 class="my-3">Tab pane interaction</h2>
      <div class="flex gap-2">
        <Tabs
          directive="show"
          onClickInteraction$={() => {
            alert('Click!')
          }}
        >
          <Tab title="First">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab title="Second">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab title="Third">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab title="Fourth" disabled>
            Lorem ipsum dolor...
          </Tab>
        </Tabs>
      </div>
    </section>
  )
})
