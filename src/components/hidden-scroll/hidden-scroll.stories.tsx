import { HiddenScroll } from './hidden-scroll'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof HiddenScroll> = {
	title: 'Components/HiddenScroll',
	component: HiddenScroll,
	tags: ['autodocs'],
	argTypes: {
		children: { control: false }
	}
}

export default meta

type Story = StoryObj<typeof HiddenScroll>

export const Default: Story = {
	args: {
		style: { height: '150px', width: '300px' },
		children: (
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
				illo rerum sunt. Libero aliquam doloremque odio, officia id
				rerum laborum quasi at consequuntur vero eligendi quae delectus
				quo fugit iste! Reiciendis nulla molestias quas sunt alias optio
				voluptatem deserunt, libero aperiam ad esse magnam neque unde,
				omnis modi, odio laborum harum expedita numquam delectus illo
				reprehenderit doloremque sapiente. Aspernatur sit dolores rerum
				delectus id exercitationem nam dignissimos, est sunt! Temporibus
				sit adipisci quae harum ducimus non vel placeat, aliquid
				accusamus quis commodi blanditiis rerum ratione, magni tenetur
				voluptatibus. Officia incidunt saepe quia vel, ut eveniet
				accusamus perspiciatis repellat quas dignissimos consequuntur
				debitis dolorem expedita reprehenderit neque, sunt pariatur
				eaque. Iste dignissimos deleniti assumenda necessitatibus unde
				quam, officia inventore labore ea, nisi culpa, adipisci iusto
				eveniet quidem modi sed! Explicabo perferendis facilis fugiat,
				sit officia maxime molestias. Hic corrupti magnam consequuntur.
				Exercitationem veniam nam porro fugiat error est! Modi,
				laboriosam enim!
			</p>
		)
	}
}
