import styles from './hidden-scroll.module.css'
import type { IHiddenScrollProps } from './hidden-scroll.props'
import { cn } from '@/lib'

export function HiddenScroll({
	children,
	className,
	...props
}: IHiddenScrollProps) {
	return (
		<div
			className={cn(styles['hidden-scroll'], {}, [className])}
			{...props}
		>
			{children}
		</div>
	)
}
