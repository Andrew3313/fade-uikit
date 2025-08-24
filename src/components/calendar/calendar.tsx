'use client'

import { ArrowIcon } from '../icons'
import styles from './calendar.module.css'
import { CalendarVariants, type ICalendarProps } from './calendar.props'
import { useCalendar } from '@/hooks'
import { AccentColors, checkDateIsEqual, checkIsToday, cn } from '@/lib'

export function Calendar({
	date,
	selectDate,
	variant = CalendarVariants.DEFAULT,
	accentColor = AccentColors.BLUE,
	arrowsColor = 'currentColor',
	firstWeekDayNumber,
	locale,
	range,
	intervalDirection,
	className
}: ICalendarProps) {
	const { functions, state } = useCalendar({
		locale,
		selectedDate: date,
		firstWeekDayNumber,
		intervalDirection,
		range
	})

	const minYear = state.selectedYearsInterval[0]
	const maxYear =
		state.selectedYearsInterval[state.selectedYearsInterval.length - 1]

	const canGoLeft =
		state.mode === 'days'
			? !(
					state.selectedYear === minYear &&
					state.selectedMonth.monthIndex === 0
				)
			: state.mode === 'months'
				? state.selectedYear > minYear
				: true

	const canGoRight =
		state.mode === 'days'
			? !(
					state.selectedYear === maxYear &&
					state.selectedMonth.monthIndex === 11
				)
			: state.mode === 'months'
				? state.selectedYear < maxYear
				: true

	return (
		<div
			className={cn(
				styles.calendar,
				{ [styles.ghost]: variant === CalendarVariants.GHOST },
				[styles[accentColor], className]
			)}
		>
			<div className={styles.header}>
				{state.mode === 'days' && (
					<div
						role='button'
						tabIndex={0}
						onClick={() => functions.setMode('months')}
						className={styles['toggle-mode']}
					>
						{state.monthsInfo[state.selectedMonth.monthIndex].month}{' '}
						{state.selectedYear}
					</div>
				)}
				{state.mode === 'months' && <div>{state.selectedYear}</div>}

				<div className={styles.arrows}>
					<button
						className={styles.arrow}
						disabled={!canGoLeft}
						onClick={() => functions.onClickArrow('left')}
					>
						<ArrowIcon color={arrowsColor} direction='left' />
					</button>

					<button
						className={styles.arrow}
						disabled={!canGoRight}
						onClick={() => functions.onClickArrow('right')}
					>
						<ArrowIcon color={arrowsColor} direction='right' />
					</button>
				</div>
			</div>

			<div className={styles.body}>
				{state.mode === 'days' && (
					<>
						<div className={styles['week-days-container']}>
							{state.weekDaysInfo.map((w) => (
								<div
									key={w.dayShort}
									className={styles['week-day']}
								>
									{w.dayShort}
								</div>
							))}
						</div>

						<div className={styles['calendar-days-container']}>
							{state.calendarDays.map((day) => {
								const isToday = checkIsToday(day.date)
								const isSelectedDay = checkDateIsEqual(
									day.date,
									state.selectedDay.date
								)
								const isAdditionalDay =
									day.monthIndex !==
									state.selectedMonth.monthIndex

								const year = day.date.getFullYear()
								const isOutOfRange =
									year < minYear || year > maxYear

								const handleClick = () => {
									if (isOutOfRange) return

									functions.setSelectedDay(day)
									selectDate(day.date)
								}

								return (
									<div
										key={day.date.toISOString()}
										role='button'
										tabIndex={isOutOfRange ? -1 : 0}
										aria-disabled={isOutOfRange}
										onClick={
											isOutOfRange
												? undefined
												: handleClick
										}
										className={cn(styles.day, {
											[styles.today]: isToday,
											[styles.selected]: isSelectedDay,
											[styles.additional]:
												isAdditionalDay,
											[styles.disabled]: isOutOfRange
										})}
									>
										{day.dayNumber}
									</div>
								)
							})}
						</div>
					</>
				)}

				{state.mode === 'months' && (
					<div className={styles['pick-items-container']}>
						{state.monthsInfo.map((m) => {
							const isCurrentMonth =
								new Date().getMonth() === m.monthIndex &&
								state.selectedYear === new Date().getFullYear()
							const isSelectedMonth =
								m.monthIndex === state.selectedMonth.monthIndex

							return (
								<div
									key={m.month}
									role='button'
									tabIndex={0}
									onClick={() => {
										functions.setSelectedMonthByIndex(
											m.monthIndex
										)
										functions.setMode('days')
									}}
									className={cn(styles['pick-item'], {
										[styles['today-item']]: isCurrentMonth,
										[styles['selected-item']]:
											isSelectedMonth
									})}
								>
									{m.monthShort}
								</div>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}
