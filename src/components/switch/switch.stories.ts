import { Switch } from './switch'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Switch',
	tags: ['autodocs'],
	argTypes: {
		accentColor: {
			control: 'select',
			options: Object.values(AccentColors)
		},
		onChange: { control: false }
	}
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
	args: {
		checked: false
	}
}

export const Active: Story = {
	args: {
		checked: true
	}
}

export const Disabled: Story = {
	args: {
		isDisabled: true
	}
}

export const Small: Story = {
	args: {
		size: 'sm'
	}
}

export const Medium: Story = {
	args: {
		size: 'md'
	}
}

export const Large: Story = {
	args: {
		size: 'lg'
	}
}

export const AccentBlue: Story = {
	args: {
		checked: true,
		accentColor: 'blue-accent'
	}
}

export const AccentGreen: Story = {
	args: {
		checked: true,
		accentColor: 'green-accent'
	}
}

export const AccentPink: Story = {
	args: {
		checked: true,
		accentColor: 'pink-accent'
	}
}

export const AccentYellow: Story = {
	args: {
		checked: true,
		accentColor: 'yellow-accent'
	}
}

export const AccentPurple: Story = {
	args: {
		checked: true,
		accentColor: 'purple-accent'
	}
}

export const AccentRed: Story = {
	args: {
		checked: true,
		accentColor: 'red-accent'
	}
}
