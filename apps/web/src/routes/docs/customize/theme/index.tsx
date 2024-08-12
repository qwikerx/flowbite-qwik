import { component$ } from '@builder.io/qwik'
import { Alert, Button, FlowbiteProvider, Heading, Hr } from 'flowbite-qwik'
import { DocumentPage } from '~/components/DocumentPage/DocumentPages'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <DocumentPage>
      <div>
        <Heading tag="h1">Flowbite Qwik - Theme</Heading>
        <p>Learn how you can change the Tailwind CSS classes used by the components in Flowbite Qwik</p>
      </div>
      <Hr />
      <div>
        <Heading tag="h2">Global color customization</Heading>

        <p>
          Flowbite Qwik allows you to set the default theme color for all components. You can do this by setting the theme prop on the
          FlowbiteProvider. This prop will set the default theme color for all components.
        </p>
        <p>In some cases you might want to set the theme color for a specific component only or on some section of your website.</p>
        <p>
          For example, you can wrap a section of your website with a FlowbiteProvider and set the theme prop to pink. This will set the default theme
          color as pink for all components inside the FlowbiteProvider.
        </p>

        <CodeBlock
          language="tsx"
          expandable={false}
          content={`import { Button, FlowbiteProvider } from "flowbite-qwik"

export default component$(() => {
  return (
   <FlowbiteProvider theme="pink">
      <Button>I'm using a pink theme</Button>
    </FlowbiteProvider>
  )
})
`}
        />
        <div class="mt-5">
          <FlowbiteProvider theme="pink">
            <p>The Theme provider is a component that allows you to set a default theme for all of its child components.</p>
            <Button>I'm using a pink theme</Button>
          </FlowbiteProvider>
        </div>

        <Heading tag="h2">Component customization</Heading>

        <div>
          <p>
            Flowbite Qwik is built on top of Tailwind CSS and it uses Tailwind CSS classes to style the components. This means that you can customize
            the components by changing the Tailwind CSS classes used by the components.
          </p>
          <p>You have a few options, and each has its own pros and cons.</p>
        </div>

        <Heading tag="h3">Option 1: Change the Tailwind CSS classes directly in the component</Heading>
        <p>
          This is the easiest way to customize the components. You can change the Tailwind CSS classes directly in the component via the class prop.
        </p>
        <CodeBlock
          language="tsx"
          expandable={false}
          content={`import { Button } from "flowbite-qwik"

export const CustomButton = component$(() => {
  return <Button class="bg-red-500 hover:bg-red-600">Click me</Button>
})
`}
        />
        <p>
          The downside of this approach is that you have to change the class prop in every component instance. This can be tedious and error-prone.
          Also, some components have nested elements that are not directly exposed, which in some cases makes this approach impossible.
        </p>

        <Heading tag="h3">Option 2: Create a reusable component with a custom theme</Heading>
        <p>
          You can also pass theme={} directly to any component, which will override the theme for that component, but not its children. This is useful
          if you want to create a reusable component with a custom theme.
        </p>
        <Alert color="warning" rounded class="mb-4">
          This feature is highly experimental. Few components can be overloaded by a theme.
        </Alert>
        <CodeBlock
          language="tsx"
          expandable={false}
          content={`import { Card } from "flowbite-qwik"

const customTheme = {
  root: 'bg-red-100 dark:bg-orange-800',
  image: 'opacity-30 dark:opacity-80',
  content: 'p-2'
}

export const CustomCard = component$(() => {
  return (
    <Card
      class="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/mqvec5i4xq0lmxr7yh4k.jpg"
      theme={customTheme}
    >
      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
`}
        />
      </div>
    </DocumentPage>
  )
})

export const head = () => ({
  title: 'Theme - Flowbite Qwik',
  meta: [
    {
      name: 'description',
      content: 'Learn how you can change the Tailwind CSS classes used by the components in Flowbite Qwik',
    },
  ],
})
