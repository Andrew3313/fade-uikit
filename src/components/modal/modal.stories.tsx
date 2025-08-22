import { Button } from '../button'
import { Modal } from './modal'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {
		position: {
			control: { type: 'select' },
			options: ['center', 'top', 'bottom', 'left', 'right']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'full', 'content']
		},
		slideFrom: {
			control: { type: 'select' },
			options: ['center', 'top', 'bottom', 'left', 'right']
		},
		lazy: { control: false },
		isOpen: { control: false },
		onClose: { control: false }
	},
	args: {
		size: 'md',
		position: 'center',
		slideFrom: 'center'
	}
}

export default meta

type Story = StoryObj<typeof Modal>

type ModalProps = ComponentProps<typeof Modal>

const Template = (args: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button variant='ghost' onClick={() => setIsOpen(true)}>
				Open Modal
			</Button>

			<Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Header>Modal Header</Modal.Header>
				<Modal.Body>
					<p>This is the body content of the modal.</p>
					<p>You can put any JSX here.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolore illo rerum sunt. Libero aliquam doloremque odio,
						officia id rerum laborum quasi at consequuntur vero
						eligendi quae delectus quo fugit iste!
					</p>
				</Modal.Body>
				<Modal.Footer>
					<p>This is the footer content of the modal.</p>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export const Default: Story = {
	render: Template
}

export const Small: Story = {
	render: Template,
	args: { size: 'sm' }
}

export const Large: Story = {
	render: Template,
	args: { size: 'lg' }
}

export const Full: Story = {
	render: Template,
	args: { size: 'full' }
}

export const Content: Story = {
	render: Template,
	args: { size: 'content' }
}

export const PositionRight: Story = {
	render: Template,
	args: { position: 'right' }
}

export const PositionLeft: Story = {
	render: Template,
	args: { position: 'left' }
}

export const PositionTop: Story = {
	render: Template,
	args: { position: 'top' }
}

export const PositionBottom: Story = {
	render: Template,
	args: { position: 'bottom' }
}

export const SlideRight: Story = {
	render: Template,
	args: { position: 'right', slideFrom: 'right' }
}

export const SlideLeft: Story = {
	render: Template,
	args: { position: 'left', slideFrom: 'left' }
}

export const SlideTop: Story = {
	render: Template,
	args: { position: 'top', slideFrom: 'top' }
}

export const SlideBottom: Story = {
	render: Template,
	args: { position: 'bottom', slideFrom: 'bottom' }
}
