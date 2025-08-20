import styles from './overlay.module.css'
import type { IOverlayProps } from './overlay.props'
import clsx from 'clsx'

export function Overlay({
	position = 'center',
	children,
	onClick,
	className
}: IOverlayProps) {
	return (
		<div
			onClick={onClick}
			className={clsx(styles.overlay, styles[position], className)}
		>
			{children}
		</div>
	)
}
