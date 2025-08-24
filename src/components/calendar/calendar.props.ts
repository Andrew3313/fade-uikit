import type {
	TAccentColor,
	TWeekDay,
	TYearsIntervalDirection,
	Values
} from '@/lib'

export const CalendarVariants = {
	DEFAULT: 'default',
	GHOST: 'ghost'
} as const

export type TCalendarVariant = Values<typeof CalendarVariants>

type TCalendarSize = 'sm' | 'md' | 'lg'

export interface ICalendarProps {
	date: Date
	selectDate: (date: Date) => void
	locale?: string
	firstWeekDayNumber?: TWeekDay
	variant?: TCalendarVariant
	size?: TCalendarSize
	range?: number
	intervalDirection?: TYearsIntervalDirection
	accentColor?: TAccentColor
	arrowsColor?: string
	showFooter?: boolean
	className?: string
}
