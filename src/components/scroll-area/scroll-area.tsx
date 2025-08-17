import styles from './scroll-area.module.css'
import type { IScrollAreaProps } from './scroll-area.props'
import { AccentColors } from '@/lib'
import clsx from 'clsx'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export function ScrollArea({
	children,
	thumbColor = AccentColors.BLUE,
	trackColor = 'transparent',
	ariaLabel = 'scrollable content',
	autoHide = false,
	size = 7,
	trackRadius = 5,
	thumbRadius = 5,
	scrollbarMinSize = 25,
	scrollbarMaxSize = 0,
	scrollbarFixedSize,
	style,
	className
}: IScrollAreaProps) {
	if (scrollbarFixedSize) {
		scrollbarMinSize = scrollbarFixedSize
		scrollbarMaxSize = scrollbarFixedSize
	}

	return (
		<SimpleBar
			autoHide={autoHide}
			ariaLabel={ariaLabel}
			scrollbarMinSize={scrollbarMinSize}
			scrollbarMaxSize={scrollbarMaxSize}
			className={clsx(
				styles.scrollArea,
				styles[thumbColor],
				className,
				styles[size]
			)}
			style={
				{
					'--track-color': trackColor,
					'--scroll-size': `${size}px`,
					'--thumb-radius': `${thumbRadius}px`,
					'--track-radius': `${trackRadius}px`,
					color: 'inherit',
					...style
				} as React.CSSProperties
			}
		>
			{children}
		</SimpleBar>
	)
}
