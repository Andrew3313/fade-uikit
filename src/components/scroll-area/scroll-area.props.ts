import type { TAccentColor } from '@/lib'

export interface IScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	style?: React.CSSProperties
	thumbColor?: TAccentColor
	trackColor?: string
	size?: number
	thumbRadius?: number
	trackRadius?: number
	scrollbarMinSize?: number
	scrollbarMaxSize?: number
	scrollbarFixedSize?: number
	ariaLabel?: string
	autoHide?: boolean
	className?: string
}
