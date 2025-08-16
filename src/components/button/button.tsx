import styles from './button.module.css'
import { ButtonVariants, type IButtonProps } from './button.props'
import { AccentColors } from '@/lib'
import clsx from 'clsx'

export function Button({
	children,
	variant = ButtonVariants.SOLID,
	accentColor = AccentColors.BLUE,
	type = 'button',
	size = 'md',
	fill = 'white-fill',
	isDisabled = false,
	isLoading = false,
	accent = false,
	fullWidth = false,
	rounded = false,
	className,
	startIcon,
	endIcon,
	...props
}: IButtonProps) {
	return (
		<button
			type={type}
			disabled={isDisabled || isLoading}
			className={clsx(
				styles.button,
				styles[size],
				styles[variant],
				variant !== ButtonVariants.GHOST && styles[fill],
				accent && styles[accentColor],
				{
					[styles.fullWidth]: fullWidth,
					[styles.loading]: isLoading,
					[styles.rounded]: rounded
				},
				className
			)}
			aria-busy={isLoading}
			{...props}
		>
			{isLoading ? (
				<span className={styles.loader} aria-hidden='true' />
			) : (
				<>
					{startIcon && (
						<span className={styles.icon}>{startIcon}</span>
					)}
					{children}
					{endIcon && <span className={styles.icon}>{endIcon}</span>}
				</>
			)}
		</button>
	)
}
