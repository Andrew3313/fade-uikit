import '@/styles/index.css'
import type { Preview, Decorator } from '@storybook/react'

const withThemeClass: Decorator = (Story, context) => {
	const html = document.documentElement
	const theme = context.globals.theme

	html.classList.toggle('dark', theme === 'dark')

	return <Story />
}

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#151515' }
			]
		}
	},
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			toolbar: {
				title: 'Theme',
				icon: 'circlehollow',
				items: [
					{ value: 'light', title: 'light' },
					{ value: 'dark', title: 'dark' }
				]
			}
		}
	},
	initialGlobals: { theme: 'light' },
	decorators: [withThemeClass]
}

export default preview
