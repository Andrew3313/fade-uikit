import { Button } from '../button'
import { Modal } from './modal'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

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
			options: ['sm', 'md', 'lg', 'full']
		},
		slideFrom: {
			control: { type: 'select' },
			options: ['center', 'top', 'bottom', 'left', 'right']
		},
		lazy: { control: false }
	}
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='center'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const Small: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='sm'
					position='center'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const Large: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='lg'
					position='center'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const Content: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='content'
					position='center'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente.
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const Full: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='full'
					position='center'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const PositionRight: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='right'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const PositionLeft: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='left'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const PositionTop: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='top'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const PositionBottom: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='bottom'
					slideFrom='center'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const SlideRight: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='right'
					slideFrom='right'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const SlideLeft: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='left'
					slideFrom='left'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const SlideBottom: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='bottom'
					slideFrom='bottom'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export const SlideTop: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<>
				<Button variant='ghost' onClick={() => setIsOpen(true)}>
					Open Modal
				</Button>

				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					size='md'
					position='top'
					slideFrom='top'
				>
					<Modal.Header>Modal Header</Modal.Header>
					<Modal.Body>
						<p>This is the body content of the modal.</p>
						<p>You can put any JSX here.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Dolore illo rerum sunt. Libero aliquam
							doloremque odio, officia id rerum laborum quasi at
							consequuntur vero eligendi quae delectus quo fugit
							iste! Reiciendis nulla molestias quas sunt alias
							optio voluptatem deserunt, libero aperiam ad esse
							magnam neque unde, omnis modi, odio laborum harum
							expedita numquam delectus illo reprehenderit
							doloremque sapiente. Aspernatur sit dolores rerum
							delectus id exercitationem nam dignissimos, est
							sunt! Temporibus sit adipisci quae harum ducimus non
							vel placeat, aliquid accusamus quis commodi
							blanditiis rerum ratione, magni tenetur
							voluptatibus. Officia incidunt saepe quia vel, ut
							eveniet accusamus perspiciatis repellat quas
							dignissimos consequuntur debitis dolorem expedita
							reprehenderit neque, sunt pariatur eaque. Iste
							dignissimos deleniti assumenda necessitatibus unde
							quam, officia inventore labore ea, nisi culpa,
							adipisci iusto eveniet quidem modi sed! Explicabo
							perferendis facilis fugiat, sit officia maxime
							molestias. Hic corrupti magnam consequuntur.
							Exercitationem veniam nam porro fugiat error est!
							Modi, laboriosam enim!
						</p>
					</Modal.Body>
					<Modal.Footer>
						<p>This is the footer content of the modal.</p>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}
