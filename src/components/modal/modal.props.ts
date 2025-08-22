import type { TPosition } from '@/lib'

export type TModalSize = 'sm' | 'md' | 'lg' | 'full' | 'content'

export type TModalSlideFrom = 'center' | 'top' | 'bottom' | 'left' | 'right'

export type TCrossPosition =
	| Extract<
			TPosition,
			'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
	  >
	| 'left-top'
	| 'left-bottom'
	| 'right-top'
	| 'right-bottom'
	| 'inside'

export interface IModalProps {
	children: React.ReactNode
	isOpen: boolean
	onClose: () => void
	position?: TPosition
	size?: TModalSize
	slideFrom?: TModalSlideFrom
	lazy?: boolean
	ariaLabel?: string
	showCross?: boolean
	crossPosition?: TCrossPosition
	crossSize?: number
	crossClassName?: string
	className?: string
}

export interface IModalSectionProps {
	children: React.ReactNode
	className?: string
}
