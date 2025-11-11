'use client'

import { Input } from '../input'
import { InputVariants } from '../input/input.props'
import styles from './autocomplete.module.css'
import type { IAutocompleteProps } from './autocomplete.props'
import { SuggestionsList } from './suggestions-list'
import { CrossIcon } from '@/components/icons'
import { useOnClickOutside } from '@/hooks'
import { AccentColors, cn, type IOption, type TOptionsData } from '@/lib'
import { useId, useRef, useState } from 'react'

export function Autocomplete({
	data,
	variant = InputVariants.DEFAULT,
	accentColor = AccentColors.BLUE,
	minLength = 2,
	accent = false,
	onSelect,
	onChange,
	defaultValue,
	id,
	inputClassName,
	className,
	...inputProps
}: IAutocompleteProps) {
	const [inputValue, setInputValue] = useState(defaultValue || '')
	const [suggestions, setSuggestions] = useState<TOptionsData>([])

	const [focused, setFocused] = useState(false)
	const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)

	const inputRef = useRef<HTMLInputElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const generatedId = useId()

	const filterSuggestions = (value: string) => {
		if (!value || value.length < minLength) {
			setSuggestions([])

			return
		}

		const filtered = data.filter((item) =>
			item.label.toLowerCase().includes(value.toLowerCase())
		)

		setSuggestions(
			filtered.some(
				(item) => item.label.toLowerCase() === value.toLowerCase()
			)
				? []
				: filtered
		)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		setInputValue(value)
		onChange?.(value)
		filterSuggestions(value)
		setHighlightedIndex(-1)
	}

	const handleSelect = (item: IOption) => {
		setInputValue(item.label)
		onSelect?.(item)
		setSuggestions([])
		setHighlightedIndex(-1)

		inputRef.current?.blur()
	}

	const handleClearInput = () => {
		setInputValue('')
		setSuggestions([])
		setHighlightedIndex(-1)

		inputRef.current?.focus()
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!suggestions.length) return

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault()

				setHighlightedIndex((prev) =>
					prev < suggestions.length - 1 ? prev + 1 : 0
				)

				break

			case 'ArrowUp':
				e.preventDefault()

				setHighlightedIndex((prev) =>
					prev > 0 ? prev - 1 : suggestions.length - 1
				)

				break

			case 'Enter':
				if (highlightedIndex >= 0) {
					handleSelect(suggestions[highlightedIndex])
				}

				break

			case 'Escape':
				setSuggestions([])
				setFocused(false)
				setHighlightedIndex(-1)

				inputRef.current?.blur()

				break
		}
	}

	useOnClickOutside(containerRef, () => {
		setFocused(false)
		setSuggestions([])

		inputRef.current?.blur()
	}, [])

	return (
		<div
			ref={containerRef}
			className={cn(styles.autocomplete, {}, [className])}
		>
			<div
				className={cn(styles['input-wrapper'], {
					[styles.ghost]: variant === InputVariants.GHOST
				})}
			>
				<Input
					id={id || generatedId}
					ref={inputRef}
					value={inputValue}
					onChange={handleInputChange}
					variant={variant}
					className={cn(
						styles.input,
						{
							[styles['with-suggestions']]: suggestions.length > 0
						},
						[inputClassName]
					)}
					autoComplete='off'
					onFocus={() => setFocused(true)}
					onKeyDown={handleKeyDown}
					{...inputProps}
				/>

				{inputValue && (
					<button
						onClick={handleClearInput}
						className={cn(styles['clear-button'])}
					>
						<CrossIcon size={13} />
					</button>
				)}
			</div>

			{focused && suggestions.length > 0 && (
				<SuggestionsList
					suggestions={suggestions}
					highlight={inputValue}
					highlightedIndex={highlightedIndex}
					onSuggestionClick={handleSelect}
					variant={variant}
					accentColor={accentColor}
					accent={accent}
				/>
			)}
		</div>
	)
}
