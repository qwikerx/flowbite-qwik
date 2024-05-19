import { join } from 'path'
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}')],
  plugins: [flowbitePlugin],
}
