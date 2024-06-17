import fs from 'fs'
import prettier from 'prettier'

function getMetadata(fileContent: string) {
  const pattern =
    /\*\*(?:\s|\n)*\* title:\s*(?<title>[^\n]*)(?:\s|\n)*\* description:\s*(?<description>[^\n]*)(?:(?:\s|\n)*\* height:\s*(?<height>\d+))?/
  const match = pattern.exec(fileContent)

  let title = ''
  let description = ''
  let height = ''

  if (match) {
    title = match[1]?.trim() ?? ''
    description = match[2]?.trim() ?? ''
    height = match[3]?.trim() ?? '200'
  }

  return {
    title,
    description,
    height,
  }
}

interface Example {
  title: string
  description: string
  url: string
  content: string
  height: string
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
        const { title, description, height } = getMetadata(content)
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
          height,
        })
      })

      prettier
        .format(
          [
            '/**',
            ' * DO NOT EDIT, GENERATED FILE',
            ' */',
            '',
            'type Example = {',
            '  title: string',
            '  description: string',
            '  url: string',
            '  content: string',
            '  height: string',
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
