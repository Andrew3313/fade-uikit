import type { Values } from './utils'

export const Colors = {
	GREEN: 'green',
	RED: 'red',
	BLUE: 'blue',
	PINK: 'pink',
	ORANGE: 'orange',
	AQUA_GREEN: 'aqua-green',
	BLACK: 'black',
	WHITE: 'white'
} as const

export const AccentColors = {
	GREEN: 'green-accent',
	RED: 'red-accent',
	BLUE: 'blue-accent',
	PINK: 'pink-accent',
	YELLOW: 'yellow-accent',
	PURPLE: 'purple-accent'
} as const

export type TColor = Values<typeof Colors>

export type TAccentColor = Values<typeof AccentColors>
