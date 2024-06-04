type Example = {
  title: string
  description: string
  url: string
  content: string
}

export const examples: Record<string, Example[]> = {
  accordion: [
    {
      title: 'Default accordion',
      description: 'Use this example to basic accordion.',
      url: '/examples/[theme-rtl]/accordion/01-default-accordion',
      content:
        "import { component$ } from '@builder.io/qwik'\nimport { StaticGenerateHandler } from '@builder.io/qwik-city'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'flowbite-qwik'\n\nexport default component$(() => {\n  return (\n    <Accordion>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class=\"mb-2 text-gray-500 dark:text-gray-400\">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class=\"text-gray-500 dark:text-gray-400\">\n              Check out this guide to learn how to{' '}\n              <a href=\"/docs/getting-started/introduction/\" class=\"text-blue-600 dark:text-blue-500 hover:underline\">\n                get started\n              </a>{' '}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class=\"mb-2 text-gray-500 dark:text-gray-400\">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class=\"text-gray-500 dark:text-gray-400\">\n              Check out this guide to learn how to{' '}\n              <a href=\"/docs/getting-started/introduction/\" class=\"text-blue-600 dark:text-blue-500 hover:underline\">\n                get started\n              </a>{' '}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class=\"mb-2 text-gray-500 dark:text-gray-400\">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class=\"text-gray-500 dark:text-gray-400\">\n              Check out this guide to learn how to{' '}\n              <a href=\"/docs/getting-started/introduction/\" class=\"text-blue-600 dark:text-blue-500 hover:underline\">\n                get started\n              </a>{' '}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})\n\nexport const onStaticGenerate: StaticGenerateHandler = async () => {\n  const themes = ['blue', 'green', 'red', 'yellow', 'purple', 'pink']\n  const rtls = ['rtl', 'ltr']\n\n  return {\n    params: themes.flatMap((theme) => rtls.map((rtl) => ({ 'theme-rtl': `${theme}-${rtl}` }))),\n  }\n}",
    },
    {
      title: 'Always open accordion',
      description: 'Always open prop to makes accordion able to open multiple elements.',
      url: '/examples/[theme-rtl]/accordion/02-always-open-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion alwaysOpen>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
    },
    {
      title: 'Flush accordion',
      description: 'Flush prop removes background color, side borders, and rounded corners',
      url: '/examples/[theme-rtl]/accordion/03-flush-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion flush>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
    },
    {
      title: 'Closed first accordion',
      description: 'First item is not open by default',
      url: '/examples/[theme-rtl]/accordion/04-closed-first-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion openFirstItem={false}>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
    },
    {
      title: 'Styling accordion',
      description: 'You can style accordion content and headers by passing tailwind classes into them.',
      url: '/examples/[theme-rtl]/accordion/05-styling-accordion',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Accordion>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 1</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader class="bg-pink-200 dark:bg-pink-900 dark:text-gray-50">\n          <h2>Accordion 2</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n      <AccordionPanel>\n        <AccordionHeader>\n          <h2>Accordion 3</h2>\n        </AccordionHeader>\n        <AccordionContent>\n          <div>\n            <p class="mb-2 text-gray-500 dark:text-gray-400">\n              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars,\n              and more.\n            </p>\n            <p class="text-gray-500 dark:text-gray-400">\n              Check out this guide to learn how to{\' \'}\n              <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">\n                get started\n              </a>{\' \'}\n              and start developing websites even faster with components on top of Tailwind CSS.\n            </p>\n          </div>\n        </AccordionContent>\n      </AccordionPanel>\n    </Accordion>\n  )\n})',
    },
  ],
  badge: [
    {
      title: 'Default Badge',
      description: 'Use the following badge elements to indicate counts or labels inside or outside components.',
      url: '/examples/[theme-rtl]/badge/01-default-badge',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge type="default" content="Default" />\n      <Badge type="dark" content="Dark" />\n      <Badge type="red" content="Red" />\n      <Badge type="green" content="Green" />\n      <Badge type="yellow" content="Yellow" />\n      <Badge type="indigo" content="Indigo" />\n      <Badge type="purple" content="Purple" />\n      <Badge type="pink" content="Pink" />\n    </div>\n  )\n})',
    },
    {
      title: 'Bordered badge',
      description: 'This example can be used to add a border accent to the badge component.',
      url: '/examples/[theme-rtl]/badge/02-props-bordered',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge size="sm" bordered content="Default" />\n      <Badge size="sm" bordered type="dark" content="Dark" />\n      <Badge size="sm" bordered type="red" content="Red" />\n      <Badge size="sm" bordered type="green" content="Green" />\n      <Badge size="sm" bordered type="yellow" content="Yellow" />\n      <Badge size="sm" bordered type="indigo" content="Indigo" />\n      <Badge size="sm" bordered type="purple" content="Purple" />\n      <Badge size="sm" bordered type="pink" content="Pink" />\n    </div>\n  )\n})',
    },
    {
      title: 'Pills badge',
      description: 'Use this example to make the corners even more rounded like pills for the badge component.',
      url: '/examples/[theme-rtl]/badge/03-props-pills',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge pills content="Default" />\n      <Badge pills type="dark" content="Dark" />\n      <Badge pills type="red" content="Red" />\n      <Badge pills type="green" content="Green" />\n      <Badge pills type="yellow" content="Yellow" />\n      <Badge pills type="indigo" content="Indigo" />\n      <Badge pills type="purple" content="Purple" />\n      <Badge pills type="pink" content="Pink" />\n    </div>\n  )\n})',
    },
    {
      title: 'Badges as links',
      description: 'You can also use badges as anchor elements to link to another page. Prop – href',
      url: '/examples/[theme-rtl]/badge/04-as-link',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge href="#" content="Link" bordered />\n      <Badge href="#" size="sm" content="Link" />\n    </div>\n  )\n})',
    },
    {
      title: 'Large badge',
      description: 'Use size prop to change the size of the badge component.',
      url: '/examples/[theme-rtl]/badge/05-props-size',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge size="xs" content="Default" />\n      <Badge size="xs" type="dark" content="Dark" />\n      <Badge size="xs" type="red" content="Red" />\n      <Badge size="sm" type="green" content="Green" />\n      <Badge size="sm" type="yellow" content="Yellow" />\n      <Badge size="sm" type="indigo" content="Indigo" />\n      <Badge size="sm" type="purple" content="Purple" />\n      <Badge size="sm" type="pink" content="Pink" />\n    </div>\n  )\n})',
    },
    {
      title: 'Badge with Icon',
      description: 'You can also use SVG icons inside the badge elements.',
      url: '/examples/[theme-rtl]/badge/06-with-icon',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge, IconRocketOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge icon={IconRocketOutline} content="Icon" />\n      <Badge icon={IconRocketOutline} size="sm" content="Icon" />\n    </div>\n  )\n})',
    },
    {
      title: 'Chips (dismissible badges)',
      description: 'This example can be used to make badges dismissible by adding a close button.',
      url: '/examples/[theme-rtl]/badge/07-props-chips',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        content="Default"\n      />\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="dark"\n        content="Dark"\n      />\n      <Badge\n        size="xs"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="red"\n        content="Red"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="green"\n        content="Green"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="yellow"\n        content="Yellow"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="indigo"\n        content="Indigo"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="purple"\n        content="Purple"\n      />\n      <Badge\n        size="sm"\n        chips\n        onClose$={() => {\n          alert(\'close\')\n        }}\n        type="pink"\n        content="Pink"\n      />\n    </div>\n  )\n})',
    },
    {
      title: 'Badge with Icon only',
      description: 'You can also use badge with only icon.',
      url: '/examples/[theme-rtl]/badge/08-with-icon-only',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Badge, IconRocketOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Badge icon={IconRocketOutline} size="sm" />\n      <Badge type="dark" icon={IconRocketOutline} size="sm" />\n      <Badge type="green" icon={IconRocketOutline} size="sm" />\n    </div>\n  )\n})',
    },
  ],
  breadcrumb: [
    {
      title: 'Default Breadcrumb',
      description: 'Use the following breadcrumb example to show the hierarchical structure of pages.',
      url: '/examples/[theme-rtl]/breadcrumb/01-default-breadcrumb',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb>\n        <BreadcrumbItem home href="#">\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\n        <BreadcrumbItem>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
    },
    {
      title: 'Solid Breadcrumb',
      description: 'You can alternatively also use the breadcrumb components with a solid background.',
      url: '/examples/[theme-rtl]/breadcrumb/02-solid-breadcrumb',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <BreadcrumbItem home href="#">\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\n        <BreadcrumbItem>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
    },
    {
      title: 'Breadcrumb with Custom Icons',
      description: 'You can customize the icons for the home and arrow icons in the breadcrumb component.',
      url: '/examples/[theme-rtl]/breadcrumb/03-custom-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Breadcrumb, BreadcrumbItem, IconArrowLeftOutline, IconBarsOutline } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <div class="p-3">\n      <Breadcrumb solid>\n        <BreadcrumbItem home href="#" homeIcon={IconBarsOutline}>\n          Home\n        </BreadcrumbItem>\n        <BreadcrumbItem href="#" arrowIcon={IconArrowLeftOutline}>\n          Projects\n        </BreadcrumbItem>\n        <BreadcrumbItem arrowIcon={IconArrowLeftOutline}>Flowbite</BreadcrumbItem>\n      </Breadcrumb>\n    </div>\n  )\n})',
    },
  ],
  navbar: [
    {
      title: 'Default Navbar',
      description:
        'Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.',
      url: '/examples/[theme-rtl]/navbar/01-default-navbar',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded separator>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <NavbarToggle />\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink as={Link} href="/navbars">\n          About\n        </NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
    },
    {
      title: 'Navbar with CTA button',
      description: 'Use the following navbar element to show a call to action button alongside the logo and page links.',
      url: '/examples/[theme-rtl]/navbar/02-with-cta',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Button>Get started</Button>\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
    },
    {
      title: 'Navbar with dropdown',
      description: 'This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.',
      url: '/examples/[theme-rtl]/navbar/03-with-dropdown',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Dropdown as={<img class="w-8 h-8 rounded-full" src="/profile-picture.jpg" alt="user photo" />}>\n          <DropdownItem header>\n            <span class="block text-sm">Bonnie Green</span>\n            <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n          </DropdownItem>\n          <DropdownItem>Dashboard</DropdownItem>\n          <DropdownItem>Settings</DropdownItem>\n          <DropdownItem>Earnings</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Sign out</DropdownItem>\n        </Dropdown>\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars" as="div">\n          <Dropdown label="Services" inline>\n            <DropdownItem>Dashboard</DropdownItem>\n            <DropdownItem>Settings</DropdownItem>\n            <DropdownItem>Earnings</DropdownItem>\n          </Dropdown>\n        </NavbarLink>\n        <NavbarLink href="/navbars">Pricing</NavbarLink>\n        <NavbarLink href="/navbars">Contact</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
    },
    {
      title: 'Navbar with search',
      description: 'Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.',
      url: '/examples/[theme-rtl]/navbar/04-with-search',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { IconSearchOutline, Input, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from \'flowbite-qwik\'\nimport { Link } from \'@builder.io/qwik-city\'\n\nexport default component$(() => {\n  const searchValue = useSignal(\'\')\n\n  return (\n    <Navbar fluid rounded>\n      <NavbarBrand as={Link} href="https://flowbite-qwik.com/">\n        <img src="/favicon.png" alt="Flowbite qwik logo" width="215" height="195" class="mr-3 h-6 sm:h-9 w-auto" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite Qwik</span>\n      </NavbarBrand>\n      <div class="flex md:order-2">\n        <Input bind:value={searchValue} placeholder="Search ..." prefix={<IconSearchOutline class="w-5 h-5 text-gray-500 dark:text-gray-400" />} />\n        <NavbarToggle />\n      </div>\n      <NavbarCollapse>\n        <NavbarLink href="/navbars" active>\n          Home\n        </NavbarLink>\n        <NavbarLink href="/navbars">About</NavbarLink>\n        <NavbarLink href="/navbars">Services</NavbarLink>\n      </NavbarCollapse>\n    </Navbar>\n  )\n})',
    },
  ],
  tabs: [
    {
      title: 'Default Tabs',
      description: 'Use the following default tabs component example to show a list of links that the user can navigate from on your website.',
      url: '/examples/[theme-rtl]/tabs/01-default-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
    {
      title: 'Tabs with icons',
      description:
        'This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs.',
      url: '/examples/[theme-rtl]/tabs/02-underline-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs variant="underline">\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
    {
      title: 'Pills tabs',
      description: 'If you want to use pills as a style for the tabs component you can do so by using this example.',
      url: '/examples/[theme-rtl]/tabs/03-pills-tabs',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs variant="pills">\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
    {
      title: 'Directive - show',
      description: 'Use this props if you want to control which directive to use for rendering every tab content',
      url: '/examples/[theme-rtl]/tabs/04-directive',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs directive="show">\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
    {
      title: 'With icons',
      description: 'You can add icons to the tabs to make them more visually appealing and easier to understand.',
      url: '/examples/[theme-rtl]/tabs/05-tabs-with-icons',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { IconGridOutline, IconGridPlusOutline, IconProfileCardOutline, IconUserCircleSolid, Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="Profile" icon={IconProfileCardOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Dashboard" icon={IconGridOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Settings" icon={IconGridPlusOutline}>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Contacts" disabled icon={IconUserCircleSolid}>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
    {
      title: 'Active tab',
      description: 'If you want to set a specific tab as active you can do so by using the `active` prop.',
      url: '/examples/[theme-rtl]/tabs/06-tabs-pane-active',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs>\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second" active>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
    {
      title: 'Interaction',
      description: 'You can interact with tabs by using the `onClickInteraction$` prop.',
      url: '/examples/[theme-rtl]/tabs/07-tabs-interaction',
      content:
        'import { component$ } from \'@builder.io/qwik\'\nimport { Tab, Tabs } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  return (\n    <Tabs\n      directive="show"\n      onClickInteraction$={() => {\n        alert(\'Click!\')\n      }}\n    >\n      <Tab title="First">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis iste libero molestiae mollitia, optio sunt? A, consectetur\n        distinctio, eaque harum iusto laudantium, molestiae nam odio officia pariatur vitae?\n      </Tab>\n      <Tab title="Second">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem cupiditate, deleniti eligendi exercitationem magnam\n        maiores, minus pariatur provident quasi qui quidem recusandae rem reprehenderit sapiente sequi sint soluta.\n      </Tab>\n      <Tab title="Third">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam assumenda consectetur, dolorem, dolores, ea eos ipsum itaque\n        iure laudantium nostrum nulla numquam perspiciatis provident qui quod totam voluptatem.\n      </Tab>\n      <Tab title="Fourth" disabled>\n        Lorem ipsum dolor...\n      </Tab>\n    </Tabs>\n  )\n})',
    },
  ],
  toggle: [
    {
      title: 'Default Toggle',
      description: 'Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.',
      url: '/examples/[theme-rtl]/toggle/01-default-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Toggle me" bind:checked={toggleValue} />\n    </div>\n  )\n})',
    },
    {
      title: 'Checked Toggle',
      description: 'Apply the checked attribute to the toggle component to activate the selection by default.',
      url: '/examples/[theme-rtl]/toggle/02-checked-toggle',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Toggle me" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
    },
    {
      title: 'Disabled state',
      description: 'Apply the disabled attribute to disallow the users from making any further selections.',
      url: '/examples/[theme-rtl]/toggle/03-disabled-state',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n  const toggleValue = useSignal(false)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Disabled toggle" disabled bind:checked={toggleValue} />\n      <Toggle label="Disabled checked" disabled bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
    },
    {
      title: 'Colors',
      description: 'You can customize the toggle component with different colors.',
      url: '/examples/[theme-rtl]/toggle/04-color',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Red" color="red" bind:checked={checkedToggleValue} />\n      <Toggle label="Green" color="green" bind:checked={checkedToggleValue} />\n      <Toggle label="Yellow" color="yellow" bind:checked={checkedToggleValue} />\n      <Toggle label="Orange" color="orange" bind:checked={checkedToggleValue} />\n      <Toggle label="Teal" color="teal" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
    },
    {
      title: 'Sizes',
      description: 'You can customize the toggle component with different sizes.',
      url: '/examples/[theme-rtl]/toggle/05-size',
      content:
        'import { component$, useSignal } from \'@builder.io/qwik\'\nimport { Toggle } from \'flowbite-qwik\'\n\nexport default component$(() => {\n  const checkedToggleValue = useSignal(true)\n\n  return (\n    <div class="flex gap-2 flex-wrap p-6">\n      <Toggle label="Small" size="sm" bind:checked={checkedToggleValue} />\n      <Toggle label="Medium" size="md" bind:checked={checkedToggleValue} />\n      <Toggle label="Large" size="lg" bind:checked={checkedToggleValue} />\n    </div>\n  )\n})',
    },
  ],
}
