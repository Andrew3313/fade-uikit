import { createDate } from './create-date'

export const getWeekDaysInfo = (
	firstWeekDay: number = 4,
	locale: string = 'default'
) => {
	const weekDaysInfo: {
		day: ReturnType<typeof createDate>['day']
		dayShort: ReturnType<typeof createDate>['dayShort']
	}[] = Array.from({ length: 7 })

	const date = new Date()

	weekDaysInfo.forEach((_, i) => {
		const { day, dayNumberInWeek, dayShort } = createDate({
			locale,
			date: new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate() + i
			)
		})

		weekDaysInfo[dayNumberInWeek - 1] = { day, dayShort }
	})

	return [
		...weekDaysInfo.slice(firstWeekDay - 1),
		...weekDaysInfo.slice(0, firstWeekDay - 1)
	]
}
