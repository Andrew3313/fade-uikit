import { InputVariants } from '../input/input.props'
import { Autocomplete } from './autocomplete'
import { AccentColors, type TOptionsData } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'

const staticOptions: TOptionsData = [
	{ label: 'Соколова Ю. С.', value: 'Соколова Ю. С.' },
	{ label: 'Соколов А. А.', value: 'Соколов А. А.' },
	{ label: 'Соколов А. В.', value: 'Соколов А. В.' },
	{ label: 'Соколов В. В.', value: 'Соколов В. В.' },
	{ label: 'Соколов Г. Г.', value: 'Соколов Г. Г.' },
	{ label: 'Иванов А. Т.', value: 'Иванов А. Т.' },
	{ label: 'Петров А. А.', value: 'Петров А. А.' }
]

const meta: Meta<typeof Autocomplete> = {
	title: 'Components/Autocomplete',
	component: Autocomplete,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: Object.values(InputVariants)
		},
		accentColor: {
			control: 'select',
			options: Object.values(AccentColors)
		}
	},
	args: {
		data: staticOptions,
		placeholder: 'Преподаватель',
		placeholderColor: '#ccc',
		caretColor: '#ccc',
		onSelect: (item) => alert(`Выбран: ${item.label}`)
	}
}

export default meta

type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {}

export const Ghost: Story = {
	args: {
		variant: InputVariants.GHOST
	}
}

export const WithDefaultValue: Story = {
	args: {
		defaultValue: 'Соколова Ю. С.'
	}
}

export const Accent: Story = {
	args: {
		accent: true,
		accentColor: 'yellow-accent'
	}
}
