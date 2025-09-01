import type { TAccentColor, Values } from '@/lib'

export const SeparatorVariants = {
	DEFAULT: 'default',
	GHOST: 'ghost'
} as const

export type TSeparatorVariant = Values<typeof SeparatorVariants>

type TSeparatorDirection = 'horizontal' | 'vertical'
type TSeparatorSize = 'sm' | 'md' | 'lg'

export interface ISeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: TSeparatorVariant
	direction?: TSeparatorDirection
	size?: TSeparatorSize
	accentColor?: TAccentColor
	accent?: boolean
	defaultBackground?: string
	className?: string
}
