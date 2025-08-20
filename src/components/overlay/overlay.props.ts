export type TOverlayPosition = 'center' | 'left' | 'right' | 'top' | 'bottom'

export interface IOverlayProps {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
	position?: TOverlayPosition
}
