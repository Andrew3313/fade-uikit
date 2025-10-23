import { Switch } from './switch'
import { AccentColors } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, useEffect, type ComponentProps } from 'react'

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
type SwitchProps = ComponentProps<typeof Switch>

const Template = (args: SwitchProps) => {
	const [checked, setChecked] = useState(!!args.checked)

	useEffect(() => {
		setChecked(!!args.checked)
	}, [args.checked])

	return <Switch {...args} checked={checked} onChange={setChecked} />
}

export const Default: Story = {
	render: Template,
	args: { checked: false }
}

export const Active: Story = {
	render: Template,
	args: { checked: true }
}

export const Disabled: Story = {
	render: Template,
	args: { isDisabled: true }
}

export const Small: Story = {
	render: Template,
	args: { size: 'sm' }
}

export const Medium: Story = {
	render: Template,
	args: { size: 'md' }
}

export const Large: Story = {
	render: Template,
	args: { size: 'lg' }
}

export const AccentGreen: Story = {
	render: Template,
	args: { checked: true, accentColor: 'green-accent' }
}
