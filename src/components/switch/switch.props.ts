import type { TAccentColor } from '@/lib'

export type TSwitchSize = 'sm' | 'md' | 'lg'

export interface ISwitchProps {
	checked: boolean
	onChange?: (checked: boolean) => void
	accentColor?: TAccentColor
	isDisabled?: boolean
	size?: TSwitchSize
	name?: string
	className?: string
}
