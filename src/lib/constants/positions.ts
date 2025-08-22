import type { Values } from '../utils'

export const Positions = {
	CENTER: 'center',
	LEFT: 'left',
	RIGHT: 'right',
	TOP: 'top',
	BOTTOM: 'bottom',
	TOP_LEFT: 'top-left',
	TOP_RIGHT: 'top-right',
	BOTTOM_LEFT: 'bottom-left',
	BOTTOM_RIGHT: 'bottom-right'
} as const

export type TPosition = Values<typeof Positions>
