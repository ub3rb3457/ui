import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: [
    './**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': {
            '50': '#f2f8fc',
            '100': '#e2eff7',
            '200': '#cbe3f2',
            '300': '#a8d1e8',
            '400': '#7eb8dc',
            '500': '#5f9fd2',
            '600': '#4a85c4',
            '700': '#4173b4',
            '800': '#3a5e93',
            '900': '#334f75',
            '950': '#233148',
        }        
    }
    },
  },
  plugins: [],
}

