import type { IInputProps } from '../input/input.props'
import type { IOption, TAccentColor, TOptionsData } from '@/lib'

export interface IAutocompleteProps
	extends Omit<IInputProps, 'onChange' | 'onSelect' | 'className' | 'type'> {
	data: TOptionsData
	minLength?: number
	onSelect?: (item: IOption) => void
	onChange?: (value: string) => void
	accentColor?: TAccentColor
	accent?: boolean
	defaultValue?: string
	inputClassName?: string
	className?: string
}
