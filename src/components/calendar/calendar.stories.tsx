import { Calendar } from './calendar'
import { CalendarVariants } from './calendar.props'
import { AccentColors, formatDate, WeekDays } from '@/lib'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'

const meta: Meta<typeof Calendar> = {
	title: 'Components/Calendar',
	component: Calendar,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: Object.values(CalendarVariants)
		},
		accentColor: {
			control: 'select',
			options: Object.values(AccentColors)
		},
		locale: { control: 'select', options: ['ru-RU', 'en-US', 'default'] },
		firstWeekDayNumber: {
			control: 'select',
			options: Object.keys(WeekDays),
			mapping: WeekDays
		},
		range: { control: false },
		date: { control: false },
		intervalDirection: {
			control: false
		}
	},
	args: {
		accentColor: AccentColors.PURPLE
	}
}

export default meta

type Story = StoryObj<typeof Calendar>

type CalendarProps = ComponentProps<typeof Calendar>

const Template = (args: CalendarProps) => {
	const [selectedDate, setSelectedDay] = useState(new Date())

	console.log(formatDate(selectedDate, 'DDD DD MMM YYYY'))

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Calendar
				{...args}
				date={selectedDate}
				selectDate={(date) => setSelectedDay(date)}
			/>
		</div>
	)
}

export const Default: Story = {
	render: Template
}

export const Ghost: Story = {
	render: Template,
	args: { variant: 'ghost' }
}

export const WithoutFooter: Story = {
	render: Template,
	args: { showFooter: false }
}

export const RangeBothFive: Story = {
	render: Template,
	args: {
		range: 5,
		date: new Date(),
		intervalDirection: 'both'
	}
}

export const RangeToCurrentTwo: Story = {
	render: Template,
	args: {
		range: 2,
		date: new Date(),
		intervalDirection: 'toCurrent'
	}
}

export const RangeFromCurrentThree: Story = {
	render: Template,
	args: {
		range: 3,
		date: new Date(),
		intervalDirection: 'fromCurrent'
	}
}

export const FirstWeekDayNumber: Story = {
	render: Template,
	args: {
		firstWeekDayNumber: WeekDays.Sunday
	}
}

export const Locale: Story = {
	render: Template,
	args: {
		locale: 'en-US'
	}
}

export const AccentColor: Story = {
	render: Template,
	args: {
		accentColor: AccentColors.GREEN
	}
}
