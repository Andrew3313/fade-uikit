import {
	createDate,
	createMonth,
	getMonthNumberOfDays,
	getMonthsInfo,
	getWeekDaysInfo,
	getYearsInterval,
	type TYearsIntervalDirection
} from '@/lib'
import { useMemo, useState } from 'react'

interface IUseCalendarParams {
	selectedDate: Date
	locale?: string
	range?: number
	intervalDirection?: TYearsIntervalDirection
	firstWeekDayNumber?: number
}

const DAYS_IN_WEEK = 7

export function useCalendar({
	selectedDate: date,
	locale = 'default',
	intervalDirection = 'both',
	firstWeekDayNumber = 2, // С понедельника
	range = 10
}: IUseCalendarParams) {
	const [mode, setMode] = useState<'days' | 'months'>('days')

	const [selectedDay, setSelectedDay] = useState(createDate({ date }))
	const [selectedMonth, setSelectedMonth] = useState(
		createMonth({
			date: new Date(selectedDay.year, selectedDay.monthIndex),
			locale
		})
	)
	const [selectedYear, setSelectedYear] = useState(selectedDay.year)

	const baseYear = useMemo(() => new Date(date).getFullYear(), [date])
	const [selectedYearsInterval, setSelectedYearsInterval] = useState(
		getYearsInterval(baseYear, range, { direction: intervalDirection })
	)

	const monthsInfo = useMemo(() => getMonthsInfo(locale), [locale])
	const weekDaysInfo = useMemo(
		() => getWeekDaysInfo(firstWeekDayNumber, locale),
		[firstWeekDayNumber, locale]
	)

	const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth])

	const calendarDays = useMemo(() => {
		if (!days.length) return []

		const monthNumberOfDays = getMonthNumberOfDays(
			selectedMonth.monthIndex,
			selectedYear
		)

		const prevMonthDays = createMonth({
			date: new Date(selectedYear, selectedMonth.monthIndex - 1),
			locale
		}).createMonthDays()

		const nextMonthDays = createMonth({
			date: new Date(selectedYear, selectedMonth.monthIndex + 1),
			locale
		}).createMonthDays()

		const firstDay = days[0]
		const lastDay = days[monthNumberOfDays - 1] || days[days.length - 1]

		const shiftIndex = firstWeekDayNumber - 1

		const numberOfPrevDays =
			firstDay.dayNumberInWeek - 1 - shiftIndex < 0
				? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
				: firstDay.dayNumberInWeek - 1 - shiftIndex

		const numberOfNextDays =
			DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
				? DAYS_IN_WEEK -
					lastDay.dayNumberInWeek -
					(DAYS_IN_WEEK - shiftIndex)
				: DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex

		const totalCalendarDays =
			days.length + numberOfPrevDays + numberOfNextDays
		const result = []

		// Дни предыдущего месяца
		for (let i = 0; i < numberOfPrevDays; i++) {
			const inverted = numberOfPrevDays - i
			result[i] = prevMonthDays[prevMonthDays.length - inverted]
		}

		// Дни текущего месяца
		for (
			let i = numberOfPrevDays;
			i < totalCalendarDays - numberOfNextDays;
			i++
		) {
			result[i] = days[i - numberOfPrevDays]
		}

		// Дни следующего месяца
		for (
			let i = totalCalendarDays - numberOfNextDays;
			i < totalCalendarDays;
			i++
		) {
			result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays]
		}

		return result
	}, [
		selectedMonth.monthIndex,
		selectedYear,
		locale,
		days,
		firstWeekDayNumber
	])

	const onClickArrow = (direction: 'right' | 'left') => {
		const delta = direction === 'left' ? -1 : 1

		const minYear = selectedYearsInterval[0]
		const maxYear = selectedYearsInterval[selectedYearsInterval.length - 1]

		if (mode === 'months') {
			const newYear = selectedYear + delta
			if (newYear < minYear || newYear > maxYear) return
			setSelectedYear(newYear)
			return
		}

		if (mode === 'days') {
			let newMonthIndex = selectedMonth.monthIndex + delta
			let newYear = selectedYear

			if (newMonthIndex < 0) {
				newMonthIndex = 11
				newYear -= 1
			} else if (newMonthIndex > 11) {
				newMonthIndex = 0
				newYear += 1
			}

			if (newYear < minYear || newYear > maxYear) return

			setSelectedYear(newYear)
			setSelectedMonth(
				createMonth({ date: new Date(newYear, newMonthIndex), locale })
			)
		}
	}

	const setSelectedMonthByIndex = (monthIndex: number) => {
		setSelectedMonth(
			createMonth({ date: new Date(selectedYear, monthIndex), locale })
		)
	}

	// Пересчёт интервала лет только от базового года
	const updateYearsInterval = () => {
		setSelectedYearsInterval(
			getYearsInterval(baseYear, range, { direction: intervalDirection })
		)
	}

	return {
		state: {
			mode,
			calendarDays,
			weekDaysInfo,
			monthsInfo,
			selectedDay,
			selectedMonth,
			selectedYear,
			selectedYearsInterval
		},
		functions: {
			onClickArrow,
			setMode,
			setSelectedDay,
			setSelectedMonthByIndex,
			setSelectedYear,
			setSelectedYearsInterval: updateYearsInterval
		}
	}
}
