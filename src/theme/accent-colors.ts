type Values<T> = T[keyof T]

export const AccentColors = {
	BLUE: 'blue',
	PINK: 'pink',
	GREEN: 'green',
	YELLOW: 'yellow',
	PURPLE: 'purple',
	RED: 'red'
} as const

export type TAccentColor = Values<typeof AccentColors>
