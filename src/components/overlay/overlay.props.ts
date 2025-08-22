export type TOverlayPosition =
	| 'center'
	| 'left'
	| 'right'
	| 'top'
	| 'bottom'
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'

export interface IOverlayProps {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
	position?: TOverlayPosition
}
