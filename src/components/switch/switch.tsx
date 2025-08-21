import styles from './switch.module.css'
import type { ISwitchProps } from './switch.props'
import { AccentColors, cn } from '@/lib'

export const Switch = ({
	checked,
	accentColor = AccentColors.BLUE,
	size = 'md',
	isDisabled = false,
	onChange,
	name,
	className
}: ISwitchProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked)
	}

	return (
		<label
			className={cn(
				styles.switch,
				{
					[styles['switch-disabled']]: isDisabled
				},
				[styles[size], styles[accentColor], className]
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
