import { getWeekNumber } from './get-week-number'

interface ICreateDateParams {
	locale?: string
	date?: Date
}

export const createDate = (params?: ICreateDateParams) => {
	const locale = params?.locale ?? 'default'
	const d = params?.date ?? new Date()

	const dayNumber = d.getDate() // 1-31
	const day = d.toLocaleDateString(locale, { weekday: 'long' }) // 'Friday' для en-US, 'пятница' для ru-RU
	const dayShort = d.toLocaleDateString(locale, { weekday: 'short' }) // 'Fri' или 'пт'
	const dayNumberInWeek = d.getDay() + 1 // Sunday = 1, Monday = 2, ..., Saturday = 7

	const year = d.getFullYear() // 2025
	const yearShort = d.toLocaleDateString(locale, { year: '2-digit' }) // 25

	const month = d.toLocaleDateString(locale, { month: 'long' }) // август August
	const monthShort = d.toLocaleDateString(locale, { month: 'short' }) // авг. Aug
	const monthNumber = d.getMonth() + 1 // 1-12
	const monthIndex = d.getMonth() // 0-11

	const week = getWeekNumber(d)

	const timestamp = d.getTime()

	return {
		date: d,
		dayNumber,
		day,
		dayNumberInWeek,
		dayShort,
		year,
		yearShort,
		month,
		monthShort,
		monthNumber,
		monthIndex,
		timestamp,
		week
	}
}
