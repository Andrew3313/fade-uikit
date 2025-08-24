import { checkDateIsEqual } from './check-date-is-equal'

export const checkIsToday = (date: Date) => {
	const today = new Date()

	return checkDateIsEqual(today, date)
}
