import styles from './button.module.css'
import { ButtonVariants, type IButtonProps } from './button.props'
import { AccentColors } from '@/theme'
import clsx from 'clsx'

export function Button({
	type = 'button',
	size = 'md',
	variant = ButtonVariants.DEFAULT,
	accentColor = AccentColors.BLUE,
	isDisabled = false,
	onClick,
	children,
	className,
	...props
}: IButtonProps) {
	console.log(styles[accentColor])
	return (
		<button
			type={type}
			disabled={isDisabled}
			onClick={onClick}
			className={clsx(
				styles.Button,
				styles[size],
				variant === ButtonVariants.ACCENT && styles[accentColor],
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}
