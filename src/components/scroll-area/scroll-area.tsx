'use client'

import styles from './scroll-area.module.css'
import type { IScrollAreaProps } from './scroll-area.props'
import { useCustomScrollbar } from '@/hooks'
import { cn, AccentColors } from '@/lib'

export function ScrollArea({
	children,
	accentColor = AccentColors.BLUE,
	trackColor = 'transparent',
	thumbColor = '#888',
	ariaLabel = 'Scrollable content',
	showArrows = true,
	accent = false,
	scrollAreaSize = 40,
	gap = 10,
	thumbRadius = 5,
	trackThickness = 7,
	trackRadius = 5,
	contentClassName,
	className,
	...props
}: IScrollAreaProps) {
	const { refs, state, handlers } = useCustomScrollbar()

	const areaSize = state.canScrollY ? `1fr ${scrollAreaSize}px` : '1fr'
	const scrollbarSize = showArrows ? 'auto 1fr auto' : '1fr'

	return (
		<div
			aria-label={ariaLabel}
			className={cn(
				styles['scroll-area'],
				{
					[styles[accentColor]]: accent
				},
				[className]
			)}
			style={
				{
					gridTemplateColumns: areaSize,
					color: 'inherit',
					'--sb-gap': `${gap}px`,
					'--sb-track-thickness': `${trackThickness}px`,
					'--sb-track-color': trackColor,
					'--sb-thumb-color': thumbColor,
					'--sb-thumb-radius': `${thumbRadius}px`,
					'--sb-track-radius': `${trackRadius}px`
				} as React.CSSProperties
			}
		>
			{/* Контент */}
			<div
				ref={refs.contentRef}
				className={cn(styles.content, {}, [contentClassName])}
				{...props}
			>
				{children}
			</div>

			{/* Вертикальный скролл */}
			{state.canScrollY && (
				<div
					className={styles['scrollbar-vertical']}
					style={{ gridTemplateRows: scrollbarSize }}
				>
					{showArrows && (
						<button
							className={styles.button}
							onClick={() => handlers.scrollYBy(-200)}
							aria-label='Scroll up'
							type='button'
						>
							⯅
						</button>
					)}

					<div className={styles['track-and-thumb-vertical']}>
						<div
							className={styles.track}
							ref={refs.vTrackRef}
							onPointerDown={handlers.handleVTrackPointerDown}
							style={{
								cursor: state.isDraggingV
									? 'grabbing'
									: 'pointer'
							}}
						/>
						<div
							className={styles['thumb-vertical']}
							ref={refs.vThumbRef}
							onPointerDown={handlers.handleVThumbPointerDown}
							style={{
								height: `${state.thumbHeight}px`,
								cursor: state.isDraggingV ? 'grabbing' : 'grab'
							}}
						/>
					</div>

					{showArrows && (
						<button
							className={styles.button}
							onClick={() => handlers.scrollYBy(200)}
							aria-label='Scroll down'
							type='button'
						>
							⯆
						</button>
					)}
				</div>
			)}

			{/* Горизонтальный скролл */}
			{state.canScrollX && (
				<div
					className={styles['scrollbar-horizontal']}
					style={{ gridTemplateColumns: scrollbarSize }}
				>
					{showArrows && (
						<button
							className={styles.button}
							onClick={() => handlers.scrollXBy(-200)}
							aria-label='Scroll left'
							type='button'
						>
							⯇
						</button>
					)}

					<div className={styles['track-and-thumb-horizontal']}>
						<div
							className={styles.track}
							ref={refs.hTrackRef}
							onPointerDown={handlers.handleHTrackPointerDown}
							style={{
								cursor: state.isDraggingH
									? 'grabbing'
									: 'pointer'
							}}
						/>
						<div
							className={styles['thumb-horizontal']}
							ref={refs.hThumbRef}
							onPointerDown={handlers.handleHThumbPointerDown}
							style={{
								width: `${state.thumbWidth}px`,
								cursor: state.isDraggingH ? 'grabbing' : 'grab'
							}}
						/>
					</div>

					{showArrows && (
						<button
							className={styles.button}
							onClick={() => handlers.scrollXBy(200)}
							aria-label='Scroll right'
							type='button'
						>
							⯈
						</button>
					)}
				</div>
			)}
		</div>
	)
}
