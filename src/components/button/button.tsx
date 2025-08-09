import styles from './button.module.css'
import { ButtonVariants, type IButtonProps } from './button.props'
import { AccentColors } from '@/lib'
import clsx from 'clsx'

export function Button({
	type = 'button',
	size = 'md',
	isDisabled = false,
	variant = ButtonVariants.DEFAULT,
	autoTheming = false,
	accent = false,
	accentColor = AccentColors.BLUE,
	fill = 'white-fill',
	children,
	className,
	...props
}: IButtonProps) {
	return (
		<button
			type={type}
			disabled={isDisabled}
			className={clsx(
				styles.button,
				styles[size],
				autoTheming && styles['auto-theming'],
				variant === ButtonVariants.OUTLINE && styles[variant],
				accent && styles[accentColor],
				!autoTheming && styles[fill],
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}
