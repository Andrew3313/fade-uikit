import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'fade-uikit',
			fileName: (format) => `fade-uikit.${format}.js`,
			formats: ['es', 'cjs']
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		}
	},
	plugins: [
		react(),
		dts({
			insertTypesEntry: true
		}),
		cssInjectedByJsPlugin()
	]
})
