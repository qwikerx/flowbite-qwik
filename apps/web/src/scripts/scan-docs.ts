import fs from 'fs'
import prettier from 'prettier'

const GETTING_STARTED_TOP_OF_LEVEL = ['introduction', 'quickstart']

export function scanDocsRoutes() {
  console.log('Scanning docs routes...')
  const docCategories = fs.readdirSync('./src/routes/docs').filter((docCategory) => fs.lstatSync(`./src/routes/docs/${docCategory}`).isDirectory())
  const docItems = docCategories.reduce((acc: Record<string, string[]>, docCategory) => {
    if (!acc[docCategory]) {
      acc[docCategory] = []
    }
    acc[docCategory].push(
      ...fs
        .readdirSync(`./src/routes/docs/${docCategory}`)
        .filter((docItem) => fs.lstatSync(`./src/routes/docs/${docCategory}/${docItem}`).isDirectory()),
    )

    if (docCategory === 'getting-started') {
      acc[docCategory] = [...GETTING_STARTED_TOP_OF_LEVEL, ...acc[docCategory].filter((docItem) => !GETTING_STARTED_TOP_OF_LEVEL.includes(docItem))]
    }

    return acc
  }, {})

  // write to file
  prettier
    .format(['/**', ' * DO NOT EDIT, GENERATED FILE', ' */', '', `export const allDocs = ${JSON.stringify(docItems)}`].join('\n'), {
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 150,
      parser: 'typescript',
    })
    .then((content) => {
      fs.writeFileSync('./src/generated-docs.ts', content)
    })
}

scanDocsRoutes()
