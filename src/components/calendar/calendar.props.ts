import type { TAccentColor, TYearsIntervalDirection, Values } from '@/lib'

export const CalendarVariants = {
	DEFAULT: 'default',
	GHOST: 'ghost'
} as const

export type TCalendarVariant = Values<typeof CalendarVariants>

export interface ICalendarProps {
	date: Date
	selectDate: (date: Date) => void
	locale?: string
	firstWeekDayNumber?: number
	variant?: TCalendarVariant
	range?: number
	intervalDirection?: TYearsIntervalDirection
	accentColor?: TAccentColor
	arrowsColor?: string
	className?: string
}
