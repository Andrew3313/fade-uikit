import { ScrollArea } from './scroll-area'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof ScrollArea> = {
	title: 'Components/ScrollArea',
	component: ScrollArea,
	tags: ['autodocs'],
	argTypes: {
		accentColor: {
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`

export const Default: Story = {
	args: {
		children: sampleText,
		style: { height: '150px' }
	}
}

export const AccentColor: Story = {
	args: {
		children: sampleText,
		style: { height: '150px' },
		accentColor: 'green-accent',
		accent: true
	}
}

export const Horizontal: Story = {
	args: {
		children: <p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
	}
}

export const VerticalAndHorizontal: Story = {
	args: {
		children: (
			<div style={{ height: '200px' }}>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
			</div>
		)
	}
}

export const WithoutArrows: Story = {
	args: {
		children: (
			<div style={{ height: '200px' }}>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
				<p style={{ whiteSpace: 'nowrap' }}>{sampleText}</p>
			</div>
		),
		showArrows: false,
		accentColor: 'green-accent'
	}
}
