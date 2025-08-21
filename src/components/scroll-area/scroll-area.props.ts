import type { TAccentColor } from '@/lib'

export interface IScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	thumbColor?: TAccentColor
	thumbRadius?: number
	trackThickness?: number
	trackColor?: string
	trackRadius?: number
	gap?: number
	scrollAreaSize?: number
	ariaLabel?: string
	className?: string
	contentClassName?: string
}
