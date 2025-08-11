import styles from './switch.module.css'
import type { ISwitchProps } from './switch.props'
import { AccentColors } from '@/lib'
import clsx from 'clsx'

export const Switch = ({
	isDisabled = false,
	accentColor = AccentColors.BLUE,
	size = 'sm',
	checked,
	onChange,
	name,
	className
}: ISwitchProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked)
	}

	return (
		<label
			className={clsx(
				styles.switch,
				styles[size],
				styles[accentColor],
				isDisabled && styles['switch-disabled'],
				className
			)}
		>
			<input
				type='checkbox'
				className={styles.input}
				checked={checked}
				onChange={handleChange}
				disabled={isDisabled}
				name={name}
			/>
			<div className={styles.track} />
		</label>
	)
}
