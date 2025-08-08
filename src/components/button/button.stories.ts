import { Button } from './button'
import { ButtonVariants } from './button.props'
import { AccentColors } from '@/types/theme'
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
		theme: { control: 'select', options: ['light', 'dark'] }
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

export const Disabled: Story = {
	args: {
		children: 'Button',
		isDisabled: true
	}
}

export const Light: Story = {
	args: {
		children: 'Button',
		theme: 'light'
	}
}

export const Dark: Story = {
	args: {
		children: 'Button',
		theme: 'dark'
	}
}

export const AccentBlue: Story = {
	args: {
		children: 'Button',
		variant: 'accent',
		accentColor: 'blue'
	}
}

export const AccentPink: Story = {
	args: {
		children: 'Button',
		variant: 'accent',
		accentColor: 'pink'
	}
}

export const AccentGreen: Story = {
	args: {
		children: 'Button',
		variant: 'accent',
		accentColor: 'green'
	}
}

export const AccentYellow: Story = {
	args: {
		children: 'Button',
		variant: 'accent',
		accentColor: 'yellow'
	}
}

export const AccentPurple: Story = {
	args: {
		children: 'Button',
		variant: 'accent',
		accentColor: 'purple'
	}
}

export const AccentRed: Story = {
	args: {
		children: 'Button',
		variant: 'accent',
		accentColor: 'red'
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
