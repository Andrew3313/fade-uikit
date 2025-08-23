export type TYearsIntervalDirection = 'both' | 'fromCurrent' | 'toCurrent'

interface IYearsIntervalOptions {
	direction?: TYearsIntervalDirection
}

export const getYearsInterval = (
	year: number,
	range: number,
	options: IYearsIntervalOptions = {}
): number[] => {
	const { direction = 'both' } = options
	let start: number
	let end: number

	switch (direction) {
		case 'fromCurrent':
			start = year
			end = year + range
			break
		case 'toCurrent':
			start = year - range
			end = year
			break
		case 'both':
		default:
			start = year - range
			end = year + range
			break
	}

	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
