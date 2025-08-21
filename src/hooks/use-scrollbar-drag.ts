import { useCallback, useEffect, useRef, useState } from 'react'

export function useScrollbarDrag(
	contentRef: React.RefObject<HTMLDivElement | null>,
	trackRef: React.RefObject<HTMLDivElement | null>,
	axis: 'x' | 'y'
) {
	const [isDragging, setIsDragging] = useState(false)

	const startPos = useRef(0) // Начальная позиция курсора при перетаскивании
	const initialScroll = useRef(0)

	const activePointerId = useRef<number | null>(null)

	const handleThumbPointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			e.preventDefault()

			const thumb = e.currentTarget

			if (!thumb) return

			// Захватываем указатель
			thumb.setPointerCapture(e.pointerId)
			activePointerId.current = e.pointerId

			setIsDragging(true)

			startPos.current = axis === 'y' ? e.clientY : e.clientX

			const el = contentRef.current

			if (el) {
				initialScroll.current =
					axis === 'y' ? el.scrollTop : el.scrollLeft
			}
		},
		[axis, contentRef]
	)

	useEffect(() => {
		if (!isDragging) return

		const onMove = (e: PointerEvent) => {
			if (e.pointerId !== activePointerId.current) return

			const el = contentRef.current
			const track = trackRef.current

			if (!el || !track) return

			const trackSize =
				axis === 'y' ? track.clientHeight : track.clientWidth

			if (trackSize === 0) return

			// Смещение курсора от стартовой точки в пикселях по выбранной оси
			const deltaPx =
				(axis === 'y' ? e.clientY : e.clientX) - startPos.current

			const contentSize = axis === 'y' ? el.scrollHeight : el.scrollWidth

			if (contentSize === 0) return

			// Переводим это смещение в смещение скролла содержимого
			// deltaPx / trackSize - доля, на которую пользователь сместил курсор относительно всего трека
			const deltaScroll = (deltaPx / trackSize) * contentSize

			if (axis === 'y') {
				const maxTop = Math.max(el.scrollHeight - el.clientHeight, 0)

				el.scrollTop = Math.max(
					0,
					Math.min(initialScroll.current + deltaScroll, maxTop)
				)
			} else {
				const maxLeft = Math.max(el.scrollWidth - el.clientWidth, 0)

				el.scrollLeft = Math.max(
					0,
					Math.min(initialScroll.current + deltaScroll, maxLeft)
				)
			}
		}

		const endDrag = (e: PointerEvent) => {
			if (e.pointerId !== activePointerId.current) return

			activePointerId.current = null
			setIsDragging(false)
		}

		document.addEventListener('pointermove', onMove)
		document.addEventListener('pointerup', endDrag)
		document.addEventListener('pointercancel', endDrag)

		return () => {
			document.removeEventListener('pointermove', onMove)
			document.removeEventListener('pointerup', endDrag)
			document.removeEventListener('pointercancel', endDrag)
		}
	}, [isDragging, axis, contentRef, trackRef])

	return { isDragging, handleThumbPointerDown }
}
