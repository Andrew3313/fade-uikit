import { HiddenScroll } from '../../hidden-scroll'
import { InputVariants, type TInputVariant } from '../input/input.props'
import type { IAutocompleteOption } from './autocomplete.props'
import styles from './suggestions-list.module.css'
import { cn } from '@/lib'
import { useEffect, useRef } from 'react'

interface ISuggestionsListProps {
	suggestions: IAutocompleteOption[]
	highlight: string
	highlightedIndex: number
	onSuggestionClick: (item: IAutocompleteOption) => void
	variant: TInputVariant
}

function highlightMatch(text: string, query: string) {
	if (!query.trim()) return text

	const regex = new RegExp(`(${query})`, 'gi')
	const parts = text.split(regex)

	return parts.map((part, index) =>
		regex.test(part) ? (
			<span key={index} className={styles.highlight}>
				{part}
			</span>
		) : (
			part
		)
	)
}

export function SuggestionsList({
	suggestions,
	highlight,
	highlightedIndex,
	onSuggestionClick,
	variant
}: ISuggestionsListProps) {
	const itemRefs = useRef<(HTMLLIElement | null)[]>([])

	useEffect(() => {
		if (highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
			itemRefs.current[highlightedIndex]?.scrollIntoView({
				block: 'nearest',
				behavior: 'smooth'
			})
		}
	}, [highlightedIndex])

	return (
		<ul
			className={cn(styles['suggestions-list'], {
				[styles.ghost]: variant === InputVariants.GHOST
			})}
			role='listbox'
		>
			<HiddenScroll className={styles.wrapper}>
				{suggestions.map((suggestion, index) => (
					<li
						key={suggestion.value}
						ref={(el) => {
							itemRefs.current[index] = el
						}}
						role='option'
						aria-selected={index === highlightedIndex}
						className={cn(styles['suggestion-item'], {
							[styles.active]: index === highlightedIndex
						})}
						onMouseDown={(e) => {
							e.preventDefault()
							onSuggestionClick(suggestion)
						}}
					>
						<div className={styles['suggestion-label']}>
							{highlightMatch(suggestion.label, highlight)}
						</div>
					</li>
				))}
			</HiddenScroll>
		</ul>
	)
}
