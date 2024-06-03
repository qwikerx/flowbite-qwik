import * as flowbite from '@qwikest/icons/flowbite'
import { writeFileSync, rmSync, mkdirSync } from 'fs'

const ICON_PATH = './src/components/Icon'

// clear icons directory
rmSync(ICON_PATH, { recursive: true, force: true })

// create directory for icons
mkdirSync(`${ICON_PATH}/icons`, { recursive: true })

const icons = Object.keys(flowbite).map((icon) => {
  const iconName = icon.replace('Fl', 'Icon')
  return {
    name: iconName,
    path: `${ICON_PATH}/icons/${iconName}.tsx`,
    content: `import { IconProps } from '@qwikest/icons'
import { ${icon} as QwikestIcon } from '@qwikest/icons/flowbite'
import { getChild } from '~/utils/getChild'
import { JSXNode, component$ } from '@builder.io/qwik'

function processChild(child: JSXNode, fill: string) {
  if (child.immutableProps?.fill && child.immutableProps.fill !== 'none') {
    child.immutableProps.fill = fill
  }
  if (child.immutableProps?.stroke && child.immutableProps.stroke !== 'none') {
    child.immutableProps.stroke = fill
  }
}

function updateFillOfChildren(children: JSXNode, fill: string): any {
  getChild(children, [
    {
      component: 'path',
      foundComponentCallback: (child) => {
        processChild(child, fill)
      },
    },
    {
      component: 'g',
      foundComponentCallback: (child) => {
        processChild(child, fill)
      },
    },
  ])
  return children
}

export const ${iconName} = component$<IconProps>((props) => {
  const el = QwikestIcon(props)
  el.children = updateFillOfChildren(el.children as JSXNode, 'currentColor')

  return <>{el}</>
})`,
  }
})

icons.forEach((icon) => {
  writeFileSync(icon.path, icon.content)
})

// generate index to export all icons
const indexContent = icons.map((icon) => `export { ${icon.name} } from './icons/${icon.name}'`).join('\n')

writeFileSync(`${ICON_PATH}/index.ts`, indexContent)

console.log('Icons generated successfully')
