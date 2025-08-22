import styles from './overlay.module.css'
import type { IOverlayProps } from './overlay.props'
import { cn, Positions } from '@/lib'

export function Overlay({
	position = Positions.CENTER,
	children,
	onClick,
	className
}: IOverlayProps) {
	return (
		<div
			onClick={onClick}
			className={cn(styles.overlay, {}, [styles[position], className])}
		>
			{children}
		</div>
	)
}
