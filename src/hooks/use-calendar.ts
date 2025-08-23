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

export function useCalendar({
	selectedDate: date,
	locale = 'default',
	intervalDirection = 'both',
	firstWeekDayNumber = 2,
	range = 10
}: IUseCalendarParams) {
	const [mode, setMode] = useState<'days' | 'months' | 'years'>('days')

	const [selectedDay, setSelectedDay] = useState(createDate({ date }))
	const [selectedMonth, setSelectedMonth] = useState(
		createMonth({
			date: new Date(selectedDay.year, selectedDay.monthIndex),
			locale
		})
	)
	const [selectedYear, setSelectedYear] = useState(selectedDay.year)
	const [selectedYearsInterval, setSelectedYearsInterval] = useState(
		getYearsInterval(selectedDay.year, range, {
			direction: intervalDirection
		})
	)

	const monthsInfo = useMemo(() => getMonthsInfo(locale), [locale])
	const weekDaysInfo = useMemo(
		() => getWeekDaysInfo(firstWeekDayNumber, locale),
		[firstWeekDayNumber, locale]
	)

	const days = useMemo(
		() => selectedMonth.createMonthDays(),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[selectedMonth, selectedYear]
	)

	// Строим календарную сетку
	const calendarDays = useMemo(() => {
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
		const lastDay = days[monthNumberOfDays - 1]

		const shiftIndex = firstWeekDayNumber - 1

		// Сколько дней взять слева из предыдущего месяца, чтобы неделя начиналась с firstWeekDayNumber
		const numberOfPrevDays =
			firstDay.dayNumberInWeek - 1 - shiftIndex < 0
				? 7 - (firstWeekDayNumber - firstDay.dayNumberInWeek)
				: firstDay.dayNumberInWeek - 1 - shiftIndex

		// Сколько дней взять справа из следующего месяца, чтобы последняя неделя была полной
		const numberOfNextDays =
			7 - lastDay.dayNumberInWeek + shiftIndex > 6
				? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
				: 7 - lastDay.dayNumberInWeek + shiftIndex

		const totalCalendarDays =
			days.length + numberOfPrevDays + numberOfNextDays

		// Склеиваем массив: [конец предыдущего месяца] + [дни месяца] + [начало следующего месяца]
		const result = []

		// Добивка слева
		for (let i = 0; i < numberOfPrevDays; i += 1) {
			const inverted = numberOfPrevDays - i
			result[i] = prevMonthDays[prevMonthDays.length - inverted]
		}

		// Дни месяца
		for (
			let i = numberOfPrevDays;
			i < totalCalendarDays - numberOfNextDays;
			i += 1
		) {
			result[i] = days[i - numberOfPrevDays]
		}

		// Добивка справа
		for (
			let i = totalCalendarDays - numberOfNextDays;
			i < totalCalendarDays;
			i += 1
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

		if (mode === 'years') {
			const newStartYear =
				selectedYearsInterval[0] + delta * selectedYearsInterval.length

			setSelectedYearsInterval(
				getYearsInterval(newStartYear, range, {
					direction: intervalDirection
				})
			)

			return
		}

		if (mode === 'months') {
			const newYear = selectedYear + delta

			if (!selectedYearsInterval.includes(newYear)) {
				setSelectedYearsInterval(
					getYearsInterval(newYear, range, {
						direction: intervalDirection
					})
				)
			}

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

			if (!selectedYearsInterval.includes(newYear)) {
				setSelectedYearsInterval(
					getYearsInterval(newYear, range, {
						direction: intervalDirection
					})
				)
			}

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
			setSelectedYearsInterval
		}
	}
}
