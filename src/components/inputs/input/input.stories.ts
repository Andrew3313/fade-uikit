import { Input } from './input'
import { InputVariants } from './input.props'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: Object.values(InputVariants)
		},
		placeholder: { control: 'text' },
		type: {
			control: 'text'
		}
	},
	args: {
		placeholder: 'Placeholder',
		placeholderColor: '#ccc',
		caretColor: '#ccc'
	}
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Ghost: Story = {
	args: {
		variant: InputVariants.GHOST
	}
}
