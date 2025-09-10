import type { Values } from '@/lib'

export const InputVariants = {
	DEFAULT: 'default',
	GHOST: 'ghost'
} as const

export type TInputVariant = Values<typeof InputVariants>

export interface IInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant?: TInputVariant
	caretColor?: string
	placeholderColor?: string
	className?: string
}
