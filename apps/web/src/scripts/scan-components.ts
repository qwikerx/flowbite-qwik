import fs from 'fs'
import prettier from 'prettier'

const PATH = './src/routes/docs/components'
const FORM = 'form'

export function scanComponentsRoutes() {
  console.log('Scanning components routes...')
  const components = fs.readdirSync(PATH).filter((component) => component !== FORM && fs.lstatSync(`${PATH}/${component}`).isDirectory())
  const formComponents = fs.readdirSync(`${PATH}/${FORM}`)

  // write to file
  prettier
    .format(
      ['/**', ' * DO NOT EDIT, GENERATED FILE', ' */', '', `export const allComponents = ${JSON.stringify({ components, formComponents })}`].join(
        '\n',
      ),
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 150,
        parser: 'typescript',
      },
    )
    .then((content) => {
      fs.writeFileSync('./src/components.ts', content)
    })
}

scanComponentsRoutes()
