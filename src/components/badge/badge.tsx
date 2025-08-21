import styles from './badge.module.css'
import { BadgeVariants, type IBadgeProps } from './badge.props'
import { AccentColors, cn } from '@/lib'

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
			className={cn(
				styles.badge,
				{
					...(fill ? { [styles[fill]]: true } : {}),
					...(radius && variant === BadgeVariants.DEFAULT
						? { [styles[radius]]: true }
						: {}),
					[styles[accentColor]]: accent
				},
				[styles[variant], styles[size], className]
			)}
		>
			{children}
		</span>
	)
}
