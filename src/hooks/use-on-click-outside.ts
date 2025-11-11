import { useEffect } from 'react'
import type { RefObject, DependencyList } from 'react'

type TEvent = MouseEvent | TouchEvent

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T | null>,
	handler: (event: TEvent) => void,
	deps: DependencyList = []
) {
	useEffect(() => {
		const listener = (event: TEvent) => {
			const el = ref?.current

			if (!el || el.contains((event?.target as Node) || null)) {
				return
			}

			handler(event)
		}

		document.addEventListener('touchstart', listener)
		document.addEventListener('mousedown', listener)

		return () => {
			document.removeEventListener('touchstart', listener)
			document.removeEventListener('mousedown', listener)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref, handler, ...deps])
}
