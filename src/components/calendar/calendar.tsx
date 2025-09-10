import { ArrowIcon } from '../icons'
import { Separator } from '../separator'
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
	size = 'md',
	showFooter = true,
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
				[styles[accentColor], styles[size], className]
			)}
		>
			<div className={styles.header}>
				{state.mode === 'days' && (
					<button
						type='button'
						onClick={() => functions.setMode('months')}
						className={styles['toggle-mode']}
					>
						<span className={styles['month-name']}>
							{
								state.monthsInfo[state.selectedMonth.monthIndex]
									.month
							}
						</span>
						<span className={styles['year-name']}>
							{state.selectedYear}
						</span>
					</button>
				)}
				{state.mode === 'months' && (
					<div className={styles['selected-year']}>
						{state.selectedYear}
					</div>
				)}

				<Separator
					defaultBackground='var(--fade-uikit-white-soft)'
					direction='horizontal'
					size='sm'
				/>

				<div className={styles['arrows-container']}>
					<button
						type='button'
						className={styles.arrow}
						disabled={!canGoLeft}
						onClick={() => functions.onClickArrow('left')}
					>
						<ArrowIcon
							size={15}
							color={arrowsColor}
							direction='left'
						/>
					</button>

					<button
						type='button'
						className={styles.arrow}
						disabled={!canGoRight}
						onClick={() => functions.onClickArrow('right')}
					>
						<ArrowIcon
							size={15}
							color={arrowsColor}
							direction='right'
						/>
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
									className={cn(styles['week-day'], {
										[styles['current-week-day']]: w.isToday
									})}
									aria-current={
										w.isToday ? 'date' : undefined
									}
								>
									<span>{w.dayShort}</span>
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
									<button
										key={day.date.toISOString()}
										type='button'
										disabled={isOutOfRange}
										onClick={handleClick}
										className={cn(styles.day, {
											[styles['today-item']]: isToday,
											[styles['selected-item']]:
												isSelectedDay,
											[styles.additional]:
												isAdditionalDay,
											[styles.disabled]: isOutOfRange
										})}
									>
										{day.dayNumber}
									</button>
								)
							})}
						</div>
					</>
				)}

				{state.mode === 'months' && (
					<div className={styles['select-months-container']}>
						{state.monthsInfo.map((m) => {
							const isCurrentMonth =
								new Date().getMonth() === m.monthIndex &&
								state.selectedYear === new Date().getFullYear()

							const isSelectedMonth =
								m.monthIndex === state.selectedMonth.monthIndex

							return (
								<button
									key={m.month}
									type='button'
									onClick={() => {
										functions.setSelectedMonthByIndex(
											m.monthIndex
										)
										functions.setMode('days')
									}}
									className={cn(styles['select-month'], {
										[styles['today-item']]: isCurrentMonth,
										[styles['selected-item']]:
											isSelectedMonth
									})}
								>
									{m.monthShort}
								</button>
							)
						})}
					</div>
				)}
			</div>

			{showFooter && (
				<div className={styles.footer}>
					<Separator
						defaultBackground='var(--fade-uikit-white-soft)'
						direction='horizontal'
						size='sm'
					/>

					<div className={styles.notes}>
						<div className={styles.note}>
							<div
								className={cn(styles.square, {}, [
									styles['square-current-date']
								])}
							/>
							<span>- Актуальная дата</span>
						</div>
						<div className={styles.note}>
							<div className={styles.square} />
							<span>- Выбранная дата</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
