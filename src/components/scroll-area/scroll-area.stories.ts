import { ScrollArea } from './scroll-area'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof ScrollArea> = {
	title: 'Components/ScrollArea',
	component: ScrollArea,
	tags: ['autodocs'],
	argTypes: {
		thumbColor: {
			control: 'select',
			options: Object.values(AccentColors)
		}
	}
}

export default meta

type Story = StoryObj<typeof ScrollArea>

const sampleText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`

export const Default: Story = {
	args: {
		children: sampleText,
		style: { height: 100, width: 300, padding: 16 }
	}
}

export const FixedThumb: Story = {
	args: {
		children: sampleText,
		style: { height: 100, width: 300, padding: 16 },
		thumbColor: 'green-accent',
		scrollbarFixedSize: 30
	}
}

export const AutoHide: Story = {
	args: {
		children: sampleText,
		style: { height: 100, width: 300, padding: 16 },
		autoHide: true
	}
}

export const Big: Story = {
	args: {
		children: sampleText,
		style: { height: 100, width: 300, padding: 16 },
		size: 15
	}
}

export const Small: Story = {
	args: {
		children: sampleText,
		style: { height: 100, width: 300, padding: 16 },
		size: 5
	}
}

export const FillTrack: Story = {
	args: {
		children: sampleText,
		style: { height: 100, width: 300, padding: 16 },
		thumbColor: 'red-accent',
		trackColor: '#e8e7e7ff'
	}
}
