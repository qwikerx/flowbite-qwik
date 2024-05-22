import { component$ } from '@builder.io/qwik'
import { Tabs, Tab } from '~/components/FWBTabs/FWBTabs'

export default component$(() => {
  return (
    <section id="tabs" class="p-5 max-w-[640px]">
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
          <Tab
            title="Profile"
            icon={
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur
            distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?
          </Tab>
          <Tab
            title="Dashboard"
            icon={
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam
            maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.
          </Tab>
          <Tab
            title="Settings"
            icon={
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
              </svg>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum
            itaque iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.
          </Tab>
          <Tab
            title="Contacts"
            disabled
            icon={
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            }
          >
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
