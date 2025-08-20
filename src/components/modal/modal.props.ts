export type TModalSize = 'sm' | 'md' | 'lg' | 'full' | 'content'

export type TModalPosition = 'center' | 'top' | 'bottom' | 'left' | 'right'

export type TModalSlideFrom = 'center' | 'top' | 'bottom' | 'left' | 'right'

export interface IModalProps {
	children: React.ReactNode
	isOpen: boolean
	onClose: () => void
	position?: TModalPosition
	size?: TModalSize
	slideFrom?: TModalSlideFrom
	lazy?: boolean
	ariaLabel?: string
	className?: string
}

export interface IModalSectionProps {
	children: React.ReactNode
	className?: string
}
