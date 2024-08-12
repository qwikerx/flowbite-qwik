import fs from 'fs'
import prettier from 'prettier'

const componentsToExclude = ['DarkModeToggle', 'Floating', 'FlowbiteProvider', 'FlowbiteThemable']

const componentsNaming: Record<string, { folder: string; img: string; doc: string }> = {
  Accordion: { folder: 'components', img: 'accordion', doc: 'accordion' },
  Alert: { folder: 'components', img: 'alerts', doc: 'alert' },
  Avatar: { folder: 'components', img: 'avatar', doc: 'avatar' },
  Badge: { folder: 'components', img: 'badges', doc: 'badge' },
  Banner: { folder: 'components', img: 'banner', doc: 'banner' },
  Blockquote: { folder: 'typography', img: 'blockquote', doc: 'blockquote' },
  Breadcrumb: { folder: 'components', img: 'breadcrumbs', doc: 'breadcrumb' },
  ButtonGroup: { folder: 'components', img: 'button-group', doc: 'button-group' },
  Button: { folder: 'components', img: 'buttons', doc: 'button' },
  Card: { folder: 'components', img: 'cards', doc: 'card' },
  Carousel: { folder: 'components', img: 'carousel', doc: 'carousel' },
  Checkbox: { folder: 'forms', img: 'checkbox', doc: 'checkbox' },
  Clipboard: { folder: 'components', img: 'clipboard', doc: 'clipboard' },
  DatePicker: { folder: 'components', img: 'datepicker', doc: 'date-picker' },
  Drawer: { folder: 'components', img: 'drawer', doc: 'drawer' },
  Dropdown: { folder: 'components', img: 'dropdown', doc: 'dropdown' },
  Footer: { folder: 'components', img: 'footer', doc: 'footer' },
  Heading: { folder: 'typography', img: 'headings', doc: 'heading' },
  HR: { folder: 'typography', img: 'horizontal-rule', doc: 'hr' },
  Input: { folder: 'forms', img: 'input-field', doc: 'input' },
  Jumbotron: { folder: 'components', img: 'jumbotron', doc: 'jumbotron' },
  Kbd: { folder: 'components', img: 'kbd', doc: 'kbd' },
  Link: { folder: 'typography', img: 'link', doc: 'link' },
  List: { folder: 'typography', img: 'list', doc: 'list' },
  ListGroup: { folder: 'components', img: 'list-group', doc: 'list-group' },
  Modal: { folder: 'components', img: 'modal', doc: 'modal' },
  Navbar: { folder: 'components', img: 'navbar', doc: 'navbar' },
  Pagination: { folder: 'components', img: 'pagination', doc: 'pagination' },
  ProgressBar: { folder: 'components', img: 'progress', doc: 'progress-bar' },
  Radio: { folder: 'forms', img: 'radio', doc: 'radio' },
  Range: { folder: 'forms', img: 'range-slider', doc: 'range' },
  Rating: { folder: 'components', img: 'rating', doc: 'rating' },
  Select: { folder: 'forms', img: 'select', doc: 'select' },
  Sidebar: { folder: 'components', img: 'sidebar', doc: 'sidebar' },
  Spinner: { folder: 'components', img: 'spinner', doc: 'spinner' },
  Table: { folder: 'components', img: 'table', doc: 'table' },
  Tabs: { folder: 'components', img: 'tabs', doc: 'tabs' },
  Textarea: { folder: 'forms', img: 'textarea', doc: 'textarea' },
  Timeline: { folder: 'components', img: 'timeline', doc: 'timeline' },
  ToastList: { folder: 'components', img: 'toasts', doc: 'toast' },
  Toggle: { folder: 'forms', img: 'toggle', doc: 'toggle' },
  Tooltip: { folder: 'components', img: 'tooltips', doc: 'tooltip' },
}

const regex = /<!-- @qwikerx start -->([\s\S]*?)<!-- @qwikerx end -->/

export function generate() {
  console.log('Generating components documentation...')

  const readmeFile = fs.readFileSync('./README.md').toString()

  const components = fs
    .readdirSync('./src/components')
    .filter((component) => !componentsToExclude.includes(component) && fs.lstatSync(`./src/components/${component}`).isDirectory())

  function chunkArray(array: string[], chunkSize: number) {
    const chunks = []
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize))
    }
    return chunks
  }

  const groupedComponents = chunkArray(components, 3)

  const componentsTable = `
    <table>
      ${groupedComponents
        .map(
          (group) => `<tr>
          ${group
            .map(
              (comp: string) =>
                `<td>
            <a href="https://flowbite-qwik.com/docs/${componentsNaming[comp].folder}/${componentsNaming[comp].doc}">
              <img alt="Qwik ${comp}" src="https://flowbite-qwik.com/thumbnails/website/${componentsNaming[comp].img}-light.svg" />
              </a>
          </td>`,
            )
            .join('')}
          ${group.length < 3 ? '<td></td>'.repeat(3 - group.length) : ''}
        </tr>
      `,
        )
        .join('')}
    </table>
    `

  const componentsGrid = `
  <div style="display:flex;">\n${componentsTable}\n</div>`

  prettier.format(componentsGrid, { semi: false, singleQuote: true, trailingComma: 'all', printWidth: 150, parser: 'html' }).then((content) => {
    const newReadmeFile = readmeFile.replace(regex, `<!-- @qwikerx start -->\n${content}\n<!-- @qwikerx end -->`)
    fs.writeFileSync('./README.md', newReadmeFile)
    fs.writeFileSync('../../README.md', newReadmeFile)
  })
}

generate()
