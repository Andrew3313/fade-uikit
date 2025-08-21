import { useEffect } from 'react'

export function useResizeObserver(
	ref: React.RefObject<HTMLElement | null>,
	callback: () => void
) {
	useEffect(() => {
		if (!ref.current) return

		const obs = new ResizeObserver(callback)

		obs.observe(ref.current)

		return () => obs.disconnect()
	}, [ref, callback])
}
