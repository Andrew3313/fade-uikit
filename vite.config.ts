import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'fade-uikit',
			fileName: (format) => `fade-uikit.${format}.js`,
			formats: ['es', 'cjs']
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				exports: 'named',
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			},
			plugins: [preserveDirectives()]
		}
	},
	plugins: [
		react({
			jsxRuntime: 'automatic'
		}),
		dts({
			tsconfigPath: './tsconfig.build.json',
			insertTypesEntry: true
		})
	]
})
