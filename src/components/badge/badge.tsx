import styles from './badge.module.css'
import { BadgeVariants, type IBadgeProps } from './badge.props'
import { AccentColors } from '@/lib'
import clsx from 'clsx'

export function Badge({
	children,
	accentColor = AccentColors.BLUE,
	variant = BadgeVariants.DEFAULT,
	size = 'md',
	accent = false,
	radius,
	fill,
	className
}: IBadgeProps) {
	return (
		<span
			className={clsx(
				styles.badge,
				styles[variant],
				styles[size],
				fill && styles[fill],
				radius && variant === BadgeVariants.DEFAULT && styles[radius],
				accent && styles[accentColor],
				className
			)}
		>
			{children}
		</span>
	)
}
