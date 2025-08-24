import { Separator } from './separator'
import { SeparatorVariants } from './separator.props'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Separator> = {
	title: 'Components/Separator',
	component: Separator,
	tags: ['autodocs'],
	argTypes: {
		accentColor: {
			control: 'select',
			options: Object.values(AccentColors)
		},
		variant: {
			control: 'select',
			options: Object.values(SeparatorVariants)
		},
		direction: {
			control: false
		}
	}
}

export default meta

type Story = StoryObj<typeof Separator>

export const Default: Story = {}

export const Accent: Story = {
	args: {
		accent: true,
		accentColor: 'green-accent'
	}
}

export const Ghost: Story = {
	args: {
		variant: 'ghost'
	}
}

export const Horizontal: Story = {
	args: {
		direction: 'horizontal'
	}
}

export const Vertical: Story = {
	args: {
		direction: 'vertical',
		style: { height: '100px' }
	}
}

export const Small: Story = {
	args: {
		size: 'sm'
	}
}

export const Large: Story = {
	args: {
		size: 'lg'
	}
}

export const Medium: Story = {
	args: {
		size: 'md'
	}
}
