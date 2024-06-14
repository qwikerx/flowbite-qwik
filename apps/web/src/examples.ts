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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Always open accordion',
      description: 'Always open prop to makes accordion able to open multiple elements.',
      url: '/examples/[theme-rtl]/accordion/02-always-open-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion alwaysOpen>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Flush accordion',
      description: 'Flush prop removes background color, side borders, and rounded corners',
      url: '/examples/[theme-rtl]/accordion/03-flush-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion flush>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Closed first accordion',
      description: 'First item is not open by default',
      url: '/examples/[theme-rtl]/accordion/04-closed-first-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion openFirstItem={false}>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
      height: '300',
    },
    {
      title: 'Styling accordion',
      description: 'You can style accordion content and headers by passing tailwind classes into them.',
      url: '/examples/[theme-rtl]/accordion/05-styling-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar img="/profile-picture-5.jpg" alt="avatar of Jese" rounded />\n      <Avatar img="/profile-picture-5.jpg" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar with border',
      description: 'Use the bordered prop to add a border style to the avatar.',
      url: '/examples/[theme-rtl]/avatar/02-avatar-with-border',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar img="/profile-picture-5.jpg" alt="avatar of Jese" rounded bordered />\n      <Avatar img="/profile-picture-5.jpg" bordered />\n    </div>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar img="/profile-picture-5.jpg" status="online" />\n      <Avatar img="/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />\n      <Avatar img="/profile-picture-5.jpg" status="offline" statusPosition="bottom-left" />\n      <Avatar img="/profile-picture-5.jpg" rounded status="away" statusPosition="bottom-right" />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Stacked layout',
      description:
        'Stack multiple avatars together by using the <AvatarGroup> component and by passing the stacked prop to the child components of the group. The <AvatarCounter> component can be used to show the total number of avatars in the group by passing the total prop and a link to the href prop to view all users.',
      url: '/examples/[theme-rtl]/avatar/06-avatar-stacked-layout',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar, AvatarGroup, AvatarGroupCounter } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <AvatarGroup>\n        <Avatar img="/profile-picture-1.jpg" rounded stacked />\n        <Avatar img="/profile-picture-2.jpg" rounded stacked />\n        <Avatar img="/profile-picture-3.jpg" rounded stacked />\n        <Avatar img="/profile-picture-4.jpg" rounded stacked />\n        <Avatar img="/profile-picture-5.jpg" rounded stacked />\n      </AvatarGroup>\n      <AvatarGroup>\n        <Avatar img="/profile-picture-1.jpg" rounded stacked />\n        <Avatar img="/profile-picture-2.jpg" rounded stacked />\n        <Avatar img="/profile-picture-3.jpg" rounded stacked />\n        <Avatar img="/profile-picture-4.jpg" rounded stacked />\n        <AvatarGroupCounter total={99} href="#" />\n      </AvatarGroup>\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar with text',
      description:
        'Use this example to show an avatar with text (i.e. username, email, etc.) by passing the custom markup inside the <Avatar> component. This is useful for admin dashboard interfaces while the user is logged in.',
      url: '/examples/[theme-rtl]/avatar/07-avatar-with-text',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Avatar img="/profile-picture-5.jpg" rounded>\n      <div class="space-y-1 font-medium dark:text-white">\n        <div>Jese Leos</div>\n        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>\n      </div>\n    </Avatar>\n  )\n})',
      height: '100',
    },
    {
      title: 'Avatar dropdown',
      description:
        'Use the <Dropdown> component to show a dropdown menu when clicking on the avatar component. This example is often used to show the user settings, account settings, and more.',
      url: '/examples/[theme-rtl]/avatar/08-avatar-dropdown',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar, Dropdown, DropdownItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="ml-16">\n      <Dropdown as={<Avatar alt="User settings" img="/profile-picture-5.jpg" rounded />}>\n        <DropdownItem header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </DropdownItem>\n        <DropdownItem>Dashboard</DropdownItem>\n        <DropdownItem>Settings</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Sign out</DropdownItem>\n      </Dropdown>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Avatar colors',
      description:
        'If you want to change the default color of the avatar component you can pass the color prop. Colors that you can choose from are gray, light, purple, success, pink, and more.',
      url: '/examples/[theme-rtl]/avatar/09-avatar-colors',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col gap-3">\n      <div class="flex flex-wrap gap-2">\n        <Avatar img="/profile-picture-5.jpg" rounded bordered color="gray" />\n        <Avatar img="/profile-picture-5.jpg" rounded bordered color="failure" />\n        <Avatar img="/profile-picture-5.jpg" rounded bordered color="purple" />\n        <Avatar img="/profile-picture-5.jpg" rounded bordered color="success" />\n        <Avatar img="/profile-picture-5.jpg" rounded bordered color="pink" />\n      </div>\n      <div class="flex flex-wrap gap-2">\n        <Avatar img="/profile-picture-5.jpg" bordered color="gray" />\n        <Avatar img="/profile-picture-5.jpg" bordered color="failure" />\n        <Avatar img="/profile-picture-5.jpg" bordered color="purple" />\n        <Avatar img="/profile-picture-5.jpg" bordered color="success" />\n        <Avatar img="/profile-picture-5.jpg" bordered color="pink" />\n      </div>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Avatar sizes',
      description:
        'Change the default size of the avatar component by passing the size prop. Sizes that you can choose from are xs, sm, md, lg, and xl.',
      url: '/examples/[theme-rtl]/avatar/10-avatar-sizes',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap items-center gap-2">\n      <Avatar img="/profile-picture-5.jpg" size="xs" />\n      <Avatar img="/profile-picture-5.jpg" size="sm" />\n      <Avatar img="/profile-picture-5.jpg" size="md" />\n      <Avatar img="/profile-picture-5.jpg" size="lg" />\n      <Avatar img="/profile-picture-5.jpg" size="xl" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Override image element',
      description:
        'You can override the default image element by passing the img prop to the <Avatar> component. This is useful if you want to use a different image element like <Image>',
      url: '/examples/[theme-rtl]/avatar/11-avatar-override-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Avatar } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-wrap gap-2">\n      <Avatar\n        img={\n          <picture>\n            <source media="(min-width: 900px)" srcset="/profile-picture-3.jpg" />\n            <source media="(min-width: 480px)" srcset="/profile-picture-4.jpg" />\n            <img alt="" src="/profile-picture-5.jpg" height="48" width="48" />\n          </picture>\n        }\n      />\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  badge: [
    {
      title: 'Default Badge',
      description: 'Use the following badge elements to indicate counts or labels inside or outside components.',
      url: '/examples/[theme-rtl]/badge/01-default-badge',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge type="default" content="Default" />\n      <Badge type="dark" content="Dark" />\n      <Badge type="red" content="Red" />\n      <Badge type="green" content="Green" />\n      <Badge type="yellow" content="Yellow" />\n      <Badge type="indigo" content="Indigo" />\n      <Badge type="purple" content="Purple" />\n      <Badge type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Bordered badge',
      description: 'This example can be used to add a border accent to the badge component.',
      url: '/examples/[theme-rtl]/badge/02-props-bordered',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge size="sm" bordered content="Default" />\n      <Badge size="sm" bordered type="dark" content="Dark" />\n      <Badge size="sm" bordered type="red" content="Red" />\n      <Badge size="sm" bordered type="green" content="Green" />\n      <Badge size="sm" bordered type="yellow" content="Yellow" />\n      <Badge size="sm" bordered type="indigo" content="Indigo" />\n      <Badge size="sm" bordered type="purple" content="Purple" />\n      <Badge size="sm" bordered type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Pills badge',
      description: 'Use this example to make the corners even more rounded like pills for the badge component.',
      url: '/examples/[theme-rtl]/badge/03-props-pills',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge pills content="Default" />\n      <Badge pills type="dark" content="Dark" />\n      <Badge pills type="red" content="Red" />\n      <Badge pills type="green" content="Green" />\n      <Badge pills type="yellow" content="Yellow" />\n      <Badge pills type="indigo" content="Indigo" />\n      <Badge pills type="purple" content="Purple" />\n      <Badge pills type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Badges as links',
      description: 'You can also use badges as anchor elements to link to another page. Prop – href',
      url: '/examples/[theme-rtl]/badge/04-as-link',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge href="#" content="Link" bordered />\n      <Badge href="#" size="sm" content="Link" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Large badge',
      description: 'Use size prop to change the size of the badge component.',
      url: '/examples/[theme-rtl]/badge/05-props-size',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge size="xs" content="Default" />\n      <Badge size="xs" type="dark" content="Dark" />\n      <Badge size="xs" type="red" content="Red" />\n      <Badge size="sm" type="green" content="Green" />\n      <Badge size="sm" type="yellow" content="Yellow" />\n      <Badge size="sm" type="indigo" content="Indigo" />\n      <Badge size="sm" type="purple" content="Purple" />\n      <Badge size="sm" type="pink" content="Pink" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Badge with Icon',
      description: 'You can also use SVG icons inside the badge elements.',
      url: '/examples/[theme-rtl]/badge/06-with-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\nimport { IconRocketOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge icon={IconRocketOutline} content="Icon" />\n      <Badge icon={IconRocketOutline} size="sm" content="Icon" />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Chips (dismissible badges)',
      description: 'This example can be used to make badges dismissible by adding a close button.',
      url: '/examples/[theme-rtl]/badge/07-props-chips',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        content="Default"\n      />\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="dark"\n        content="Dark"\n      />\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="red"\n        content="Red"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="green"\n        content="Green"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="yellow"\n        content="Yellow"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="indigo"\n        content="Indigo"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="purple"\n        content="Purple"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="pink"\n        content="Pink"\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Badge with Icon only',
      description: 'You can also use badge with only icon.',
      url: '/examples/[theme-rtl]/badge/08-with-icon-only',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\nimport { IconRocketOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge icon={IconRocketOutline} size="sm" />\n      <Badge type="dark" icon={IconRocketOutline} size="sm" />\n      <Badge type="green" icon={IconRocketOutline} size="sm" />\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  banner: [
    {
      title: 'Default sticky banner',
      description:
        'Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.',
      url: '/examples/[theme-rtl]/banner/01-default-banner',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Banner, BannerCollapseButton } from \'flowbite-qwik\'\nimport { IconCloseOutline, IconShareNodesSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="top">\n        <div class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">\n          <div class="mx-auto flex items-center">\n            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">\n              <IconShareNodesSolid class="mr-4 h-4 w-4" />\n              <span class="[&_p]:inline">\n                New brand identity has been launched for the&nbsp;\n                <a\n                  href="https://flowbite.com"\n                  class="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"\n                >\n                  Flowbite Library\n                </a>\n              </span>\n            </p>\n          </div>\n          <BannerCollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">\n            <IconCloseOutline class="h-4 w-4" />\n          </BannerCollapseButton>\n        </div>\n      </Banner>\n      <div class="max-w-lg mx-auto">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="max-w-lg mb-7 animate-pulse">\n          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">\n            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
    {
      title: 'Bottom banner position',
      description: 'This example can be used to position the sticky banner to the bottom side of the page instead of the top side.',
      url: '/examples/[theme-rtl]/banner/02-banner-bottom-position',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Banner, BannerCollapseButton } from \'flowbite-qwik\'\nimport { IconArrowRightOutline, IconCloseOutline, IconSalePercentOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="bottom">\n        <div class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">\n          <div class="mx-auto flex items-center">\n            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">\n              <span class="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">\n                <IconSalePercentOutline class="h-4 w-4" />\n              </span>\n              <span class="[&_p]:inline">\n                Get 5% commision per sale&nbsp;\n                <a\n                  href="https://flowbite.com"\n                  class="ml-0 flex items-center text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"\n                >\n                  Become a partner\n                  <IconArrowRightOutline class="ml-2" />\n                </a>\n              </span>\n            </p>\n          </div>\n          <BannerCollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">\n            <IconCloseOutline class="h-4 w-4" />\n          </BannerCollapseButton>\n        </div>\n      </Banner>\n      <div class="max-w-lg mx-auto">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="max-w-lg mb-7 animate-pulse">\n          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">\n            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
    {
      title: 'Marketing CTA banner',
      description:
        'Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner. Set a different width by using the max-w-{*} utility classes from Tailwind CSS.',
      url: '/examples/[theme-rtl]/banner/03-banner-marketing-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Banner, BannerCollapseButton, Button } from \'flowbite-qwik\'\nimport { IconCloseSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="top">\n        <div class="flex w-[calc(100%-2rem)] flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">\n          <div class="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">\n            <a href="https://flowbite.com/" class="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">\n              <img src="https://flowbite.com/docs/images/logo.svg" class="mr-2 h-6" alt="Flowbite Logo" />\n              <span class="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:pr-6">Flowbite</span>\n            </a>\n            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">\n              Build websites even faster with components on top of Tailwind CSS\n            </p>\n          </div>\n          <div class="flex shrink-0 items-center">\n            <Button href="#">Sign up</Button>\n            <BannerCollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">\n              <IconCloseSolid class="h-4 w-4" />\n            </BannerCollapseButton>\n          </div>\n        </div>\n      </Banner>\n      <div class="max-w-lg mx-auto">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="max-w-lg mb-7 animate-pulse">\n          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">\n            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
    {
      title: 'Newsletter sign-up banner',
      description:
        'This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.',
      url: '/examples/[theme-rtl]/banner/04-banner-newsletter-signup',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Banner, BannerCollapseButton, Button, Input } from \'flowbite-qwik\'\nimport { IconCloseSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const email = useSignal(\'\')\n\n  return (\n    <div class="h-[440px]">\n      <Banner sticky="bottom">\n        <div class="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">\n          <div class="mx-auto flex w-full shrink-0 items-center sm:w-auto">\n            <form action="#" class="flex w-full flex-col items-center md:flex-row md:gap-x-3">\n              <label for="email" class="mb-2 mr-auto shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0">\n                Sign up for our newsletter\n              </label>\n              <Input bind:value={email} id="email" placeholder="Enter your email" required type="email" />\n              <Button type="submit">Subscribe</Button>\n            </form>\n          </div>\n          <BannerCollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">\n            <IconCloseSolid class="h-4 w-4" />\n          </BannerCollapseButton>\n        </div>\n      </Banner>\n      <div class="max-w-lg mx-auto">\n        <div role="status" class="my-7 animate-pulse">\n          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="max-w-lg mb-7 animate-pulse">\n          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">\n            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">\n              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>\n            </svg>\n          </div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n        <div role="status" class="my-6 animate-pulse">\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>\n          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>\n          <span class="sr-only">Loading...</span>\n        </div>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
  ],
  breadcrumb: [
    {
      title: 'Default Breadcrumb',
      description: 'Use the following breadcrumb example to show the hierarchical structure of pages.',
      url: '/examples/[theme-rtl]/breadcrumb/01-default-breadcrumb',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb>\n        <BreadcrumbItem home href="#">\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\n        <BreadcrumbItem>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Solid Breadcrumb',
      description: 'You can alternatively also use the breadcrumb components with a solid background.',
      url: '/examples/[theme-rtl]/breadcrumb/02-solid-breadcrumb',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <BreadcrumbItem home href="#">\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\n        <BreadcrumbItem>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Breadcrumb with Custom Icons',
      description: 'You can customize the icons for the home and arrow icons in the breadcrumb component.',
      url: '/examples/[theme-rtl]/breadcrumb/03-custom-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem } from \'flowbite-qwik\'\nimport { IconArrowLeftOutline, IconBarsOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <BreadcrumbItem home href="#" homeIcon={IconBarsOutline}>\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#" arrowIcon={IconArrowLeftOutline}>\n          Projects\n        </BreadcrumbItem>\n        <BreadcrumbItem arrowIcon={IconArrowLeftOutline}>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  button: [
    {
      title: 'Default button',
      description: 'Use these default button styles with multiple colors to indicate an action or link within your website.',
      url: '/examples/[theme-rtl]/button/01-default-button',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button color="default">Default</Button>\n      <Button color="alternative">Alternative</Button>\n      <Button color="dark">Dark</Button>\n      <Button color="light">Light</Button>\n      <Button color="green">Green</Button>\n      <Button color="red">Red</Button>\n      <Button color="yellow">Yellow</Button>\n      <Button color="purple">Purple</Button>\n      <Button color="pink">Pink</Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button sizes',
      description: 'Use these examples if you want to use smaller or larger buttons.',
      url: '/examples/[theme-rtl]/button/02-button-size',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 items-center flex-wrap">\n      <Button size="xs">Extra Small - xs</Button>\n      <Button size="sm">Small - sm</Button>\n      <Button size="md">Medium - md</Button>\n      <Button size="lg">Large - lg</Button>\n      <Button size="xl">Extra Large - xl</Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button pills',
      description: 'The button pills can be used as an alternative style by using fully rounded edges.',
      url: '/examples/[theme-rtl]/button/03-button-pill',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button color="default" pill>\n        Default\n      </Button>\n      <Button color="alternative" pill>\n        Alternative\n      </Button>\n      <Button color="dark" pill>\n        Dark\n      </Button>\n      <Button color="light" pill>\n        Light\n      </Button>\n      <Button color="green" pill>\n        Green\n      </Button>\n      <Button color="red" pill>\n        Red\n      </Button>\n      <Button color="yellow" pill>\n        Yellow\n      </Button>\n      <Button color="purple" pill>\n        Purple\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button gradient monochrome',
      description:
        'These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.',
      url: '/examples/[theme-rtl]/button/04-button-gradient-monochrome',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button gradient="blue">Blue</Button>\n      <Button gradient="cyan">Cyan</Button>\n      <Button gradient="green">Green</Button>\n      <Button gradient="lime">Lime</Button>\n      <Button gradient="pink">Pink</Button>\n      <Button gradient="purple">Purple</Button>\n      <Button gradient="red">Red</Button>\n      <Button gradient="teal">Teal</Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button gradient duotone',
      description: 'These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.',
      url: '/examples/[theme-rtl]/button/05-button-gradient-duotone',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button gradient="purple-blue">Purple to blue</Button>\n      <Button gradient="cyan-blue">Cyan to blue</Button>\n      <Button gradient="green-blue">Green to blue</Button>\n      <Button gradient="purple-pink">Purple to pink</Button>\n      <Button gradient="pink-orange">Pink to orange</Button>\n      <Button gradient="teal-lime">Teal to lime</Button>\n      <Button gradient="red-yellow">Red to yellow</Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button outline',
      description: 'This incorporates an outline border',
      url: '/examples/[theme-rtl]/button/06-button-outline',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button color="default" outline>\n        Default\n      </Button>\n      <Button color="dark" outline>\n        Dark\n      </Button>\n      <Button color="green" outline>\n        Green\n      </Button>\n      <Button color="red" outline>\n        Red\n      </Button>\n      <Button color="yellow" outline>\n        Yellow\n      </Button>\n      <Button color="purple" outline>\n        Purple\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button outline gradient',
      description:
        'This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.',
      url: '/examples/[theme-rtl]/button/07-button-outline-gradient',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button gradient="purple-blue" outline>\n        Purple to blue\n      </Button>\n      <Button gradient="cyan-blue" outline>\n        Cyan to blue\n      </Button>\n      <Button gradient="green-blue" outline>\n        Green to blue\n      </Button>\n      <Button gradient="purple-pink" outline>\n        Purple to pink\n      </Button>\n      <Button gradient="pink-orange" outline>\n        Pink to orange\n      </Button>\n      <Button gradient="teal-lime" outline>\n        Teal to lime\n      </Button>\n      <Button gradient="red-yellow" outline>\n        Red to yellow\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button colored shadows',
      description: 'These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.',
      url: '/examples/[theme-rtl]/button/08-button-shadow',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button gradient="blue" shadow>\n        Blue with blue\n      </Button>\n      <Button gradient="cyan" shadow>\n        Cyan with cyan\n      </Button>\n      <Button gradient="green" shadow>\n        Green with green\n      </Button>\n      <Button gradient="lime" shadow>\n        Lime with lime\n      </Button>\n      <Button gradient="pink" shadow>\n        Pink with pink\n      </Button>\n      <Button gradient="purple" shadow>\n        Purple with purple\n      </Button>\n      <Button gradient="red" shadow>\n        Red with red\n      </Button>\n      <Button gradient="teal" shadow>\n        Teal with teal\n      </Button>\n      <Button gradient="blue" shadow="red">\n        Blue with red\n      </Button>\n      <Button gradient="cyan" shadow="teal">\n        Cyan with teal\n      </Button>\n      <Button gradient="teal" shadow="purple">\n        Teal with purple\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button square',
      description: 'Sometimes you need a button to indicate an action using only an icon.',
      url: '/examples/[theme-rtl]/button/09-button-square',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\nimport { IconArrowLeftOutline, IconArrowRightOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button gradient="red-yellow" square>\n        <IconArrowRightOutline class="w-5 h-5" />\n      </Button>\n      <Button color="default" pill square>\n        <IconArrowRightOutline class="w-5 h-5" />\n      </Button>\n      <Button color="dark" outline square>\n        <IconArrowLeftOutline class="w-5 h-5" />\n      </Button>\n      <Button color="yellow" outline pill square>\n        <IconArrowLeftOutline class="w-5 h-5" />\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button loading',
      description: 'Use the Spinner components to indicate a loader animation inside buttons:',
      url: '/examples/[theme-rtl]/button/10-button-loading',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, useToggle } from \'flowbite-qwik\'\nimport { IconArrowLeftOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const { value: loading, toggle$ } = useToggle()\n\n  return (\n    <div class="flex gap-2 items-center flex-wrap">\n      <Button disabled={loading.value} loading={loading.value} gradient="purple-blue" outline size="xs" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="red-yellow" size="sm" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} color="default" loadingPosition="suffix" outline onClick$={toggle$} suffix={IconArrowLeftOutline}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="green-blue" size="lg" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="pink" size="xl" onClick$={toggle$}>\n        Click me\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button disabled',
      description:
        'Use the following styles to indicate a disabled button. This can be often used inside form elements to disable the submit button before all the form elements have been completed and validated.',
      url: '/examples/[theme-rtl]/button/11-button-disabled',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button color="default" disabled>\n        Default\n      </Button>\n      <Button color="default" outline disabled>\n        Default outline\n      </Button>\n      <Button gradient="red" disabled>\n        Red gradient\n      </Button>\n      <Button gradient="red-yellow" disabled>\n        Red to yellow gradient\n      </Button>\n      <Button gradient="red-yellow" outline disabled>\n        Red to yellow outline\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button as link',
      description: 'You can add a link to a Button component.',
      url: '/examples/[theme-rtl]/button/12-button-as-link',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\nimport { Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button href="https://google.com" target="_blank">\n        Google.com\n      </Button>\n      <Button href="/pages/getting-started">Quickstart</Button>\n      <Button href="/" tag={Link}>\n        Internal link\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button full option',
      description: 'Display a button taking the full width of its container',
      url: '/examples/[theme-rtl]/button/13-button-full',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button } from 'flowbite-qwik'\nimport { IconHomeOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-2 items-center flex-wrap\">\n      <Button prefix={IconHomeOutline} full>\n        Buy\n      </Button>\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Button slot default',
      description: 'Add content inside the button as default',
      url: '/examples/[theme-rtl]/button/14-button-slot-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button } from \'flowbite-qwik\'\nimport { IconArrowRightOutline, IconArrowRightSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 items-center flex-wrap">\n      <Button gradient="purple-blue" square>\n        <IconArrowRightSolid class="w-5 h-5" />\n      </Button>\n      <Button color="default" pill square>\n        <IconArrowRightSolid class="w-5 h-5" />\n      </Button>\n      <Button gradient="green-blue" square>\n        Close something\n      </Button>\n      <Button color="default" outline pill square suffix={IconArrowRightOutline}>\n        Open something\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button slot prefix',
      description: 'Add prefix content inside the button',
      url: '/examples/[theme-rtl]/button/15-button-slot-prefix',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button } from 'flowbite-qwik'\nimport { IconHomeOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-2 items-center flex-wrap\">\n      <Button prefix={IconHomeOutline}>Buy</Button>\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Button slot suffix',
      description: 'Add suffix content inside the button',
      url: '/examples/[theme-rtl]/button/16-button-slot-suffix',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button } from 'flowbite-qwik'\nimport { IconArrowRightOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-2 items-center flex-wrap\">\n      <Button suffix={IconArrowRightOutline}>Choose plan</Button>\n    </div>\n  )\n})",
      height: '200',
    },
  ],
  card: [
    {
      title: 'Default card',
      description:
        'Use this example to show a simple card component with a title and description and apply the href tag to the <Card> component to set a hyperlink to the card.',
      url: '/examples/[theme-rtl]/card/01-default-card',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card href="#" class="max-w-sm">\n      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '300',
    },
    {
      title: 'Card with CTA button',
      description: 'By also importing the <Button> component you can add it inside the card to show a call-to-action button.',
      url: '/examples/[theme-rtl]/card/02-card-with-cta-button',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Card } from \'flowbite-qwik\'\nimport { IconArrowRightOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n      <Button suffix={IconArrowRightOutline}>Read more</Button>\n    </Card>\n  )\n})',
      height: '300',
    },
    {
      title: 'Card with image',
      description: 'Add an image to the card by using the imgSrc prop and set the imgAlt prop to add an alt text to the image.',
      url: '/examples/[theme-rtl]/card/03-card-with-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/image-1.jpg">\n      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card with custom image',
      description: 'Specify your own image component for the card by using the imgAs prop',
      url: '/examples/[theme-rtl]/card/04-card-with-custom-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm" imgAs={<img width="920" height="613" src="/image-1.jpg" alt="image 1" />}>\n      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card horizontal',
      description: 'Use the horizontal prop to show the card in a horizontal layout.',
      url: '/examples/[theme-rtl]/card/05-card-horizontal',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm" imgSrc="/image-4.jpg" horizontal>\n      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n      <p class="font-normal text-gray-700 dark:text-gray-400">\n        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n      </p>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'User profile card',
      description: 'Use this example to show a user card with a profile picture, name, job title, buttons and a dropdown menu.',
      url: '/examples/[theme-rtl]/card/06-card-user-profile',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Dropdown, DropdownItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <div class="flex justify-end px-4 pt-4">\n        <Dropdown inline label="">\n          <DropdownItem>\n            <a\n              href="#"\n              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"\n            >\n              Edit\n            </a>\n          </DropdownItem>\n          <DropdownItem>\n            <a\n              href="#"\n              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"\n            >\n              Export Data\n            </a>\n          </DropdownItem>\n          <DropdownItem>\n            <a\n              href="#"\n              class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"\n            >\n              Delete\n            </a>\n          </DropdownItem>\n        </Dropdown>\n      </div>\n      <div class="flex flex-col items-center pb-10">\n        <img alt="Bonnie image" height="96" src="/profile-picture-3.jpg" width="96" class="mb-3 rounded-full shadow-lg" />\n        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>\n        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>\n        <div class="mt-4 flex space-x-3 lg:mt-6">\n          <a\n            href="#"\n            class="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"\n          >\n            Add friend\n          </a>\n          <a\n            href="#"\n            class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"\n          >\n            Message\n          </a>\n        </div>\n      </div>\n    </Card>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm" imgAlt="Apple Watch Series 7 in colors pink, silver, and black" imgSrc="/apple-watch.png">\n      <a href="#">\n        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>\n      </a>\n      <div class="mb-5 mt-2.5 flex items-center">\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <svg class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n        </svg>\n        <span class="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">5.0</span>\n      </div>\n      <div class="flex items-center justify-between">\n        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>\n        <a\n          href="#"\n          class="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"\n        >\n          Add to cart\n        </a>\n      </div>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Card with list',
      description:
        'Use this component to display a card with a list of items such as your latest customers or latest orders that include an image, descriptive text and a link to view more.',
      url: '/examples/[theme-rtl]/card/09-card-with-list',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <div class="mb-4 flex items-center justify-between">\n        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>\n        <a href="#" class="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n          View all\n        </a>\n      </div>\n      <div class="flow-root">\n        <ul class="divide-y divide-gray-200 dark:divide-gray-700">\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img alt="Neil image" height="32" src="/profile-picture-1.jpg" width="32" class="rounded-full" />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>\n            </div>\n          </li>\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img alt="Bonnie image" height="32" src="/profile-picture-3.jpg" width="32" class="rounded-full" />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>\n            </div>\n          </li>\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img alt="Michael image" height="32" src="/profile-picture-2.jpg" width="32" class="rounded-full" />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>\n            </div>\n          </li>\n          <li class="py-3 sm:py-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img alt="Lana image" height="32" src="/profile-picture-4.jpg" width="32" class="rounded-full" />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>\n            </div>\n          </li>\n          <li class="pb-0 pt-3 sm:pt-4">\n            <div class="flex items-center space-x-4">\n              <div class="shrink-0">\n                <img alt="Thomas image" height="32" src="/profile-picture-5.jpg" width="32" class="rounded-full" />\n              </div>\n              <div class="min-w-0 flex-1">\n                <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>\n                <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>\n              </div>\n              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </Card>\n  )\n})',
      height: '500',
    },
    {
      title: 'Pricing card',
      description: 'Use the pricing card component to show the pricing of your product or service.',
      url: '/examples/[theme-rtl]/card/10-card-pricing',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Card class="max-w-sm">\n      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>\n      <div class="flex items-baseline text-gray-900 dark:text-white">\n        <span class="text-3xl font-semibold">$</span>\n        <span class="text-5xl font-extrabold tracking-tight">49</span>\n        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>\n      </div>\n      <ul class="my-7 space-y-5">\n        <li class="flex space-x-3">\n          <svg class="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>\n        </li>\n        <li class="flex space-x-3">\n          <svg class="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>\n        </li>\n        <li class="flex space-x-3">\n          <svg class="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <svg class="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <svg class="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500">API Access</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <svg class="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>\n        </li>\n        <li class="flex space-x-3 line-through decoration-gray-500">\n          <svg class="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n            <path\n              fill-rule="evenodd"\n              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n              clip-rule="evenodd"\n            />\n          </svg>\n          <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>\n        </li>\n      </ul>\n      <button\n        type="button"\n        class="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"\n      >\n        Choose plan\n      </button>\n    </Card>\n  )\n})',
      height: '600',
    },
  ],
  carousel: [
    {
      title: 'Default carousel',
      description: 'Use this example by adding a series of images inside the <Carousel> component.',
      url: '/examples/[theme-rtl]/carousel/01-default-carousel',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Slider content',
      description: 'Instead of images you can also use any type of markup and content inside the carousel such as simple text.',
      url: '/examples/[theme-rtl]/carousel/02-slider-content',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 1</div>\n        </CarouselSlice>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 2</div>\n        </CarouselSlice>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 3</div>\n        </CarouselSlice>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 4</div>\n        </CarouselSlice>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">Slide 5</div>\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Static carousel',
      description:
        'Pass the slideAuto prop to false to the carousel component to make it static and disable the automatic sliding functionality. This does not disable the control or indicator buttons.',
      url: '/examples/[theme-rtl]/carousel/03-static-carousel',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel slideAuto={false}>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Sliding interval',
      description: 'Use the slideInterval prop to set the interval between slides in milliseconds. The default value is 3000.',
      url: '/examples/[theme-rtl]/carousel/04-sliding-interval',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel slideInterval={5000}>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Carousel without controls',
      description: 'Use the noControls prop to hide the controls of the carousel',
      url: '/examples/[theme-rtl]/carousel/05-carousel-without-controls',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel noControls>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Carousel without indicators',
      description: 'Use the noIndicators prop to hide the indicators of the carousel',
      url: '/examples/[theme-rtl]/carousel/06-carousel-without-indicators',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel noIndicators>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Slider complex content',
      description: 'Instead of images or simple texte, we can use any component we need',
      url: '/examples/[theme-rtl]/carousel/07-slider-complex-content',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Card, Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-96">\n      <Carousel>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">\n            <Card href="#" class="max-w-sm">\n              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n              <p class="font-normal text-gray-700 dark:text-gray-400">\n                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n              </p>\n            </Card>\n          </div>\n        </CarouselSlice>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">\n            <Card href="#" class="max-w-sm">\n              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crystal Clear Oasis</h5>\n              <p class="font-normal text-gray-700 dark:text-gray-400">\n                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n              </p>\n            </Card>\n          </div>\n        </CarouselSlice>\n        <CarouselSlice>\n          <div class="flex h-full items-center justify-center bg-rose-400 dark:bg-rose-700 dark:text-white">\n            <Card href="#" class="max-w-sm">\n              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lost in the Sands</h5>\n              <p class="font-normal text-gray-700 dark:text-gray-400">\n                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\n              </p>\n            </Card>\n          </div>\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '600',
    },
    {
      title: 'Scrollable carousel',
      description: 'Use this example using the prop "scrollable" to scroll inside the carousel',
      url: '/examples/[theme-rtl]/carousel/08-carousel-scrollable',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel\n        scrollable\n        slideAuto={false}\n        onSlideChanged$={() => {\n          console.log(\'changed !\')\n        }}\n      >\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Pause On Hover',
      description:
        'To conditionally pause the carousel on mouse hover (desktop), or touch and hold (mobile), you can use the pauseOnHover property on the <Carousel> component. Default value is false.',
      url: '/examples/[theme-rtl]/carousel/09-carousel-pause-on-hover',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Carousel, CarouselSlice } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="h-56 sm:h-64 xl:h-80 2xl:h-96">\n      <Carousel pauseOnHover>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />\n        </CarouselSlice>\n        <CarouselSlice>\n          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />\n        </CarouselSlice>\n      </Carousel>\n    </div>\n  )\n})',
      height: '300',
    },
  ],
  checkbox: [
    {
      title: 'Checkbox example',
      description: 'Use this default example of a checkbox element in a checked and unchecked state.',
      url: '/examples/[theme-rtl]/checkbox/01-default',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(false)\n\n  return (\n    <>\n      <div class=\"p-3\">\n        <Checkbox bind:checked={val}>Checkbox</Checkbox>\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
    {
      title: 'Disabled state',
      description:
        'This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.',
      url: '/examples/[theme-rtl]/checkbox/02-disabled',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(false)\n\n  return (\n    <>\n      <div class=\"p-3\">\n        <Checkbox bind:checked={val} disabled>\n          Disable\n        </Checkbox>\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
    {
      title: 'Checked state',
      description: 'This example can be used for the checked state of the checkbox component.',
      url: '/examples/[theme-rtl]/checkbox/03-checked',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(true)\n\n  return (\n    <>\n      <div class=\"p-3\">\n        <Checkbox bind:checked={val}>Checked</Checkbox>\n      </div>\n    </>\n  )\n})",
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
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(false)\n\n  return (\n    <>\n      <div class=\"p-3\">\n        <Checkbox\n          bind:checked={val}\n          onChange$={(val: boolean) => {\n            alert(`Checkbox state changed to ${val}`)\n          }}\n        >\n          Change state\n        </Checkbox>\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
    {
      title: 'Colors',
      description: 'This example can be used for the color of the checkbox component by applying the color attribute to the input element.',
      url: '/examples/[theme-rtl]/checkbox/06-colors',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Checkbox, FlowbiteTheme } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const val = useSignal(true)\n\n  return (\n    <>\n      <div class=\"p-3 flex gap-3\">\n        {(['blue', 'green', 'red', 'pink', 'purple'] as FlowbiteTheme[]).map((color) => (\n          <Checkbox bind:checked={val} color={color}>\n            {color}\n          </Checkbox>\n        ))}\n      </div>\n    </>\n  )\n})",
      height: '100',
    },
  ],
  drawer: [
    {
      title: 'Drawer',
      description:
        'Use the Drawer component (or "off-canvas") to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions. You can set multiple options such as the placement, activate body scrolling, show or hide the backdrop and even use the sizeable edge functionality to show a small part of the drawer when it is not shown completely.',
      url: '/examples/[theme-rtl]/drawer/01-default-drawer',
      content:
        "import { component$, Fragment, Signal, Slot, useSignal } from '@builder.io/qwik'\nimport { Button, Drawer, DrawerPosition } from 'flowbite-qwik'\nimport { IconHomeOutline } from 'flowbite-qwik-icons'\n\nexport default component$(() => {\n  const isDrawerOpen: Record<string, Signal<boolean>> = {\n    left: useSignal(false),\n    right: useSignal(false),\n    top: useSignal(false),\n    bottom: useSignal(false),\n    'bottom-edge': useSignal(false),\n  }\n\n  return (\n    <section class=\"p-2\">\n      <div>\n        <h2 class=\"text-2xl font-semibold my-3\">Default Drawer</h2>\n        <div class=\"flex gap-2\">\n          {(['top', 'right', 'bottom', 'left', 'bottom-edge'] as DrawerPosition[]).map((position) => (\n            <Fragment key={position}>\n              <Button\n                onClick$={() => {\n                  isDrawerOpen[position].value = true\n                }}\n              >\n                {position}\n              </Button>\n\n              <Drawer\n                class={{\n                  hidden: position === 'bottom-edge' && isDrawerOpen.bottom.value,\n                }}\n                bind:open={isDrawerOpen[position]}\n                position={position}\n                title={`Drawer ${position}`}\n                titleIcon={IconHomeOutline}\n              >\n                <p class=\"mb-6 text-sm text-gray-500 dark:text-gray-400\">\n                  Supercharge your hiring by taking advantage of our&nbsp;\n                  <a href=\"#\" class=\"text-cyan-600 underline hover:no-underline dark:text-cyan-500\">\n                    limited-time sale\n                  </a>\n                  <br />\n                  for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.\n                </p>\n                <div class=\"flex gap-4\">\n                  <Button full>Buy</Button>\n                  <Button color=\"alternative\" full>\n                    See more\n                  </Button>\n                </div>\n              </Drawer>\n            </Fragment>\n          ))}\n        </div>\n        <Slot />\n      </div>\n    </section>\n  )\n})",
      height: '500',
    },
  ],
  dropdown: [
    {
      title: 'Default Dropdown',
      description:
        'Use this example to create a simple dropdown with a list of menu items by adding child <DropdownItem> components inside the main <Dropdown> component.',
      url: '/examples/[theme-rtl]/dropdown/01-default-dropdown',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown, DropdownItem } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\">\n      <DropdownItem>Dashboard</DropdownItem>\n      <DropdownItem>Settings</DropdownItem>\n      <DropdownItem>Earnings</DropdownItem>\n      <DropdownItem>Sign out</DropdownItem>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown divider',
      description: "Use the option 'divider' to <DropdownItem> component to add a divider between the dropdown items.",
      url: '/examples/[theme-rtl]/dropdown/02-dropdown-divider',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown, DropdownItem } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\">\n      <DropdownItem>Dashboard</DropdownItem>\n      <DropdownItem>Settings</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem>Separated link</DropdownItem>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown header',
      description:
        "Use the option 'header' to <DropdownItem> component to add a header to the dropdown. You can use this to add a user profile image and name, for example.",
      url: '/examples/[theme-rtl]/dropdown/03-dropdown-header',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown button">\n      <DropdownItem header>\n        <span class="block text-sm">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n      </DropdownItem>\n      <DropdownItem>Dashboard</DropdownItem>\n      <DropdownItem>Settings</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem>Sign out</DropdownItem>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown items with icon',
      description: 'Add custom icons next to the menu items by using the icon prop on the <DropdownItem> component.',
      url: '/examples/[theme-rtl]/dropdown/04-dropdown-items-with-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem } from \'flowbite-qwik\'\nimport { IconHomeOutline, IconSearchSolid, IconTextSizeOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown button">\n      <DropdownItem header>\n        <span class="block text-sm">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n      </DropdownItem>\n      <DropdownItem icon={IconHomeOutline}>Dashboard</DropdownItem>\n      <DropdownItem icon={IconSearchSolid}>Settings</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem icon={IconTextSizeOutline}>Sign out</DropdownItem>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Inline dropdown',
      description: 'Use the inline prop to make the dropdown appear inline with the trigger element.',
      url: '/examples/[theme-rtl]/dropdown/05-dropdown-inline',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown, DropdownItem } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\" inline>\n      <DropdownItem>Dashboard</DropdownItem>\n      <DropdownItem>Settings</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem>Separated link</DropdownItem>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'User avatar',
      description: 'This example can be used to show a list of menu items and options when a user is logged into your application.',
      url: '/examples/[theme-rtl]/dropdown/06-dropdown-user-avatar',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-5">\n      <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>\n        <DropdownItem header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </DropdownItem>\n        <DropdownItem>Dashboard</DropdownItem>\n        <DropdownItem>Settings</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Sign out</DropdownItem>\n      </Dropdown>\n\n      <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>\n        <DropdownItem header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </DropdownItem>\n        <DropdownItem>Dashboard</DropdownItem>\n        <DropdownItem>Settings</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Sign out</DropdownItem>\n      </Dropdown>\n\n      <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>\n        <DropdownItem header>\n          <span class="block text-sm">Bonnie Green</span>\n          <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n        </DropdownItem>\n        <DropdownItem>Dashboard</DropdownItem>\n        <DropdownItem>Settings</DropdownItem>\n        <DropdownItem divider />\n        <DropdownItem>Sign out</DropdownItem>\n      </Dropdown>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown sizes',
      description: 'The dropdown menus work with buttons of all sizes including smaller or larger ones.',
      url: '/examples/[theme-rtl]/dropdown/07-dropdown-sizes',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown, DropdownItem, DropdownSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <>\n      <div class=\"flex gap-5\">\n        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (\n          <Dropdown label=\"Dropdown button\" size={size}>\n            <DropdownItem>Dashboard</DropdownItem>\n            <DropdownItem>Settings</DropdownItem>\n          </Dropdown>\n        ))}\n      </div>\n      <div class=\"flex gap-5 mt-4\">\n        {(['s', 'm', 'l'] as DropdownSize[]).map((size) => (\n          <Dropdown label=\"Dropdown button\" size={size} inline>\n            <DropdownItem>Dashboard</DropdownItem>\n            <DropdownItem>Settings</DropdownItem>\n          </Dropdown>\n        ))}\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown click event handler',
      description: 'Add a custom onClick$ event handler to the <DropdownItem> component to handle the click event.',
      url: '/examples/[theme-rtl]/dropdown/08-dropdown-click-event-handler',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Dropdown, DropdownItem } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Dropdown label=\"Dropdown button\">\n      <DropdownItem\n        onClick$={() => {\n          alert('click dashboard')\n        }}\n      >\n        Dashboard\n      </DropdownItem>\n      <DropdownItem\n        onClick$={() => {\n          alert('click settings')\n        }}\n      >\n        Settings\n      </DropdownItem>\n      <DropdownItem\n        onClick$={() => {\n          alert('click earnings')\n        }}\n      >\n        Earnings\n      </DropdownItem>\n      <DropdownItem\n        onClick$={() => {\n          alert('click sign-out')\n        }}\n      >\n        Sign out\n      </DropdownItem>\n    </Dropdown>\n  )\n})",
      height: '200',
    },
    {
      title: 'Dropdown with checkbox',
      description: 'Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.',
      url: '/examples/[theme-rtl]/dropdown/09-dropdown-with-checkbox',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown checkbox" closeWhenSelect={false}>\n      <DropdownItem>\n        <div class="flex items-center">\n          <input\n            id="checkbox-item-1"\n            type="checkbox"\n            value="item-1"\n            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"\n          />\n          <label for="checkbox-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default checkbox\n          </label>\n        </div>\n      </DropdownItem>\n      <DropdownItem>\n        <div class="flex items-center">\n          <input\n            checked\n            id="checkbox-item-2"\n            type="checkbox"\n            value="item-2"\n            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"\n          />\n          <label for="checkbox-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Checked state\n          </label>\n        </div>\n      </DropdownItem>\n      <DropdownItem>\n        <div class="flex items-center">\n          <input\n            id="checkbox-item-3"\n            type="checkbox"\n            value="item-3"\n            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"\n          />\n          <label for="checkbox-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default checkbox\n          </label>\n        </div>\n      </DropdownItem>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown with radio',
      description: 'Enable more advanced interaction with your users by adding radio input elements inside the dropdown menu.',
      url: '/examples/[theme-rtl]/dropdown/10-dropdown-with-radiobox',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown radio" closeWhenSelect={false}>\n      <DropdownItem>\n        <div class="flex items-center">\n          <input\n            id="radio-item-1"\n            type="radio"\n            name="default-radio"\n            value="item-1"\n            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"\n          />\n          <label for="radio-item-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default radio\n          </label>\n        </div>\n      </DropdownItem>\n      <DropdownItem>\n        <div class="flex items-center">\n          <input\n            checked\n            id="radio-item-2"\n            type="radio"\n            name="default-radio"\n            value="item-2"\n            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"\n          />\n          <label for="radio-item-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Checked state\n          </label>\n        </div>\n      </DropdownItem>\n      <DropdownItem>\n        <div class="flex items-center">\n          <input\n            id="radio-item-3"\n            type="radio"\n            name="default-radio"\n            value="item-3"\n            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"\n          />\n          <label for="radio-item-3" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">\n            Default radio\n          </label>\n        </div>\n      </DropdownItem>\n    </Dropdown>\n  )\n})',
      height: '200',
    },
    {
      title: 'Dropdown with toggle switch',
      description: 'Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.',
      url: '/examples/[theme-rtl]/dropdown/11-dropdown-with-toggle-switch',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem, Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const enableNotifications = useSignal(false)\n  const enable2faAuthentication = useSignal(true)\n  const subscribeToNewsletter = useSignal(false)\n\n  return (\n    <div class="flex gap-4">\n      <Dropdown label="Dropdown toggle" closeWhenSelect={false}>\n        <DropdownItem>\n          <Toggle label="Enable notifications" bind:checked={enableNotifications} />\n        </DropdownItem>\n        <DropdownItem>\n          <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />\n        </DropdownItem>\n        <DropdownItem>\n          <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />\n        </DropdownItem>\n      </Dropdown>\n\n      <Dropdown label="Dropdown toggle" closeWhenSelect={false}>\n        <DropdownItem>\n          <Toggle label="Enable notifications" bind:checked={enableNotifications} />\n        </DropdownItem>\n        <DropdownItem>\n          <Toggle label="Enable 2FA authentication" bind:checked={enable2faAuthentication} />\n        </DropdownItem>\n        <DropdownItem>\n          <Toggle label="Subscribe to newsletter" bind:checked={subscribeToNewsletter} />\n        </DropdownItem>\n      </Dropdown>\n    </div>\n  )\n})',
      height: '200',
    },
  ],
  footer: [
    {
      title: 'Default footer',
      description: 'Use this footer component to show a copyright notice and some helpful website links.',
      url: '/examples/[theme-rtl]/footer/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <FooterCopyright href="#" by="Flowbite™" />\n      <FooterLinkGroup>\n        <FooterLink href="#">About</FooterLink>\n        <FooterLink href="#">Privacy Policy</FooterLink>\n        <FooterLink href="#">Licensing</FooterLink>\n        <FooterLink href="#">Contact</FooterLink>\n      </FooterLinkGroup>\n    </Footer>\n  )\n})',
      height: '400',
    },
    {
      title: 'Default with Logo',
      description: 'Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.',
      url: '/examples/[theme-rtl]/footer/02-footer with-logo',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer, FooterCopyright, FooterLink, FooterLinkGroup, FooterBrand, FooterDivider } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <div class="w-full text-center">\n        <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">\n          <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />\n          <FooterLinkGroup>\n            <FooterLink href="#">About</FooterLink>\n            <FooterLink href="#">Privacy Policy</FooterLink>\n            <FooterLink href="#">Licensing</FooterLink>\n            <FooterLink href="#">Contact</FooterLink>\n          </FooterLinkGroup>\n        </div>\n        <FooterDivider />\n        <FooterCopyright href="#" by="Flowbite™" />\n      </div>\n    </Footer>\n  )\n})',
      height: '400',
    },
    {
      title: 'Social media icons',
      description:
        'This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.',
      url: '/examples/[theme-rtl]/footer/03-footer with-sitemap-links',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer, FooterCopyright, FooterLink, FooterLinkGroup, FooterBrand, FooterDivider, FooterTitle, FooterIcon } from \'flowbite-qwik\'\nimport { IconFacebookSolid, IconGithubSolid, IconDribbbleSolid, IconLinkedinSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <div class="w-full">\n        <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">\n          <div>\n            <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />\n          </div>\n          <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">\n            <div>\n              <FooterTitle title="about" />\n              <FooterLinkGroup col>\n                <FooterLink href="#">Flowbite</FooterLink>\n                <FooterLink href="#">Tailwind CSS</FooterLink>\n              </FooterLinkGroup>\n            </div>\n            <div>\n              <FooterTitle title="Follow us" />\n              <FooterLinkGroup col>\n                <FooterLink href="#">Github</FooterLink>\n                <FooterLink href="#">Discord</FooterLink>\n              </FooterLinkGroup>\n            </div>\n            <div>\n              <FooterTitle title="Legal" />\n              <FooterLinkGroup col>\n                <FooterLink href="#">Privacy Policy</FooterLink>\n                <FooterLink href="#">Terms &amp; Conditions</FooterLink>\n              </FooterLinkGroup>\n            </div>\n          </div>\n        </div>\n        <FooterDivider />\n        <div class="w-full sm:flex sm:items-center sm:justify-between">\n          <FooterCopyright href="#" by="Flowbite™" />\n          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\n            <FooterIcon href="#" icon={IconFacebookSolid} />\n            <FooterIcon href="#" icon={IconGithubSolid} />\n            <FooterIcon href="#" icon={IconDribbbleSolid} />\n            <FooterIcon href="#" icon={IconLinkedinSolid} />\n          </div>\n        </div>\n      </div>\n    </Footer>\n  )\n})',
      height: '400',
    },
    {
      title: 'Sitemap links',
      description:
        'If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.',
      url: '/examples/[theme-rtl]/footer/04-footer with-socials',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Footer, FooterCopyright, FooterLink, FooterLinkGroup, FooterTitle, FooterIcon } from \'flowbite-qwik\'\nimport { IconFacebookSolid, IconGithubSolid, IconDribbbleSolid, IconLinkedinSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Footer bgDark>\n      <div class="w-full">\n        <div class="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">\n          <div>\n            <FooterTitle title="Company" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">About</FooterLink>\n              <FooterLink href="#">Careers</FooterLink>\n              <FooterLink href="#">Brand Center</FooterLink>\n              <FooterLink href="#">Blog</FooterLink>\n            </FooterLinkGroup>\n          </div>\n          <div>\n            <FooterTitle title="help center" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">Discord Server</FooterLink>\n              <FooterLink href="#">Twitter</FooterLink>\n              <FooterLink href="#">Facebook</FooterLink>\n              <FooterLink href="#">Contact Us</FooterLink>\n            </FooterLinkGroup>\n          </div>\n          <div>\n            <FooterTitle title="legal" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">Privacy Policy</FooterLink>\n              <FooterLink href="#">Licensing</FooterLink>\n              <FooterLink href="#">Terms &amp; Conditions</FooterLink>\n            </FooterLinkGroup>\n          </div>\n          <div>\n            <FooterTitle title="download" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">iOS</FooterLink>\n              <FooterLink href="#">Android</FooterLink>\n              <FooterLink href="#">Windows</FooterLink>\n              <FooterLink href="#">MacOS</FooterLink>\n            </FooterLinkGroup>\n          </div>\n        </div>\n        <div class="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">\n          <FooterCopyright href="#" by="Flowbite™" />\n          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\n            <FooterIcon href="#" icon={IconFacebookSolid} />\n            <FooterIcon href="#" icon={IconGithubSolid} />\n            <FooterIcon href="#" icon={IconDribbbleSolid} />\n            <FooterIcon href="#" icon={IconLinkedinSolid} />\n          </div>\n        </div>\n      </div>\n    </Footer>\n  )\n})',
      height: '400',
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
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\nimport { IconSearchOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Suffix',
      description: 'Use this example to add a suffix to the input field.',
      url: '/examples/[theme-rtl]/input/07-with-suffix',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input, Button } from \'flowbite-qwik\'\nimport { IconSearchOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        size="lg"\n        prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}\n        suffix={<Button>Hello</Button>}\n      />\n    </div>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Jumbotron, JumbotronHeading, JumbotronSubText, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Jumbotron>\n      <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>\n      <JumbotronSubText>\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </JumbotronSubText>\n      <div class="flex gap-2 justify-center">\n        <Button>Get started</Button>\n        <Button color="alternative">Learn more</Button>\n      </div>\n    </Jumbotron>\n  )\n})',
      height: '400',
    },
    {
      title: 'Align left',
      description: 'Use this example to align the jumbotron content to the left.',
      url: '/examples/[theme-rtl]/jumbotron/02-align-left',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Jumbotron, JumbotronHeading, JumbotronSubText, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Jumbotron align="left">\n      <JumbotronHeading tag="h2">We invest in the world’s potential</JumbotronHeading>\n      <JumbotronSubText>\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </JumbotronSubText>\n      <div class="flex gap-2">\n        <Button>Get started</Button>\n        <Button color="alternative">Learn more</Button>\n      </div>\n    </Jumbotron>\n  )\n})',
      height: '400',
    },
    {
      title: 'Background image',
      description: 'Use this jumbotron to apply a background image with a darkening opacity effect to improve readability.',
      url: '/examples/[theme-rtl]/jumbotron/03-background-image',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Jumbotron, JumbotronHeading, JumbotronSubText, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Jumbotron class="bg-center bg-no-repeat bg-[url(\'https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg\')] dark:bg-gray-700 bg-gray-700 bg-blend-multiply">\n      <JumbotronHeading tag="h2" class="text-white">\n        We invest in the world’s potential\n      </JumbotronHeading>\n      <JumbotronSubText class="text-white">\n        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.\n      </JumbotronSubText>\n      <div class="flex gap-2 justify-center">\n        <Button>Get started</Button>\n        <Button color="alternative">Learn more</Button>\n      </div>\n    </Jumbotron>\n  )\n})',
      height: '400',
    },
  ],
  modal: [
    {
      title: 'Default modal',
      description:
        'Use the <Modal> component to show a dialog element to the user with a header, body, and footer where you can add any type of content such as text or form elements. The visibility of the component can be set by passing a boolean value to the bind:show prop on the <Modal> component.',
      url: '/examples/[theme-rtl]/modal/01-default-modal',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const defaultModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <h2 class="my-3">Default modal</h2>\n      <Button\n        onClick$={() => {\n          defaultModalVisible.value = true\n        }}\n      >\n        Open Modal\n      </Button>\n      <Modal\n        header={<div class="flex items-center text-lg">Terms of Service</div>}\n        footer={\n          <div class="flex justify-between">\n            <Button\n              onClick$={() => {\n                defaultModalVisible.value = false\n              }}\n              color="alternative"\n            >\n              Decline\n            </Button>\n            <Button\n              onClick$={() => {\n                defaultModalVisible.value = false\n              }}\n              color="green"\n            >\n              I accept\n            </Button>\n          </div>\n        }\n        bind:show={defaultModalVisible}\n        onClickOutside$={() => {\n          console.log(\'click outside !\')\n        }}\n      >\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n          updating their terms of service agreements to comply.\n        </p>\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data\n          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally\n          affect them.\n        </p>\n      </Modal>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Modal sizes',
      description:
        'You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.',
      url: '/examples/[theme-rtl]/modal/02-modal-sizes',
      content:
        "import { component$, Signal, useSignal, useStore } from '@builder.io/qwik'\nimport { Button, Modal, ModalSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const sizeModalVisible = useStore<Record<string, Signal<boolean>>>({\n    xs: useSignal(false),\n    md: useSignal(false),\n    xl: useSignal(false),\n    ['5xl']: useSignal(false),\n  })\n\n  return (\n    <ul class=\"flex gap-2\">\n      {['xs', 'md', 'xl', '5xl'].map((size) => (\n        <li key={size}>\n          <Button\n            onClick$={() => {\n              sizeModalVisible[size].value = true\n            }}\n          >\n            {size.toUpperCase()} Modal\n          </Button>\n          <Modal size={size as ModalSize} header={<div class=\"flex items-center text-lg\">Size {size}</div>} bind:show={sizeModalVisible[size]}>\n            <p class=\"text-base leading-relaxed text-gray-500 dark:text-gray-400\">\n              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n              updating their terms of service agreements to comply.\n            </p>\n            <p class=\"text-base leading-relaxed text-gray-500 dark:text-gray-400\">\n              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of\n              data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could\n              personally affect them.\n            </p>\n          </Modal>\n        </li>\n      ))}\n    </ul>\n  )\n})",
      height: '500',
    },
    {
      title: 'Modal escapable',
      description:
        'The escapable property is true by default to improve user experience and accessibility. In some situations, your user may be required to interact with the modal content. If this is the case, you can set the notEscapable property to true. The developer can then choose when they want to close the modal.',
      url: '/examples/[theme-rtl]/modal/03-modal-escapable',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const escapeModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <h2 class="my-3">Prop - escapable</h2>\n      <Button\n        onClick$={() => {\n          escapeModalVisible.value = true\n        }}\n      >\n        Open Not Escapable Modal\n      </Button>\n      <Modal\n        notEscapable\n        header={<div class="flex items-center text-lg">Terms of Service</div>}\n        footer={\n          <div class="flex justify-between">\n            <Button\n              onClick$={() => {\n                escapeModalVisible.value = false\n              }}\n              color="alternative"\n            >\n              Decline\n            </Button>\n          </div>\n        }\n        bind:show={escapeModalVisible}\n      >\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n          updating their terms of service agreements to comply.\n        </p>\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data\n          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally\n          affect them.\n        </p>\n      </Modal>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Modal persistent',
      description: 'Clicking outside the element or pressing esc key will not send close event.',
      url: '/examples/[theme-rtl]/modal/04-modal-persistent',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const persistentModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <h2 class="my-3">Prop - persistent</h2>\n      <Button\n        onClick$={() => {\n          persistentModalVisible.value = true\n        }}\n      >\n        Open Persistent Modal\n      </Button>\n      <Modal\n        notEscapable\n        persistent\n        header={<div class="flex items-center text-lg">Terms of Service</div>}\n        footer={\n          <div class="flex justify-between">\n            <Button\n              onClick$={() => {\n                persistentModalVisible.value = false\n              }}\n              color="alternative"\n            >\n              Decline\n            </Button>\n          </div>\n        }\n        bind:show={persistentModalVisible}\n      >\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are\n          updating their terms of service agreements to comply.\n        </p>\n        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">\n          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data\n          rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally\n          affect them.\n        </p>\n      </Modal>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Pop-up modal',
      description:
        'You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.',
      url: '/examples/[theme-rtl]/modal/05-modal-popup',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, Modal } from \'flowbite-qwik\'\nimport { IconBullhornSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const popupModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <h2 class="my-3">Pop-up modal</h2>\n      <Button\n        onClick$={() => {\n          popupModalVisible.value = true\n        }}\n      >\n        Open Modal\n      </Button>\n      <Modal bind:show={popupModalVisible} size="md" popup>\n        <div class="text-center">\n          <IconBullhornSolid class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />\n\n          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>\n          <div class="flex gap-2 justify-center">\n            <Button color="red">Yes, I\'m sure</Button>\n            <Button outline>No, cancel</Button>\n          </div>\n        </div>\n      </Modal>\n    </div>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded separator>\n      <NavbarBrand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <NavbarToggle />\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink tag={Link} href="/navbars">\n          About\n        </NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with CTA button',
      description: 'Use the following navbar element to show a call to action button alongside the logo and page links.',
      url: '/examples/[theme-rtl]/navbar/02-with-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Button>Get started</Button>\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with dropdown',
      description: 'This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.',
      url: '/examples/[theme-rtl]/navbar/03-with-dropdown',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>\n          <DropdownItem header>\n            <span class="block text-sm">Bonnie Green</span>\n            <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n          </DropdownItem>\n          <DropdownItem>Dashboard</DropdownItem>\n          <DropdownItem>Settings</DropdownItem>\n          <DropdownItem>Earnings</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Sign out</DropdownItem>\n        </Dropdown>\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars" tag="div">\n          <Dropdown label="Services" inline>\n            <DropdownItem>Dashboard</DropdownItem>\n            <DropdownItem>Settings</DropdownItem>\n            <DropdownItem>Earnings</DropdownItem>\n          </Dropdown>\n        </NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with search',
      description: 'Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.',
      url: '/examples/[theme-rtl]/navbar/04-with-search',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { IconSearchOutline } from \'flowbite-qwik-icons\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  const searchValue = useSignal(\'\')\n\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand tag={Link} href="https://flowbite-qwik.com/">\n        <img src="/small-logo.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Input bind:value={searchValue} placeholder="Search ..." prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />} />\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
  ],
  radio: [
    {
      title: 'Default',
      description: 'Use the default example of a radio component with the checked and unchecked state.',
      url: '/examples/[theme-rtl]/radio/01-default',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const pick = useSignal<string>(\'\')\n\n  return (\n    <>\n      <div class="p-3 flex flex-col gap-3">\n        <Radio name="radio" value="one" bind:option={pick}>\n          First option\n        </Radio>\n        <Radio name="radio" value="two" bind:option={pick}>\n          Second option\n        </Radio>\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Color',
      description: 'This example can be used for the color of the radio component by applying the color attribute to the input element.',
      url: '/examples/[theme-rtl]/radio/02-colors',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const pick = useSignal<string>(\'blue\')\n\n  return (\n    <>\n      <h2 class="text-xl font-semibold">Picked color : {pick.value}</h2>\n      <div class="p-3 flex flex-col gap-3">\n        <Radio name="radio" value="blue" bind:option={pick}>\n          Blue\n        </Radio>\n        <Radio name="radio" value="purple" color="purple" bind:option={pick}>\n          Purple\n        </Radio>\n        <Radio name="radio" value="red" color="red" bind:option={pick}>\n          Red\n        </Radio>\n        <Radio name="radio" value="green" color="green" bind:option={pick}>\n          Green\n        </Radio>\n        <Radio name="radio" value="pink" color="pink" bind:option={pick}>\n          Pink\n        </Radio>\n      </div>\n    </>\n  )\n})',
      height: '300',
    },
    {
      title: 'Disabled',
      description: 'This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.',
      url: '/examples/[theme-rtl]/radio/03-disabled',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Radio } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const pick = useSignal<string>(\'\')\n\n  return (\n    <>\n      <div class="p-3 flex flex-col gap-3">\n        <Radio name="radio" value="one" disabled bind:option={pick}>\n          First option\n        </Radio>\n        <Radio name="radio" value="two" disabled bind:option={pick}>\n          Second option\n        </Radio>\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
  ],
  rating: [
    {
      title: 'Default rating',
      description: 'Use this simple example of a star rating component for showing review results.',
      url: '/examples/[theme-rtl]/rating/01-default',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Rating } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3\">\n      <Rating rating={4} />\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Rating with text',
      description: 'If you also want to show a text near the stars you can use this example as a reference.',
      url: '/examples/[theme-rtl]/rating/02-with-text',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Rating } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Rating rating={4}>\n        <p q:slot="besideText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">\n          4.75 out of 5\n        </p>\n      </Rating>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Rating with review link',
      description: 'Aggregate more results by using this example to show the amount of reviews and the average score.',
      url: '/examples/[theme-rtl]/rating/03-with-review-link',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Rating } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3\">\n      <Rating rating={4} reviewLink={{ href: '#', text: '73 reviews' }} />\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Stars sizes',
      description: 'Check out the different sizing options for the star review component from small, medium, and large.',
      url: '/examples/[theme-rtl]/rating/04-with-sizes',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Rating, RatingSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3 flex flex-col gap-3\">\n      {(['sm', 'md', 'lg'] as RatingSize[]).map((size) => (\n        <Rating rating={4} size={size} />\n      ))}\n    </div>\n  )\n})",
      height: '200',
    },
  ],
  select: [
    {
      title: 'Default',
      description: 'Get started with the default example of a select input component to get a single option selection.',
      url: '/examples/[theme-rtl]/select/01-default',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"p-3 flex flex-col gap-3\">\n        <Select bind:value={selected} options={countries} placeholder=\"Choose a country\" label=\"Select an option\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Disabled',
      description: 'Apply the disable state to the select component to disallow the selection of new options.',
      url: '/examples/[theme-rtl]/select/02-disabled',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"p-3 flex flex-col gap-3\">\n        <Select bind:value={selected} disabled options={countries} placeholder=\"Choose a country\" label=\"Select an option\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Selected option',
      description: 'Use this example to get a single option selection with the selected state of the select input component.',
      url: '/examples/[theme-rtl]/select/03-selected',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('fr')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"p-3 flex flex-col gap-3\">\n        <Select bind:value={selected} options={countries} placeholder=\"Choose a country\" label=\"Select an option\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
    {
      title: 'Sizes',
      description: 'Get started with the small, default, and large sizes for the select component from the example below.',
      url: '/examples/[theme-rtl]/select/04-sizes',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Select } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const selected = useSignal(\'\')\n  const countries = [\n    { value: \'us\', name: \'United States\' },\n    { value: \'ca\', name: \'Canada\' },\n    { value: \'fr\', name: \'France\' },\n  ]\n\n  return (\n    <>\n      <div class="p-3 flex flex-col gap-3">\n        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Small" sizing="sm" />\n        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Medium" sizing="md" />\n        <Select bind:value={selected} options={countries} placeholder="Choose a country" label="Large" sizing="lg" />\n      </div>\n    </>\n  )\n})',
      height: '350',
    },
    {
      title: 'Underline',
      description: 'Use the underline style for the select component as an alternative appearance.',
      url: '/examples/[theme-rtl]/select/05-underline',
      content:
        "import { component$, useSignal } from '@builder.io/qwik'\nimport { Select } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const selected = useSignal('')\n  const countries = [\n    { value: 'us', name: 'United States' },\n    { value: 'ca', name: 'Canada' },\n    { value: 'fr', name: 'France' },\n  ]\n\n  return (\n    <>\n      <div class=\"p-3 flex flex-col gap-3\">\n        <Select bind:value={selected} options={countries} underline placeholder=\"Choose a country\" label=\"Underline\" />\n      </div>\n    </>\n  )\n})",
      height: '200',
    },
  ],
  sidebar: [
    {
      title: 'Default sidebar',
      description:
        'Use this example to show a list of navigation menu items by adding <SidebarItem> children components inside the <Sidebar> component and pass the href prop to set a URL and icon to apply any icons from the flowbite-qwik-icons icon library. You can also add a text label as a badge by using the label prop from Qwik and the labelColor to set the color of the label background.',
      url: '/examples/[theme-rtl]/sidebar/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Sidebar, SidebarItemGroup, SidebarItem, useSidebarOpen } from \'flowbite-qwik\'\nimport { IconHomeOutline, IconInboxOutline, IconUserCircleOutline, IconShoppingBagOutline } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const { setIsOpen } = useSidebarOpen()\n\n  return (\n    <div class="p-3">\n      <button\n        onClick$={() => {\n          setIsOpen(true)\n        }}\n        type="button"\n        class="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"\n      >\n        <span class="sr-only">Open sidebar</span>\n        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path\n            clip-rule="evenodd"\n            fill-rule="evenodd"\n            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"\n          ></path>\n        </svg>\n      </button>\n      <Sidebar highlight>\n        <SidebarItemGroup>\n          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>\n\n          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>\n\n          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>\n\n          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>\n        </SidebarItemGroup>\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'Multi-level dropdown with custom chevron',
      description:
        "The chevronIcon property offers customization for the chevron icon. Alternatively, for more complex scenarios, the renderChevronIcon option can be utilized. Here's an example.",
      url: '/examples/[theme-rtl]/sidebar/02-with-group',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Sidebar, SidebarItemGroup, SidebarItem, SidebarCollapse, useSidebarOpen } from \'flowbite-qwik\'\nimport {\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  IconFileEditSolid,\n  IconAdressBookOutline,\n  IconGearSolid,\n  IconAtomSolid,\n  IconAdjustmentsHorizontalSolid,\n} from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const { setIsOpen } = useSidebarOpen()\n\n  return (\n    <div class="p-3">\n      <button\n        onClick$={() => {\n          setIsOpen(true)\n        }}\n        type="button"\n        class="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"\n      >\n        <span class="sr-only">Open sidebar</span>\n        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path\n            clip-rule="evenodd"\n            fill-rule="evenodd"\n            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"\n          ></path>\n        </svg>\n      </button>\n      <Sidebar>\n        <SidebarItemGroup>\n          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>\n\n          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>\n\n          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>\n\n          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>\n        </SidebarItemGroup>\n\n        <SidebarItemGroup>\n          <SidebarItem icon={IconFileEditSolid}>Documentation</SidebarItem>\n\n          <SidebarItem icon={IconAdressBookOutline}>Help</SidebarItem>\n\n          <SidebarItem icon={IconGearSolid}>Settings</SidebarItem>\n\n          <SidebarItem icon={IconAtomSolid}>Details</SidebarItem>\n\n          <SidebarCollapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>\n            <SidebarItem>Dashboard</SidebarItem>\n\n            <SidebarItem>inbox</SidebarItem>\n\n            <SidebarItem>Users</SidebarItem>\n\n            <SidebarItem>Products</SidebarItem>\n          </SidebarCollapse>\n        </SidebarItemGroup>\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'With CTA',
      description: 'This example can be used to show a call to action button inside the sidebar next to the menu items.',
      url: '/examples/[theme-rtl]/sidebar/03-with-cta',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Sidebar, SidebarItemGroup, SidebarItem, SidebarCollapse, SidebarCta, Badge, useSidebarOpen } from \'flowbite-qwik\'\nimport {\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  IconFileEditSolid,\n  IconAdressBookOutline,\n  IconGearSolid,\n  IconAtomSolid,\n  IconAdjustmentsHorizontalSolid,\n} from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  const isCtaVisible = useSignal(true)\n  const { setIsOpen } = useSidebarOpen()\n\n  return (\n    <div class="p-3">\n      <button\n        onClick$={() => {\n          setIsOpen(true)\n        }}\n        type="button"\n        class="inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"\n      >\n        <span class="sr-only">Open sidebar</span>\n        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n          <path\n            clip-rule="evenodd"\n            fill-rule="evenodd"\n            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"\n          ></path>\n        </svg>\n      </button>\n      <Sidebar highlight closeButton>\n        <SidebarItemGroup>\n          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>\n\n          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>\n\n          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>\n\n          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>\n        </SidebarItemGroup>\n\n        <SidebarItemGroup>\n          <SidebarItem icon={IconFileEditSolid}>Documentation</SidebarItem>\n\n          <SidebarItem icon={IconAdressBookOutline}>Help</SidebarItem>\n\n          <SidebarItem icon={IconGearSolid}>Settings</SidebarItem>\n\n          <SidebarItem icon={IconAtomSolid}>Details</SidebarItem>\n\n          <SidebarCollapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>\n            <SidebarItem>Dashboard</SidebarItem>\n\n            <SidebarItem>inbox</SidebarItem>\n\n            <SidebarItem>Users</SidebarItem>\n\n            <SidebarItem>Products</SidebarItem>\n          </SidebarCollapse>\n        </SidebarItemGroup>\n        {isCtaVisible.value && (\n          <SidebarCta onClose$={() => (isCtaVisible.value = false)}>\n            <Badge q:slot="badge" type="yellow" content="new" />\n\n            <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">\n              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.\n            </p>\n            <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">\n              Turn new navigation off\n            </a>\n          </SidebarCta>\n        )}\n      </Sidebar>\n    </div>\n  )\n})',
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
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3 flex gap-3\">\n      <Spinner />\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Spinner colors',
      description: 'Update the colors of the loading spinner by using the color Qwik prop.',
      url: '/examples/[theme-rtl]/spinner/02-color',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner, SpinnerColor } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3 flex gap-3\">\n      {(['blue', 'gray', 'green', 'red', 'yellow', 'pink', 'purple', 'white'] as SpinnerColor[]).map((color) => (\n        <Spinner size=\"6\" color={color} />\n      ))}\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Sizing options',
      description: 'Make the size of the spinner smaller or larger by using the size prop. Choose from xs, sm, md, lg, or xl.',
      url: '/examples/[theme-rtl]/spinner/03-size',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner, SpinnerSize } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3 flex gap-3\">\n      {(['0', '0.5', '1', '1.5', '2', '2.5', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] as SpinnerSize[]).map((size) => (\n        <Spinner size={size} />\n      ))}\n    </div>\n  )\n})",
      height: '200',
    },
  ],
  table: [
    {
      title: 'Default table',
      description:
        'Use this example to show a responsive table component with table head and body featuring cells and rows on multiple levels by using the <Table> Qwik component and the children components such as <TableHead>, <TableBody>, <TableRow> and <TableCell>.',
      url: '/examples/[theme-rtl]/table/01-default-table',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table>\n        <TableHead>\n          <TableHeadCell>Product name</TableHeadCell>\n          <TableHeadCell>Color</TableHeadCell>\n          <TableHeadCell>Category</TableHeadCell>\n          <TableHeadCell>Price</TableHeadCell>\n          <TableHeadCell>\n            <span class="sr-only">Edit</span>\n          </TableHeadCell>\n        </TableHead>\n        <TableBody class="divide-y">\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</TableCell>\n            <TableCell>Sliver</TableCell>\n            <TableCell>Laptop</TableCell>\n            <TableCell>$2999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>\n            <TableCell>White</TableCell>\n            <TableCell>Laptop PC</TableCell>\n            <TableCell>$1999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>\n            <TableCell>Black</TableCell>\n            <TableCell>Accessories</TableCell>\n            <TableCell>$99</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n        </TableBody>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Striped rows',
      description:
        'Use the striped React prop on the <Table> component to alternate the background of every second row of the table to increase contrast and readability.',
      url: '/examples/[theme-rtl]/table/02-table-striped-rows',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table striped>\n        <TableHead>\n          <TableHeadCell>Product name</TableHeadCell>\n          <TableHeadCell>Color</TableHeadCell>\n          <TableHeadCell>Category</TableHeadCell>\n          <TableHeadCell>Price</TableHeadCell>\n          <TableHeadCell>\n            <span class="sr-only">Edit</span>\n          </TableHeadCell>\n        </TableHead>\n        <TableBody class="divide-y">\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</TableCell>\n            <TableCell>Sliver</TableCell>\n            <TableCell>Laptop</TableCell>\n            <TableCell>$2999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>\n            <TableCell>White</TableCell>\n            <TableCell>Laptop PC</TableCell>\n            <TableCell>$1999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>\n            <TableCell>Black</TableCell>\n            <TableCell>Accessories</TableCell>\n            <TableCell>$99</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Google Pixel Phone</TableCell>\n            <TableCell>Gray</TableCell>\n            <TableCell>Phone</TableCell>\n            <TableCell>$799</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</TableCell>\n            <TableCell>Red</TableCell>\n            <TableCell>Wearables</TableCell>\n            <TableCell>$999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n        </TableBody>\n      </Table>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Hover state',
      description:
        'Add the hoverable prop to the <Table> Qwik component to show a hover effect when moving the mouse over a table row. This also helps with readability.',
      url: '/examples/[theme-rtl]/table/03-table-hover-state',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="overflow-x-auto">\n      <Table hoverable>\n        <TableHead>\n          <TableHeadCell>Product name</TableHeadCell>\n          <TableHeadCell>Color</TableHeadCell>\n          <TableHeadCell>Category</TableHeadCell>\n          <TableHeadCell>Price</TableHeadCell>\n          <TableHeadCell>\n            <span class="sr-only">Edit</span>\n          </TableHeadCell>\n        </TableHead>\n        <TableBody class="divide-y">\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</TableCell>\n            <TableCell>Sliver</TableCell>\n            <TableCell>Laptop</TableCell>\n            <TableCell>$2999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>\n            <TableCell>White</TableCell>\n            <TableCell>Laptop PC</TableCell>\n            <TableCell>$1999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>\n            <TableCell>Black</TableCell>\n            <TableCell>Accessories</TableCell>\n            <TableCell>$99</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n        </TableBody>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Table with checkboxes',
      description: 'Use this example to show multiple checkbox form elements for each table row that you can use when performing bulk actions',
      url: '/examples/[theme-rtl]/table/04-table-with-checkbox',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const choice = useSignal(false)\n\n  return (\n    <div class="overflow-x-auto">\n      <Table hoverable>\n        <TableHead>\n          <TableHeadCell class="p-4">\n            <Checkbox bind:checked={choice} />\n          </TableHeadCell>\n          <TableHeadCell>Product name</TableHeadCell>\n          <TableHeadCell>Color</TableHeadCell>\n          <TableHeadCell>Category</TableHeadCell>\n          <TableHeadCell>Price</TableHeadCell>\n          <TableHeadCell>\n            <span class="sr-only">Edit</span>\n          </TableHeadCell>\n        </TableHead>\n        <TableBody class="divide-y">\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="p-4">\n              <Checkbox bind:checked={choice} />\n            </TableCell>\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</TableCell>\n            <TableCell>Sliver</TableCell>\n            <TableCell>Laptop</TableCell>\n            <TableCell>$2999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="p-4">\n              <Checkbox bind:checked={choice} />\n            </TableCell>\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>\n            <TableCell>White</TableCell>\n            <TableCell>Laptop PC</TableCell>\n            <TableCell>$1999</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n          <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n            <TableCell class="p-4">\n              <Checkbox bind:checked={choice} />\n            </TableCell>\n            <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>\n            <TableCell>Black</TableCell>\n            <TableCell>Accessories</TableCell>\n            <TableCell>$99</TableCell>\n            <TableCell>\n              <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                Edit\n              </a>\n            </TableCell>\n          </TableRow>\n        </TableBody>\n      </Table>\n    </div>\n  )\n})',
      height: '300',
    },
    {
      title: 'Table multiple',
      description: 'Use this example to show multiple tables on the same page',
      url: '/examples/[theme-rtl]/table/05-table-multiple',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col gap-8">\n      <div class="overflow-x-auto">\n        <Table>\n          <TableHead>\n            <TableHeadCell>Product name</TableHeadCell>\n            <TableHeadCell>Color</TableHeadCell>\n            <TableHeadCell>Category</TableHeadCell>\n            <TableHeadCell>Price</TableHeadCell>\n            <TableHeadCell>\n              <span class="sr-only">Edit</span>\n            </TableHeadCell>\n          </TableHead>\n          <TableBody class="divide-y">\n            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</TableCell>\n              <TableCell>Sliver</TableCell>\n              <TableCell>Laptop</TableCell>\n              <TableCell>$2999</TableCell>\n              <TableCell>\n                <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                  Edit\n                </a>\n              </TableCell>\n            </TableRow>\n            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>\n              <TableCell>White</TableCell>\n              <TableCell>Laptop PC</TableCell>\n              <TableCell>$1999</TableCell>\n              <TableCell>\n                <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                  Edit\n                </a>\n              </TableCell>\n            </TableRow>\n            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>\n              <TableCell>Black</TableCell>\n              <TableCell>Accessories</TableCell>\n              <TableCell>$99</TableCell>\n              <TableCell>\n                <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                  Edit\n                </a>\n              </TableCell>\n            </TableRow>\n          </TableBody>\n        </Table>\n      </div>\n\n      <div class="overflow-x-auto">\n        <Table hoverable>\n          <TableHead>\n            <TableHeadCell>Product name</TableHeadCell>\n            <TableHeadCell>Color</TableHeadCell>\n            <TableHeadCell>Category</TableHeadCell>\n            <TableHeadCell>Price</TableHeadCell>\n            <TableHeadCell>\n              <span class="sr-only">Edit</span>\n            </TableHeadCell>\n          </TableHead>\n          <TableBody class="divide-y">\n            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">{\'Apple MacBook Pro 17"\'}</TableCell>\n              <TableCell>Sliver</TableCell>\n              <TableCell>Laptop</TableCell>\n              <TableCell>$2999</TableCell>\n              <TableCell>\n                <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                  Edit\n                </a>\n              </TableCell>\n            </TableRow>\n            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Microsoft Surface Pro</TableCell>\n              <TableCell>White</TableCell>\n              <TableCell>Laptop PC</TableCell>\n              <TableCell>$1999</TableCell>\n              <TableCell>\n                <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                  Edit\n                </a>\n              </TableCell>\n            </TableRow>\n            <TableRow class="bg-white dark:border-gray-700 dark:bg-gray-800">\n              <TableCell class="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>\n              <TableCell>Black</TableCell>\n              <TableCell>Accessories</TableCell>\n              <TableCell>$99</TableCell>\n              <TableCell>\n                <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">\n                  Edit\n                </a>\n              </TableCell>\n            </TableRow>\n          </TableBody>\n        </Table>\n      </div>\n    </div>\n  )\n})',
      height: '450',
    },
  ],
  tabs: [
    {
      title: 'Default Tabs',
      description: 'Use the following default tabs component example to show a list of links that the user can navigate from on your website.',
      url: '/examples/[theme-rtl]/tabs/01-default-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Tabs with icons',
      description:
        'This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs.',
      url: '/examples/[theme-rtl]/tabs/02-underline-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs variant="underline">\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Pills tabs',
      description: 'If you want to use pills as a style for the tabs component you can do so by using this example.',
      url: '/examples/[theme-rtl]/tabs/03-pills-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs variant="pills">\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Directive - show',
      description: 'Use this props if you want to control which directive to use for rendering every tab content',
      url: '/examples/[theme-rtl]/tabs/04-directive',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs directive="show">\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'With icons',
      description: 'You can add icons to the tabs to make them more visually appealing and easier to understand.',
      url: '/examples/[theme-rtl]/tabs/05-tabs-with-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\nimport { IconGridOutline, IconGridPlusOutline, IconProfileCardOutline, IconUserCircleSolid } from \'flowbite-qwik-icons\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="Profile" icon={IconProfileCardOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Dashboard" icon={IconGridOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Settings" icon={IconGridPlusOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Contacts" disabled icon={IconUserCircleSolid}>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Active tab',
      description: 'If you want to set a specific tab as active you can do so by using the `active` prop.',
      url: '/examples/[theme-rtl]/tabs/06-tabs-pane-active',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second" active>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
    {
      title: 'Interaction',
      description: 'You can interact with tabs by using the `onClickInteraction$` prop.',
      url: '/examples/[theme-rtl]/tabs/07-tabs-interaction',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs\n      directive="show"\n      onClickInteraction$={() => {\n        alert(\'Click!\')\n      }}\n    >\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
      height: '400',
    },
  ],
  toast: [
    {
      title: 'Props type',
      description: 'Use these contextual toast components to show success, danger, or warning alert messages to your users.',
      url: '/examples/[theme-rtl]/toast/01-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col p-3 space-y-2">\n      <Toast id="default">Default</Toast>\n      <Toast id="success" type="success">\n        Success\n      </Toast>\n      <Toast id="danger" type="danger">\n        Danger\n      </Toast>\n      <Toast id="warning" type="warning">\n        Warning\n      </Toast>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Props divide',
      description: 'Use divide prop to add a dividing line between the toast content and the close button.',
      url: '/examples/[theme-rtl]/toast/02-divide',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col p-3 space-y-2">\n      <Toast id="default" divide>\n        Default\n      </Toast>\n      <Toast id="success" divide type="success">\n        Success\n      </Toast>\n      <Toast id="danger" divide type="danger">\n        Danger\n      </Toast>\n      <Toast id="warning" divide type="warning">\n        Warning\n      </Toast>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Message',
      description:
        'This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.',
      url: '/examples/[theme-rtl]/toast/03-message',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col p-3 space-y-2">\n      <Toast id="card" alignment="start" icon={<img alt="Avatar" class="w-8 h-8 rounded-lg shadow-lg" src="/profile-picture.jpg" />}>\n        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>\n        <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>\n        <Button size="xs" href="#">\n          Reply\n        </Button>\n      </Toast>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Playground',
      description: 'Use the playground to test different toast positions and types.',
      url: '/examples/[theme-rtl]/toast/04-playground',
      content:
        'import { component$, useContext } from \'@builder.io/qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\nimport { Button, ToastPosition, useToast } from \'flowbite-qwik\'\nimport { toastPositionContext } from \'~/root\'\n\nexport default component$(() => {\n  const toastPosition = useContext(toastPositionContext)\n\n  const { add } = useToast()\n\n  return (\n    <div class="flex flex-col p-3 space-y-2">\n      <div class="mb-4">\n        <label for="position" class="mr-3">\n          Position\n        </label>\n        <select\n          onChange$={(v) => {\n            toastPosition.value = (v.target as HTMLSelectElement).value as ToastPosition\n          }}\n          class="dark:bg-gray-800 dark:text-white bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"\n        >\n          <option value="top-right">top-right</option>\n          <option value="top-left">top-left</option>\n          <option value="bottom-left">bottom-left</option>\n          <option value="bottom-right">bottom-right</option>\n        </select>\n      </div>\n\n      <div class="flex gap-3">\n        <Button\n          onClick$={() =>\n            add({\n              type: \'success\',\n              text: \'This is a success toast\',\n              closable: true,\n            })\n          }\n        >\n          Add success toast from\n        </Button>\n        <Button\n          onClick$={() =>\n            add({\n              type: \'danger\',\n              text: \'This is a danger toast\',\n              closable: true,\n              time: 2000,\n            })\n          }\n        >\n          Add danger toast with autoclose timer\n        </Button>\n      </div>\n      <Link href="/docs/getting-started/quickstart" class="text-blue-500 underline">\n        The toast position should be defined in the FlowbiteProvider\n      </Link>\n    </div>\n  )\n})',
      height: '400',
    },
  ],
  toggle: [
    {
      title: 'Default Toggle',
      description: 'Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.',
      url: '/examples/[theme-rtl]/toggle/01-default-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Toggle me" bind:checked={toggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Checked Toggle',
      description: 'Apply the checked attribute to the toggle component to activate the selection by default.',
      url: '/examples/[theme-rtl]/toggle/02-checked-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Toggle me" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Disabled state',
      description: 'Apply the disabled attribute to disallow the users from making any further selections.',
      url: '/examples/[theme-rtl]/toggle/03-disabled-state',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Disabled toggle" disabled bind:checked={toggleValue} />\n      <Toggle label="Disabled checked" disabled bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
    {
      title: 'Colors',
      description: 'You can customize the toggle component with different colors.',
      url: '/examples/[theme-rtl]/toggle/04-color',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Red" color="red" bind:checked={checkedToggleValue} />\n      <Toggle label="Green" color="green" bind:checked={checkedToggleValue} />\n      <Toggle label="Yellow" color="yellow" bind:checked={checkedToggleValue} />\n      <Toggle label="Orange" color="orange" bind:checked={checkedToggleValue} />\n      <Toggle label="Teal" color="teal" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Sizes',
      description: 'You can customize the toggle component with different sizes.',
      url: '/examples/[theme-rtl]/toggle/05-size',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Small" size="sm" bind:checked={checkedToggleValue} />\n      <Toggle label="Medium" size="md" bind:checked={checkedToggleValue} />\n      <Toggle label="Large" size="lg" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '100',
    },
  ],
}
