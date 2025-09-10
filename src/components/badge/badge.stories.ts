import { Badge } from './badge'
import { BadgeVariants } from './badge.props'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: { control: 'select', options: Object.values(BadgeVariants) },
		fill: {
			control: 'select',
			options: [
				'white-fill',
				'black-fill',
				'green-fill',
				'red-fill',
				'blue-fill',
				'pink-fill',
				'orange-fill',
				'aqua-green-fill',
				'transparent-fill',
				'violet-fill',
				'bright-orange-fill',
				'yellow-fill'
			]
		},
		accentColor: {
			control: 'select',
			options: Object.values(AccentColors)
		},
		radius: {
			control: 'select',
			options: ['radius-sm', 'radius-md', 'radius-lg']
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg']
		}
	}
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
	args: {
		children: '8:10-9:55'
	}
}

export const Small: Story = {
	args: {
		children: '8:10-9:55',
		size: 'sm'
	}
}

export const Large: Story = {
	args: {
		children: '8:10-9:55',
		size: 'lg'
	}
}

export const RoundedSmall: Story = {
	args: {
		children: '8:10-9:55',
		radius: 'radius-sm'
	}
}

export const RoundedMedium: Story = {
	args: {
		children: '8:10-9:55',
		radius: 'radius-md'
	}
}

export const RoundedLarge: Story = {
	args: {
		children: '8:10-9:55',
		radius: 'radius-lg'
	}
}

export const Accent: Story = {
	args: {
		children: '8:10-9:55',
		accent: true
	}
}

export const Label: Story = {
	args: {
		children: '8:10-9:55',
		variant: 'label'
	}
}

export const LabelSmall: Story = {
	args: {
		children: '8:10-9:55',
		variant: 'label',
		size: 'sm'
	}
}

export const LabelLarge: Story = {
	args: {
		children: '8:10-9:55',
		variant: 'label',
		size: 'lg'
	}
}

export const LabelAccent: Story = {
	args: {
		children: '8:10-9:55',
		variant: 'label',
		accent: true
	}
}
