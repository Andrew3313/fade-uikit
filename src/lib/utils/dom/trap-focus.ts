import { getFocusableElements } from './get-focusable-elements'

export function trapFocus(e: KeyboardEvent, container: HTMLElement) {
	const focusableEls = getFocusableElements(container)

	if (focusableEls.length === 0) return

	const first = focusableEls[0]
	const last = focusableEls[focusableEls.length - 1]

	if (e.shiftKey) {
		if (document.activeElement === first) {
			e.preventDefault()
			last.focus()
		}
	} else {
		if (document.activeElement === last) {
			e.preventDefault()
			first.focus()
		}
	}
}
