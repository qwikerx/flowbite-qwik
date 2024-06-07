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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge, IconRocketOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge icon={IconRocketOutline} content="Icon" />\n      <Badge icon={IconRocketOutline} size="sm" content="Icon" />\n    </div>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge, IconRocketOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge icon={IconRocketOutline} size="sm" />\n      <Badge type="dark" icon={IconRocketOutline} size="sm" />\n      <Badge type="green" icon={IconRocketOutline} size="sm" />\n    </div>\n  )\n})',
      height: '200',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem, IconArrowLeftOutline, IconBarsOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <BreadcrumbItem home href="#" homeIcon={IconBarsOutline}>\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#" arrowIcon={IconArrowLeftOutline}>\n          Projects\n        </BreadcrumbItem>\n        <BreadcrumbItem arrowIcon={IconArrowLeftOutline}>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, IconArrowLeftOutline, IconArrowRightOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap">\n      <Button gradient="red-yellow" square>\n        <IconArrowRightOutline class="w-5 h-5" />\n      </Button>\n      <Button color="default" pill square>\n        <IconArrowRightOutline class="w-5 h-5" />\n      </Button>\n      <Button color="dark" outline square>\n        <IconArrowLeftOutline class="w-5 h-5" />\n      </Button>\n      <Button color="yellow" outline pill square>\n        <IconArrowLeftOutline class="w-5 h-5" />\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button loading',
      description: 'Use the Spinner components to indicate a loader animation inside buttons:',
      url: '/examples/[theme-rtl]/button/10-button-loading',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, IconArrowLeftOutline, useToggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const { value: loading, toggle$ } = useToggle()\n\n  return (\n    <div class="flex gap-2 items-center flex-wrap">\n      <Button disabled={loading.value} loading={loading.value} gradient="purple-blue" outline size="xs" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="red-yellow" size="sm" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} color="default" loadingPosition="suffix" outline onClick$={toggle$} suffix={IconArrowLeftOutline}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="green-blue" size="lg" onClick$={toggle$}>\n        Click me\n      </Button>\n      <Button loading={loading.value} gradient="pink" size="xl" onClick$={toggle$}>\n        Click me\n      </Button>\n    </div>\n  )\n})',
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
        "import { component$ } from '@builder.io/qwik'\nimport { Button, IconHomeOutline } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-2 items-center flex-wrap\">\n      <Button prefix={IconHomeOutline} full>\n        Buy\n      </Button>\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Button slot default',
      description: 'Add content inside the button as default',
      url: '/examples/[theme-rtl]/button/14-button-slot-default',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, IconArrowRightOutline, IconArrowRightSolid } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 items-center flex-wrap">\n      <Button gradient="purple-blue" square>\n        <IconArrowRightSolid class="w-5 h-5" />\n      </Button>\n      <Button color="default" pill square>\n        <IconArrowRightSolid class="w-5 h-5" />\n      </Button>\n      <Button gradient="green-blue" square>\n        Close something\n      </Button>\n      <Button color="default" outline pill square suffix={IconArrowRightOutline}>\n        Open something\n      </Button>\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Button slot prefix',
      description: 'Add prefix content inside the button',
      url: '/examples/[theme-rtl]/button/15-button-slot-prefix',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button, IconHomeOutline } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-2 items-center flex-wrap\">\n      <Button prefix={IconHomeOutline}>Buy</Button>\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Button slot suffix',
      description: 'Add suffix content inside the button',
      url: '/examples/[theme-rtl]/button/16-button-slot-suffix',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Button, IconArrowRightOutline } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"flex gap-2 items-center flex-wrap\">\n      <Button suffix={IconArrowRightOutline}>Choose plan</Button>\n    </div>\n  )\n})",
      height: '200',
    },
  ],
  drawer: [
    {
      title: 'Drawer',
      description:
        'Use the Drawer component (or "off-canvas") to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions. You can set multiple options such as the placement, activate body scrolling, show or hide the backdrop and even use the sizeable edge functionality to show a small part of the drawer when it is not shown completely.',
      url: '/examples/[theme-rtl]/drawer/01-default-drawer',
      content:
        "import { component$, Slot, useSignal } from '@builder.io/qwik'\nimport { Button, Drawer, DrawerPosition, IconHomeOutline } from 'flowbite-qwik'\n\nexport default component$(() => {\n  const isDrawerOpen = {\n    left: useSignal(false),\n    right: useSignal(false),\n    top: useSignal(false),\n    bottom: useSignal(false),\n    'bottom-edge': useSignal(false),\n  }\n\n  return (\n    <section class=\"p-2\">\n      <div>\n        <h2 class=\"text-2xl font-semibold my-3\">Default Drawer</h2>\n        <div class=\"flex gap-2\">\n          {(['top', 'right', 'bottom', 'left', 'bottom-edge'] as DrawerPosition[]).map((position) => (\n            <>\n              <Button\n                onClick$={() => {\n                  isDrawerOpen[position].value = true\n                }}\n              >\n                {position}\n              </Button>\n\n              <Drawer\n                class={{\n                  hidden: position === 'bottom-edge' && isDrawerOpen.bottom.value,\n                }}\n                bind:open={isDrawerOpen[position]}\n                position={position}\n                title={`Drawer ${position}`}\n                titleIcon={IconHomeOutline}\n              >\n                <p class=\"mb-6 text-sm text-gray-500 dark:text-gray-400\">\n                  Supercharge your hiring by taking advantage of our&nbsp;\n                  <a href=\"#\" class=\"text-cyan-600 underline hover:no-underline dark:text-cyan-500\">\n                    limited-time sale\n                  </a>\n                  <br />\n                  for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.\n                </p>\n                <div class=\"flex gap-4\">\n                  <Button full>Buy</Button>\n                  <Button color=\"alternative\" full>\n                    See more\n                  </Button>\n                </div>\n              </Drawer>\n            </>\n          ))}\n        </div>\n        <Slot />\n      </div>\n    </section>\n  )\n})",
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem, IconHomeOutline, IconSearchSolid, IconTextSizeOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Dropdown label="Dropdown button">\n      <DropdownItem header>\n        <span class="block text-sm">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">bonnie@flowbite.com</span>\n      </DropdownItem>\n      <DropdownItem icon={IconHomeOutline}>Dashboard</DropdownItem>\n      <DropdownItem icon={IconSearchSolid}>Settings</DropdownItem>\n      <DropdownItem divider />\n      <DropdownItem icon={IconTextSizeOutline}>Sign out</DropdownItem>\n    </Dropdown>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport {\n  Footer,\n  FooterCopyright,\n  FooterLink,\n  FooterLinkGroup,\n  FooterBrand,\n  FooterDivider,\n  FooterTitle,\n  FooterIcon,\n  IconFacebookSolid,\n  IconGithubSolid,\n  IconDribbbleSolid,\n  IconLinkedinSolid,\n} from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Footer container>\n      <div class="w-full">\n        <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">\n          <div>\n            <FooterBrand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="Flowbite" />\n          </div>\n          <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">\n            <div>\n              <FooterTitle title="about" />\n              <FooterLinkGroup col>\n                <FooterLink href="#">Flowbite</FooterLink>\n                <FooterLink href="#">Tailwind CSS</FooterLink>\n              </FooterLinkGroup>\n            </div>\n            <div>\n              <FooterTitle title="Follow us" />\n              <FooterLinkGroup col>\n                <FooterLink href="#">Github</FooterLink>\n                <FooterLink href="#">Discord</FooterLink>\n              </FooterLinkGroup>\n            </div>\n            <div>\n              <FooterTitle title="Legal" />\n              <FooterLinkGroup col>\n                <FooterLink href="#">Privacy Policy</FooterLink>\n                <FooterLink href="#">Terms &amp; Conditions</FooterLink>\n              </FooterLinkGroup>\n            </div>\n          </div>\n        </div>\n        <FooterDivider />\n        <div class="w-full sm:flex sm:items-center sm:justify-between">\n          <FooterCopyright href="#" by="Flowbite™" />\n          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\n            <FooterIcon href="#" icon={IconFacebookSolid} />\n            <FooterIcon href="#" icon={IconGithubSolid} />\n            <FooterIcon href="#" icon={IconDribbbleSolid} />\n            <FooterIcon href="#" icon={IconLinkedinSolid} />\n          </div>\n        </div>\n      </div>\n    </Footer>\n  )\n})',
      height: '400',
    },
    {
      title: 'Sitemap links',
      description:
        'If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.',
      url: '/examples/[theme-rtl]/footer/04-footer with-socials',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport {\n  Footer,\n  FooterCopyright,\n  FooterLink,\n  FooterLinkGroup,\n  FooterTitle,\n  FooterIcon,\n  IconFacebookSolid,\n  IconGithubSolid,\n  IconDribbbleSolid,\n  IconLinkedinSolid,\n} from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Footer bgDark>\n      <div class="w-full">\n        <div class="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">\n          <div>\n            <FooterTitle title="Company" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">About</FooterLink>\n              <FooterLink href="#">Careers</FooterLink>\n              <FooterLink href="#">Brand Center</FooterLink>\n              <FooterLink href="#">Blog</FooterLink>\n            </FooterLinkGroup>\n          </div>\n          <div>\n            <FooterTitle title="help center" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">Discord Server</FooterLink>\n              <FooterLink href="#">Twitter</FooterLink>\n              <FooterLink href="#">Facebook</FooterLink>\n              <FooterLink href="#">Contact Us</FooterLink>\n            </FooterLinkGroup>\n          </div>\n          <div>\n            <FooterTitle title="legal" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">Privacy Policy</FooterLink>\n              <FooterLink href="#">Licensing</FooterLink>\n              <FooterLink href="#">Terms &amp; Conditions</FooterLink>\n            </FooterLinkGroup>\n          </div>\n          <div>\n            <FooterTitle title="download" />\n            <FooterLinkGroup col>\n              <FooterLink href="#">iOS</FooterLink>\n              <FooterLink href="#">Android</FooterLink>\n              <FooterLink href="#">Windows</FooterLink>\n              <FooterLink href="#">MacOS</FooterLink>\n            </FooterLinkGroup>\n          </div>\n        </div>\n        <div class="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">\n          <FooterCopyright href="#" by="Flowbite™" />\n          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">\n            <FooterIcon href="#" icon={IconFacebookSolid} />\n            <FooterIcon href="#" icon={IconGithubSolid} />\n            <FooterIcon href="#" icon={IconDribbbleSolid} />\n            <FooterIcon href="#" icon={IconLinkedinSolid} />\n          </div>\n        </div>\n      </div>\n    </Footer>\n  )\n})',
      height: '400',
    },
  ],
  input: [
    {
      title: 'Input fields',
      description:
        'Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.',
      url: '/examples/[theme-rtl]/input/01-default',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <h2 class="text-2xl font-semibold my-3">Default input</h2>\n        <p class="text-xl">Value : {val.value}</p>\n        <Input bind:value={val} label="Name" placeholder="John Doe" />\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Input fields',
      description: 'Use the following examples to apply a small, default or large size for the input fields.',
      url: '/examples/[theme-rtl]/input/02-sizes',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <h2 class="text-2xl font-semibold my-3">Sizes</h2>\n        <p class="text-xl">Value : {val.value}</p>\n        <div class="flex flex-col gap-3">\n          <Input bind:value={val} label="Small" placeholder="enter your name" size="sm" />\n          <Input bind:value={val} label="Medium" placeholder="enter your name" size="md" />\n          <Input bind:value={val} label="Large" placeholder="enter your name" size="lg" />\n        </div>\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Required',
      description: 'Get started with this example if you want to apply the required state to an input field.',
      url: '/examples/[theme-rtl]/input/03-required',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <h2 class="text-2xl font-semibold my-3">Disabled</h2>\n        <Input bind:value={val} required label="First name" placeholder="First name" />\n      </div>\n    </>\n  )\n})',
      height: '200',
    },
    {
      title: 'Disabled state',
      description: 'Get started with this example if you want to apply the disabled state to an input field.',
      url: '/examples/[theme-rtl]/input/04-disabled',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <>\n      <div class="p-3">\n        <h2 class="text-2xl font-semibold my-3">Disabled</h2>\n        <Input bind:value={val} disabled label="First name" placeholder="First name" />\n      </div>\n    </>\n  )\n})',
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
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { IconSearchOutline, Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <h2 class="text-2xl font-semibold my-3">Prefix</h2>\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Suffix',
      description: 'Use this example to add a suffix to the input field.',
      url: '/examples/[theme-rtl]/input/07-with-suffix',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { IconSearchOutline, Input, Button } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <h2 class="text-2xl font-semibold my-3">Suffix</h2>\n      <Input\n        bind:value={val}\n        label="First name"\n        placeholder="First name"\n        size="lg"\n        prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />}\n        suffix={<Button>Hello</Button>}\n      />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Suffix',
      description: 'Use this example to add a suffix to the input field.',
      url: '/examples/[theme-rtl]/input/08-validation',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Input } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const val = useSignal(\'\')\n  return (\n    <div class="p-3">\n      <h2 class="text-2xl font-semibold my-3">Validation</h2>\n      <Input bind:value={val} label="First name" placeholder="First name" validationStatus="success" />\n      <hr class="mt-4 border-0"></hr>\n      <Input bind:value={val} label="First name" placeholder="First name" validationStatus="error" validationMessage="This field is not valid" />\n    </div>\n  )\n})',
      height: '200',
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
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Button, IconBullhornSolid, Modal } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const popupModalVisible = useSignal(false)\n\n  return (\n    <div>\n      <h2 class="my-3">Pop-up modal</h2>\n      <Button\n        onClick$={() => {\n          popupModalVisible.value = true\n        }}\n      >\n        Open Modal\n      </Button>\n      <Modal bind:show={popupModalVisible} size="md" popup>\n        <div class="text-center">\n          <IconBullhornSolid class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />\n\n          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>\n          <div class="flex gap-2 justify-center">\n            <Button color="red">Yes, I\'m sure</Button>\n            <Button outline>No, cancel</Button>\n          </div>\n        </div>\n      </Modal>\n    </div>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded separator>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <NavbarToggle />\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink as={Link} href="/navbars">\n          About\n        </NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with CTA button',
      description: 'Use the following navbar element to show a call to action button alongside the logo and page links.',
      url: '/examples/[theme-rtl]/navbar/02-with-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Button>Get started</Button>\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with dropdown',
      description: 'This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.',
      url: '/examples/[theme-rtl]/navbar/03-with-dropdown',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>\n          <DropdownItem header>\n            <span class="block text-sm">Bonnie Green</span>\n            <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n          </DropdownItem>\n          <DropdownItem>Dashboard</DropdownItem>\n          <DropdownItem>Settings</DropdownItem>\n          <DropdownItem>Earnings</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Sign out</DropdownItem>\n        </Dropdown>\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars" as="div">\n          <Dropdown label="Services" inline>\n            <DropdownItem>Dashboard</DropdownItem>\n            <DropdownItem>Settings</DropdownItem>\n            <DropdownItem>Earnings</DropdownItem>\n          </Dropdown>\n        </NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
    },
    {
      title: 'Navbar with search',
      description: 'Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.',
      url: '/examples/[theme-rtl]/navbar/04-with-search',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { IconSearchOutline, Input, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link, StaticGenerateHandler } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  const searchValue = useSignal(\'\')\n\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Input bind:value={searchValue} placeholder="Search ..." prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />} />\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
      height: '400',
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
  sidebar: [
    {
      title: 'Default sidebar',
      description:
        'Use this example to show a list of navigation menu items by adding <SidebarItem> children components inside the <Sidebar> component and pass the href prop to set a URL and icon to apply any icons from the react-icons icon library. You can also add a text label as a badge by using the label prop from React and the labelColor to set the color of the label background.',
      url: '/examples/[theme-rtl]/sidebar/01-default',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport {\n  Sidebar,\n  SidebarItemGroup,\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  SidebarItem,\n} from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3\">\n      <Sidebar highlight>\n        <SidebarItemGroup>\n          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>\n\n          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>\n\n          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>\n\n          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>\n        </SidebarItemGroup>\n      </Sidebar>\n    </div>\n  )\n})",
      height: '500',
    },
    {
      title: 'Multi-level dropdown with custom chevron',
      description:
        "The chevronIcon property offers customization for the chevron icon. Alternatively, for more complex scenarios, the renderChevronIcon option can be utilized. Here's an example.",
      url: '/examples/[theme-rtl]/sidebar/02-with-group',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport {\n  Sidebar,\n  SidebarItemGroup,\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  SidebarItem,\n  IconFileEditSolid,\n  IconAdressBookOutline,\n  IconGearSolid,\n  IconAtomSolid,\n  SidebarCollapse,\n  IconAdjustmentsHorizontalSolid,\n} from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Sidebar>\n        <SidebarItemGroup>\n          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>\n\n          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>\n\n          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>\n\n          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>\n        </SidebarItemGroup>\n\n        <SidebarItemGroup>\n          <SidebarItem icon={IconFileEditSolid}>Documentation</SidebarItem>\n\n          <SidebarItem icon={IconAdressBookOutline}>Help</SidebarItem>\n\n          <SidebarItem icon={IconGearSolid}>Settings</SidebarItem>\n\n          <SidebarItem icon={IconAtomSolid}>Details</SidebarItem>\n\n          <SidebarCollapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>\n            <SidebarItem>Dashboard</SidebarItem>\n\n            <SidebarItem>inbox</SidebarItem>\n\n            <SidebarItem>Users</SidebarItem>\n\n            <SidebarItem>Products</SidebarItem>\n          </SidebarCollapse>\n        </SidebarItemGroup>\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
    {
      title: 'With CTA',
      description: 'This example can be used to show a call to action button inside the sidebar next to the menu items.',
      url: '/examples/[theme-rtl]/sidebar/03-with-cta',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport {\n  Sidebar,\n  SidebarItemGroup,\n  IconHomeOutline,\n  IconInboxOutline,\n  IconUserCircleOutline,\n  IconShoppingBagOutline,\n  SidebarItem,\n  IconFileEditSolid,\n  IconAdressBookOutline,\n  IconGearSolid,\n  IconAtomSolid,\n  SidebarCollapse,\n  IconAdjustmentsHorizontalSolid,\n  SidebarCta,\n  Badge,\n} from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const isCtaVisible = useSignal(true)\n\n  return (\n    <div class="p-3">\n      <Sidebar highlight>\n        <SidebarItemGroup>\n          <SidebarItem icon={IconHomeOutline}>Dashboard</SidebarItem>\n\n          <SidebarItem icon={IconInboxOutline}>inbox</SidebarItem>\n\n          <SidebarItem icon={IconUserCircleOutline}>Users</SidebarItem>\n\n          <SidebarItem icon={IconShoppingBagOutline}>Products</SidebarItem>\n        </SidebarItemGroup>\n\n        <SidebarItemGroup>\n          <SidebarItem icon={IconFileEditSolid}>Documentation</SidebarItem>\n\n          <SidebarItem icon={IconAdressBookOutline}>Help</SidebarItem>\n\n          <SidebarItem icon={IconGearSolid}>Settings</SidebarItem>\n\n          <SidebarItem icon={IconAtomSolid}>Details</SidebarItem>\n\n          <SidebarCollapse label="Collapse" icon={IconAdjustmentsHorizontalSolid}>\n            <SidebarItem>Dashboard</SidebarItem>\n\n            <SidebarItem>inbox</SidebarItem>\n\n            <SidebarItem>Users</SidebarItem>\n\n            <SidebarItem>Products</SidebarItem>\n          </SidebarCollapse>\n        </SidebarItemGroup>\n        {isCtaVisible.value && (\n          <SidebarCta onClose$={() => (isCtaVisible.value = false)}>\n            <Badge q:slot="badge" type="yellow" content="new" />\n\n            <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">\n              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.\n            </p>\n            <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">\n              Turn new navigation off\n            </a>\n          </SidebarCta>\n        )}\n      </Sidebar>\n    </div>\n  )\n})',
      height: '500',
    },
  ],
  spinner: [
    {
      title: 'Default spinner',
      description:
        'Use the default spinner element by adding the <Spinner> React component inside your code and integrate the aria-label attribute to allow screen readers parse the component for accessibility',
      url: '/examples/[theme-rtl]/spinner/01-default',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { Spinner } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <div class=\"p-3 flex gap-3\">\n      <Spinner />\n    </div>\n  )\n})",
      height: '200',
    },
    {
      title: 'Spinner colors',
      description: 'Update the colors of the loading spinner by using the color React prop.',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { IconGridOutline, IconGridPlusOutline, IconProfileCardOutline, IconUserCircleSolid, Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="Profile" icon={IconProfileCardOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Dashboard" icon={IconGridOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Settings" icon={IconGridPlusOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Contacts" disabled icon={IconUserCircleSolid}>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
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
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Toast } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex flex-col p-3 space-y-2">\n      <Toast id="card" alignment="start" icon={<img alt="Avatar" class="w-8 h-8 rounded-full shadow-lg" src="/profile-picture.jpg" />}>\n        <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>\n        <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>\n        <Button size="xs" href="#">\n          Reply\n        </Button>\n      </Toast>\n    </div>\n  )\n})',
      height: '400',
    },
    {
      title: 'Playground',
      description: 'Use the playground to test different toast positions and types.',
      url: '/examples/[theme-rtl]/toast/04-playground',
      content:
        'import { component$, useContext } from \'@builder.io/qwik\'\nimport { Button, ToastPosition, useToast } from \'flowbite-qwik\'\nimport { toastPositionContext } from \'~/root\'\n\nexport default component$(() => {\n  const toastPosition = useContext(toastPositionContext)\n\n  const { add } = useToast()\n\n  return (\n    <div class="flex flex-col p-3 space-y-2">\n      <div class="mb-4">\n        <label for="position" class="mr-3">\n          Position\n        </label>\n        <select\n          onChange$={(v) => {\n            toastPosition.value = (v.target as HTMLSelectElement).value as ToastPosition\n          }}\n          class="dark:bg-gray-800 dark:text-white bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"\n        >\n          <option value="top-right">top-right</option>\n          <option value="top-left">top-left</option>\n          <option value="bottom-left">bottom-left</option>\n          <option value="bottom-right">bottom-right</option>\n        </select>\n      </div>\n\n      <div class="flex gap-3">\n        <Button\n          onClick$={() =>\n            add({\n              type: \'success\',\n              text: \'This is a success toast\',\n              closable: true,\n            })\n          }\n        >\n          Add success toast from\n        </Button>\n        <Button\n          onClick$={() =>\n            add({\n              type: \'danger\',\n              text: \'This is a danger toast\',\n              closable: true,\n              time: 2000,\n            })\n          }\n        >\n          Add danger toast with autoclose timer\n        </Button>\n      </div>\n    </div>\n  )\n})',
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
      height: '200',
    },
    {
      title: 'Checked Toggle',
      description: 'Apply the checked attribute to the toggle component to activate the selection by default.',
      url: '/examples/[theme-rtl]/toggle/02-checked-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Toggle me" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '200',
    },
    {
      title: 'Disabled state',
      description: 'Apply the disabled attribute to disallow the users from making any further selections.',
      url: '/examples/[theme-rtl]/toggle/03-disabled-state',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Disabled toggle" disabled bind:checked={toggleValue} />\n      <Toggle label="Disabled checked" disabled bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
      height: '200',
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
      height: '200',
    },
  ],
}
