import fs from 'fs'
import prettier from 'prettier'

function getTitleAndDescription(fileContent: string) {
  const pattern = /\/\*\*[^]*?title:\s*(.*?)\s*\*[^]*?description:\s*(.*?)\s*\*\//
  const match = pattern.exec(fileContent)

  let title = ''
  let description = ''

  if (match) {
    title = match[1].trim()
    description = match[2].trim()
  }

  return {
    title,
    description,
  }
}

interface Example {
  title: string
  description: string
  url: string
  content: string
}

function JsonToTs(json: Record<string, Example[]>) {
  return JSON.stringify(json, null, 2)
}

export function getExamplesRoutes() {
  const examples: Record<string, Example[]> = {}
  console.log('Scanning examples routes...')

  return fs
    .readdirSync(`src/routes/examples/[theme-rtl]`)
    .filter((component) => fs.lstatSync(`src/routes/examples/[theme-rtl]/${component}`).isDirectory())
    .map((component) => {
      const path = `src/routes/examples/[theme-rtl]/${component}`

      fs.readdirSync(path).map((example) => {
        const path = `src/routes/examples/[theme-rtl]/${component}/${example}`
        const content = fs.readFileSync(path + '/index@examples.tsx', 'utf-8')
        const { title, description } = getTitleAndDescription(content)
        const codeContent = content
          .replace(/\/\*\*[\s\S]*?\*\//, '')
          .replace("import { StaticGenerateHandler } from '@builder.io/qwik-city'\n", '')
          .replace("import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'\n", '')
          .replace('export const onStaticGenerate: StaticGenerateHandler = async () => {\n' + '  return staticGenerateHandler()\n' + '}', '')
          .trim()
        if (!examples[component]) {
          examples[component] = []
        }

        examples[component].push({
          title,
          description,
          url: `/examples/[theme-rtl]/${component}/${example}`,
          content: codeContent,
        })
      })

      prettier
        .format(
          [
            'type Example = {',
            '  title: string',
            '  description: string',
            '  url: string',
            '  content: string',
            '}',
            '',
            `export const examples: Record<string, Example[]> = ${JsonToTs(examples)}`,
          ].join('\n'),
          { semi: false, singleQuote: true, trailingComma: 'all', printWidth: 150, parser: 'typescript' },
        )
        .then((content) => {
          fs.writeFileSync('./src/examples.ts', content)
        })
    })
}

getExamplesRoutes()
