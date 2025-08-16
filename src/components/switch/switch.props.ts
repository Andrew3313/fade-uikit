import type { TAccentColor, TSize } from '@/lib'

export interface ISwitchProps {
	checked: boolean
	onChange?: (checked: boolean) => void
	accentColor?: TAccentColor
	isDisabled?: boolean
	size?: TSize
	name?: string
	className?: string
}
