import styles from './button.module.css'
import { ButtonVariants, type IButtonProps } from './button.props'
import { cn, AccentColors } from '@/lib'

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
	startIcon,
	endIcon,
	className,
	...props
}: IButtonProps) {
	return (
		<button
			type={type}
			disabled={isDisabled || isLoading}
			className={cn(
				styles.button,
				{
					[styles.fullWidth]: fullWidth,
					[styles.loading]: isLoading,
					[styles.rounded]: rounded,
					[styles[fill]]: variant !== ButtonVariants.GHOST,
					[styles[accentColor]]: accent
				},
				[styles[size], styles[variant], className]
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
