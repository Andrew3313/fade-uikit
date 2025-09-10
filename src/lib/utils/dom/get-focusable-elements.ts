export function getFocusableElements(element: HTMLElement): HTMLElement[] {
	return Array.from(
		element.querySelectorAll<HTMLElement>(
			'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
		)
	).filter(
		(el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
	)
}
