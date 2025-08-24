import styles from './separator.module.css'
import { SeparatorVariants, type ISeparatorProps } from './separator.props'
import { AccentColors, cn } from '@/lib'

export function Separator({
	variant = SeparatorVariants.DEFAULT,
	direction = 'horizontal',
	size = 'md',
	accentColor = AccentColors.BLUE,
	accent = false,
	className,
	...props
}: ISeparatorProps) {
	return (
		<div
			className={cn(
				styles.separator,
				{
					[styles.ghost]: variant === SeparatorVariants.GHOST,
					[styles[accentColor]]: accent
				},
				[styles[size], styles[direction], className]
			)}
			{...props}
		/>
	)
}
