import type { TPosition } from '@/lib'

export interface IOverlayProps {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
	position?: TPosition
}
