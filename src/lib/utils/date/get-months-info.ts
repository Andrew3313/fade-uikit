import { createDate } from './create-date'

export const getMonthsInfo = (locale: string = 'default') => {
	const monthsInfo: {
		month: ReturnType<typeof createDate>['month']
		monthShort: ReturnType<typeof createDate>['monthShort']
		monthIndex: ReturnType<typeof createDate>['monthIndex']
		date: ReturnType<typeof createDate>['date']
	}[] = Array.from({ length: 12 })

	const d = new Date()

	monthsInfo.forEach((_, i) => {
		const { month, monthIndex, monthShort, date } = createDate({
			locale,
			date: new Date(d.getFullYear(), d.getMonth() + i, 1)
		})

		monthsInfo[monthIndex] = { month, monthIndex, monthShort, date }
	})

	return monthsInfo
}
