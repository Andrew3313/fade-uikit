import '@/styles/index.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#151515' }
			]
		}
	}
}

export default preview
