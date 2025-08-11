import type { AddPostfix, TAccentColor, TColor, Values } from '@/lib'

export const ButtonVariants = {
	DEFAULT: 'default',
	OUTLINE: 'outline'
} as const

export type TButtonVariant = Values<typeof ButtonVariants>

export type TButtonFill = AddPostfix<
	Extract<TColor, 'white' | 'black'>,
	'-fill'
>

export type TButtonSize = 'sm' | 'md' | 'lg'

export type TButton = 'button' | 'reset' | 'submit'

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	type?: TButton
	variant?: TButtonVariant
	size?: TButtonSize
	accentColor?: TAccentColor
	fill?: TButtonFill
	autoTheming?: boolean
	accent?: boolean
	isDisabled?: boolean
	className?: string
}
