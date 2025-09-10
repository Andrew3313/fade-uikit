import type { IInputProps } from '../input/input.props'

export interface IAutocompleteOption {
	label: string
	value: string
}

export interface IAutocompleteProps
	extends Omit<IInputProps, 'onChange' | 'onSelect' | 'className' | 'type'> {
	data: IAutocompleteOption[]
	minLength?: number
	onSelect?: (item: IAutocompleteOption) => void
	onChange?: (value: string) => void
	defaultValue?: string
	inputClassName?: string
	className?: string
}
