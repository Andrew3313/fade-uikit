import { Overlay } from './overlay'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Overlay> = {
	title: 'Components/Overlay',
	component: Overlay,
	tags: ['autodocs'],
	argTypes: {
		position: {
			control: { type: 'select' },
			options: ['center', 'top', 'bottom', 'left', 'right']
		}
	}
}

export default meta

type Story = StoryObj<typeof Overlay>

export const Default: Story = {
	args: {
		children: 'Overlay'
	}
}

export const ContentTop: Story = {
	args: {
		children: 'Overlay',
		position: 'top'
	}
}

export const ContentBottom: Story = {
	args: {
		children: 'Overlay',
		position: 'bottom'
	}
}

export const ContentLeft: Story = {
	args: {
		children: 'Overlay',
		position: 'left'
	}
}

export const ContentRight: Story = {
	args: {
		children: 'Overlay',
		position: 'right'
	}
}
