import type { TAccentColor } from '@/lib'

export interface IScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	accentColor?: TAccentColor
	trackColor?: string
	thumbRadius?: number
	trackRadius?: number
	trackThickness?: number
	gap?: number
	scrollAreaSize?: number
	showArrows?: boolean
	ariaLabel?: string
	className?: string
	contentClassName?: string
}
