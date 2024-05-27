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
import { component$ } from '@builder.io/qwik'

export const ${iconName} = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
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
