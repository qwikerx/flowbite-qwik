import { component$ } from '@builder.io/qwik'
import { DarkModeToggle, Heading, Hr } from 'flowbite-qwik'
import { DocumentPage } from '~/components/DocumentPage/DocumentPages'
import { CodeBlock } from '~/components/CodeBlock/CodeBlock'

export default component$(() => {
  return (
    <DocumentPage>
      <div>
        <Heading tag="h1">Flowbite Qwik - Dark Mode</Heading>
        <p>
          Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the
          library
        </p>
      </div>
      <Hr />
      <div>
        <p>
          Flowbite Qwik comes with dark mode support out of the box, it supports integration with all full-stack frameworks such as Next.js, Remix,
          Astro, Gatsby that are using server-side rendering (SSR).
        </p>

        <Heading tag="h2">Toggle dark mode</Heading>
        <p>
          Surround the contents of your app with the &lt;FlowbiteProviderHeader&gt; component, and add the &lt;DarkThemeToggle&gt; component inside
          it. The &lt;DarkModeToggle&gt; component will automatically detect the current theme and display the correct icon, and allow the user to
          switch between themes as they like.
        </p>
        <p>
          Test it :
          <DarkModeToggle />
        </p>
        <CodeBlock
          language="tsx"
          expandable={false}
          content={`import { DarkModeToggle, FlowbiteProviderHeader } from "flowbite-qwik"

export default component$(() => {
  return (
    <FlowbiteProviderHeader>
      // ...
      <DarkModeToggle />
    </FlowbiteProviderHeader>
  )
})
`}
        />

        <Heading tag="h2">useDarkMode</Heading>
        <p>useDarkMode is the hook reponsible for changing, detecting and persisting the dark mode.</p>
        <p>Theme mode persistence is by default located in the browsers LocalStorage.</p>
        <p>The &lt;DarkModeToggle&gt; component uses useDarkMode hook under the hood.</p>
        <CodeBlock
          language="tsx"
          expandable={false}
          content={`type darkModeTheme = 'light' | 'dark' | undefined

export function useDarkMode() {
  isDark: QRL<() => boolean>
  setDarkModeValue: QRL<(mode: darkModeTheme) => void>
}
`}
        />
      </div>

      <Heading tag="h2">Sync between tabs</Heading>
      <p>The useDarkMode hook automatically keeps all tab instances in sync, no extra configuration needed.</p>
    </DocumentPage>
  )
})

export const head = () => ({
  title: 'Dark Mode - Flowbite Qwik',
  meta: [
    {
      name: 'description',
      content:
        'Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the library',
    },
  ],
})
