import type { TAccentColor, Values } from '@/lib'

export const ButtonVariants = {
	DEFAULT: 'default',
	OUTLINE: 'outline',
	GHOST: 'ghost'
} as const

export type TButtonVariant = Values<typeof ButtonVariants>

export type TButtonType = 'button' | 'reset' | 'submit'

export type TButtonSize = 'sm' | 'md' | 'lg'

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	type?: TButtonType
	variant?: TButtonVariant
	size?: TButtonSize
	accentColor?: TAccentColor
	accent?: boolean
	isDisabled?: boolean
	isLoading?: boolean
	fullWidth?: boolean
	rounded?: boolean
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	className?: string
}
