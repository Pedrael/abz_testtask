import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  root: './',
  base: './',
  server: {
    // Enable open on the local network.
    open: true,
    host: true,
  },
  build: {
    sourcemap: true, // Enable sourcemaps
  },
  // resolve: {
  //   alias: {
  //     'Nunito': path.resolve(__dirname, 'fonts/Nunito-VariableFont_wght.ttf'),
  //     'Nunito Italic': path.resolve(__dirname, 'fonts/Nunito-Italic-VariableFont_wght.ttf'),
  //   },
  // },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
