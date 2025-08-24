import { Portal } from './portal'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Portal> = {
	title: 'Components/Portal',
	component: Portal,
	tags: ['autodocs'],
	argTypes: {
		children: { control: false }
	}
}

export default meta

type Story = StoryObj<typeof Portal>

export const Default: Story = {
	args: {
		children: <div id='portal-content'>Portal</div>
	}
}
