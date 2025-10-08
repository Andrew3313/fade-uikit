import type { TPosition, Values } from '@/lib'

export const ModalVariants = {
	DEFAULT: 'default',
	GHOST: 'ghost'
} as const

export type TModalVariant = Values<typeof ModalVariants>

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
	variant?: TModalVariant
	position?: TPosition
	size?: TModalSize
	slideFrom?: TModalSlideFrom
	lazy?: boolean
	ariaLabel?: string
	showCross?: boolean
	crossPosition?: TCrossPosition
	crossSize?: number
	contentClassName?: string
	crossClassName?: string
	overlayClassName?: string
	className?: string
}

export interface IModalSectionProps {
	children: React.ReactNode
	className?: string
}
