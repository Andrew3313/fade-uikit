import styles from './button.module.css'
import { ButtonVariants, type IButtonProps } from './button.props'
import { AccentColors } from '@/types/theme'
import clsx from 'clsx'

export function Button({
	type = 'button',
	size = 'md',
	variant = ButtonVariants.DEFAULT,
	accentColor = AccentColors.BLUE,
	isDisabled = false,
	theme,
	onClick,
	children,
	className,
	...props
}: IButtonProps) {
	return (
		<button
			type={type}
			disabled={isDisabled}
			onClick={onClick}
			className={clsx(
				styles.button,
				styles[size],
				{
					[styles[variant]]: variant === ButtonVariants.OUTLINE,
					[styles[accentColor]]: variant === ButtonVariants.ACCENT
				},
				theme &&
					(variant === ButtonVariants.DEFAULT ||
						variant === ButtonVariants.OUTLINE) &&
					styles[theme],
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}
