import { Button } from './button'
import { ButtonVariants } from './button.props'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: { control: 'select', options: Object.values(ButtonVariants) },
		accentColor: {
			control: 'select',
			options: Object.values(AccentColors)
		},
		startIcon: { control: false },
		endIcon: { control: false }
	}
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: 'Button'
	}
}

export const Outline: Story = {
	args: {
		children: 'Button',
		variant: 'outline'
	}
}

export const Ghost: Story = {
	args: {
		children: 'Button',
		variant: 'ghost'
	}
}

export const Disabled: Story = {
	args: {
		children: 'Button',
		isDisabled: true
	}
}

export const Loading: Story = {
	args: {
		children: 'Button',
		isLoading: true
	}
}

export const Small: Story = {
	args: {
		children: 'Button',
		size: 'sm'
	}
}

export const Medium: Story = {
	args: {
		children: 'Button',
		size: 'md'
	}
}

export const Large: Story = {
	args: {
		children: 'Button',
		size: 'lg'
	}
}

export const Rounded: Story = {
	args: {
		children: 'Button',
		rounded: true
	}
}

export const FullWidth: Story = {
	args: {
		children: 'Button',
		fullWidth: true
	}
}

export const AccentBlue: Story = {
	args: {
		children: 'Button',
		accent: true,
		accentColor: 'blue-accent'
	}
}

export const AccentPink: Story = {
	args: {
		children: 'Button',
		accent: true,
		accentColor: 'pink-accent'
	}
}

export const AccentGreen: Story = {
	args: {
		children: 'Button',
		accent: true,
		accentColor: 'green-accent'
	}
}

export const AccentYellow: Story = {
	args: {
		children: 'Button',
		accent: true,
		accentColor: 'yellow-accent'
	}
}

export const AccentPurple: Story = {
	args: {
		children: 'Button',
		accent: true,
		accentColor: 'purple-accent'
	}
}

export const AccentRed: Story = {
	args: {
		children: 'Button',
		accent: true,
		accentColor: 'red-accent'
	}
}
