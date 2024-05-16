import preset from './src/tailwind/preset.js'
import { join } from 'path'

export default {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx}')],
  presets: [preset],
}
