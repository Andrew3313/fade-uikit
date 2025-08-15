import type { AddPostfix, TAccentColor, TColor, Values } from '@/lib'

export const ButtonVariants = {
	SOLID: 'solid',
	OUTLINE: 'outline',
	GHOST: 'ghost'
} as const

export type TButtonVariant = Values<typeof ButtonVariants>

export type TButtonFill = AddPostfix<
	Extract<TColor, 'white' | 'black'>,
	'-fill'
>

export type TButtonSize = 'sm' | 'md' | 'lg'
export type TButtonType = 'button' | 'reset' | 'submit'

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	type?: TButtonType
	variant?: TButtonVariant
	size?: TButtonSize
	accentColor?: TAccentColor
	fill?: TButtonFill
	accent?: boolean
	isDisabled?: boolean
	isLoading?: boolean
	fullWidth?: boolean
	rounded?: boolean
	className?: string
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
}
