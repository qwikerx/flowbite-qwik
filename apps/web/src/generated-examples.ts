/**
 * DO NOT EDIT, GENERATED FILE
 */

type Example = {
  title: string
  description: string
  url: string
  content: string
  height: string
}

export const examples: Record<string, Example[]> = {
  accordion: [
    {
      title: 'Default accordion',
      description: 'Use this example to basic accordion.',
      url: '/examples/[theme-rtl]/accordion/01-default-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 1</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 2</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 3</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Always open accordion',
      description: 'Always open prop to makes accordion able to open multiple elements.',
      url: '/examples/[theme-rtl]/accordion/02-always-open-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion alwaysOpen>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 1</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 2</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 3</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Flush accordion',
      description: 'Flush prop removes background color, side borders, and rounded corners',
      url: '/examples/[theme-rtl]/accordion/03-flush-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion flush>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 1</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 2</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 3</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Closed first accordion',
      description: 'First item is not open by default',
      url: '/examples/[theme-rtl]/accordion/04-closed-first-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion openFirstItem={false}>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 1</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 2</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 3</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Styling accordion',
      description: 'You can style accordion content and headers by passing tailwind classes into them or use a theme.',
      url: '/examples/[theme-rtl]/accordion/05-styling-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion theme={{ header: { button: \'py-2\' } }}>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 1</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">Accordion 2</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n      <Accordion.Panel>\n        <Accordion.Header>Accordion 3</Accordion.Header>\n        <Accordion.Content>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to <Link href="/docs/getting-started/introduction/">get started</Link> and start developing websites\n              even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </Accordion.Content>\n      </Accordion.Panel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
  ],
  alert: [
    {
      title: 'Default alert',
      description:
        'The default alert component is a simple alert box with a text inside it, and you can use the color prop to change the color of the alert box and the title prop to add a title to the alert box. Inside the <Alert> component you can add any type of content such as text, images, or other components as they will be considered children of the alert box.',
      url: '/examples/[theme-rtl]/alert/01-default-alert',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Alert } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Alert color="info">\n      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.\n    </Alert>\n  )\n})',
      height: '100',
    },
    {
      title: 'Alert with icon',
      description: 'Use the icon prop to add an icon to the alert box, and you can use any icon from the Flowbite Qwik Icons library.',
      url: '/examples/[theme-rtl]/alert/02-alert-with-icon',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Alert } from 'flowbite-qwik'\nimport { IconInfoCircleOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <Alert color=\"failure\" icon={IconInfoCircleOutline}>\n      <span class=\"font-medium\">Info alert!</span> Change a few things up and try submitting again.\n    </Alert>\n  )\n})",
      height: '100',
    },
    {
      title: 'Dismissible alert',
      description:
        'You can use the onDismiss prop on the <Alert> component to add a dismiss button to the alert box by adding a function inside of it that will be called when the user clicks on the dismiss button.',
      url: '/examples/[theme-rtl]/alert/03-alert-dismissible',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Alert } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Alert\n      color=\"success\"\n      onDismiss$={() => {\n        alert('Alert dismissed!')\n      }}\n    >\n      <span class=\"font-medium\">Info alert!</span> Change a few things up and try submitting again.\n    </Alert>\n  )\n})",
      height: '100',
    },
    {
      title: 'Rounded alert',
      description: 'To make the alert box rounded you can use the rounded prop on the <Alert> component.',
      url: '/examples/[theme-rtl]/alert/04-alert-rounded',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Alert } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Alert color="warning" rounded>\n      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.\n    </Alert>\n  )\n})',
      height: '100',
    },
    {
      title: 'Border accent',
      description: 'Add a border accent to the alert box by applying the withBorderAccent prop on the <Alert> component.',
      url: '/examples/[theme-rtl]/alert/05-alert-with-border',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Alert } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Alert color="warning" withBorderAccent>\n      <span>\n        <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.\n      </span>\n    </Alert>\n  )\n})',
      height: '100',
    },
    {
      title: 'Additional content',
      description: 'Add additional content by using the additionalContent prop and add any type of content inside of it.',
      url: '/examples/[theme-rtl]/alert/06-alert-additional-content',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Alert } from \'flowbite-qwik\'\nimport { IconEyeOutline, IconInfoCircleOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Alert additionalContent={<ExampleAdditionalContent />} color="warning" icon={IconInfoCircleOutline}>\n      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.\n    </Alert>\n  )\n})\n\nconst ExampleAdditionalContent = component$(() => {\n  return (\n    <>\n      <div class="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">\n        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert\n        works with this kind of content.\n      </div>\n      <div class="flex">\n        <button\n          type="button"\n          class="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"\n        >\n          <IconEyeOutline class="-ml-0.5 mr-2 h-4 w-4" />\n          View more\n        </button>\n        <button\n          type="button"\n          class="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"\n        >\n          Dismiss\n        </button>\n      </div>\n    </>\n  )\n})',
      height: '250',
    },
    {
      title: 'Alert All options',
      description: 'This is an example with all the available options and props for the alert component.',
      url: '/examples/[theme-rtl]/alert/07-alert-all-options',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Alert } from \'flowbite-qwik\'\nimport { IconEyeOutline, IconInfoCircleOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Alert\n      additionalContent={<ExampleAdditionalContent />}\n      color="success"\n      icon={IconInfoCircleOutline}\n      onDismiss$={() => {\n        alert(\'Alert dismissed!\')\n      }}\n      rounded\n    >\n      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.\n    </Alert>\n  )\n})\n\nconst ExampleAdditionalContent = component$(() => {\n  return (\n    <>\n      <div class="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">\n        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert\n        works with this kind of content.\n      </div>\n      <div class="flex">\n        <button\n          type="button"\n          class="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"\n        >\n          <IconEyeOutline class="-ml-0.5 mr-2 h-4 w-4" />\n          View more\n        </button>\n        <button\n          type="button"\n          class="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"\n        >\n          Dismiss\n        </button>\n      </div>\n    </>\n  )\n})',
      height: '250',
    },
  ],
  avatar: [
    {
      title: 'Default avatar',
      description:
        "Here's a default example of the <Avatar> component where you can use the img prop to pass the image URL, the alt prop to pass a description of the image for accessibility and the rounded prop to make the avatar rounded.",
      url: '/examples/[theme-rtl]/avatar/01-default-avatar',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar\n        img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n        alt="avatar of Jese"\n        rounded\n      />\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar with border',
      description: 'Use the bordered prop to add a border style to the avatar.',
      url: '/examples/[theme-rtl]/avatar/02-avatar-with-border',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar\n        img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n        alt="avatar of Jese"\n        rounded\n        bordered\n      />\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" bordered />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar placeholder',
      description:
        "If the user doesn't have an image you can simply don't use any image to show a placeholder image, and you can still pass the rounded prop to make the avatar rounded and other options.",
      url: '/examples/[theme-rtl]/avatar/03-avatar-placeholder',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Avatar } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap gap-2\">\n      <Avatar />\n      <Avatar rounded />\n    </div>\n  )\n})",
      height: '100',
    },
    {
      title: 'Placeholder initials',
      description: 'Alternatively to the placeholder image you can use the placeholderInitials prop to show the user initials.',
      url: '/examples/[theme-rtl]/avatar/04-avatar-placeholder-initials',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar placeholderInitials="RR" />\n      <Avatar placeholderInitials="RR" rounded />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Dot indicator',
      description:
        'You can use the status prop to show a dot indicator on the avatar, and you can use the statusPosition prop to change the position of the dot indicator. This is useful to show the user status like online, offline, busy, away, and more.',
      url: '/examples/[theme-rtl]/avatar/05-avatar-dot-indicator',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar\n        img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n        status="online"\n      />\n      <Avatar\n        img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n        rounded\n        status="busy"\n        statusPosition="top-right"\n      />\n      <Avatar\n        img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n        status="offline"\n        statusPosition="bottom-left"\n      />\n      <Avatar\n        img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n        rounded\n        status="away"\n        statusPosition="bottom-right"\n      />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Stacked layout',
      description:
        'Stack multiple avatars together by using the <AvatarGroup> component and by passing the stacked prop to the child components of the group. The <AvatarCounter> component can be used to show the total number of avatars in the group by passing the total prop and a link to the href prop to view all users.',
      url: '/examples/[theme-rtl]/avatar/06-avatar-stacked-layout',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar.Group>\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/on9fjbionkpt1fqhtbov.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/g5dmxlpqgtkar6bb55b6.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          rounded\n          stacked\n        />\n      </Avatar.Group>\n      <Avatar.Group>\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/on9fjbionkpt1fqhtbov.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/g5dmxlpqgtkar6bb55b6.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n          rounded\n          stacked\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n          rounded\n          stacked\n        />\n        <Avatar.GroupCounter total={99} href="#" />\n      </Avatar.Group>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar with text',
      description:
        'Use this example to show an avatar with text (i.e. username, email, etc.) by passing the custom markup inside the <Avatar> component. This is useful for admin dashboard interfaces while the user is logged in.',
      url: '/examples/[theme-rtl]/avatar/07-avatar-with-text',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" rounded>\n      <div class="space-y-1 font-medium dark:text-white">\n        <div>Jese Leos</div>\n        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>\n      </div>\n    </Avatar>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar dropdown',
      description:
        'Use the <Dropdown> component to show a dropdown menu when clicking on the avatar component. This example is often used to show the user settings, account settings, and more.',
      url: '/examples/[theme-rtl]/avatar/08-avatar-dropdown',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar, Dropdown } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="ml-16">\n      <Dropdown\n        as={\n          <Avatar\n            alt="User settings"\n            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n            rounded\n          />\n        }\n      >\n        <Dropdown.Item header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </Dropdown.Item>\n        <Dropdown.Item>Dashboard</Dropdown.Item>\n        <Dropdown.Item>Settings</Dropdown.Item>\n        <Dropdown.Item divider />\n        <Dropdown.Item>Sign out</Dropdown.Item>\n      </Dropdown>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Avatar colors',
      description:
        'If you want to change the default color of the avatar component you can pass the color prop. Colors that you can choose from are gray, light, purple, success, pink, and more.',
      url: '/examples/[theme-rtl]/avatar/09-avatar-colors',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col gap-3">\n      <div class="flex flex-wrap gap-2">\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          rounded\n          bordered\n          color="gray"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          rounded\n          bordered\n          color="failure"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          rounded\n          bordered\n          color="purple"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          rounded\n          bordered\n          color="success"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          rounded\n          bordered\n          color="pink"\n        />\n      </div>\n      <div class="flex flex-wrap gap-2">\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          bordered\n          color="gray"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          bordered\n          color="failure"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          bordered\n          color="purple"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          bordered\n          color="success"\n        />\n        <Avatar\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          bordered\n          color="pink"\n        />\n      </div>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Avatar sizes',
      description:
        'Change the default size of the avatar component by passing the size prop. Sizes that you can choose from are xs, sm, md, lg, and xl.',
      url: '/examples/[theme-rtl]/avatar/10-avatar-sizes',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap items-center gap-2">\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" size="xs" />\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" size="sm" />\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" size="md" />\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" size="lg" />\n      <Avatar img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg" size="xl" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Override image element',
      description:
        'You can override the default image element by passing the img prop to the <Avatar> component. This is useful if you want to use a different image element like <Image>',
      url: '/examples/[theme-rtl]/avatar/11-avatar-override-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar\n        img={\n          <picture>\n            <source\n              media="(min-width: 900px)"\n              srcset="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n            />\n            <source\n              media="(min-width: 480px)"\n              srcset="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n            />\n            <img\n              alt=""\n              src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n              height="48"\n              width="48"\n            />\n          </picture>\n        }\n      />\n    </div>\n  )\n})',
      height: '100',
    },
  ],
  badge: [
    {
      title: 'Default Badge',
      description: 'Use the following badge elements to indicate counts or labels inside or outside components.',
      url: '/examples/[theme-rtl]/badge/01-default-badge',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge type="default" content="Default" />\n      <Badge type="dark" content="Dark" />\n      <Badge type="red" content="Red" />\n      <Badge type="green" content="Green" />\n      <Badge type="yellow" content="Yellow" />\n      <Badge type="indigo" content="Indigo" />\n      <Badge type="purple" content="Purple" />\n      <Badge type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Bordered badge',
      description: 'This example can be used to add a border accent to the badge component.',
      url: '/examples/[theme-rtl]/badge/02-props-bordered',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge size="sm" bordered content="Default" />\n      <Badge size="sm" bordered type="dark" content="Dark" />\n      <Badge size="sm" bordered type="red" content="Red" />\n      <Badge size="sm" bordered type="green" content="Green" />\n      <Badge size="sm" bordered type="yellow" content="Yellow" />\n      <Badge size="sm" bordered type="indigo" content="Indigo" />\n      <Badge size="sm" bordered type="purple" content="Purple" />\n      <Badge size="sm" bordered type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Pills badge',
      description: 'Use this example to make the corners even more rounded like pills for the badge component.',
      url: '/examples/[theme-rtl]/badge/03-props-pills',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge pills content="Default" />\n      <Badge pills type="dark" content="Dark" />\n      <Badge pills type="red" content="Red" />\n      <Badge pills type="green" content="Green" />\n      <Badge pills type="yellow" content="Yellow" />\n      <Badge pills type="indigo" content="Indigo" />\n      <Badge pills type="purple" content="Purple" />\n      <Badge pills type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Badges as links',
      description: 'You can also use badges as anchor elements to link to another page. Prop – href',
      url: '/examples/[theme-rtl]/badge/04-as-link',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge href="#" content="Link" bordered />\n      <Badge href="#" size="sm" content="Link" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Large badge',
      description: 'Use size prop to change the size of the badge component.',
      url: '/examples/[theme-rtl]/badge/05-props-size',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge size="xs" content="Default" />\n      <Badge size="xs" type="dark" content="Dark" />\n      <Badge size="xs" type="red" content="Red" />\n      <Badge size="sm" type="green" content="Green" />\n      <Badge size="sm" type="yellow" content="Yellow" />\n      <Badge size="sm" type="indigo" content="Indigo" />\n      <Badge size="sm" type="purple" content="Purple" />\n      <Badge size="sm" type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Badge with Icon',
      description: 'You can also use SVG icons inside the badge elements.',
      url: '/examples/[theme-rtl]/badge/06-with-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\nimport { IconRocketOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge icon={IconRocketOutline} content="Icon" />\n      <Badge icon={IconRocketOutline} size="sm" content="Icon" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Chips (dismissible badges)',
      description: 'This example can be used to make badges dismissible by adding a close button.',
      url: '/examples/[theme-rtl]/badge/07-props-chips',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        content="Default"\n      />\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="dark"\n        content="Dark"\n      />\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="red"\n        content="Red"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="green"\n        content="Green"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="yellow"\n        content="Yellow"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="indigo"\n        content="Indigo"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="purple"\n        content="Purple"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="pink"\n        content="Pink"\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Badge with Icon only',
      description: 'You can also use badge with only icon.',
      url: '/examples/[theme-rtl]/badge/08-with-icon-only',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\nimport { IconRocketOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Badge icon={IconRocketOutline} size="sm" />\n      <Badge type="dark" icon={IconRocketOutline} size="sm" />\n      <Badge type="green" icon={IconRocketOutline} size="sm" />\n    </div>\n  )\n})',
      height: '100',
    },
  ],
  banner: [
    {
      title: 'Default sticky banner',
      description:
        'Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.',
      url: '/examples/[theme-rtl]/banner/01-default-banner',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Banner, Link } from \'flowbite-qwik\'\nimport { IconCloseOutline, IconShareNodesSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="top">\n        <div class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">\n          <div class="mx-auto flex items-center">\n            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">\n              <IconShareNodesSolid class="mr-4 h-4 w-4" />\n              <span class="[&_p]:inline">\n                New brand identity has been launched for the&nbsp;\n                <Link underline href="https://flowbite.com">\n                  Flowbite Library\n                </Link>\n              </span>\n            </p>\n          </div>\n          <Banner.CollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">\n            <IconCloseOutline class="h-4 w-4" />\n          </Banner.CollapseButton>\n        </div>\n      </Banner>\n      <div class="mx-auto max-w-lg">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-300 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="mb-7 max-w-lg animate-pulse">\n          <div class="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">\n            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
    {
      title: 'Bottom banner position',
      description: 'This example can be used to position the sticky banner to the bottom side of the page instead of the top side.',
      url: '/examples/[theme-rtl]/banner/02-banner-bottom-position',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Banner, Link } from \'flowbite-qwik\'\nimport { IconArrowRightOutline, IconCloseOutline, IconSalePercentOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="bottom">\n        <div class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">\n          <div class="mx-auto flex items-center">\n            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">\n              <span class="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">\n                <IconSalePercentOutline class="h-4 w-4" />\n              </span>\n              <span class="[&_p]:inline">\n                Get 5% commision per sale&nbsp;\n                <Link href="https://flowbite.com" iconRight={IconArrowRightOutline}>\n                  Become a partner\n                </Link>\n              </span>\n            </p>\n          </div>\n          <Banner.CollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">\n            <IconCloseOutline class="h-4 w-4" />\n          </Banner.CollapseButton>\n        </div>\n      </Banner>\n      <div class="mx-auto max-w-lg">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-300 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="mb-7 max-w-lg animate-pulse">\n          <div class="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">\n            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
    {
      title: 'Marketing CTA banner',
      description:
        'Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner. Set a different width by using the max-w-{*} utility classes from Tailwind CSS.',
      url: '/examples/[theme-rtl]/banner/03-banner-marketing-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Banner, Button } from \'flowbite-qwik\'\nimport { IconCloseSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="top">\n        <div class="mx-auto mt-2 flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">\n          <div class="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">\n            <a href="https://flowbite.com/" class="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">\n              <img src="https://flowbite.com/docs/images/logo.svg" class="mr-2 h-6" alt="Flowbite Logo" />\n              <span class="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">Flowbite</span>\n            </a>\n            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">\n              Build websites even faster with components on top of Tailwind CSS\n            </p>\n          </div>\n          <div class="flex shrink-0 items-center gap-2">\n            <Button href="#">Sign up</Button>\n            <Banner.CollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:bg-transparent dark:text-gray-400">\n              <IconCloseSolid class="h-4 w-4" />\n            </Banner.CollapseButton>\n          </div>\n        </div>\n      </Banner>\n      <div class="mx-auto max-w-lg">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-300 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="mb-7 max-w-lg animate-pulse">\n          <div class="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">\n            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
    {
      title: 'Newsletter sign-up banner',
      description:
        'This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.',
      url: '/examples/[theme-rtl]/banner/04-banner-newsletter-signup',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Banner, Button, Input } from \'flowbite-qwik\'\nimport { IconCloseSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const email = useSignal(\'\')\n\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="bottom">\n        <div class="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">\n          <div class="mx-auto flex w-full shrink-0 items-center md:w-auto">\n            <form action="#" class="flex w-full flex-col items-center gap-x-2 md:flex-row md:gap-x-3">\n              <label for="email" class="mb-2 mr-auto w-full shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0">\n                Sign up for our newsletter\n              </label>\n              <Input bind:value={email} id="email" placeholder="Enter your email" required type="email" class="w-full" />\n              <Button type="submit" full>\n                Subscribe\n              </Button>\n            </form>\n          </div>\n          <Banner.CollapseButton\n            color="light"\n            class="absolute right-1 top-1 border-0 bg-transparent text-gray-500 dark:bg-transparent dark:text-gray-400"\n          >\n            <IconCloseSolid class="h-4 w-4" />\n          </Banner.CollapseButton>\n        </div>\n      </Banner>\n      <div class="mx-auto max-w-lg">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-300 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="mb-7 max-w-lg animate-pulse">\n          <div class="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">\n            <svg class="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[380px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[450px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <div class="mb-2.5 h-2 max-w-[500px] rounded-full bg-gray-200 dark:bg-gray-700"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
  ],
  blockquote: [
    {
      title: 'Default blockquote',
      description: 'Use this example to quote an external source inside a <Blockquote> component.',
      url: '/examples/[theme-rtl]/blockquote/01-default-blockquote',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Blockquote } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Blockquote>\n      \"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice\n      for your next SaaS application.\"\n    </Blockquote>\n  )\n})",
      height: '200',
    },
    {
      title: 'Solid background',
      description: 'This example can be used as an alternative style to the default one by applying a solid background color.',
      url: '/examples/[theme-rtl]/blockquote/02-blockquote-solid-background',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Blockquote } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="text-gray-500 dark:text-gray-400">\n        Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By\n        running a usability test, you’ll be able to see how users will interact with your design once it’s live.\n      </p>\n      <Blockquote class="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">\n        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect\n        choice for your next SaaS application."\n      </Blockquote>\n      First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on\n      Tailwind CSS that you can just copy-paste from the documentation.\n    </>\n  )\n})',
      height: '400',
    },
    {
      title: 'Blockquote icon',
      description: 'Use this example to show an icon above the blockquote text content.',
      url: '/examples/[theme-rtl]/blockquote/03-blockquote-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Blockquote } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Blockquote>\n      <svg\n        class="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"\n        aria-hidden="true"\n        xmlns="http://www.w3.org/2000/svg"\n        fill="currentColor"\n        viewBox="0 0 18 14"\n      >\n        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />\n      </svg>\n      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice\n      for your next SaaS application."\n    </Blockquote>\n  )\n})',
      height: '300',
    },
    {
      title: 'Paragraph context',
      description: 'Use this example to show a <Blockquote> component between multiple paragraph elements.',
      url: '/examples/[theme-rtl]/blockquote/04-blockquote-paragraph-context',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Blockquote } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="mb-3 text-gray-500 dark:text-gray-400">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">\n        <p class="mb-3 text-gray-500 dark:text-gray-400">\n          Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n          development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n          changes.\n        </p>\n        <Blockquote class="mb-3">\n          <p class="text-xl font-semibold italic text-gray-900 dark:text-white">\n            " Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect\n            choice for your next SaaS application. "\n          </p>\n        </Blockquote>\n      </div>\n      <p class="mb-3 text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})',
      height: '400',
    },
    {
      title: 'User testimonial',
      description: 'This example can be used for user testimonials by mentioning the author and occupation of the author.',
      url: '/examples/[theme-rtl]/blockquote/05-blockquote-user-testimonial',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar, Blockquote } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <figure class="mx-auto max-w-screen-md text-center">\n      <svg\n        class="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"\n        aria-hidden="true"\n        xmlns="http://www.w3.org/2000/svg"\n        fill="currentColor"\n        viewBox="0 0 18 14"\n      >\n        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />\n      </svg>\n      <Blockquote>\n        <p class="text-2xl font-medium italic text-gray-900 dark:text-white">\n          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect\n          choice for your next SaaS application."\n        </p>\n      </Blockquote>\n      <figcaption class="mt-6 flex items-center justify-center space-x-3">\n        <Avatar\n          rounded\n          size="xs"\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          alt="profile picture"\n        />\n        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">\n          <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>\n          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>\n        </div>\n      </figcaption>\n    </figure>\n  )\n})',
      height: '400',
    },
    {
      title: 'User Review',
      description: 'Use this example to show a user review with rating stars and the name and occupation of the author.',
      url: '/examples/[theme-rtl]/blockquote/06-blockquote-user-review',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar, Blockquote, Rating } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <figure class="max-w-screen-md">\n      <div class="mb-4 flex items-center">\n        <Rating size="md" rating={4} />\n      </div>\n      <Blockquote>\n        <p class="text-2xl font-semibold text-gray-900 dark:text-white">\n          "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect\n          choice for your next SaaS application."\n        </p>\n      </Blockquote>\n      <figcaption class="mt-6 flex items-center space-x-3">\n        <Avatar\n          rounded\n          size="xs"\n          img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n          alt="profile picture"\n        />\n        <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">\n          <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>\n          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>\n        </div>\n      </figcaption>\n    </figure>\n  )\n})',
      height: '400',
    },
    {
      title: 'Alignment',
      description:
        'Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.',
      url: '/examples/[theme-rtl]/blockquote/07-blockquote-alignment',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Blockquote, Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('text-left')\n  const alignments = [\n    { value: 'text-left', name: 'Left (default)' },\n    { value: 'text-center', name: 'Center' },\n    { value: 'text-right', name: 'Right' },\n  ]\n\n  return (\n    <div class=\"flex flex-col gap-5\">\n      <Select bind:value={selected} options={alignments} label=\"Select an alignment\" />\n\n      <Blockquote class={selected.value}>\n        \"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect\n        choice for your next SaaS application.\"\n      </Blockquote>\n    </div>\n  )\n})",
      height: '300',
    },
    {
      title: 'Sizes',
      description: 'Choose from one of the multiple sizes for the default blockquote component based on the surrounding elements and sizes.',
      url: '/examples/[theme-rtl]/blockquote/08-blockquote-size',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Blockquote, Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('text-left')\n  const sizes = [\n    { value: 'text-lg', name: 'Small (default)' },\n    { value: 'text-xl', name: 'Medium' },\n    { value: 'text-2xl', name: 'Large' },\n  ]\n\n  return (\n    <div class=\"flex flex-col gap-5\">\n      <Select bind:value={selected} options={sizes} label=\"Select a size\" />\n\n      <Blockquote class={selected.value}>\n        \"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect\n        choice for your next SaaS application.\"\n      </Blockquote>\n    </div>\n  )\n})",
      height: '300',
    },
  ],
  breadcrumb: [
    {
      title: 'Default Breadcrumb',
      description: 'Use the following breadcrumb example to show the hierarchical structure of pages.',
      url: '/examples/[theme-rtl]/breadcrumb/01-default-breadcrumb',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb>\n        <Breadcrumb.Item home href="#">\n          Home\n        </Breadcrumb.Item>\n        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>\n        <Breadcrumb.Item>Flowbite</Breadcrumb.Item>\n      </Breadcrumb>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Solid Breadcrumb',
      description: 'You can alternatively also use the breadcrumb components with a solid background.',
      url: '/examples/[theme-rtl]/breadcrumb/02-solid-breadcrumb',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <Breadcrumb.Item home href="#">\n          Home\n        </Breadcrumb.Item>\n        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>\n        <Breadcrumb.Item>Flowbite</Breadcrumb.Item>\n      </Breadcrumb>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Breadcrumb with Custom Icons',
      description: 'You can customize the icons for the home and arrow icons in the breadcrumb component.',
      url: '/examples/[theme-rtl]/breadcrumb/03-custom-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb } from \'flowbite-qwik\'\nimport { IconArrowLeftOutline, IconBarsOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <Breadcrumb.Item home href="#" homeIcon={IconBarsOutline}>\n          Home\n        </Breadcrumb.Item>\n        <Breadcrumb.Item href="#" arrowIcon={IconArrowLeftOutline}>\n          Projects\n        </Breadcrumb.Item>\n        <Breadcrumb.Item arrowIcon={IconArrowLeftOutline}>Flowbite</Breadcrumb.Item>\n      </Breadcrumb>\n    </div>\n  )\n})',
      height: '100',
    },
  ],
  button: [
    {
      title: 'Default button',
      description: 'Use these default button styles with multiple colors to indicate an action or link within your website.',
      url: '/examples/[theme-rtl]/button/01-default-button',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button>Default</Button>\n      <Button color="alternative">Alternative</Button>\n      <Button color="dark">Dark</Button>\n      <Button color="light">Light</Button>\n      <Button color="green">Green</Button>\n      <Button color="red">Red</Button>\n      <Button color="yellow">Yellow</Button>\n      <Button color="purple">Purple</Button>\n      <Button color="pink">Pink</Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button sizes',
      description: 'Use these examples if you want to use smaller or larger buttons.',
      url: '/examples/[theme-rtl]/button/02-button-size',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap items-center gap-2">\n      <Button size="xs">Extra Small - xs</Button>\n      <Button size="sm">Small - sm</Button>\n      <Button size="md">Medium - md</Button>\n      <Button size="lg">Large - lg</Button>\n      <Button size="xl">Extra Large - xl</Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button pills',
      description: 'The button pills can be used as an alternative style by using fully rounded edges.',
      url: '/examples/[theme-rtl]/button/03-button-pill',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button color="default" pill>\n        Default\n      </Button>\n      <Button color="alternative" pill>\n        Alternative\n      </Button>\n      <Button color="dark" pill>\n        Dark\n      </Button>\n      <Button color="light" pill>\n        Light\n      </Button>\n      <Button color="green" pill>\n        Green\n      </Button>\n      <Button color="red" pill>\n        Red\n      </Button>\n      <Button color="yellow" pill>\n        Yellow\n      </Button>\n      <Button color="purple" pill>\n        Purple\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button gradient monochrome',
      description:
        'These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.',
      url: '/examples/[theme-rtl]/button/04-button-gradient-monochrome',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button gradient="blue">Blue</Button>\n      <Button gradient="cyan">Cyan</Button>\n      <Button gradient="green">Green</Button>\n      <Button gradient="lime">Lime</Button>\n      <Button gradient="pink">Pink</Button>\n      <Button gradient="purple">Purple</Button>\n      <Button gradient="red">Red</Button>\n      <Button gradient="teal">Teal</Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button gradient duotone',
      description: 'These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.',
      url: '/examples/[theme-rtl]/button/05-button-gradient-duotone',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button gradient="purple-blue">Purple to blue</Button>\n      <Button gradient="cyan-blue">Cyan to blue</Button>\n      <Button gradient="green-blue">Green to blue</Button>\n      <Button gradient="purple-pink">Purple to pink</Button>\n      <Button gradient="pink-orange">Pink to orange</Button>\n      <Button gradient="teal-lime">Teal to lime</Button>\n      <Button gradient="red-yellow">Red to yellow</Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button outline',
      description: 'This incorporates an outline border',
      url: '/examples/[theme-rtl]/button/06-button-outline',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button color="default" outline>\n        Default\n      </Button>\n      <Button color="dark" outline>\n        Dark\n      </Button>\n      <Button color="green" outline>\n        Green\n      </Button>\n      <Button color="red" outline>\n        Red\n      </Button>\n      <Button color="yellow" outline>\n        Yellow\n      </Button>\n      <Button color="purple" outline>\n        Purple\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button outline gradient',
      description:
        'This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.',
      url: '/examples/[theme-rtl]/button/07-button-outline-gradient',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button gradient="purple-blue" outline>\n        Purple to blue\n      </Button>\n      <Button gradient="cyan-blue" outline>\n        Cyan to blue\n      </Button>\n      <Button gradient="green-blue" outline>\n        Green to blue\n      </Button>\n      <Button gradient="purple-pink" outline>\n        Purple to pink\n      </Button>\n      <Button gradient="pink-orange" outline>\n        Pink to orange\n      </Button>\n      <Button gradient="teal-lime" outline>\n        Teal to lime\n      </Button>\n      <Button gradient="red-yellow" outline>\n        Red to yellow\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button colored shadows',
      description: 'These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.',
      url: '/examples/[theme-rtl]/button/08-button-shadow',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button gradient="blue" shadow>\n        Blue with blue\n      </Button>\n      <Button gradient="cyan" shadow>\n        Cyan with cyan\n      </Button>\n      <Button gradient="green" shadow>\n        Green with green\n      </Button>\n      <Button gradient="lime" shadow>\n        Lime with lime\n      </Button>\n      <Button gradient="pink" shadow>\n        Pink with pink\n      </Button>\n      <Button gradient="purple" shadow>\n        Purple with purple\n      </Button>\n      <Button gradient="red" shadow>\n        Red with red\n      </Button>\n      <Button gradient="teal" shadow>\n        Teal with teal\n      </Button>\n      <Button gradient="blue" shadow="red">\n        Blue with red\n      </Button>\n      <Button gradient="cyan" shadow="teal">\n        Cyan with teal\n      </Button>\n      <Button gradient="teal" shadow="purple">\n        Teal with purple\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button square',
      description: 'Sometimes you need a button to indicate an action using only an icon.',
      url: '/examples/[theme-rtl]/button/09-button-square',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\nimport { IconArrowLeftOutline, IconArrowRightOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button gradient="red-yellow" square>\n        <IconArrowRightOutline class="h-5 w-5" />\n      </Button>\n      <Button color="default" pill square>\n        <IconArrowRightOutline class="h-5 w-5" />\n      </Button>\n      <Button color="dark" outline square>\n        <IconArrowLeftOutline class="h-5 w-5" />\n      </Button>\n      <Button color="yellow" outline pill square>\n        <IconArrowLeftOutline class="h-5 w-5" />\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button loading',
      description: 'Use the Spinner components to indicate a loader animation inside buttons:',
      url: '/examples/[theme-rtl]/button/10-button-loading',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, useToggle } from \'flowbite-qwik\'\nimport { IconArrowLeftOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const { value: loading, toggle$ } = useToggle()\n\n  return (\n    <div class="flex flex-wrap items-center gap-2">\n      <Button disabled={loading.value} loading={loading.value} gradient="purple-blue" outline size="xs" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="red-yellow" size="sm" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} color="default" loadingPosition="suffix" outline onClick$={toggle$} suffix={IconArrowLeftOutline}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="green-blue" size="lg" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="pink" size="xl" onClick$={toggle$}>\n        Click me\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button disabled',
      description:
        'Use the following styles to indicate a disabled button. This can be often used inside form elements to disable the submit button before all the form elements have been completed and validated.',
      url: '/examples/[theme-rtl]/button/11-button-disabled',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button color="default" disabled>\n        Default\n      </Button>\n      <Button color="default" outline disabled>\n        Default outline\n      </Button>\n      <Button gradient="red" disabled>\n        Red gradient\n      </Button>\n      <Button gradient="red-yellow" disabled>\n        Red to yellow gradient\n      </Button>\n      <Button gradient="red-yellow" outline disabled>\n        Red to yellow outline\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button as link',
      description: 'You can add a link to a Button component.',
      url: '/examples/[theme-rtl]/button/12-button-as-link',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Button href="https://google.com" target="_blank">\n        Google.com\n      </Button>\n      <Button href="/examples/blue-ltr/button/11-button-disabled">Quickstart</Button>\n      <Button href="/examples/blue-ltr/button/13-button-full" tag={Link}>\n        Internal link\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button full option',
      description: 'Display a button taking the full width of its container',
      url: '/examples/[theme-rtl]/button/13-button-full',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button } from 'flowbite-qwik'\nimport { IconHomeOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap items-center gap-2\">\n      <Button prefix={IconHomeOutline} full>\n        Buy\n      </Button>\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Button slot default',
      description: 'Add content inside the button as default',
      url: '/examples/[theme-rtl]/button/14-button-slot-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\nimport { IconArrowRightOutline, IconArrowRightSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap items-center gap-2">\n      <Button gradient="purple-blue" square>\n        <IconArrowRightSolid class="h-5 w-5" />\n      </Button>\n      <Button color="default" pill square>\n        <IconArrowRightSolid class="h-5 w-5" />\n      </Button>\n      <Button gradient="green-blue" square>\n        Close something\n      </Button>\n      <Button color="default" outline pill square suffix={IconArrowRightOutline}>\n        Open something\n      </Button>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Button slot prefix',
      description: 'Add prefix content inside the button',
      url: '/examples/[theme-rtl]/button/15-button-slot-prefix',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button } from 'flowbite-qwik'\nimport { IconHomeOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap items-center gap-2\">\n      <Button prefix={IconHomeOutline}>Buy</Button>\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Button slot suffix',
      description: 'Add suffix content inside the button',
      url: '/examples/[theme-rtl]/button/16-button-slot-suffix',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button } from 'flowbite-qwik'\nimport { IconArrowRightOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap items-center gap-2\">\n      <Button suffix={IconArrowRightOutline}>Choose plan</Button>\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Button with custom tag',
      description: 'You can use a custom tag for the Button component.',
      url: '/examples/[theme-rtl]/button/17-button-with-custom-tag',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap items-center gap-2">\n      <Button tag="div">I\'am a div</Button>\n      <Button tag="span">I\'am a span</Button>\n    </div>\n  )\n})',
      height: '150',
    },
  ],
  'button-group': [
    {
      title: 'Default button group',
      description:
        'Use this example of the <ButtonGroup> component by adding the Button component as a child element and stack them together. You can also use the color prop to change the color of the buttons.',
      url: '/examples/[theme-rtl]/button-group/01-default-button-group',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, ButtonGroup } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <ButtonGroup>\n      <Button color="light">Profile</Button>\n      <Button color="light">Settings</Button>\n      <Button color="light">Messages</Button>\n    </ButtonGroup>\n  )\n})',
      height: '100',
    },
    {
      title: 'Button group with icons',
      description:
        'Import one of the icons from the flowbite-qwik-icons library and add it as a child element to the <Button> component to create multiple buttons with icons grouped together.',
      url: '/examples/[theme-rtl]/button-group/02-button-group-with-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, ButtonGroup } from \'flowbite-qwik\'\nimport { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <ButtonGroup>\n      <Button color="light" prefix={IconProfileCardOutline}>\n        Profile\n      </Button>\n      <Button color="light" prefix={IconFileSearchOutline}>\n        Settings\n      </Button>\n      <Button color="light" prefix={IconDownloadOutline}>\n        Messages\n      </Button>\n    </ButtonGroup>\n  )\n})',
      height: '100',
    },
    {
      title: 'Button group as links',
      description: 'You can also use the button group component as links.',
      url: '/examples/[theme-rtl]/button-group/03-button-group-as-links',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, ButtonGroup } from \'flowbite-qwik\'\nimport { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <ButtonGroup>\n      <Button href="#profile" color="light" prefix={IconProfileCardOutline}>\n        Profile\n      </Button>\n      <Button href="#settings" color="light" prefix={IconFileSearchOutline}>\n        Settings\n      </Button>\n      <Button href="#messages" color="light" prefix={IconDownloadOutline}>\n        Messages\n      </Button>\n    </ButtonGroup>\n  )\n})',
      height: '100',
    },
    {
      title: 'Button group Outline',
      description: 'Group a series of buttons together on a single line or stack them in a vertical column.',
      url: '/examples/[theme-rtl]/button-group/04-button-group-outline',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, ButtonGroup } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <ButtonGroup outline>\n      <Button color="blue">Profile</Button>\n      <Button color="blue">Settings</Button>\n      <Button color="blue">Messages</Button>\n    </ButtonGroup>\n  )\n})',
      height: '100',
    },
    {
      title: 'Outlined with icon',
      description: 'Group a series of buttons together on a single line or stack them in a vertical column.',
      url: '/examples/[theme-rtl]/button-group/05-button-group-outline-with-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, ButtonGroup } from \'flowbite-qwik\'\nimport { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <ButtonGroup outline>\n      <Button color="red" prefix={IconProfileCardOutline}>\n        Profile\n      </Button>\n      <Button color="red" prefix={IconFileSearchOutline}>\n        Settings\n      </Button>\n      <Button color="red" prefix={IconDownloadOutline}>\n        Messages\n      </Button>\n    </ButtonGroup>\n  )\n})',
      height: '100',
    },
    {
      title: 'Button group event handler',
      description: 'You can use onClick$ option of the Button component to know which one is clicked',
      url: '/examples/[theme-rtl]/button-group/06-button-group-event-handler',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, ButtonGroup } from \'flowbite-qwik\'\nimport { IconDownloadOutline, IconFileSearchOutline, IconProfileCardOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <ButtonGroup>\n      <Button onClick$={() => alert(\'clicked!\')} href="#profile" color="light" prefix={IconProfileCardOutline}>\n        Profile\n      </Button>\n      <Button onClick$={() => alert(\'clicked!\')} href="#settings" color="light" prefix={IconFileSearchOutline}>\n        Settings\n      </Button>\n      <Button onClick$={() => alert(\'clicked!\')} href="#messages" color="light" prefix={IconDownloadOutline}>\n        Messages\n      </Button>\n    </ButtonGroup>\n  )\n})',
      height: '100',
    },
  ],
  card: [
    {
      title: 'Default card',
      description:
        'Use this example to show a simple card component with a title and description and apply the href tag to the <Card> component to set a hyperlink to the card.',
      url: '/examples/[theme-rtl]/card/01-default-card',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card href="#" class="max-w-sm">\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '300',
    },
    {
      title: 'Card with CTA button',
      description: 'By also importing the <Button> component you can add it inside the card to show a call-to-action button.',
      url: '/examples/[theme-rtl]/card/02-card-with-cta-button',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Card, Heading } from \'flowbite-qwik\'\nimport { IconArrowRightOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n      <Button suffix={IconArrowRightOutline}>Read more</Button>\n    </Card>\n  )\n})',
      height: '300',
    },
    {
      title: 'Card with image',
      description: 'Add an image to the card by using the imgSrc prop and set the imgAlt prop to add an alt text to the image.',
      url: '/examples/[theme-rtl]/card/03-card-with-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card\n      class="max-w-sm"\n      imgAlt="Meaningful alt text for an image that is not purely decorative"\n      imgSrc="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/mqvec5i4xq0lmxr7yh4k.jpg"\n    >\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card with custom image',
      description: 'Specify your own image component for the card by using the imgAs prop',
      url: '/examples/[theme-rtl]/card/04-card-with-custom-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card\n      class="max-w-sm"\n      imgAs={\n        <img\n          width="920"\n          height="613"\n          src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/mqvec5i4xq0lmxr7yh4k.jpg"\n          alt="image 1"\n        />\n      }\n    >\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card horizontal',
      description: 'Use the horizontal prop to show the card in a horizontal layout.',
      url: '/examples/[theme-rtl]/card/05-card-horizontal',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card\n      class="max-w-sm"\n      imgSrc="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/js3joe8z5dubh8cjqvcq.jpg"\n      horizontal\n    >\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'User profile card',
      description: 'Use this example to show a user card with a profile picture, name, job title, buttons and a dropdown menu.',
      url: '/examples/[theme-rtl]/card/06-card-user-profile',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Card, Dropdown, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <div class="flex justify-end px-4 pt-4">\n        <Dropdown inline label="">\n          <Dropdown.Item>\n            <a\n              href="#"\n              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"\n            >\n              Edit\n            </a>\n          </Dropdown.Item>\n          <Dropdown.Item>\n            <a\n              href="#"\n              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"\n            >\n              Export Data\n            </a>\n          </Dropdown.Item>\n          <Dropdown.Item>\n            <a\n              href="#"\n              class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"\n            >\n              Delete\n            </a>\n          </Dropdown.Item>\n        </Dropdown>\n      </div>\n      <div class="flex flex-col items-center pb-10">\n        <img\n          alt="Bonnie image"\n          height="96"\n          src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n          width="96"\n          class="mb-3 rounded-full shadow-lg"\n        />\n        <Heading tag="h5" class="mb-">\n          Bonnie Green\n        </Heading>\n        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>\n        <div class="mt-4 flex space-x-3 lg:mt-6">\n          <Button href="#">Add friend</Button>\n          <Button href="#" color="light">\n            Message\n          </Button>\n        </div>\n      </div>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card with form',
      description: 'You can also add form elements inside the card component such as for sign up or login forms.',
      url: '/examples/[theme-rtl]/card/07-card-with-form',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Card, Checkbox, Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const email = useSignal(\'\')\n  const password = useSignal(\'\')\n  const remember = useSignal(false)\n\n  return (\n    <Card class="max-w-sm">\n      <form class="flex flex-col gap-4">\n        <div>\n          <div class="mb-2 block">\n            <label for="email1">Your email"</label>\n          </div>\n          <Input bind:value={email} id="email1" type="email" placeholder="name@flowbite.com" required />\n        </div>\n        <div>\n          <div class="mb-2 block">\n            <label for="password1"> Your password</label>\n          </div>\n          <Input bind:value={password} id="password1" type="password" required />\n        </div>\n        <div class="flex items-center gap-2">\n          <Checkbox bind:checked={remember} />\n          <label form="remember">Remember me</label>\n        </div>\n        <Button type="submit">Submit</Button>\n      </form>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'E-commerce card',
      description:
        'Use this example to show a product card with an image (product preview), title, price, rating stars and buttons built for E-commerce websites.',
      url: '/examples/[theme-rtl]/card/08-card-ecommerce',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Card, Heading, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm" imgAlt="Apple Watch Series 7 in colors pink, silver, and black" imgSrc="/apple-watch.png">\n      <Link href="#">\n        <Heading tag="h5">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</Heading>\n      </Link>\n      <div class="mb-5 mt-2.5 flex items-center">\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <span class="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">5.0</span>\n      </div>\n      <div class="flex items-center justify-between">\n        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>\n        <Button href="#">Add to cart</Button>\n      </div>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card with list',
      description:
        'Use this component to display a card with a list of items such as your latest customers or latest orders that include an image, descriptive text and a link to view more.',
      url: '/examples/[theme-rtl]/card/09-card-with-list',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading, Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <div class="mb-4 flex items-center justify-between">\n        <Heading tag="h5">Latest Customers</Heading>\n        <Link href="#" class="text-sm">\n          View all\n        </Link>\n      </div>\n      <div class="flow-root">\n        <ul class="divide-y divide-gray-200 dark:divide-gray-700">\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img\n                  alt="Neil image"\n                  height="32"\n                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/on9fjbionkpt1fqhtbov.jpg"\n                  width="32"\n                  class="rounded-full"\n                />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>\n            </div>\n          </li>\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img\n                  alt="Bonnie image"\n                  height="32"\n                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n                  width="32"\n                  class="rounded-full"\n                />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>\n            </div>\n          </li>\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img\n                  alt="Michael image"\n                  height="32"\n                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/g5dmxlpqgtkar6bb55b6.jpg"\n                  width="32"\n                  class="rounded-full"\n                />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>\n            </div>\n          </li>\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img\n                  alt="Lana image"\n                  height="32"\n                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n                  width="32"\n                  class="rounded-full"\n                />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>\n            </div>\n          </li>\n          <li class="pb-0 pt-3 sm:pt-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img\n                  alt="Thomas image"\n                  height="32"\n                  src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n                  width="32"\n                  class="rounded-full"\n                />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Pricing card',
      description: 'Use the pricing card component to show the pricing of your product or service.',
      url: '/examples/[theme-rtl]/card/10-card-pricing',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Card, Heading, useFlowbiteThemable } from \'flowbite-qwik\'\nimport { IconCheckCircleSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const { textClasses } = useFlowbiteThemable()\n\n  return (\n    <Card class="max-w-sm">\n      <Heading tag="h5" class="mb-4">\n        Standard plan\n      </Heading>\n      <div class="flex items-baseline text-gray-900 dark:text-white">\n        <span class="text-3xl font-semibold">$</span>\n        <span class="text-5xl font-extrabold tracking-tight">49</span>\n        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>\n      </div>\n      <ul class="my-7 space-y-5">\n        <li class="flex space-x-3">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', textClasses.value]} />\n          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>\n        </li>\n        <li class="flex space-x-3">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', textClasses.value]} />\n          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>\n        </li>\n        <li class="flex space-x-3">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', textClasses.value]} />\n          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', \'text-gray-400 dark:text-gray-500\']} />\n          <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', \'text-gray-400 dark:text-gray-500\']} />\n          <span class="text-base font-normal leading-tight text-gray-500">API Access</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', \'text-gray-400 dark:text-gray-500\']} />\n          <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <IconCheckCircleSolid class={[\'h-5 w-5\', \'text-gray-400 dark:text-gray-500\']} />\n          <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>\n        </li>\n      </ul>\n      <Button>Choose plan</Button>\n    </Card>\n  )\n})',
      height: '600',
    },
    {
      title: 'Custom theme',
      description: 'Use the theme prop to customize styles of the component : root/image/content',
      url: '/examples/[theme-rtl]/card/11-card-custom-theme',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card\n      class="max-w-sm"\n      imgAlt="Meaningful alt text for an image that is not purely decorative"\n      imgSrc="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/mqvec5i4xq0lmxr7yh4k.jpg"\n      theme={{ root: \'bg-red-100 dark:bg-orange-800\', image: \'opacity-30 dark:opacity-80\', content: \'p-2\' }}\n    >\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '600',
    },
  ],
  carousel: [
    {
      title: 'Default carousel',
      description: 'Use this example by adding a series of images inside the <Carousel> component.',
      url: '/examples/[theme-rtl]/carousel/01-default-carousel',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" width="790" height="790" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" width="790" height="790" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" width="790" height="790" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" width="790" height="790" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" width="790" height="790" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Slider content',
      description: 'Instead of images you can also use any type of markup and content inside the carousel such as simple text.',
      url: '/examples/[theme-rtl]/carousel/02-slider-content',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 1</div>\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 2</div>\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 3</div>\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 4</div>\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 5</div>\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Static carousel',
      description:
        'Pass the slideAuto prop to false to the carousel component to make it static and disable the automatic sliding functionality. This does not disable the control or indicator buttons.',
      url: '/examples/[theme-rtl]/carousel/03-static-carousel',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel slideAuto={false}>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Sliding interval',
      description: 'Use the slideInterval prop to set the interval between slides in milliseconds. The default value is 3000.',
      url: '/examples/[theme-rtl]/carousel/04-sliding-interval',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel slideInterval={5000}>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Carousel without controls',
      description: 'Use the noControls prop to hide the controls of the carousel',
      url: '/examples/[theme-rtl]/carousel/05-carousel-without-controls',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel noControls>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Carousel without indicators',
      description: 'Use the noIndicators prop to hide the indicators of the carousel',
      url: '/examples/[theme-rtl]/carousel/06-carousel-without-indicators',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel noIndicators>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Slider complex content',
      description: 'Instead of images or simple texte, we can use any component we need',
      url: '/examples/[theme-rtl]/carousel/07-slider-complex-content',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Carousel, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel class="!h-96">\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">\n          <Card href="#" class="max-w-sm">\n            <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n            <p class="font-normal text-gray-700 dark:text-gray-400">\n              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n            </p>\n          </Card>\n        </div>\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">\n          <Card href="#" class="max-w-sm">\n            <Heading tag="h4">Crystal Clear Oasis</Heading>\n            <p class="font-normal text-gray-700 dark:text-gray-400">\n              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n            </p>\n          </Card>\n        </div>\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <div class="flex h-full items-center justify-center bg-rose-400 dark:bg-rose-700 dark:text-white">\n          <Card href="#" class="max-w-sm">\n            <Heading tag="h4">Lost in the Sands</Heading>\n            <p class="font-normal text-gray-700 dark:text-gray-400">\n              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n            </p>\n          </Card>\n        </div>\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '600',
    },
    {
      title: 'Scrollable carousel',
      description: 'Use this example using the prop "scrollable" to scroll inside the carousel',
      url: '/examples/[theme-rtl]/carousel/08-carousel-scrollable',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel\n      scrollable\n      slideAuto={false}\n      onSlideChanged$={() => {\n        console.log(\'changed !\')\n      }}\n    >\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
    {
      title: 'Pause On Hover',
      description:
        'To conditionally pause the carousel on mouse hover (desktop), or touch and hold (mobile), you can use the pauseOnHover property on the <Carousel> component. Default value is false.',
      url: '/examples/[theme-rtl]/carousel/09-carousel-pause-on-hover',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Carousel pauseOnHover>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n      </Carousel.Slide>\n      <Carousel.Slide>\n        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n      </Carousel.Slide>\n    </Carousel>\n  )\n})',
      height: '300',
    },
  ],
  checkbox: [
    {
      title: 'Checkbox example',
      description: 'Use this default example of a checkbox element in a checked and unchecked state.',
      url: '/examples/[theme-rtl]/checkbox/01-default',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <>\n      <div class=\"p-3\">\n        <Checkbox>Checkbox</Checkbox>\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
    {
      title: 'Disabled state',
      description:
        'This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.',
      url: '/examples/[theme-rtl]/checkbox/02-disabled',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <>\n      <div class=\"p-3\">\n        <Checkbox disabled>Disable</Checkbox>\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
    {
      title: 'Checked state',
      description: 'This example can be used for the checked state of the checkbox component.',
      url: '/examples/[theme-rtl]/checkbox/03-checked',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(true)\n\n  return (\n    <div class=\"flex flex-col gap-3\">\n      Reactive checked value : {String(val.value)}\n      <Checkbox bind:checked={val}>Checked</Checkbox>\n    </div>\n  )\n})",
      height: '100',
    },
    {
      title: 'With link',
      description: 'Use this example if you want to add an anchor link inside the label of the checkbox component.',
      url: '/examples/[theme-rtl]/checkbox/04-with-link',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Checkbox } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(false)\n\n  return (\n    <>\n      <div class="p-3">\n        <Checkbox bind:checked={val}>\n          <a href="#" class="text-blue-500 underline">\n            I agree with terms and conditions.\n          </a>\n        </Checkbox>\n      </div>\n    </>\n  )\n})',
      height: '100',
    },
    {
      title: 'On change event',
      description: 'This example can be used for the onchange event of the checkbox component.',
      url: '/examples/[theme-rtl]/checkbox/05-on-change-event',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Checkbox } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(false)\n\n  return (\n    <div class="flex flex-row gap-6">\n      <div class="flex flex-col gap-3">\n        With no reactive checked value\n        <Checkbox\n          value="case1"\n          onChange$={(state: boolean, value: string) => {\n            alert(`Checkbox state changed to ${state} with value ${value}`)\n          }}\n        >\n          Checkbox\n        </Checkbox>\n      </div>\n      <div class="flex flex-col gap-3">\n        With reactive checked value : {String(val.value)}\n        <Checkbox\n          value="case2"\n          bind:checked={val}\n          onChange$={(state: boolean, value: string) => {\n            alert(`Checkbox state changed to ${state} with value ${value}`)\n          }}\n        >\n          Change state\n        </Checkbox>\n      </div>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Colors',
      description: 'This example can be used for the color of the checkbox component by applying the color attribute to the input element.',
      url: '/examples/[theme-rtl]/checkbox/06-colors',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox, FlowbiteTheme } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(true)\n\n  return (\n    <>\n      <div class=\"flex flex-wrap gap-3 p-3\">\n        {(['blue', 'green', 'red', 'pink', 'purple'] as FlowbiteTheme[]).map((color) => (\n          <Checkbox bind:checked={val} color={color}>\n            {color}\n          </Checkbox>\n        ))}\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
  ],
  clipboard: [
    {
      title: 'Default copy to clipboard',
      description: 'Use this example to copy the content of an input text field by clicking on a button and update the button text.',
      url: '/examples/[theme-rtl]/clipboard/01-default',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Clipboard, Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const inputValue = useSignal(\'\')\n  return (\n    <>\n      <div class="flex max-w-80 gap-3 pt-8">\n        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="block w-full" />\n        <Clipboard valueToCopy="npm install flowbite-qwik" label="Copy" class="h-full" />\n      </div>\n    </>\n  )\n})',
      height: '150',
    },
    {
      title: 'Input with copy button',
      description:
        'This example can be used to copy the content of an input field by clicking on a button with an icon positioned inside the form element and also show a tooltip with a message when the text has been copied.',
      url: '/examples/[theme-rtl]/clipboard/02-with-icon',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Clipboard, Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const inputValue = useSignal(\'\')\n  return (\n    <div class="grid w-full max-w-64 pt-8">\n      <div class="relative">\n        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="col-span-6 block w-full" />\n\n        <Clipboard.WithIcon valueToCopy="npm install flowbite-qwik" class="absolute end-2 top-1/2 inline-flex -translate-y-1/2" />\n      </div>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Copy button with text',
      description:
        'Use this example to show a copy button inside the input field with a text label and icon that updates to a success state when the text has been copied.',
      url: '/examples/[theme-rtl]/clipboard/03-with-icon-text',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Clipboard, Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const inputValue = useSignal(\'\')\n  return (\n    <div class="grid w-full max-w-80 pt-8">\n      <div class="relative">\n        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="col-span-6 block w-full" />\n\n        <Clipboard.WithIconText valueToCopy="npm install flowbite-qwik" class="absolute end-2 top-1/2 inline-flex -translate-y-1/2" />\n      </div>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Custom Tooltip',
      description: 'Use the props `tooltipCopyLabel` and `tooltipCopiedLabel` to customize the tooltip labels of the Clipboard component.',
      url: '/examples/[theme-rtl]/clipboard/04-custom-tooltip',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Clipboard, Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const inputValue = useSignal(\'\')\n  return (\n    <>\n      <div class="flex max-w-80 gap-3 pt-8">\n        <Input placeholder="npm install flowbite-qwik" bind:value={inputValue} disabled readOnly class="block w-full" />\n        <Clipboard\n          valueToCopy="npm install flowbite-qwik"\n          label="Copy"\n          class="h-full"\n          tooltipCopiedLabel="It\'s copied"\n          tooltipCopyLabel="Copy that"\n        />\n      </div>\n    </>\n  )\n})',
      height: '150',
    },
  ],
  'date-picker': [
    {
      title: 'Default Datepicker',
      description: 'Use this example to show a simple datepicker component.',
      url: '/examples/[theme-rtl]/date-picker/01-default-datepicker',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const date = useSignal<Date>()\n\n  return (\n    <>\n      <p class=\"mb-2\">Reactive date : {date.value?.toDateString()}</p>\n      <DatePicker\n        onSelectedDateChanged$={(selectedDate: Date) => {\n          date.value = selectedDate\n        }}\n      />\n    </>\n  )\n})",
      height: '500',
    },
    {
      title: 'Localization',
      description:
        'Use the language prop to set the language of the datepicker component. The labelTodayButton and labelClearButton can also be used to update the text of the buttons.',
      url: '/examples/[theme-rtl]/date-picker/02-datepicker-localization',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { DatePicker } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return <DatePicker language="pt-BR" labelTodayButton="Hoje" labelClearButton="Limpar" />\n})',
      height: '500',
    },
    {
      title: 'Limit the date',
      description: 'By using the minDate and maxDate props you can limit the date range that the user can select.',
      url: '/examples/[theme-rtl]/date-picker/03-datepicker-limit-date',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return <DatePicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />\n})",
      height: '500',
    },
    {
      title: 'Week start',
      description: 'The weekStart prop can be used to set the first day of the week inside the datepicker component.',
      url: '/examples/[theme-rtl]/date-picker/04-datepicker-week-start',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <DatePicker\n      weekStart={1} // Monday\n    />\n  )\n})",
      height: '500',
    },
    {
      title: 'Auto hide',
      description:
        'By setting the autoHide prop you can either enable or disable automatically hiding the datepicker component when selecting a value.',
      url: '/examples/[theme-rtl]/date-picker/05-datepicker-auto-hide',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return <DatePicker autoHide={false} />\n})",
      height: '500',
    },
    {
      title: 'Title',
      description: 'You can use the title prop to set a title for the datepicker component.',
      url: '/examples/[theme-rtl]/date-picker/06-datepicker-title',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return <DatePicker title=\"Flowbite Datepicker\" />\n})",
      height: '500',
    },
    {
      title: 'Inline',
      description: 'Use the inline prop to show the datepicker component without having to click inside an input field.',
      url: '/examples/[theme-rtl]/date-picker/07-datepicker-inline',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return <DatePicker inline />\n})",
      height: '500',
    },
    {
      title: 'Init date',
      description: 'Use this example to show a simple datepicker component with a default date specified for calendar',
      url: '/examples/[theme-rtl]/date-picker/08-datepicker-init-date',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { DatePicker } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const date = useSignal<Date>()\n\n  const fiveDaysBefore = new Date()\n  fiveDaysBefore.setDate(fiveDaysBefore.getDate() - 5)\n\n  return (\n    <>\n      <p class=\"mb-2\">Reactive date : {date.value?.toDateString()}</p>\n      <DatePicker\n        defaultDate={fiveDaysBefore}\n        onSelectedDateChanged$={(selectedDate: Date) => {\n          date.value = selectedDate\n        }}\n      />\n    </>\n  )\n})",
      height: '500',
    },
  ],
  drawer: [
    {
      title: 'Drawer',
      description:
        'Use the Drawer component (or "off-canvas") to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions. You can set multiple options such as the placement, activate body scrolling, show or hide the backdrop and even use the sizeable edge functionality to show a small part of the drawer when it is not shown completely.',
      url: '/examples/[theme-rtl]/drawer/01-default-drawer',
      content:
        "import { component$, Fragment, Signal, Slot, useSignal } from '@builder.io/qwik'\nimport { Button, Drawer, DrawerPosition, Heading, Link } from 'flowbite-qwik'\nimport { IconHomeOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  const isDrawerOpen: Record<string, Signal<boolean>> = {\n    left: useSignal(false),\n    right: useSignal(false),\n    top: useSignal(false),\n    bottom: useSignal(false),\n    'bottom-edge': useSignal(false),\n  }\n\n  return (\n    <section class=\"p-2\">\n      <div>\n        <Heading tag=\"h4\" class=\"my-3\">\n          Choose you drawer\n        </Heading>\n        <div class=\"flex gap-2\">\n          {(['top', 'right', 'bottom', 'left', 'bottom-edge'] as DrawerPosition[]).map((position) => (\n            <Fragment key={position}>\n              <Button\n                onClick$={() => {\n                  isDrawerOpen[position].value = true\n                }}\n              >\n                {position}\n              </Button>\n\n              <Drawer\n                class={{\n                  hidden: position === 'bottom-edge' && isDrawerOpen.bottom.value,\n                }}\n                bind:open={isDrawerOpen[position]}\n                position={position}\n                title={`Drawer ${position}`}\n                titleIcon={IconHomeOutline}\n              >\n                <p class=\"mb-6 text-sm text-gray-500 dark:text-gray-400\">\n                  Supercharge your hiring by taking advantage of our&nbsp;\n                  <Link href=\"#\" underline>\n                    limited-time sale\n                  </Link>\n                  <br />\n                  for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.\n                </p>\n                <div class=\"flex gap-4\">\n                  <Button full>Buy</Button>\n                  <Button color=\"alternative\" full>\n                    See more\n                  </Button>\n                </div>\n              </Drawer>\n            </Fragment>\n          ))}\n        </div>\n        <Slot />\n      </div>\n    </section>\n  )\n})",
      height: '500',
    },
  ],
  dropdown: [
    {
      title: 'Default Dropdown',
      description:
        'Use this example to create a simple dropdown with a list of menu items by adding child <Dropdown.Item> components inside the main <Dropdown> component.',
      url: '/examples/[theme-rtl]/dropdown/01-default-dropdown',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\">\n      <Dropdown.Item>Dashboard</Dropdown.Item>\n      <Dropdown.Item>Settings</Dropdown.Item>\n      <Dropdown.Item>Earnings</Dropdown.Item>\n      <Dropdown.Item>Sign out</Dropdown.Item>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown divider',
      description: "Use the option 'divider' to <Dropdown.Item> component to add a divider between the dropdown items.",
      url: '/examples/[theme-rtl]/dropdown/02-dropdown-divider',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\">\n      <Dropdown.Item>Dashboard</Dropdown.Item>\n      <Dropdown.Item>Settings</Dropdown.Item>\n      <Dropdown.Item divider />\n      <Dropdown.Item>Separated link</Dropdown.Item>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown header',
      description:
        "Use the option 'header' to <Dropdown.Item> component to add a header to the dropdown. You can use this to add a user profile image and name, for example.",
      url: '/examples/[theme-rtl]/dropdown/03-dropdown-header',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown button">\n      <Dropdown.Item header>\n        <span class="block text-sm">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n      </Dropdown.Item>\n      <Dropdown.Item>Dashboard</Dropdown.Item>\n      <Dropdown.Item>Settings</Dropdown.Item>\n      <Dropdown.Item divider />\n      <Dropdown.Item>Sign out</Dropdown.Item>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown items with icon',
      description: 'Add custom icons next to the menu items by using the icon prop on the <Dropdown.Item> component.',
      url: '/examples/[theme-rtl]/dropdown/04-dropdown-items-with-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown } from \'flowbite-qwik\'\nimport { IconHomeOutline, IconSearchSolid, IconTextSizeOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown button">\n      <Dropdown.Item header>\n        <span class="block text-sm">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n      </Dropdown.Item>\n      <Dropdown.Item icon={IconHomeOutline}>Dashboard</Dropdown.Item>\n      <Dropdown.Item icon={IconSearchSolid}>Settings</Dropdown.Item>\n      <Dropdown.Item divider />\n      <Dropdown.Item icon={IconTextSizeOutline}>Sign out</Dropdown.Item>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Inline dropdown',
      description: 'Use the inline prop to make the dropdown appear inline with the trigger element.',
      url: '/examples/[theme-rtl]/dropdown/05-dropdown-inline',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\" inline>\n      <Dropdown.Item>Dashboard</Dropdown.Item>\n      <Dropdown.Item>Settings</Dropdown.Item>\n      <Dropdown.Item divider />\n      <Dropdown.Item>Separated link</Dropdown.Item>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'User avatar',
      description: 'You can use the `as` prop to set the trigger element to an image.',
      url: '/examples/[theme-rtl]/dropdown/06-dropdown-user-avatar',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-5">\n      <Dropdown\n        as={\n          <img\n            class="h-8 w-8 rounded-full"\n            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n            alt="user photo"\n          />\n        }\n      >\n        <Dropdown.Item header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </Dropdown.Item>\n        <Dropdown.Item>Dashboard</Dropdown.Item>\n        <Dropdown.Item>Settings</Dropdown.Item>\n        <Dropdown.Item divider />\n        <Dropdown.Item>Sign out</Dropdown.Item>\n      </Dropdown>\n\n      <Dropdown\n        as={\n          <img\n            class="h-8 w-8 rounded-full"\n            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n            alt="user photo"\n          />\n        }\n      >\n        <Dropdown.Item header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </Dropdown.Item>\n        <Dropdown.Item>Dashboard</Dropdown.Item>\n        <Dropdown.Item>Settings</Dropdown.Item>\n        <Dropdown.Item divider />\n        <Dropdown.Item>Sign out</Dropdown.Item>\n      </Dropdown>\n\n      <Dropdown\n        as={\n          <img\n            class="h-8 w-8 rounded-full"\n            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n            alt="user photo"\n          />\n        }\n      >\n        <Dropdown.Item header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </Dropdown.Item>\n        <Dropdown.Item>Dashboard</Dropdown.Item>\n        <Dropdown.Item>Settings</Dropdown.Item>\n        <Dropdown.Item divider />\n        <Dropdown.Item>Sign out</Dropdown.Item>\n      </Dropdown>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown sizes',
      description: 'The dropdown menus work with buttons of all sizes including smaller or larger ones.',
      url: '/examples/[theme-rtl]/dropdown/07-dropdown-sizes',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown, DropdownSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <>\n      <div class=\"flex gap-5\">\n        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (\n          <Dropdown label=\"Dropdown button\" size={size}>\n            <Dropdown.Item>Dashboard</Dropdown.Item>\n            <Dropdown.Item>Settings</Dropdown.Item>\n          </Dropdown>\n        ))}\n      </div>\n      <div class=\"mt-4 flex gap-5\">\n        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (\n          <Dropdown label=\"Dropdown button\" size={size} inline>\n            <Dropdown.Item>Dashboard</Dropdown.Item>\n            <Dropdown.Item>Settings</Dropdown.Item>\n          </Dropdown>\n        ))}\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown click event handler',
      description: 'Add a custom onClick$ event handler to the <Dropdown.Item> component to handle the click event.',
      url: '/examples/[theme-rtl]/dropdown/08-dropdown-click-event-handler',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\">\n      <Dropdown.Item\n        onClick$={() => {\n          alert('click dashboard')\n        }}\n      >\n        Dashboard\n      </Dropdown.Item>\n      <Dropdown.Item\n        onClick$={() => {\n          alert('click settings')\n        }}\n      >\n        Settings\n      </Dropdown.Item>\n      <Dropdown.Item\n        onClick$={() => {\n          alert('click earnings')\n        }}\n      >\n        Earnings\n      </Dropdown.Item>\n      <Dropdown.Item\n        onClick$={() => {\n          alert('click sign-out')\n        }}\n      >\n        Sign out\n      </Dropdown.Item>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown with checkbox',
      description: 'Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.',
      url: '/examples/[theme-rtl]/dropdown/09-dropdown-with-checkbox',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown checkbox" closeWhenSelect={false}>\n      <Dropdown.Item>\n        <div class="flex items-center">\n          <input\n            id="checkbox-item-1"\n            type="checkbox"\n            value="item-1"\n            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"\n          />\n          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default checkbox\n          </label>\n        </div>\n      </Dropdown.Item>\n      <Dropdown.Item>\n        <div class="flex items-center">\n          <input\n            checked\n            id="checkbox-item-2"\n            type="checkbox"\n            value="item-2"\n            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"\n          />\n          <label for="checkbox-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Checked state\n          </label>\n        </div>\n      </Dropdown.Item>\n      <Dropdown.Item>\n        <div class="flex items-center">\n          <input\n            id="checkbox-item-3"\n            type="checkbox"\n            value="item-3"\n            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"\n          />\n          <label for="checkbox-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default checkbox\n          </label>\n        </div>\n      </Dropdown.Item>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown with radio',
      description: 'Enable more advanced interaction with your users by adding radio input elements inside the dropdown menu.',
      url: '/examples/[theme-rtl]/dropdown/10-dropdown-with-radiobox',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown radio" closeWhenSelect={false}>\n      <Dropdown.Item>\n        <div class="flex items-center">\n          <input\n            id="radio-item-1"\n            type="radio"\n            name="default-radio"\n            value="item-1"\n            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"\n          />\n          <label for="radio-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default radio\n          </label>\n        </div>\n      </Dropdown.Item>\n      <Dropdown.Item>\n        <div class="flex items-center">\n          <input\n            checked\n            id="radio-item-2"\n            type="radio"\n            name="default-radio"\n            value="item-2"\n            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"\n          />\n          <label for="radio-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Checked state\n          </label>\n        </div>\n      </Dropdown.Item>\n      <Dropdown.Item>\n        <div class="flex items-center">\n          <input\n            id="radio-item-3"\n            type="radio"\n            name="default-radio"\n            value="item-3"\n            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"\n          />\n          <label for="radio-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default radio\n          </label>\n        </div>\n      </Dropdown.Item>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown with toggle switch',
      description: 'Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.',
      url: '/examples/[theme-rtl]/dropdown/11-dropdown-with-toggle-switch',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Dropdown, Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const enableNotifications = useSignal(false)\n  const enable2faAuthentication = useSignal(true)\n  const subscribeToNewsletter = useSignal(false)\n\n  return (\n    <div class="flex gap-4">\n      <Dropdown label="Dropdown toggle" closeWhenSelect={false}>\n        <Dropdown.Item>\n          <Toggle label="Enable notifications" bind:checked={enableNotifications} />\n        </Dropdown.Item>\n        <Dropdown.Item>\n          <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />\n        </Dropdown.Item>\n        <Dropdown.Item>\n          <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />\n        </Dropdown.Item>\n      </Dropdown>\n\n      <Dropdown label="Dropdown toggle" closeWhenSelect={false}>\n        <Dropdown.Item>\n          <Toggle label="Enable notifications" bind:checked={enableNotifications} />\n        </Dropdown.Item>\n        <Dropdown.Item>\n          <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />\n        </Dropdown.Item>\n        <Dropdown.Item>\n          <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />\n        </Dropdown.Item>\n      </Dropdown>\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  footer: [
    {
      title: 'Default footer',
      description: 'Use this footer component to show a copyright notice and some helpful website links.',
      url: '/examples/[theme-rtl]/footer/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <Footer.Copyright href="#" by="Flowbite™" />\n\n      <Footer.LinkGroup>\n        <Footer.Link href="#">About</Footer.Link>\n        <Footer.Link href="#">Privacy Policy</Footer.Link>\n        <Footer.Link href="#">Licensing</Footer.Link>\n        <Footer.Link href="#">Contact</Footer.Link>\n      </Footer.LinkGroup>\n    </Footer>\n  )\n})',
      height: '150',
    },
    {
      title: 'Default with Logo',
      description: 'Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.',
      url: '/examples/[theme-rtl]/footer/02-footer-with-logo',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <div class="w-full text-center">\n        <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">\n          <Footer.Brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />\n          <Footer.LinkGroup>\n            <Footer.Link href="#">About</Footer.Link>\n            <Footer.Link href="#">Privacy Policy</Footer.Link>\n            <Footer.Link href="#">Licensing</Footer.Link>\n            <Footer.Link href="#">Contact</Footer.Link>\n          </Footer.LinkGroup>\n        </div>\n        <Footer.Divider />\n        <Footer.Copyright href="#" by="Flowbite™" />\n      </div>\n    </Footer>\n  )\n})',
      height: '200',
    },
    {
      title: 'Social media icons',
      description:
        'This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.',
      url: '/examples/[theme-rtl]/footer/03-footer-with-sitemap-links',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer } from \'flowbite-qwik\'\nimport { IconFacebookSolid, IconGithubSolid, IconDribbbleSolid, IconLinkedinSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <div class="w-full">\n        <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">\n          <div>\n            <Footer.Brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />\n          </div>\n          <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">\n            <div>\n              <Footer.Title title="about" />\n              <Footer.LinkGroup col>\n                <Footer.Link href="#">Flowbite</Footer.Link>\n                <Footer.Link href="#">Tailwind CSS</Footer.Link>\n              </Footer.LinkGroup>\n            </div>\n            <div>\n              <Footer.Title title="Follow us" />\n              <Footer.LinkGroup col>\n                <Footer.Link href="#">Github</Footer.Link>\n                <Footer.Link href="#">Discord</Footer.Link>\n              </Footer.LinkGroup>\n            </div>\n            <div>\n              <Footer.Title title="Legal" />\n              <Footer.LinkGroup col>\n                <Footer.Link href="#">Privacy Policy</Footer.Link>\n                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>\n              </Footer.LinkGroup>\n            </div>\n          </div>\n        </div>\n        <Footer.Divider />\n        <div class="w-full sm:flex sm:items-center sm:justify-between">\n          <Footer.Copyright href="#" by="Flowbite™" />\n          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\n            <Footer.Icon href="#" icon={IconFacebookSolid} />\n            <Footer.Icon href="#" icon={IconGithubSolid} />\n            <Footer.Icon href="#" icon={IconDribbbleSolid} />\n            <Footer.Icon href="#" icon={IconLinkedinSolid} />\n          </div>\n        </div>\n      </div>\n    </Footer>\n  )\n})',
      height: '300',
    },
    {
      title: 'Sitemap links',
      description:
        'If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.',
      url: '/examples/[theme-rtl]/footer/04-footer-with-socials',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer } from \'flowbite-qwik\'\nimport { IconFacebookSolid, IconGithubSolid, IconDribbbleSolid, IconLinkedinSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Footer bgDark>\n      <div class="w-full">\n        <div class="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">\n          <div>\n            <Footer.Title title="Company" />\n            <Footer.LinkGroup col>\n              <Footer.Link href="#">About</Footer.Link>\n              <Footer.Link href="#">Careers</Footer.Link>\n              <Footer.Link href="#">Brand Center</Footer.Link>\n              <Footer.Link href="#">Blog</Footer.Link>\n            </Footer.LinkGroup>\n          </div>\n          <div>\n            <Footer.Title title="help center" />\n            <Footer.LinkGroup col>\n              <Footer.Link href="#">Discord Server</Footer.Link>\n              <Footer.Link href="#">Twitter</Footer.Link>\n              <Footer.Link href="#">Facebook</Footer.Link>\n              <Footer.Link href="#">Contact Us</Footer.Link>\n            </Footer.LinkGroup>\n          </div>\n          <div>\n            <Footer.Title title="legal" />\n            <Footer.LinkGroup col>\n              <Footer.Link href="#">Privacy Policy</Footer.Link>\n              <Footer.Link href="#">Licensing</Footer.Link>\n              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>\n            </Footer.LinkGroup>\n          </div>\n          <div>\n            <Footer.Title title="download" />\n            <Footer.LinkGroup col>\n              <Footer.Link href="#">iOS</Footer.Link>\n              <Footer.Link href="#">Android</Footer.Link>\n              <Footer.Link href="#">Windows</Footer.Link>\n              <Footer.Link href="#">MacOS</Footer.Link>\n            </Footer.LinkGroup>\n          </div>\n        </div>\n        <div class="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">\n          <Footer.Copyright href="#" by="Flowbite™" />\n          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\n            <Footer.Icon href="#" icon={IconFacebookSolid} />\n            <Footer.Icon href="#" icon={IconGithubSolid} />\n            <Footer.Icon href="#" icon={IconDribbbleSolid} />\n            <Footer.Icon href="#" icon={IconLinkedinSolid} />\n          </div>\n        </div>\n      </div>\n    </Footer>\n  )\n})',
      height: '600',
    },
  ],
  heading: [
    {
      title: 'Default heading',
      description: 'Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.',
      url: '/examples/[theme-rtl]/heading/01-default-heading',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Heading } from \'flowbite-qwik\'\nimport { IconArrowRightOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="text-center">\n      <Heading class="mb-4">We invest in the world’s potential</Heading>\n      <p class="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </p>\n\n      <Button href="#" suffix={IconArrowRightOutline}>\n        Learn more\n      </Button>\n    </div>\n  )\n})',
      height: '250',
    },
    {
      title: 'Second-level heading',
      description: 'Use this example of a second-level H2 heading as the main subtitle for each section of your web page.',
      url: '/examples/[theme-rtl]/heading/02-heading-second-level',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Heading, Link } from \'flowbite-qwik\'\nimport { IconAngleRightOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <>\n      <Heading tag="h2">Payments tool for companies</Heading>\n      <p class="my-4 text-lg text-gray-500">\n        Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS\n        and designed in Figma.\n      </p>\n      <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate\n        toil, and deploy changes with ease.\n      </p>\n      <Link href="#" iconRight={IconAngleRightOutline}>\n        Read more\n      </Link>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Highlighted heading',
      description: 'Use this example to highlight a certain portion of the heading text with a different color.',
      url: '/examples/[theme-rtl]/heading/03-highlighted-heading',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Heading, useFlowbiteThemable } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const { textClasses } = useFlowbiteThemable()\n\n  return (\n    <>\n      <Heading tag="h1" class="mb-4">\n        Get back to growth with <span class={textClasses.value}>the world\'s #1</span> CRM.\n      </Heading>\n      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Heading mark',
      description: 'This example can be used to mark one part of the heading text with a solid background for highlighting.',
      url: '/examples/[theme-rtl]/heading/04-heading-mark',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <Heading tag="h1" class="mb-4">\n        Regain <mark class="rounded bg-blue-600 px-2 text-white dark:bg-blue-500">control</mark> over your days\n      </Heading>\n      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Heading underline',
      description:
        'Get started with this example to underline an important part of the heading component using the offset feature from Tailwind CSS.',
      url: '/examples/[theme-rtl]/heading/05-heading-underline',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <Heading tag="h1" class="mb-4">\n        We invest in the <span class="underline-offset-3 underline decoration-blue-400 decoration-8 dark:decoration-blue-600">world’s potential</span>\n      </Heading>\n      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Sizes',
      description:
        'The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.',
      url: '/examples/[theme-rtl]/heading/06-heading-sizes',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Heading, HeadingTag, Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal<HeadingTag>('h1')\n  const sizes = [\n    { value: 'h1', name: 'Heading one (H1 - default)' },\n    { value: 'h2', name: 'Heading two (H2)' },\n    { value: 'h3', name: 'Heading three (H3)' },\n    { value: 'h4', name: 'Heading four (H4)' },\n    { value: 'h5', name: 'Heading five (H5)' },\n    { value: 'h6', name: 'Heading fix (H6)' },\n  ]\n\n  return (\n    <>\n      <Select bind:value={selected} options={sizes} label=\"Select a size\" />\n\n      <Heading tag={selected.value} class=\"mt-4\">\n        We invest in the world’s potential\n      </Heading>\n    </>\n  )\n})",
      height: '200',
    },
  ],
  hr: [
    {
      title: 'Default HR',
      description: 'Use this example to separate text content with a <hr /> horizontal line.',
      url: '/examples/[theme-rtl]/hr/01-default-hr',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Hr } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="text-gray-500 dark:text-gray-400">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <Hr />\n      <p class="text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Trimmed',
      description: 'Use this example to show a shorter version of the horizontal line.',
      url: '/examples/[theme-rtl]/hr/02-hr-trimmed',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Hr } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="text-gray-500 dark:text-gray-400">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <Hr.Trimmed />\n      <p class="text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Icon HR',
      description: 'This example can be used to set a default icon in the middle of the HR element.',
      url: '/examples/[theme-rtl]/hr/03-hr-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Hr } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="text-gray-500 dark:text-gray-400">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <Hr.Icon />\n      <p class="text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Custom icon HR',
      description: 'This example can be used to set a custom icon in the middle of the HR element.',
      url: '/examples/[theme-rtl]/hr/04-hr-custom-icon',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Hr } from 'flowbite-qwik'\nimport { IconAddressCardSolid } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class=\"text-gray-500 dark:text-gray-400\">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <Hr.Icon icon={IconAddressCardSolid} />\n      <p class=\"text-gray-500 dark:text-gray-400\">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})",
      height: '300',
    },
    {
      title: 'HR with Text',
      description: 'Use this example to add a text in the middle of the HR component.',
      url: '/examples/[theme-rtl]/hr/05-hr-text',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Hr } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="text-gray-500 dark:text-gray-400">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <Hr.Text text="or" />\n      <p class="text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'HR Shape',
      description: 'This example can be used to separate content with an HR tag as a shape instead of a line.',
      url: '/examples/[theme-rtl]/hr/06-hr-shape',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Hr } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <p class="text-gray-500 dark:text-gray-400">\n        Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software\n        development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and\n        changes.\n      </p>\n      <Hr.Square />\n      <p class="text-gray-500 dark:text-gray-400">\n        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate\n        toil, and deploy changes with ease, with a complete audit trail for every change.\n      </p>\n    </>\n  )\n})',
      height: '300',
    },
  ],
  input: [
    {
      title: 'Default input',
      description:
        'Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.',
      url: '/examples/[theme-rtl]/input/01-default',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <p class="text-xl">Value : {val.value}</p>\n        <Input bind:value={val} label="Name" placeholder="John Doe" />\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Input sizes',
      description: 'Use the following examples to apply a small, default or large size for the input fields.',
      url: '/examples/[theme-rtl]/input/02-sizes',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <p class="text-xl">Value : {val.value}</p>\n        <div class="flex flex-col gap-3">\n          <Input bind:value={val} label="Small" placeholder="enter your name" size="sm" />\n          <Input bind:value={val} label="Medium" placeholder="enter your name" size="md" />\n          <Input bind:value={val} label="Large" placeholder="enter your name" size="lg" />\n        </div>\n      </div>\n    </>\n  )\n})',
      height: '350',
    },
    {
      title: 'Required',
      description: 'Get started with this example if you want to apply the required state to an input field.',
      url: '/examples/[theme-rtl]/input/03-required',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <Input bind:value={val} required label="First name" placeholder="First name" />\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Disabled state',
      description: 'Get started with this example if you want to apply the disabled state to an input field.',
      url: '/examples/[theme-rtl]/input/04-disabled',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <Input bind:value={val} disabled label="First name" placeholder="First name" />\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Helper Text',
      description: 'Use this example to show a helper text below the input field for additional explanation and links.',
      url: '/examples/[theme-rtl]/input/05-with-helper',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        helper={\n          <>\n            We\'ll never share your details. Read our{\' \'}\n            <a href="#" class="text-blue-600 dark:text-blue-500">\n              Privacy Policy\n            </a>\n            .\n          </>\n        }\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Prefix',
      description: 'Use this example to add a prefix to the input field.',
      url: '/examples/[theme-rtl]/input/06-with-prefix',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\nimport { IconSearchOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        prefix={<IconSearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />}\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Suffix',
      description: 'Use this example to add a suffix to the input field.',
      url: '/examples/[theme-rtl]/input/07-with-suffix',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input, Button } from \'flowbite-qwik\'\nimport { IconSearchOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        size="lg"\n        prefix={<IconSearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />}\n        suffix={<Button>Hello</Button>}\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Input validation',
      description: 'Use this example to add a validation message to the input field.',
      url: '/examples/[theme-rtl]/input/08-validation',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <Input bind:value={val} label="First name" placeholder="First name" validationStatus="success" />\n      <hr class="mt-4 border-0"></hr>\n      <Input bind:value={val} label="First name" placeholder="First name" validationStatus="error" validationMessage="This field is not valid" />\n    </div>\n  )\n})',
      height: '300',
    },
  ],
  jumbotron: [
    {
      title: 'Default jumbotron',
      description: 'Use this default example to show a title, description, and two CTA buttons for the jumbotron component.',
      url: '/examples/[theme-rtl]/jumbotron/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Jumbotron, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Jumbotron>\n      <Jumbotron.Heading tag="h2">We invest in the world’s potential</Jumbotron.Heading>\n      <Jumbotron.SubText>\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </Jumbotron.SubText>\n      <div class="flex justify-center gap-2">\n        <Button>Get started</Button>\n        <Button color="alternative">Learn more</Button>\n      </div>\n    </Jumbotron>\n  )\n})',
      height: '400',
    },
    {
      title: 'Align left',
      description: 'Use this example to align the jumbotron content to the left.',
      url: '/examples/[theme-rtl]/jumbotron/02-align-left',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Jumbotron, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Jumbotron align="left">\n      <Jumbotron.Heading tag="h2">We invest in the world’s potential</Jumbotron.Heading>\n      <Jumbotron.SubText>\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </Jumbotron.SubText>\n      <div class="flex gap-2">\n        <Button>Get started</Button>\n        <Button color="alternative">Learn more</Button>\n      </div>\n    </Jumbotron>\n  )\n})',
      height: '400',
    },
    {
      title: 'Background image',
      description: 'Use this jumbotron to apply a background image with a darkening opacity effect to improve readability.',
      url: '/examples/[theme-rtl]/jumbotron/03-background-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Jumbotron, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Jumbotron class="bg-gray-700 bg-[url(\'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg\')] bg-center bg-no-repeat bg-blend-multiply dark:bg-gray-700">\n      <Jumbotron.Heading tag="h2" class="text-white">\n        We invest in the world’s potential\n      </Jumbotron.Heading>\n      <Jumbotron.SubText class="text-white">\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </Jumbotron.SubText>\n      <div class="flex justify-center gap-2">\n        <Button>Get started</Button>\n        <Button color="alternative">Learn more</Button>\n      </div>\n    </Jumbotron>\n  )\n})',
      height: '400',
    },
  ],
  kbd: [
    {
      title: 'Default KBD',
      description: 'Here’s a list of KBD components that you can use inside any other element.',
      url: '/examples/[theme-rtl]/kbd/01-default-kbd',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Kbd } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap gap-1\">\n      <Kbd>Shift</Kbd>\n      <Kbd>Ctrl</Kbd>\n      <Kbd>Tab</Kbd>\n      <Kbd>Caps Lock</Kbd>\n      <Kbd>Esc</Kbd>\n      <Kbd>Spacebar</Kbd>\n      <Kbd>Enter</Kbd>\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'KBD inside text',
      description: 'Use this example by nesting an inline KBD component inside a paragraph.',
      url: '/examples/[theme-rtl]/kbd/02-kbd-inside-text',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Kbd } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <>\n      Please press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd> to re-render an MDN page.\n    </>\n  )\n})",
      height: '150',
    },
    {
      title: 'KBD inside table',
      description: 'The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.',
      url: '/examples/[theme-rtl]/kbd/03-kbd-inside-table',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Kbd, Table } from \'flowbite-qwik\'\nimport { IconAngleDownSolid, IconAngleLeftSolid, IconAngleRightSolid, IconAngleUpSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Table>\n      <Table.Head>\n        <Table.HeadCell>Key</Table.HeadCell>\n        <Table.HeadCell>Description</Table.HeadCell>\n      </Table.Head>\n      <Table.Body class="divide-y">\n        <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n          <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">\n            <Kbd>Shift</Kbd> <span>or</span> <Kbd>Tab</Kbd>\n          </Table.Cell>\n          <Table.Cell>Navigate to interactive elements</Table.Cell>\n        </Table.Row>\n        <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n          <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">\n            <Kbd>Enter</Kbd> or <Kbd>Spacebar</Kbd>\n          </Table.Cell>\n          <Table.Cell>Ensure elements with ARIA role="button" can be activated with both key commands.</Table.Cell>\n        </Table.Row>\n        <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n          <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">\n            <span class="inline-flex gap-1">\n              <Kbd icon={IconAngleUpSolid} />\n              <Kbd icon={IconAngleDownSolid} />\n            </span>\n            <span> or </span>\n            <span class="inline-flex gap-1">\n              <Kbd icon={IconAngleLeftSolid} />\n              <Kbd icon={IconAngleRightSolid} />\n            </span>\n          </Table.Cell>\n          <Table.Cell>Choose and activate previous/next tab.</Table.Cell>\n        </Table.Row>\n      </Table.Body>\n    </Table>\n  )\n})',
      height: '300',
    },
    {
      title: 'Arrow keys',
      description: 'Use this example to show arrow keys inside the KBD styled element.',
      url: '/examples/[theme-rtl]/kbd/04-kbd-arrow-keys',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Kbd } from 'flowbite-qwik'\nimport { IconAngleDownSolid, IconAngleLeftSolid, IconAngleRightSolid, IconAngleUpSolid } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap gap-1\">\n      <Kbd icon={IconAngleUpSolid} />\n      <Kbd icon={IconAngleDownSolid} />\n      <Kbd icon={IconAngleLeftSolid} />\n      <Kbd icon={IconAngleRightSolid} />\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Letter Keys',
      description: 'Use this example to show letter keys inside the KBD styled element.',
      url: '/examples/[theme-rtl]/kbd/05-kbd-letter-keys',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Kbd } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap gap-1\">\n      <Kbd>Q</Kbd>\n      <Kbd>W</Kbd>\n      <Kbd>E</Kbd>\n      <Kbd>R</Kbd>\n      <Kbd>T</Kbd>\n      <Kbd>Y</Kbd>\n      <Kbd>I</Kbd>\n      <Kbd>O</Kbd>\n      <Kbd>P</Kbd>\n      <Kbd>A</Kbd>\n      <Kbd>S</Kbd>\n      <Kbd>D</Kbd>\n      <Kbd>F</Kbd>\n      <Kbd>G</Kbd>\n      <Kbd>H</Kbd>\n      <Kbd>J</Kbd>\n      <Kbd>K</Kbd>\n      <Kbd>L</Kbd>\n      <Kbd>Z</Kbd>\n      <Kbd>X</Kbd>\n      <Kbd>C</Kbd>\n      <Kbd>V</Kbd>\n      <Kbd>B</Kbd>\n      <Kbd>N</Kbd>\n      <Kbd>M</Kbd>\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Number Keys',
      description: 'Use this example to show a key inside a KBD component from the english numeral system.',
      url: '/examples/[theme-rtl]/kbd/06-kbd-number-keys',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Kbd } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap gap-1\">\n      <Kbd>1</Kbd>\n      <Kbd>2</Kbd>\n      <Kbd>3</Kbd>\n      <Kbd>4</Kbd>\n      <Kbd>5</Kbd>\n      <Kbd>6</Kbd>\n      <Kbd>7</Kbd>\n      <Kbd>8</Kbd>\n      <Kbd>9</Kbd>\n      <Kbd>0</Kbd>\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Function keys',
      description: 'This example can be used to denote function keys inside the KBD component.',
      url: '/examples/[theme-rtl]/kbd/07-kbd-function-keys',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Kbd } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-wrap gap-1\">\n      <Kbd>F1</Kbd>\n      <Kbd>F2</Kbd>\n      <Kbd>F3</Kbd>\n      <Kbd>F4</Kbd>\n      <Kbd>F5</Kbd>\n      <Kbd>F6</Kbd>\n      <Kbd>F7</Kbd>\n      <Kbd>F8</Kbd>\n      <Kbd>F9</Kbd>\n      <Kbd>F10</Kbd>\n      <Kbd>F11</Kbd>\n      <Kbd>F12</Kbd>\n    </div>\n  )\n})",
      height: '150',
    },
  ],
  link: [
    {
      title: 'Default link',
      description: 'Use this example to set default styles to an inline link element.',
      url: '/examples/[theme-rtl]/link/01-default-link',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="text-center">\n      <Link href="#">Read more</Link>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Button',
      description: 'This example can be used to set a hyperlink on a button component.',
      url: '/examples/[theme-rtl]/link/02-link-button',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="text-center">\n      <Link href="#" tag="button">\n        Read more\n      </Link>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Paragraph',
      description: 'Use this example to set a link inside a paragraph with an underline style.',
      url: '/examples/[theme-rtl]/link/03-link-paragraph',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Link } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <p class=\"text-gray-500 dark:text-gray-400\">\n      The free updates that will be provided is based on the{' '}\n      <Link href=\"#\" underline>\n        roadmap\n      </Link>{' '}\n      that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.\n    </p>\n  )\n})",
      height: '100',
    },
    {
      title: 'Icon link',
      description: 'This example can be used to set a custom icon inside the hyperlink element.',
      url: '/examples/[theme-rtl]/link/04-link-icon',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Link } from 'flowbite-qwik'\nimport { IconAngleRightOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <p class=\"text-gray-500 dark:text-gray-400\">\n      500,000 people & companies have made over a million apps with Glide.{' '}\n      <Link href=\"#\" iconRight={IconAngleRightOutline}>\n        Read their stories\n      </Link>\n    </p>\n  )\n})",
      height: '100',
    },
    {
      title: 'CTA link',
      description: 'Use this example to set a hyperlink on a CTA element with text and a custom icon.',
      url: '/examples/[theme-rtl]/link/05-link-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link } from \'flowbite-qwik\'\nimport { IconAngleRightOutline, IconFileSearchOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Link\n      href="#"\n      class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"\n    >\n      <IconFileSearchOutline class="me-3 h-5 w-5" />\n      <span class="w-full">Get started with our Figma Design System</span>\n      <IconAngleRightOutline class="ms-2 h-4 w-4" />\n    </Link>\n  )\n})',
      height: '100',
    },
    {
      title: 'Card link',
      description: 'Use this example to set a hyperlink on a card component.',
      url: '/examples/[theme-rtl]/link/06-link-card',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Heading } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card href="#" class="max-w-sm">\n      <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '300',
    },
  ],
  list: [
    {
      title: 'Default list',
      description:
        'Use this example to create a default unordered list of items using the List component with List.Item child components inside of it.',
      url: '/examples/[theme-rtl]/list/01-default-list',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { List } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <List>\n      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>\n      <List.Item>At least one lowercase character</List.Item>\n      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>\n    </List>\n  )\n})",
      height: '150',
    },
    {
      title: 'Icons',
      description: 'This example can be used to apply custom icons instead of the default bullets for the list items.',
      url: '/examples/[theme-rtl]/list/02-list-icons',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { List } from 'flowbite-qwik'\nimport { IconCheckCircleSolid } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <List>\n      <List.Item icon={IconCheckCircleSolid}>At least 10 characters (and up to 100 characters)</List.Item>\n      <List.Item icon={IconCheckCircleSolid}>At least one lowercase character</List.Item>\n      <List.Item icon={IconCheckCircleSolid}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>\n    </List>\n  )\n})",
      height: '150',
    },
    {
      title: 'Nested',
      description: 'Use this example to nest another list of items inside the parent list element.',
      url: '/examples/[theme-rtl]/list/03-list-nested',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { List } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <List>\n      <List.Item>\n        List item one\n        <List ordered nested>\n          <List.Item>You might feel like you are being really \"organized\" o</List.Item>\n          <List.Item>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</List.Item>\n          <List.Item>Nesting tons of folders in your source code is also not helpful.</List.Item>\n        </List>\n      </List.Item>\n      <List.Item>\n        List item two\n        <List ordered nested>\n          <List.Item>I'm not sure if we'll bother styling more than two levels deep.</List.Item>\n          <List.Item>Two is already too much, three is guaranteed to be a bad idea.</List.Item>\n          <List.Item>If you nest four levels deep you belong in prison.</List.Item>\n        </List>\n      </List.Item>\n      <List.Item>\n        List item three\n        <List ordered nested>\n          <List.Item>Again please don't nest lists if you want</List.Item>\n          <List.Item>Nobody wants to look at this.</List.Item>\n          <List.Item>I'm upset that we even have to bother styling this.</List.Item>\n        </List>\n      </List.Item>\n    </List>\n  )\n})",
      height: '400',
    },
    {
      title: 'Unstyled',
      description: 'Use the unstyled prop to disable the list style bullets or numbers.',
      url: '/examples/[theme-rtl]/list/04-list-unstyled',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { List } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <List unstyled>\n      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>\n      <List.Item>At least one lowercase character</List.Item>\n      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>\n    </List>\n  )\n})",
      height: '150',
    },
    {
      title: 'Ordered list',
      description: 'Use the ordered prop tag to create an ordered list of items with numbers.',
      url: '/examples/[theme-rtl]/list/05-list-ordered',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { List } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <List ordered>\n      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>\n      <List.Item>At least one lowercase character</List.Item>\n      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>\n    </List>\n  )\n})",
      height: '150',
    },
    {
      title: 'Advanced layout',
      description: 'This example can be used to show more details for each list item such as the user’s name, email and profile picture.',
      url: '/examples/[theme-rtl]/list/06-list-advanced-layout',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar, List } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <List unstyled class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">\n      <List.Item class="pb-3 sm:pb-4">\n        <div class="flex items-center space-x-4 rtl:space-x-reverse">\n          <Avatar\n            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n            alt="Neil image"\n            rounded\n            size="sm"\n          />\n          <div class="min-w-0 flex-1">\n            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>\n            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n          </div>\n          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>\n        </div>\n      </List.Item>\n      <List.Item class="py-3 sm:py-4">\n        <div class="flex items-center space-x-4 rtl:space-x-reverse">\n          <Avatar\n            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462567/flowbite-qwik/zqvjllre0haavqbwqw0f.jpg"\n            alt="Neil image"\n            rounded\n            size="sm"\n          />\n          <div class="min-w-0 flex-1">\n            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>\n            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n          </div>\n          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>\n        </div>\n      </List.Item>\n      <List.Item class="py-3 sm:py-4">\n        <div class="flex items-center space-x-4 rtl:space-x-reverse">\n          <Avatar\n            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n            alt="Neil image"\n            rounded\n            size="sm"\n          />\n          <div class="min-w-0 flex-1">\n            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>\n            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n          </div>\n          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>\n        </div>\n      </List.Item>\n      <List.Item class="py-3 sm:py-4">\n        <div class="flex items-center space-x-4 rtl:space-x-reverse">\n          <Avatar\n            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n            alt="Neil image"\n            rounded\n            size="sm"\n          />\n          <div class="min-w-0 flex-1">\n            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>\n            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n          </div>\n          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>\n        </div>\n      </List.Item>\n      <List.Item class="pb-0 pt-3 sm:pt-4">\n        <div class="flex items-center space-x-4 rtl:space-x-reverse">\n          <Avatar\n            img="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/v0w8f2cf2xxxas8ad1jl.jpg"\n            alt="Neil image"\n            rounded\n            size="sm"\n          />\n          <div class="min-w-0 flex-1">\n            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>\n            <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n          </div>\n          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>\n        </div>\n      </List.Item>\n    </List>\n  )\n})',
      height: '400',
    },
    {
      title: 'Horizontal list',
      description: 'Use this example to create a horizontally aligned list of items.',
      url: '/examples/[theme-rtl]/list/07-list-horizontal',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { List } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <List horizontal>\n      <List.Item>About</List.Item>\n      <List.Item>Premium</List.Item>\n      <List.Item>Campaigns</List.Item>\n      <List.Item>Blog</List.Item>\n      <List.Item>Affiliate Program</List.Item>\n      <List.Item>FAQs</List.Item>\n      <List.Item>Contact</List.Item>\n    </List>\n  )\n})",
      height: '100',
    },
  ],
  'list-group': [
    {
      title: 'Default list group',
      description:
        'Use the default example to create a simple list of items inside a menu by using the ListGroup component with ListGroup.Item child components inside of it.',
      url: '/examples/[theme-rtl]/list-group/01-default-list-group',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { ListGroup } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex justify-center">\n      <ListGroup class="w-48">\n        <ListGroup.Item>Profile</ListGroup.Item>\n        <ListGroup.Item>Settings</ListGroup.Item>\n        <ListGroup.Item>Messages</ListGroup.Item>\n        <ListGroup.Item disabled>Download</ListGroup.Item>\n      </ListGroup>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'List items as links',
      description: 'Convert the list items into links by adding the href prop to the ListGroup.Item component, first item has the active prop',
      url: '/examples/[theme-rtl]/list-group/02-list-items-as-links',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { ListGroup } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex justify-center">\n      <ListGroup class="w-48">\n        <ListGroup.Item href="#" active>\n          Profile\n        </ListGroup.Item>\n        <ListGroup.Item href="#">Settings</ListGroup.Item>\n        <ListGroup.Item href="#">Messages</ListGroup.Item>\n        <ListGroup.Item href="#">Download</ListGroup.Item>\n      </ListGroup>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'List group with buttons',
      description: 'To create custom actions inside the list group, use the onClick$ prop on the ListGroup.Item component.',
      url: '/examples/[theme-rtl]/list-group/03-list-group-with-buttons',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { ListGroup } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex justify-center\">\n      <ListGroup class=\"w-48\">\n        <ListGroup.Item onClick$={() => alert('Profile clicked!')} active>\n          Profile\n        </ListGroup.Item>\n        <ListGroup.Item>Settings</ListGroup.Item>\n        <ListGroup.Item>Messages</ListGroup.Item>\n        <ListGroup.Item>Download</ListGroup.Item>\n      </ListGroup>\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'List group with icons',
      description: 'Add icons to the list group items by using the icon prop on the ListGroup.Item component.',
      url: '/examples/[theme-rtl]/list-group/04-list-group-with-icons',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { ListGroup } from 'flowbite-qwik'\nimport { IconAdjustmentsVerticalOutline, IconDownloadOutline, IconMessagesOutline, IconUserCircleOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex justify-center\">\n      <ListGroup class=\"w-48\">\n        <ListGroup.Item icon={IconUserCircleOutline} active>\n          Profile\n        </ListGroup.Item>\n        <ListGroup.Item icon={IconAdjustmentsVerticalOutline}>Settings</ListGroup.Item>\n        <ListGroup.Item icon={IconMessagesOutline}>Messages</ListGroup.Item>\n        <ListGroup.Item icon={IconDownloadOutline}>Download</ListGroup.Item>\n      </ListGroup>\n    </div>\n  )\n})",
      height: '200',
    },
  ],
  modal: [
    {
      title: 'Default modal',
      description:
        'Use the <Modal> component to show a dialog element to the user with a header, body, and footer where you can add any type of content such as text or form elements. The visibility of the component can be set by passing a boolean value to the bind:show prop on the <Modal> component.',
      url: '/examples/[theme-rtl]/modal/01-default-modal',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const defaultModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <Button\n        onClick$={() => {\n          defaultModalVisible.value = true\n        }}\n      >\n        Open Modal\n      </Button>\n      <Modal\n        header={<div class="flex items-center text-lg">Terms of Service</div>}\n        footer={\n          <div class="flex justify-between">\n            <Button\n              onClick$={() => {\n                defaultModalVisible.value = false\n              }}\n              color="alternative"\n            >\n              Decline\n            </Button>\n            <Button\n              onClick$={() => {\n                defaultModalVisible.value = false\n              }}\n              color="green"\n            >\n              I accept\n            </Button>\n          </div>\n        }\n        bind:show={defaultModalVisible}\n        onClickOutside$={() => {\n          console.log(\'click outside !\')\n        }}\n      >\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n          updating their terms of service agreements to comply.\n        </p>\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data\n          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally\n          affect them.\n        </p>\n      </Modal>\n    </div>\n  )\n})',
      height: '600',
    },
    {
      title: 'Modal sizes',
      description:
        'You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.',
      url: '/examples/[theme-rtl]/modal/02-modal-sizes',
      content:
        "import { component$, Signal, useSignal, useStore } from '@builder.io/qwik'\nimport { Button, Modal, ModalSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const sizeModalVisible = useStore<Record<string, Signal<boolean>>>({\n    xs: useSignal(false),\n    md: useSignal(false),\n    xl: useSignal(false),\n    ['5xl']: useSignal(false),\n  })\n\n  return (\n    <ul class=\"flex gap-2\">\n      {['xs', 'md', 'xl', '5xl'].map((size) => (\n        <li key={size}>\n          <Button\n            onClick$={() => {\n              sizeModalVisible[size].value = true\n            }}\n          >\n            {size.toUpperCase()} Modal\n          </Button>\n          <Modal size={size as ModalSize} header={<div class=\"flex items-center text-lg\">Size {size}</div>} bind:show={sizeModalVisible[size]}>\n            <p class=\"text-base leading-relaxed text-gray-500 dark:text-gray-400\">\n              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n              updating their terms of service agreements to comply.\n            </p>\n            {size !== 'xs' && (\n              <p class=\"text-base leading-relaxed text-gray-500 dark:text-gray-400\">\n                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of\n                data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could\n                personally affect them.\n              </p>\n            )}\n          </Modal>\n        </li>\n      ))}\n    </ul>\n  )\n})",
      height: '600',
    },
    {
      title: 'Modal escapable',
      description:
        'The escapable property is true by default to improve user experience and accessibility. In some situations, your user may be required to interact with the modal content. If this is the case, you can set the notEscapable property to true. The developer can then choose when they want to close the modal.',
      url: '/examples/[theme-rtl]/modal/03-modal-escapable',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const escapeModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <Button\n        onClick$={() => {\n          escapeModalVisible.value = true\n        }}\n      >\n        Open Not Escapable Modal\n      </Button>\n      <Modal\n        notEscapable\n        header={<div class="flex items-center text-lg">Terms of Service</div>}\n        footer={\n          <div class="flex justify-between">\n            <Button\n              onClick$={() => {\n                escapeModalVisible.value = false\n              }}\n              color="alternative"\n            >\n              Decline\n            </Button>\n          </div>\n        }\n        bind:show={escapeModalVisible}\n      >\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n          updating their terms of service agreements to comply.\n        </p>\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data\n          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally\n          affect them.\n        </p>\n      </Modal>\n    </div>\n  )\n})',
      height: '600',
    },
    {
      title: 'Modal persistent',
      description: 'Clicking outside the element or pressing esc key will not send close event.',
      url: '/examples/[theme-rtl]/modal/04-modal-persistent',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const persistentModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <Button\n        onClick$={() => {\n          persistentModalVisible.value = true\n        }}\n      >\n        Open Persistent Modal\n      </Button>\n      <Modal\n        notEscapable\n        persistent\n        header={<div class="flex items-center text-lg">Terms of Service</div>}\n        footer={\n          <div class="flex justify-between">\n            <Button\n              onClick$={() => {\n                persistentModalVisible.value = false\n              }}\n              color="alternative"\n            >\n              Decline\n            </Button>\n          </div>\n        }\n        bind:show={persistentModalVisible}\n      >\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n          updating their terms of service agreements to comply.\n        </p>\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data\n          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally\n          affect them.\n        </p>\n      </Modal>\n    </div>\n  )\n})',
      height: '600',
    },
    {
      title: 'Pop-up modal',
      description:
        'You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.',
      url: '/examples/[theme-rtl]/modal/05-modal-popup',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\nimport { IconBullhornSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const popupModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <Button\n        onClick$={() => {\n          popupModalVisible.value = true\n        }}\n      >\n        Open Modal\n      </Button>\n      <Modal bind:show={popupModalVisible} size="md" popup>\n        <div class="text-center">\n          <IconBullhornSolid class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />\n\n          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>\n          <div class="flex justify-center gap-2">\n            <Button color="red">Yes, I\'m sure</Button>\n            <Button outline>No, cancel</Button>\n          </div>\n        </div>\n      </Modal>\n    </div>\n  )\n})',
      height: '600',
    },
  ],
  navbar: [
    {
      title: 'Default Navbar',
      description:
        'Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.',
      url: '/examples/[theme-rtl]/navbar/01-default-navbar',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Navbar } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </Navbar.Brand>\n      <Navbar.Toggle />\n      <Navbar.Collapse>\n        <Navbar.Link href="/navbars" active>\n          Home\n        </Navbar.Link>\n        <Navbar.Link tag={Link} href="/navbars">\n          About\n        </Navbar.Link>\n        <Navbar.Link href="/navbars">Services</Navbar.Link>\n        <Navbar.Link href="/navbars">Pricing</Navbar.Link>\n        <Navbar.Link href="/navbars">Contact</Navbar.Link>\n      </Navbar.Collapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with CTA button',
      description: 'Use the following navbar element to show a call to action button alongside the logo and page links.',
      url: '/examples/[theme-rtl]/navbar/02-with-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Navbar } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </Navbar.Brand>\n      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">\n        <Button>Start</Button>\n        <Navbar.Toggle />\n      </div>\n      <Navbar.Collapse>\n        <Navbar.Link href="/navbars" active>\n          Home\n        </Navbar.Link>\n        <Navbar.Link href="/navbars">About</Navbar.Link>\n        <Navbar.Link href="/navbars">Services</Navbar.Link>\n        <Navbar.Link href="/navbars">Pricing</Navbar.Link>\n        <Navbar.Link href="/navbars">Contact</Navbar.Link>\n      </Navbar.Collapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with dropdown',
      description: 'This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.',
      url: '/examples/[theme-rtl]/navbar/03-with-dropdown',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, Navbar } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </Navbar.Brand>\n      <div class="flex items-center md:order-2">\n        <Dropdown\n          as={\n            <img\n              class="h-8 w-8 rounded-full"\n              src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n              alt="user photo"\n            />\n          }\n        >\n          <Dropdown.Item header>\n            <span class="block text-sm">Bonnie Green</span>\n            <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n          </Dropdown.Item>\n          <Dropdown.Item>Dashboard</Dropdown.Item>\n          <Dropdown.Item>Settings</Dropdown.Item>\n          <Dropdown.Item>Earnings</Dropdown.Item>\n          <Dropdown.Item divider />\n          <Dropdown.Item>Sign out</Dropdown.Item>\n        </Dropdown>\n        <Navbar.Toggle />\n      </div>\n      <Navbar.Collapse>\n        <Navbar.Link href="/navbars" active>\n          Home\n        </Navbar.Link>\n        <Navbar.Link href="/navbars">About</Navbar.Link>\n        <Navbar.Link href="/navbars" tag="div">\n          <Dropdown label="Services" inline>\n            <Dropdown.Item>Dashboard</Dropdown.Item>\n            <Dropdown.Item>Settings</Dropdown.Item>\n            <Dropdown.Item>Earnings</Dropdown.Item>\n          </Dropdown>\n        </Navbar.Link>\n        <Navbar.Link href="/navbars">Pricing</Navbar.Link>\n        <Navbar.Link href="/navbars">Contact</Navbar.Link>\n      </Navbar.Collapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with search',
      description: 'Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.',
      url: '/examples/[theme-rtl]/navbar/04-with-search',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input, Navbar } from \'flowbite-qwik\'\nimport { IconSearchOutline } from \'flowbite-qwik-icons\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  const searchValue = useSignal(\'\')\n\n  return (\n    <Navbar fluid rounded>\n      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </Navbar.Brand>\n      <div class="flex items-center md:order-2">\n        <IconSearchOutline class="me-1 h-5 w-5 text-gray-500 dark:text-gray-400 md:hidden" />\n        <Input\n          bind:value={searchValue}\n          placeholder="Search ..."\n          class="hidden md:block"\n          prefix={<IconSearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />}\n        />\n        <Navbar.Toggle />\n      </div>\n      <Navbar.Collapse>\n        <Navbar.Link href="/navbars" active>\n          Home\n        </Navbar.Link>\n        <Navbar.Link href="/navbars">About</Navbar.Link>\n        <Navbar.Link href="/navbars">Services</Navbar.Link>\n      </Navbar.Collapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with separator',
      description: 'The separator props add a separator under the navbar',
      url: '/examples/[theme-rtl]/navbar/05-navbar-separator',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Navbar } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded separator>\n      <Navbar.Brand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="h-8 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </Navbar.Brand>\n      <Navbar.Toggle />\n      <Navbar.Collapse>\n        <Navbar.Link href="/navbars" active>\n          Home\n        </Navbar.Link>\n        <Navbar.Link tag={Link} href="/navbars">\n          About\n        </Navbar.Link>\n        <Navbar.Link href="/navbars">Services</Navbar.Link>\n        <Navbar.Link href="/navbars">Pricing</Navbar.Link>\n        <Navbar.Link href="/navbars">Contact</Navbar.Link>\n      </Navbar.Collapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
  ],
  pagination: [
    {
      title: 'Default pagination',
      description:
        'Use the following list of pagination items based on two sizes powered by Tailwind CSS utility classes to indicate a series of content for your website.',
      url: '/examples/[theme-rtl]/pagination/01-default',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Pagination } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class=\"flex gap-3 p-3 text-center\">\n        <Pagination totalPages={100} currentPage={currentPage} />\n      </div>\n    </>\n  )\n})",
      height: '150',
    },
    {
      title: 'Pagination with icons',
      description: 'Add next and previous icons to the pagination component by passing the showIcons prop.',
      url: '/examples/[theme-rtl]/pagination/02-with-icons',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Pagination } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class="flex gap-3 p-3 text-center">\n        <Pagination totalPages={100} currentPage={currentPage} showIcons previousLabel="Go back" nextLabel="Go forward" />\n      </div>\n    </>\n  )\n})',
      height: '150',
    },
    {
      title: 'Pagination with icons only',
      description: 'Add next and previous icons only to the pagination component by passing the showIcons prop and no labels.',
      url: '/examples/[theme-rtl]/pagination/03-with-icons-only',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Pagination } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class=\"flex gap-3 p-3 text-center\">\n        <Pagination totalPages={100} currentPage={currentPage} showIcons />\n      </div>\n    </>\n  )\n})",
      height: '150',
    },
    {
      title: 'Pagination with custom icons',
      description: 'Add custom icons to the pagination component by passing the showIcons prop and no labels.',
      url: '/examples/[theme-rtl]/pagination/04-with-custom-icons',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Pagination } from 'flowbite-qwik'\nimport { IconArrowLeftSolid, IconArrowRightSolid } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class=\"flex gap-3 p-3 text-center\">\n        <Pagination totalPages={100} currentPage={currentPage} showIcons nextIcon={IconArrowRightSolid} previousIcon={IconArrowLeftSolid} />\n      </div>\n    </>\n  )\n})",
      height: '150',
    },
    {
      title: 'Table data navigation',
      description: 'Use this example show table data navigation by using the layout="table" prop.',
      url: '/examples/[theme-rtl]/pagination/05-table-layout',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Pagination } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class="flex gap-3 p-3 text-center">\n        <Pagination layout="table" totalPages={100} currentPage={currentPage} />\n      </div>\n    </>\n  )\n})',
      height: '150',
    },
    {
      title: 'Table data navigation with icons',
      description: 'Show icons for the next and previous control buttons for table navigation by passing the showIcons prop.',
      url: '/examples/[theme-rtl]/pagination/06-table-layout-with-icons',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Pagination } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class="flex gap-3 p-3 text-center">\n        <Pagination layout="table" totalPages={100} currentPage={currentPage} />\n      </div>\n    </>\n  )\n})',
      height: '150',
    },
    {
      title: 'With custom button',
      description: 'Customize the pagination buttons by passing a custom button component.',
      url: '/examples/[theme-rtl]/pagination/07-with-custom-button',
      content:
        "import { component$, useSignal, Slot } from '@builder.io/qwik'\nimport { Pagination, PaginationButtonProps } from 'flowbite-qwik'\n\nconst CustomButton = component$<PaginationButtonProps>(({ active, ...props }) => {\n  return (\n    <button\n      type=\"button\"\n      class={[\n        'h-10 w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',\n        {\n          'bg-orange-500 text-white hover:bg-orange-600 hover:text-white dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600 dark:hover:text-white':\n            active,\n        },\n      ]}\n      {...props}\n    >\n      <Slot />\n    </button>\n  )\n})\nexport default component$(() => {\n  const currentPage = useSignal(1)\n\n  return (\n    <>\n      <div class=\"flex gap-3 p-3 text-center\">\n        <Pagination totalPages={100} currentPage={currentPage} paginationButton={CustomButton} />\n      </div>\n    </>\n  )\n})",
      height: '150',
    },
  ],
  'progress-bar': [
    {
      title: 'Default progress bar',
      description:
        'Use this example to show a progress bar where you can set the progress rate using the progress prop from Qwik which should be a number from 1 to 100.',
      url: '/examples/[theme-rtl]/progress-bar/01-default-progress-bar',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { ProgressBar } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return <ProgressBar progress={45} />\n})",
      height: '100',
    },
    {
      title: 'Progress bar with labels',
      description:
        'Use this example to show a progress bar with a label. You can set the label text using the textLabel prop and the progress text using the labelText prop.',
      url: '/examples/[theme-rtl]/progress-bar/02-progress-bar-with-label',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { ProgressBar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return <ProgressBar progress={50} textLabel="Flowbite" size="lg" labelProgress labelText />\n})',
      height: '100',
    },
    {
      title: 'Label positioning',
      description:
        'This example shows how you can position the label text inside the progress bar by using the Qwik props called progressLabelPosition and textLabelPosition on the <ProgressBar> component in Qwik.',
      url: '/examples/[theme-rtl]/progress-bar/03-progress-bar-label-positioning',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { ProgressBar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <ProgressBar progress={45} progressLabelPosition="inside" textLabel="Flowbite" textLabelPosition="outside" size="lg" labelProgress labelText />\n  )\n})',
      height: '100',
    },
    {
      title: 'Sizing',
      description:
        'The size prop from Qwik can be used on the <ProgressBar> component to set the size of the progress bar. You can choose from sm, md, lg and xl.',
      url: '/examples/[theme-rtl]/progress-bar/04-progress-bar-sizing',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { ProgressBar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col gap-2">\n      <div class="text-base font-medium dark:text-white">Small</div>\n      <ProgressBar progress={45} size="sm" color="dark" />\n      <div class="text-base font-medium dark:text-white">Default</div>\n      <ProgressBar progress={45} size="md" color="dark" />\n      <div class="text-lg font-medium dark:text-white">Large</div>\n      <ProgressBar progress={45} size="lg" color="dark" />\n      <div class="text-lg font-medium dark:text-white">Extra Large</div>\n      <ProgressBar progress={45} size="xl" color="dark" />\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Colors',
      description:
        'Set your own custom colors for the progress bar component by using the color prop from Qwik and the utility classes from Tailwind CSS.',
      url: '/examples/[theme-rtl]/progress-bar/05-progress-bar-colors',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { ProgressBar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col gap-2">\n      <div class="text-base font-medium">Dark</div>\n      <ProgressBar progress={45} color="dark" />\n      <div class="text-base font-medium text-blue-700">Blue</div>\n      <ProgressBar progress={45} color="blue" />\n      <div class="text-base font-medium text-red-700">Red</div>\n      <ProgressBar progress={45} color="red" />\n      <div class="text-base font-medium text-green-700">Green</div>\n      <ProgressBar progress={45} color="green" />\n      <div class="text-base font-medium text-yellow-700">Yellow</div>\n      <ProgressBar progress={45} color="yellow" />\n      <div class="text-base font-medium text-indigo-700">Indigo</div>\n      <ProgressBar progress={45} color="indigo" />\n      <div class="text-base font-medium text-purple-700">Purple</div>\n      <ProgressBar progress={45} color="purple" />\n      <div class="text-base font-medium text-cyan-700">Cyan</div>\n      <ProgressBar progress={45} color="cyan" />\n      <div class="text-base font-medium text-gray-700">Gray</div>\n      <ProgressBar progress={45} color="gray" />\n      <div class="text-base font-medium text-lime-700">Lime</div>\n      <ProgressBar progress={45} color="lime" />\n      <div class="text-base font-medium text-pink-700">Pink</div>\n      <ProgressBar progress={45} color="pink" />\n      <div class="text-base font-medium text-teal-700">Teal</div>\n      <ProgressBar progress={45} color="teal" />\n    </div>\n  )\n})',
      height: '650',
    },
    {
      title: 'Custom theme',
      description: 'Use the theme prop to customize styles of the component : root/bar/label',
      url: '/examples/[theme-rtl]/progress-bar/06-progress-bar-custom-theme',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { ProgressBar } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return <ProgressBar progress={50} textLabel=\"Flowbite\" size=\"lg\" labelProgress labelText theme={{ root: 'p-4', bar: 'italic rounded-none' }} />\n})",
      height: '150',
    },
  ],
  radio: [
    {
      title: 'Default',
      description: 'Use the default example of a radio component with the checked and unchecked state.',
      url: '/examples/[theme-rtl]/radio/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <>\n      <div class="flex flex-col gap-3 p-3">\n        <Radio name="radio" value="one">\n          First option\n        </Radio>\n        <Radio name="radio" value="two">\n          Second option\n        </Radio>\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Color',
      description: 'This example can be used for the color of the radio component by applying the color attribute to the input element.',
      url: '/examples/[theme-rtl]/radio/02-colors',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Heading, Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const pick = useSignal(\'blue\')\n\n  return (\n    <>\n      <Heading tag="h5">Picked color : {pick.value}</Heading>\n      <div class="flex flex-col gap-3 p-3">\n        <Radio name="radio" value="blue" bind:option={pick}>\n          Blue\n        </Radio>\n        <Radio name="radio" value="purple" color="purple" bind:option={pick}>\n          Purple\n        </Radio>\n        <Radio name="radio" value="red" color="red" bind:option={pick}>\n          Red\n        </Radio>\n        <Radio name="radio" value="green" color="green" bind:option={pick}>\n          Green\n        </Radio>\n        <Radio name="radio" value="pink" color="pink" bind:option={pick}>\n          Pink\n        </Radio>\n      </div>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Disabled',
      description: 'This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.',
      url: '/examples/[theme-rtl]/radio/03-disabled',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const pick = useSignal<string>(\'\')\n\n  return (\n    <>\n      <div class="flex flex-col gap-3 p-3">\n        <Radio name="radio" value="one" disabled bind:option={pick}>\n          First option\n        </Radio>\n        <Radio name="radio" value="two" disabled bind:option={pick}>\n          Second option\n        </Radio>\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'On change event',
      description: 'This example can be used for the onchange event of the radio component.',
      url: '/examples/[theme-rtl]/radio/04-on-change-event',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const pick = useSignal(\'\')\n\n  return (\n    <div class="flex flex-col gap-3">\n      Reactivity choice : {pick.value}\n      <div class="flex flex-col gap-3">\n        <Radio\n          onChange$={(checked: boolean, value: string) => {\n            alert(`Checkbox state changed to ${checked} with value ${value}`)\n          }}\n          name="radio"\n          value="one"\n          bind:option={pick}\n        >\n          First option\n        </Radio>\n        <Radio\n          onChange$={(checked: boolean, value: string) => {\n            alert(`Checkbox state changed to ${checked} with value ${value}`)\n          }}\n          name="radio"\n          value="two"\n          bind:option={pick}\n        >\n          Second option\n        </Radio>\n      </div>\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  range: [
    {
      title: 'Range slider example',
      description: 'Get started with this default example with values from 1 to 100 and the default value of 50.',
      url: '/examples/[theme-rtl]/range/01-default-range',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Range } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const value = useSignal(\'50\')\n\n  return (\n    <>\n      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Range ({value.value})\n      </label>\n      <Range id="default-range" bind:value={value} />\n    </>\n  )\n})',
      height: '100',
    },
    {
      title: 'Disabled state',
      description: 'Apply the disabled attribute to disallow the users from further selecting values.',
      url: '/examples/[theme-rtl]/range/02-range-disabled',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Range } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const value = useSignal(\'50\')\n\n  return (\n    <>\n      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Range ({value.value})\n      </label>\n      <Range id="default-range" disabled bind:value={value} />\n    </>\n  )\n})',
      height: '100',
    },
    {
      title: 'Min and max',
      description: 'Use the min and max attributes on the range component to set the limits of the range values.',
      url: '/examples/[theme-rtl]/range/03-range-min-max',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Range } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const value = useSignal(\'2\')\n\n  return (\n    <>\n      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Range ({value.value})\n      </label>\n      <Range id="default-range" min={0} max={10} bind:value={value} />\n    </>\n  )\n})',
      height: '100',
    },
    {
      title: 'Steps',
      description: 'Use the step attribute on the range component to set the increment with which the values will change.',
      url: '/examples/[theme-rtl]/range/04-range-steps',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Range } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const value = useSignal(\'2.5\')\n\n  return (\n    <>\n      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Range ({value.value})\n      </label>\n      <Range id="default-range" min={0} max={5} step={0.5} bind:value={value} />\n    </>\n  )\n})',
      height: '100',
    },
    {
      title: 'Sizes',
      description: 'Apply the small, default, and large sizes for the range component by applying the size attribute',
      url: '/examples/[theme-rtl]/range/05-range-sizes',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Range } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const smallValue = useSignal(\'5\')\n  const mediumValue = useSignal(\'75\')\n  const largeValue = useSignal(\'30\')\n\n  return (\n    <>\n      <label for="small-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Small range ({smallValue.value})\n      </label>\n      <Range id="small-range" size="sm" bind:value={smallValue} class="mb-6" />\n\n      <label for="medium-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Default range ({mediumValue.value})\n      </label>\n      <Range id="medium-range" size="md" bind:value={mediumValue} class="mb-6" />\n\n      <label for="large-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Large range ({largeValue.value})\n      </label>\n      <Range id="large-range" size="lg" bind:value={largeValue} class="mb-6" />\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Event handler',
      description: 'Use the onClick$ native handler to capture an event when range slider has changed value',
      url: '/examples/[theme-rtl]/range/06-range-event-handler',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Range } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const value = useSignal('5')\n\n  return (\n    <>\n      <label for=\"default-range\" class=\"mb-2 block text-sm font-medium text-gray-900 dark:text-white\">\n        Range ({value.value})\n      </label>\n      <Range\n        onChange$={() => {\n          alert('changed !')\n        }}\n        id=\"default-range\"\n        bind:value={value}\n      />\n    </>\n  )\n})",
      height: '100',
    },
    {
      title: 'Custom theme',
      description: 'Use the theme attribute to customize the range component as you want : root/input',
      url: '/examples/[theme-rtl]/range/07-range-custom-theme',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Range } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const value = useSignal(\'5\')\n\n  return (\n    <>\n      <label for="default-range" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">\n        Range ({value.value})\n      </label>\n      <Range id="default-range" size="lg" bind:value={value} theme={{ input: \'rounded-none bg-orange-200 dark:bg-orange-700\' }} />\n    </>\n  )\n})',
      height: '100',
    },
  ],
  rating: [
    {
      title: 'Default rating',
      description: 'Use this simple example of a star rating component for showing review results.',
      url: '/examples/[theme-rtl]/rating/01-default',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Rating } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3\">\n      <Rating rating={4} />\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Rating with text',
      description: 'If you also want to show a text near the stars you can use this example as a reference.',
      url: '/examples/[theme-rtl]/rating/02-with-text',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Rating } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Rating rating={4}>\n        <p q:slot="besideText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">\n          4.75 out of 5\n        </p>\n      </Rating>\n    </div>\n  )\n})',
      height: '150',
    },
    {
      title: 'Rating with review link',
      description: 'Aggregate more results by using this example to show the amount of reviews and the average score.',
      url: '/examples/[theme-rtl]/rating/03-with-review-link',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Rating } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3\">\n      <Rating rating={4} reviewLink={{ href: '#', text: '73 reviews' }} />\n    </div>\n  )\n})",
      height: '150',
    },
    {
      title: 'Stars sizes',
      description: 'Check out the different sizing options for the star review component from small, medium, and large.',
      url: '/examples/[theme-rtl]/rating/04-with-sizes',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Rating, RatingSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex flex-col gap-3 p-3\">\n      {(['sm', 'md', 'lg'] as RatingSize[]).map((size) => (\n        <Rating rating={4} size={size} />\n      ))}\n    </div>\n  )\n})",
      height: '150',
    },
  ],
  select: [
    {
      title: 'Default',
      description: 'Get started with the default example of a select input component to get a single option selection.',
      url: '/examples/[theme-rtl]/select/01-default',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"flex flex-col gap-3 p-3\">\n        <Select bind:value={selected} options={countries} placeholder=\"Choose a country\" label=\"Select an option\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Disabled',
      description: 'Apply the disable state to the select component to disallow the selection of new options.',
      url: '/examples/[theme-rtl]/select/02-disabled',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"flex flex-col gap-3 p-3\">\n        <Select bind:value={selected} disabled options={countries} placeholder=\"Choose a country\" label=\"Select an option\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Selected option',
      description: 'Use this example to get a single option selection with the selected state of the select input component.',
      url: '/examples/[theme-rtl]/select/03-selected',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('fr')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"flex flex-col gap-3 p-3\">\n        <Select bind:value={selected} options={countries} placeholder=\"Choose a country\" label=\"Select an option\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Sizes',
      description: 'Get started with the small, default, and large sizes for the select component from the example below.',
      url: '/examples/[theme-rtl]/select/04-sizes',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Select } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const selected = useSignal(\'\')\n  const countries = [\n    { value: \'us\', name: \'United States\' },\n    { value: \'ca\', name: \'Canada\' },\n    { value: \'fr\', name: \'France\' },\n  ]\n\n  return (\n    <>\n      <div class="flex flex-col gap-3 p-3">\n        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Small" sizing="sm" />\n        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Medium" sizing="md" />\n        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Large" sizing="lg" />\n      </div>\n    </>\n  )\n})',
      height: '350',
    },
    {
      title: 'Underline',
      description: 'Use the underline style for the select component as an alternative appearance.',
      url: '/examples/[theme-rtl]/select/05-underline',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"flex flex-col gap-3 p-3\">\n        <Select bind:value={selected} options={countries} underline placeholder=\"Choose a country\" label=\"Underline\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
  ],
  sidebar: [
    {
      title: 'Default sidebar',
      description:
        'Use this example to show a list of navigation menu items by adding <Sidebar.Item> children components inside the <Sidebar> component and pass the href prop to set a URL and icon to apply any icons from the flowbite-qwik-icons icon library. You can also add a text label as a badge by using the label prop from Qwik and the labelColor to set the color of the label background.',
      url: '/examples/[theme-rtl]/sidebar/01-default',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Sidebar } from \'flowbite-qwik\'\nimport { IconHomeOutline, IconInboxOutline, IconUserCircleOutline, IconShoppingBagOutline, IconChartBars3FromLeftSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const collapsed = useSignal(false)\n\n  return (\n    <div class="p-3">\n      <button\n        onClick$={() => {\n          collapsed.value = true\n        }}\n        type="button"\n        class="ms-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"\n      >\n        <span class="sr-only">Open sidebar</span>\n        <IconChartBars3FromLeftSolid aria-hidden class="h-4 w-4 shrink-0" />\n      </button>\n      <Sidebar highlight collapsed={collapsed}>\n        <Sidebar.ItemGroup>\n          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>\n          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>\n          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>\n          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>\n        </Sidebar.ItemGroup>\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Multi-level dropdown with custom chevron',
      description:
        "The chevronIcon property offers customization for the chevron icon. Alternatively, for more complex scenarios, the renderChevronIcon option can be utilized. Here's an example.",
      url: '/examples/[theme-rtl]/sidebar/02-with-group',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Sidebar } from \'flowbite-qwik\'\nimport {\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  IconFileEditSolid,\n  IconAdressBookOutline,\n  IconGearSolid,\n  IconAtomSolid,\n  IconAdjustmentsHorizontalSolid,\n  IconChartBars3FromLeftSolid,\n} from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const collapsed = useSignal(false)\n\n  return (\n    <div class="p-3">\n      <button\n        onClick$={() => {\n          collapsed.value = true\n        }}\n        type="button"\n        class="ms-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"\n      >\n        <span class="sr-only">Open sidebar</span>\n        <IconChartBars3FromLeftSolid aria-hidden class="h-4 w-4 shrink-0" />\n      </button>\n      <Sidebar collapsed={collapsed}>\n        <Sidebar.ItemGroup>\n          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>\n          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>\n          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>\n          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>\n        </Sidebar.ItemGroup>\n\n        <Sidebar.ItemGroup>\n          <Sidebar.Item icon={IconFileEditSolid}>Documentation</Sidebar.Item>\n          <Sidebar.Item icon={IconAdressBookOutline}>Help</Sidebar.Item>\n          <Sidebar.Item icon={IconGearSolid}>Settings</Sidebar.Item>\n          <Sidebar.Item icon={IconAtomSolid}>Details</Sidebar.Item>\n\n          <Sidebar.Collapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>\n            <Sidebar.Item>Dashboard</Sidebar.Item>\n            <Sidebar.Item>inbox</Sidebar.Item>\n            <Sidebar.Item>Users</Sidebar.Item>\n            <Sidebar.Item>Products</Sidebar.Item>\n          </Sidebar.Collapse>\n        </Sidebar.ItemGroup>\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'With CTA',
      description: 'This example can be used to show a call to action button inside the sidebar next to the menu items.',
      url: '/examples/[theme-rtl]/sidebar/03-with-cta',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Sidebar, Badge } from \'flowbite-qwik\'\nimport {\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  IconFileEditSolid,\n  IconAdressBookOutline,\n  IconGearSolid,\n  IconAtomSolid,\n  IconAdjustmentsHorizontalSolid,\n  IconChartBars3FromLeftSolid,\n} from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const isCtaVisible = useSignal(true)\n  const collapsed = useSignal(false)\n\n  return (\n    <div class="p-3">\n      <button\n        onClick$={() => {\n          collapsed.value = true\n        }}\n        type="button"\n        class="ms-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"\n      >\n        <span class="sr-only">Open sidebar</span>\n        <IconChartBars3FromLeftSolid />\n      </button>\n      <Sidebar highlight collapsed={collapsed}>\n        <Sidebar.ItemGroup>\n          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>\n          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>\n          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>\n          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>\n        </Sidebar.ItemGroup>\n\n        <Sidebar.ItemGroup>\n          <Sidebar.Item icon={IconFileEditSolid}>Documentation</Sidebar.Item>\n          <Sidebar.Item icon={IconAdressBookOutline}>Help</Sidebar.Item>\n          <Sidebar.Item icon={IconGearSolid}>Settings</Sidebar.Item>\n          <Sidebar.Item icon={IconAtomSolid}>Details</Sidebar.Item>\n\n          <Sidebar.Collapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>\n            <Sidebar.Item>Dashboard</Sidebar.Item>\n            <Sidebar.Item>inbox</Sidebar.Item>\n            <Sidebar.Item>Users</Sidebar.Item>\n            <Sidebar.Item>Products</Sidebar.Item>\n          </Sidebar.Collapse>\n        </Sidebar.ItemGroup>\n        {isCtaVisible.value && (\n          <Sidebar.Cta onClose$={() => (isCtaVisible.value = false)}>\n            <Badge q:slot="badge" type="yellow" content="new" />\n\n            <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">\n              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.\n            </p>\n            <a class="text-sm font-medium text-blue-800 underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">\n              Turn new navigation off\n            </a>\n          </Sidebar.Cta>\n        )}\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Sidebar with navbar',
      description: 'Use this example to show a navbar together with a sidebar layout for your web application.',
      url: '/examples/[theme-rtl]/sidebar/04-sidebar-with-navbar',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Sidebar } from \'flowbite-qwik\'\nimport {\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  IconCloseSolid,\n  IconChartBars3FromLeftSolid,\n} from \'flowbite-qwik-icons\'\nimport { NavbarPage } from \'~/components/NavbarPage/NavbarPage\'\n\nexport default component$(() => {\n  const collapsed = useSignal(false)\n\n  return (\n    <>\n      <NavbarPage>\n        <button\n          q:slot="action"\n          class="sm:hidden"\n          onClick$={() => {\n            collapsed.value = !collapsed.value\n          }}\n        >\n          {collapsed.value ? <IconCloseSolid class="size-5" /> : <IconChartBars3FromLeftSolid class="size-5" />}\n          <span class="sr-only">Open sidebar</span>\n        </button>\n      </NavbarPage>\n\n      <Sidebar\n        collapsed={collapsed}\n        highlight\n        theme={{\n          nav: \'pt-20\',\n        }}\n      >\n        <Sidebar.ItemGroup>\n          <Sidebar.Item icon={IconHomeOutline}>Dashboard</Sidebar.Item>\n          <Sidebar.Item icon={IconInboxOutline}>inbox</Sidebar.Item>\n          <Sidebar.Item icon={IconUserCircleOutline}>Users</Sidebar.Item>\n          <Sidebar.Item icon={IconShoppingBagOutline}>Products</Sidebar.Item>\n        </Sidebar.ItemGroup>\n      </Sidebar>\n    </>\n  )\n})',
      height: '500',
    },
  ],
  spinner: [
    {
      title: 'Default spinner',
      description:
        'Use the default spinner element by adding the <Spinner> Qwik component inside your code and integrate the aria-label attribute to allow screen readers parse the component for accessibility',
      url: '/examples/[theme-rtl]/spinner/01-default',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-3 p-3\">\n      <Spinner />\n    </div>\n  )\n})",
      height: '100',
    },
    {
      title: 'Spinner colors',
      description: 'Update the colors of the loading spinner by using the color Qwik prop.',
      url: '/examples/[theme-rtl]/spinner/02-color',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner, SpinnerColor } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-3 p-3\">\n      {(['blue', 'gray', 'green', 'red', 'yellow', 'pink', 'purple', 'white'] as SpinnerColor[]).map((color) => (\n        <Spinner size=\"6\" color={color} />\n      ))}\n    </div>\n  )\n})",
      height: '100',
    },
    {
      title: 'Sizing options',
      description: 'Make the size of the spinner smaller or larger by using the size prop. Choose from xs, sm, md, lg, or xl.',
      url: '/examples/[theme-rtl]/spinner/03-size',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner, SpinnerSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-3 p-3\">\n      {(['0', '0.5', '1', '1.5', '2', '2.5', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as SpinnerSize[]).map((size) => (\n        <Spinner size={size} />\n      ))}\n    </div>\n  )\n})",
      height: '150',
    },
  ],
  table: [
    {
      title: 'Default table',
      description:
        'Use this example to show a responsive table component with table head and body featuring cells and rows on multiple levels by using the <Table> Qwik component and the children components such as <Table.Head>, <Table.Body>, <Table.Row> and <Table.Cell>.',
      url: '/examples/[theme-rtl]/table/01-default-table',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, Table } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table>\n        <Table.Head>\n          <Table.HeadCell>Product name</Table.HeadCell>\n          <Table.HeadCell>Color</Table.HeadCell>\n          <Table.HeadCell>Category</Table.HeadCell>\n          <Table.HeadCell>Price</Table.HeadCell>\n          <Table.HeadCell>\n            <span class="sr-only">Edit</span>\n          </Table.HeadCell>\n        </Table.Head>\n        <Table.Body class="divide-y">\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n            <Table.Cell>Sliver</Table.Cell>\n            <Table.Cell>Laptop</Table.Cell>\n            <Table.Cell>$2999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n            <Table.Cell>White</Table.Cell>\n            <Table.Cell>Laptop PC</Table.Cell>\n            <Table.Cell>$1999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n            <Table.Cell>Black</Table.Cell>\n            <Table.Cell>Accessories</Table.Cell>\n            <Table.Cell>$99</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n        </Table.Body>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Striped rows',
      description:
        'Use the striped Qwik prop on the <Table> component to alternate the background of every second row of the table to increase contrast and readability.',
      url: '/examples/[theme-rtl]/table/02-table-striped-rows',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, Table } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table striped>\n        <Table.Head>\n          <Table.HeadCell>Product name</Table.HeadCell>\n          <Table.HeadCell>Color</Table.HeadCell>\n          <Table.HeadCell>Category</Table.HeadCell>\n          <Table.HeadCell>Price</Table.HeadCell>\n          <Table.HeadCell>\n            <span class="sr-only">Edit</span>\n          </Table.HeadCell>\n        </Table.Head>\n        <Table.Body class="divide-y">\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n            <Table.Cell>Sliver</Table.Cell>\n            <Table.Cell>Laptop</Table.Cell>\n            <Table.Cell>$2999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n            <Table.Cell>White</Table.Cell>\n            <Table.Cell>Laptop PC</Table.Cell>\n            <Table.Cell>$1999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n            <Table.Cell>Black</Table.Cell>\n            <Table.Cell>Accessories</Table.Cell>\n            <Table.Cell>$99</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Google Pixel Phone</Table.Cell>\n            <Table.Cell>Gray</Table.Cell>\n            <Table.Cell>Phone</Table.Cell>\n            <Table.Cell>$799</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>\n            <Table.Cell>Red</Table.Cell>\n            <Table.Cell>Wearables</Table.Cell>\n            <Table.Cell>$999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n        </Table.Body>\n      </Table>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Hover state',
      description:
        'Add the hoverable prop to the <Table> Qwik component to show a hover effect when moving the mouse over a table row. This also helps with readability.',
      url: '/examples/[theme-rtl]/table/03-table-hover-state',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, Table } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table hoverable>\n        <Table.Head>\n          <Table.HeadCell>Product name</Table.HeadCell>\n          <Table.HeadCell>Color</Table.HeadCell>\n          <Table.HeadCell>Category</Table.HeadCell>\n          <Table.HeadCell>Price</Table.HeadCell>\n          <Table.HeadCell>\n            <span class="sr-only">Edit</span>\n          </Table.HeadCell>\n        </Table.Head>\n        <Table.Body class="divide-y">\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n            <Table.Cell>Sliver</Table.Cell>\n            <Table.Cell>Laptop</Table.Cell>\n            <Table.Cell>$2999</Table.Cell>\n            <Table.Cell>\n              <Link href="#" class="text-cyan-600 dark:text-cyan-500">\n                Edit\n              </Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n            <Table.Cell>White</Table.Cell>\n            <Table.Cell>Laptop PC</Table.Cell>\n            <Table.Cell>$1999</Table.Cell>\n            <Table.Cell>\n              <Link href="#" class="text-cyan-600 dark:text-cyan-500">\n                Edit\n              </Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n            <Table.Cell>Black</Table.Cell>\n            <Table.Cell>Accessories</Table.Cell>\n            <Table.Cell>$99</Table.Cell>\n            <Table.Cell>\n              <Link href="#" class="text-cyan-600 dark:text-cyan-500">\n                Edit\n              </Link>\n            </Table.Cell>\n          </Table.Row>\n        </Table.Body>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Table with checkboxes',
      description: 'Use this example to show multiple checkbox form elements for each table row that you can use when performing bulk actions',
      url: '/examples/[theme-rtl]/table/04-table-with-checkbox',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Checkbox, Link, Table } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const choice = useSignal(false)\n\n  return (\n    <div class="overflow-x-auto">\n      <Table hoverable>\n        <Table.Head>\n          <Table.HeadCell class="p-4">\n            <Checkbox bind:checked={choice} />\n          </Table.HeadCell>\n          <Table.HeadCell>Product name</Table.HeadCell>\n          <Table.HeadCell>Color</Table.HeadCell>\n          <Table.HeadCell>Category</Table.HeadCell>\n          <Table.HeadCell>Price</Table.HeadCell>\n          <Table.HeadCell>\n            <span class="sr-only">Edit</span>\n          </Table.HeadCell>\n        </Table.Head>\n        <Table.Body class="divide-y">\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="p-4">\n              <Checkbox bind:checked={choice} />\n            </Table.Cell>\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n            <Table.Cell>Sliver</Table.Cell>\n            <Table.Cell>Laptop</Table.Cell>\n            <Table.Cell>$2999</Table.Cell>\n            <Table.Cell>\n              <Link href="#" class="text-gray-9000">\n                Edit\n              </Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="p-4">\n              <Checkbox bind:checked={choice} />\n            </Table.Cell>\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n            <Table.Cell>White</Table.Cell>\n            <Table.Cell>Laptop PC</Table.Cell>\n            <Table.Cell>$1999</Table.Cell>\n            <Table.Cell>\n              <Link href="#" class="text-gray-9000">\n                Edit\n              </Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="p-4">\n              <Checkbox bind:checked={choice} />\n            </Table.Cell>\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n            <Table.Cell>Black</Table.Cell>\n            <Table.Cell>Accessories</Table.Cell>\n            <Table.Cell>$99</Table.Cell>\n            <Table.Cell>\n              <Link href="#" class="text-gray-9000">\n                Edit\n              </Link>\n            </Table.Cell>\n          </Table.Row>\n        </Table.Body>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Table multiple',
      description: 'Use this example to show multiple tables on the same page',
      url: '/examples/[theme-rtl]/table/05-table-multiple',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, Table } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col gap-8">\n      <div class="overflow-x-auto">\n        <Table>\n          <Table.Head>\n            <Table.HeadCell>Product name</Table.HeadCell>\n            <Table.HeadCell>Color</Table.HeadCell>\n            <Table.HeadCell>Category</Table.HeadCell>\n            <Table.HeadCell>Price</Table.HeadCell>\n            <Table.HeadCell>\n              <span class="sr-only">Edit</span>\n            </Table.HeadCell>\n          </Table.Head>\n          <Table.Body class="divide-y">\n            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n              <Table.Cell>Sliver</Table.Cell>\n              <Table.Cell>Laptop</Table.Cell>\n              <Table.Cell>$2999</Table.Cell>\n              <Table.Cell>\n                <Link href="#">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n              <Table.Cell>White</Table.Cell>\n              <Table.Cell>Laptop PC</Table.Cell>\n              <Table.Cell>$1999</Table.Cell>\n              <Table.Cell>\n                <Link href="#">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n              <Table.Cell>Black</Table.Cell>\n              <Table.Cell>Accessories</Table.Cell>\n              <Table.Cell>$99</Table.Cell>\n              <Table.Cell>\n                <Link href="#">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n          </Table.Body>\n        </Table>\n      </div>\n\n      <div class="overflow-x-auto">\n        <Table hoverable>\n          <Table.Head>\n            <Table.HeadCell>Product name</Table.HeadCell>\n            <Table.HeadCell>Color</Table.HeadCell>\n            <Table.HeadCell>Category</Table.HeadCell>\n            <Table.HeadCell>Price</Table.HeadCell>\n            <Table.HeadCell>\n              <span class="sr-only">Edit</span>\n            </Table.HeadCell>\n          </Table.Head>\n          <Table.Body class="divide-y">\n            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n              <Table.Cell>Sliver</Table.Cell>\n              <Table.Cell>Laptop</Table.Cell>\n              <Table.Cell>$2999</Table.Cell>\n              <Table.Cell>\n                <Link href="#">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n              <Table.Cell>White</Table.Cell>\n              <Table.Cell>Laptop PC</Table.Cell>\n              <Table.Cell>$1999</Table.Cell>\n              <Table.Cell>\n                <Link href="#">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n            <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n              <Table.Cell>Black</Table.Cell>\n              <Table.Cell>Accessories</Table.Cell>\n              <Table.Cell>$99</Table.Cell>\n              <Table.Cell>\n                <Link href="#">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n          </Table.Body>\n        </Table>\n      </div>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Table theme',
      description: 'Use theme to customize styles of table',
      url: '/examples/[theme-rtl]/table/06-table-theme',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, Table } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table theme={{ cell: \'py-2\' }}>\n        <Table.Head>\n          <Table.HeadCell>Product name</Table.HeadCell>\n          <Table.HeadCell>Color</Table.HeadCell>\n          <Table.HeadCell>Category</Table.HeadCell>\n          <Table.HeadCell>Price</Table.HeadCell>\n          <Table.HeadCell>\n            <span class="sr-only">Edit</span>\n          </Table.HeadCell>\n        </Table.Head>\n        <Table.Body class="divide-y">\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</Table.Cell>\n            <Table.Cell>Sliver</Table.Cell>\n            <Table.Cell>Laptop</Table.Cell>\n            <Table.Cell>$2999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</Table.Cell>\n            <Table.Cell>White</Table.Cell>\n            <Table.Cell>Laptop PC</Table.Cell>\n            <Table.Cell>$1999</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n          <Table.Row class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <Table.Cell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>\n            <Table.Cell>Black</Table.Cell>\n            <Table.Cell>Accessories</Table.Cell>\n            <Table.Cell>$99</Table.Cell>\n            <Table.Cell>\n              <Link href="#">Edit</Link>\n            </Table.Cell>\n          </Table.Row>\n        </Table.Body>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Dynamic table',
      description:
        'Use this example to show a responsive table component with table head and body featuring cells and rows on multiple levels by using the <Table> Qwik component and the children components such as <Table.Head>, <Table.Body>, <Table.Row> and <Table.Cell>.',
      url: '/examples/[theme-rtl]/table/06-table-with-dynamic-data',
      content:
        "import { $, component$, useStore } from '@builder.io/qwik'\nimport { Button, Link, Table } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const data = useStore([\n    {\n      id: 1,\n      name: 'Apple MacBook Pro 17\"',\n      color: 'Sliver',\n      category: 'Laptop',\n      price: '$2999',\n    },\n    {\n      id: 2,\n      name: 'Microsoft Surface Pro',\n      color: 'White',\n      category: 'Laptop PC',\n      price: '$1999',\n    },\n    {\n      id: 3,\n      name: 'Magic Mouse 2',\n      color: 'Black',\n      category: 'Accessories',\n      price: '$99',\n    },\n  ])\n\n  const hadRow$ = $(() => {\n    data.push({\n      id: 4,\n      name: 'Apple MacBook Pro 16\"',\n      color: 'Sliver',\n      category: 'Laptop',\n      price: '$1999',\n    })\n  })\n\n  return (\n    <div class=\"flex flex-col gap-2 overflow-x-auto\">\n      <Button onClick$={hadRow$}>Add row</Button>\n\n      <Table>\n        <Table.Head>\n          <Table.HeadCell>Product name</Table.HeadCell>\n          <Table.HeadCell>Color</Table.HeadCell>\n          <Table.HeadCell>Category</Table.HeadCell>\n          <Table.HeadCell>Price</Table.HeadCell>\n          <Table.HeadCell>\n            <span class=\"sr-only\">Edit</span>\n          </Table.HeadCell>\n        </Table.Head>\n        <Table.Body class=\"divide-y\">\n          {data.map((item) => (\n            <Table.Row class=\"bg-white dark:border-gray-700 dark:bg-gray-800\">\n              <Table.Cell>{item.name}</Table.Cell>\n              <Table.Cell>{item.color}</Table.Cell>\n              <Table.Cell>{item.category}</Table.Cell>\n              <Table.Cell>{item.price}</Table.Cell>\n              <Table.Cell>\n                <Link href=\"#\">Edit</Link>\n              </Table.Cell>\n            </Table.Row>\n          ))}\n        </Table.Body>\n      </Table>\n    </div>\n  )\n})",
      height: '300',
    },
  ],
  tabs: [
    {
      title: 'Default Tabs',
      description: 'Use the following default tabs component example to show a list of links that the user can navigate from on your website.',
      url: '/examples/[theme-rtl]/tabs/01-default-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tabs.Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Tabs with underline',
      description:
        'Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.',
      url: '/examples/[theme-rtl]/tabs/02-underline-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs variant="underline">\n      <Tabs.Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Pills tabs',
      description: 'If you want to use pills as a style for the tabs component you can do so by using this example.',
      url: '/examples/[theme-rtl]/tabs/03-pills-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs variant="pills">\n      <Tabs.Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Directive - show',
      description: 'Use this props if you want to control which directive to use for rendering every tab content',
      url: '/examples/[theme-rtl]/tabs/04-directive',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs directive="show">\n      <Tabs.Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'With icons',
      description: 'You can add icons to the tabs to make them more visually appealing and easier to understand.',
      url: '/examples/[theme-rtl]/tabs/05-tabs-with-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\nimport { IconGridOutline, IconGridPlusOutline, IconProfileCardOutline, IconUserCircleSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tabs.Tab title="Profile" icon={IconProfileCardOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Dashboard" icon={IconGridOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Settings" icon={IconGridPlusOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Contacts" disabled icon={IconUserCircleSolid}>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Active tab',
      description: 'If you want to set a specific tab as active you can do so by using the `active` prop.',
      url: '/examples/[theme-rtl]/tabs/06-tabs-pane-active',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tabs.Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Second" active>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Interaction',
      description: 'You can interact with tabs by using the `onClickInteraction$` prop.',
      url: '/examples/[theme-rtl]/tabs/07-tabs-interaction',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs\n      directive="show"\n      onClickInteraction$={() => {\n        alert(\'Click!\')\n      }}\n    >\n      <Tabs.Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tabs.Tab>\n      <Tabs.Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tabs.Tab>\n      <Tabs.Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tabs.Tab>\n      <Tabs.Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tabs.Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
  ],
  textarea: [
    {
      title: 'Default Textarea',
      description: 'Get started with the default example of a textarea component below.',
      url: '/examples/[theme-rtl]/textarea/01-default',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Textarea } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const textareaValue = useSignal(\'\')\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <p class="mb-4 border-b border-gray-200 pb-4 text-sm dark:border-gray-800">Textarea value: {textareaValue}</p>\n\n      <Textarea bind:value={textareaValue} label="Your message" placeholder="Type something here..." class="w-full" />\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Comment box',
      description:
        'Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.',
      url: '/examples/[theme-rtl]/textarea/02-comment-box',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Textarea, Button } from \'flowbite-qwik\'\nimport { IconFileImportOutline, IconImageOutline, IconMapLocationOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const textareaValue = useSignal(\'\')\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Textarea\n        bind:value={textareaValue}\n        placeholder="Write a ccomment"\n        class="w-full"\n        footer={\n          <div class="flex justify-between">\n            <Button>Post comment</Button>\n            <div class="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse">\n              <button\n                type="button"\n                class="inline-flex cursor-pointer items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"\n              >\n                <IconFileImportOutline class="h-4 w-4" />\n              </button>\n              <button\n                type="button"\n                class="inline-flex cursor-pointer items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"\n              >\n                <IconMapLocationOutline class="h-4 w-4" />\n              </button>\n              <button\n                type="button"\n                class="inline-flex cursor-pointer items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"\n              >\n                <IconImageOutline class="h-4 w-4" />\n              </button>\n            </div>\n          </div>\n        }\n      />\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Disabled Textarea',
      description: 'Use the `disabled` prop to make the textarea component non-editable and non-interactive.',
      url: '/examples/[theme-rtl]/textarea/03-disabled',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Textarea } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const textareaValue = useSignal(\'\')\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Textarea bind:value={textareaValue} disabled label="Your message" placeholder="Type something here..." class="w-full" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Required Textarea',
      description: 'Use the `required` prop to make the textarea component a required field inside a form.',
      url: '/examples/[theme-rtl]/textarea/04-required',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Textarea } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const textareaValue = useSignal(\'\')\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Textarea bind:value={textareaValue} required label="Your message" placeholder="Type something here..." class="w-full" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Readonly Textarea',
      description: 'Use the `readonly` prop to make the textarea component non-editable but interactive.',
      url: '/examples/[theme-rtl]/textarea/05-readonly',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Textarea } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const textareaValue = useSignal(\'Flowbite is awesome!\')\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Textarea bind:value={textareaValue} readOnly label="Your message" placeholder="Type something here..." class="w-full" />\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  timeline: [
    {
      title: 'Default timeline',
      description:
        'Use the <Timeline> Qwik component and the child components to create a list of items inside the timeline component featuring the date, title, description and even a button.',
      url: '/examples/[theme-rtl]/timeline/01-default-timeline',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button, Timeline } from 'flowbite-qwik'\nimport { IconArrowRightOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <Timeline>\n      <Timeline.Item>\n        <Timeline.Point />\n        <Timeline.Content>\n          <Timeline.Time>February 2022</Timeline.Time>\n          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>\n          <Timeline.Body>\n            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.\n          </Timeline.Body>\n          <Button color=\"light\" suffix={IconArrowRightOutline}>\n            Learn More\n          </Button>\n        </Timeline.Content>\n      </Timeline.Item>\n      <Timeline.Item>\n        <Timeline.Point />\n        <Timeline.Content>\n          <Timeline.Time>March 2022</Timeline.Time>\n          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>\n          <Timeline.Body>\n            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.\n          </Timeline.Body>\n        </Timeline.Content>\n      </Timeline.Item>\n      <Timeline.Item>\n        <Timeline.Point />\n        <Timeline.Content>\n          <Timeline.Time>April 2022</Timeline.Time>\n          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>\n          <Timeline.Body>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</Timeline.Body>\n        </Timeline.Content>\n      </Timeline.Item>\n    </Timeline>\n  )\n})",
      height: '500',
    },
    {
      title: 'Horizontal timeline',
      description: 'Use the horizontal prop to show the timeline component and the child components in a horizontal alignment.',
      url: '/examples/[theme-rtl]/timeline/02-timeline-horizontal',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button, Timeline } from 'flowbite-qwik'\nimport { IconArrowRightSolid, IconCalendarMonthOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <Timeline horizontal>\n      <Timeline.Item>\n        <Timeline.Point icon={IconCalendarMonthOutline} />\n        <Timeline.Content>\n          <Timeline.Time>February 2022</Timeline.Time>\n          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>\n          <Timeline.Body>\n            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.\n          </Timeline.Body>\n          <Button color=\"light\" suffix={IconArrowRightSolid}>\n            Learn More\n          </Button>\n        </Timeline.Content>\n      </Timeline.Item>\n      <Timeline.Item>\n        <Timeline.Point icon={IconCalendarMonthOutline} />\n        <Timeline.Content>\n          <Timeline.Time>March 2022</Timeline.Time>\n          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>\n          <Timeline.Body>\n            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.\n          </Timeline.Body>\n        </Timeline.Content>\n      </Timeline.Item>\n      <Timeline.Item>\n        <Timeline.Point icon={IconCalendarMonthOutline} />\n        <Timeline.Content>\n          <Timeline.Time>April 2022</Timeline.Time>\n          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>\n          <Timeline.Body>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</Timeline.Body>\n        </Timeline.Content>\n      </Timeline.Item>\n    </Timeline>\n  )\n})",
      height: '500',
    },
  ],
  toast: [
    {
      title: 'Props type',
      description: 'Use these contextual toast components to show success, danger, or warning alert messages to your users.',
      url: '/examples/[theme-rtl]/toast/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col space-y-2 p-3">\n      <Toast id="default">Default</Toast>\n      <Toast id="success" type="success">\n        Success\n      </Toast>\n      <Toast id="danger" type="danger">\n        Danger\n      </Toast>\n      <Toast id="warning" type="warning">\n        Warning\n      </Toast>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Props divide',
      description: 'Use divide prop to add a dividing line between the toast content and the close button.',
      url: '/examples/[theme-rtl]/toast/02-divide',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col space-y-2 p-3">\n      <Toast id="default" divide>\n        Default\n      </Toast>\n      <Toast id="success" divide type="success">\n        Success\n      </Toast>\n      <Toast id="danger" divide type="danger">\n        Danger\n      </Toast>\n      <Toast id="warning" divide type="warning">\n        Warning\n      </Toast>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Message',
      description:
        'This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.',
      url: '/examples/[theme-rtl]/toast/03-message',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col space-y-2 p-3">\n      <Toast\n        id="card"\n        alignment="start"\n        icon={\n          <img\n            alt="Avatar"\n            class="h-8 w-8 rounded-lg shadow-lg"\n            src="https://res.cloudinary.com/dkht4mwqi/image/upload/f_auto,q_auto/v1718462568/flowbite-qwik/jpnykkz8ojq7ojgg4qta.jpg"\n          />\n        }\n      >\n        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>\n        <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>\n        <Button size="xs" href="#">\n          Reply\n        </Button>\n      </Toast>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Playground',
      description: 'Use the playground to test different toast positions and types.',
      url: '/examples/[theme-rtl]/toast/04-playground',
      content:
        "import { component$, useContext, useSignal } from '@builder.io/qwik'\nimport { Link, StaticGenerateHandler } from '@builder.io/qwik-city'\nimport { Button, Select, ToastPosition, useToast } from 'flowbite-qwik'\nimport { toastPositionContext } from '~/root'\n\nexport default component$(() => {\n  const toastPosition = useContext(toastPositionContext)\n\n  const selected = useSignal('top-right')\n  const positions = [\n    { value: 'top-right', name: 'top-right' },\n    { value: 'top-left', name: 'top-left' },\n    { value: 'bottom-left', name: 'bottom-left' },\n    { value: 'bottom-right', name: 'bottom-right' },\n  ]\n\n  const { add } = useToast()\n\n  return (\n    <div class=\"flex flex-col space-y-2 p-3\">\n      <Select\n        bind:value={selected}\n        options={positions}\n        label=\"Select an position\"\n        onChange$={() => {\n          toastPosition.value = selected.value as ToastPosition\n        }}\n      />\n\n      <div class=\"flex gap-3\">\n        <Button\n          onClick$={() =>\n            add({\n              type: 'success',\n              text: 'This is a success toast',\n              closable: true,\n            })\n          }\n        >\n          Add success toast from\n        </Button>\n        <Button\n          onClick$={() =>\n            add({\n              type: 'danger',\n              text: 'This is a danger toast',\n              closable: true,\n              time: 2000,\n            })\n          }\n        >\n          Add danger toast with autoclose timer\n        </Button>\n      </div>\n      <Link href=\"/docs/getting-started/quickstart\" class=\"text-blue-500 underline\">\n        The toast position should be defined in the FlowbiteProvider\n      </Link>\n    </div>\n  )\n})",
      height: '400',
    },
  ],
  toggle: [
    {
      title: 'Default Toggle',
      description: 'Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.',
      url: '/examples/[theme-rtl]/toggle/01-default-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Toggle label="Toggle me" bind:checked={toggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Checked Toggle',
      description: 'Apply the checked attribute to the toggle component to activate the selection by default.',
      url: '/examples/[theme-rtl]/toggle/02-checked-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Toggle label="Toggle me" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Disabled state',
      description: 'Apply the disabled attribute to disallow the users from making any further selections.',
      url: '/examples/[theme-rtl]/toggle/03-disabled-state',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Toggle label="Disabled toggle" disabled bind:checked={toggleValue} />\n      <Toggle label="Disabled checked" disabled bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Colors',
      description: 'You can customize the toggle component with different colors.',
      url: '/examples/[theme-rtl]/toggle/04-color',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Toggle label="Red" color="red" bind:checked={checkedToggleValue} />\n      <Toggle label="Green" color="green" bind:checked={checkedToggleValue} />\n      <Toggle label="Yellow" color="yellow" bind:checked={checkedToggleValue} />\n      <Toggle label="Orange" color="orange" bind:checked={checkedToggleValue} />\n      <Toggle label="Teal" color="teal" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Sizes',
      description: 'You can customize the toggle component with different sizes.',
      url: '/examples/[theme-rtl]/toggle/05-size',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex flex-wrap gap-2 p-6">\n      <Toggle label="Small" size="sm" bind:checked={checkedToggleValue} />\n      <Toggle label="Medium" size="md" bind:checked={checkedToggleValue} />\n      <Toggle label="Large" size="lg" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
  ],
  tooltip: [
    {
      title: 'Default tooltip',
      description:
        'Wrap the trigger component with the <Tooltip> component and pass the tooltip content to the content prop of the <Tooltip> component.',
      url: '/examples/[theme-rtl]/tooltip/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Tooltip } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex justify-center p-8 text-center">\n      <Tooltip style="dark">\n        <Button q:slot="trigger">Hover me</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Default styles',
      description: 'Use the style prop to change the style of the tooltip. The default style is light and you can also use dark.',
      url: '/examples/[theme-rtl]/tooltip/02-styles',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Tooltip } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex justify-center gap-3 p-8 text-center">\n      <Tooltip style="dark">\n        <Button q:slot="trigger">Dark tooltip</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n      <Tooltip style="light">\n        <Button q:slot="trigger">Light tooltip</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n      <Tooltip style="auto">\n        <Button q:slot="trigger">Auto tooltip</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Placement',
      description:
        'Update the placement of the tooltip using the placement prop. The default placement is top and you can also use right, bottom, and left.',
      url: '/examples/[theme-rtl]/tooltip/03-placement',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Tooltip } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex justify-center gap-3 p-8 text-center">\n      <Tooltip placement="top">\n        <Button q:slot="trigger">Tooltip top</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n      <Tooltip placement="right">\n        <Button q:slot="trigger">Tooltip right</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n      <Tooltip placement="bottom">\n        <Button q:slot="trigger">Tooltip bottom</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n      <Tooltip placement="left">\n        <Button q:slot="trigger">Tooltip left</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Trigger',
      description:
        'Use the trigger prop to change the trigger type of the tooltip if you want to show the tooltip when clicking on the trigger element instead of hovering over it.',
      url: '/examples/[theme-rtl]/tooltip/04-trigger',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Tooltip } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex justify-center gap-3 p-8 text-center">\n      <Tooltip trigger="hover">\n        <Button q:slot="trigger">Tooltip hover</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n      <Tooltip trigger="click">\n        <Button q:slot="trigger">Tooltip click</Button>\n        <div q:slot="content">This is a tooltip</div>\n      </Tooltip>\n    </div>\n  )\n})',
      height: '200',
    },
  ],
}
