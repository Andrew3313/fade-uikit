import type { TAccentColor } from '@/types/theme'
import type { TComponentTheme } from '@/types/theme'

type Values<T> = T[keyof T]

export const ButtonVariants = {
	DEFAULT: 'default',
	ACCENT: 'accent'
} as const

export type TButtonVariant = Values<typeof ButtonVariants>
export type TButtonAccentColor = TAccentColor

export type TButtonSize = 'sm' | 'md' | 'lg'

export type TButton = 'button' | 'reset' | 'submit'

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: TButtonVariant
	accentColor?: TButtonAccentColor
	theme?: TComponentTheme
	type?: TButton
	size?: TButtonSize
	isDisabled?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	className?: string
}
