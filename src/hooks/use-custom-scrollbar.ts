import { useResizeObserver } from './use-resize-observer'
import { useScrollbarDrag } from './use-scrollbar-drag'
import { calcOverflow, calcThumbPosition, calcThumbSize } from '@/lib'
import { useCallback, useEffect, useRef, useState } from 'react'

interface IRefs {
	contentRef: React.RefObject<HTMLDivElement>
	vTrackRef: React.RefObject<HTMLDivElement>
	vThumbRef: React.RefObject<HTMLDivElement>
	hTrackRef: React.RefObject<HTMLDivElement>
	hThumbRef: React.RefObject<HTMLDivElement>
}

export function useCustomScrollbar() {
	// Контейнер
	const contentRef = useRef<HTMLDivElement>(null)

	// Вертикальные элементы управления
	const vTrackRef = useRef<HTMLDivElement>(null)
	const vThumbRef = useRef<HTMLDivElement>(null)

	// Горизонтальные элементы управления
	const hTrackRef = useRef<HTMLDivElement>(null)
	const hThumbRef = useRef<HTMLDivElement>(null)

	const [thumbHeight, setThumbHeight] = useState(20) // Высота вертикального ползунка
	const [thumbWidth, setThumbWidth] = useState(20) // Ширина горизонтального ползунка

	const [canScrollY, setCanScrollY] = useState(false)
	const [canScrollX, setCanScrollX] = useState(false)

	const {
		isDragging: isDraggingV,
		handleThumbPointerDown: handleVThumbPointerDown
	} = useScrollbarDrag(contentRef, vTrackRef, 'y')

	const {
		isDragging: isDraggingH,
		handleThumbPointerDown: handleHThumbPointerDown
	} = useScrollbarDrag(contentRef, hTrackRef, 'x')

	const measureOverflow = useCallback(() => {
		const el = contentRef.current

		if (!el) return

		const { needY, needX } = calcOverflow(el)

		setCanScrollY(needY)
		setCanScrollX(needX)
	}, [])

	const syncVThumb = useCallback(() => {
		const el = contentRef.current

		if (!el || !vTrackRef.current || !vThumbRef.current) return

		const top = calcThumbPosition(
			el.scrollTop,
			el.scrollHeight,
			el.clientHeight,
			vTrackRef.current.clientHeight,
			thumbHeight
		)
		vThumbRef.current.style.top = `${top}px`
	}, [thumbHeight])

	const syncHThumb = useCallback(() => {
		const el = contentRef.current

		if (!el || !hTrackRef.current || !hThumbRef.current) return

		const left = calcThumbPosition(
			el.scrollLeft,
			el.scrollWidth,
			el.clientWidth,
			hTrackRef.current.clientWidth,
			thumbWidth
		)
		hThumbRef.current.style.left = `${left}px`
	}, [thumbWidth])

	const updateThumbSizes = useCallback(() => {
		const el = contentRef.current

		if (!el) return

		if (canScrollY && vTrackRef.current) {
			const newH = calcThumbSize(
				el.clientHeight,
				el.scrollHeight,
				vTrackRef.current.clientHeight
			)

			setThumbHeight(newH)
		}

		if (canScrollX && hTrackRef.current) {
			const newW = calcThumbSize(
				el.clientWidth,
				el.scrollWidth,
				hTrackRef.current.clientWidth
			)

			setThumbWidth(newW)
		}
	}, [canScrollY, canScrollX])

	useResizeObserver(contentRef, () => {
		measureOverflow()

		updateThumbSizes()
	})

	// Клики по трекам
	const handleVTrackPointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!canScrollY || !vTrackRef.current || !contentRef.current) return

			const rect = vTrackRef.current.getBoundingClientRect()

			// Вычисляем долю прокрутки с учётом центра ползунка
			const ratio =
				(e.clientY - rect.top - thumbHeight / 2) /
				vTrackRef.current.clientHeight

			// Ограничиваем ratio от 0 до 1
			const clampedRatio = Math.max(0, Math.min(ratio, 1))

			contentRef.current.scrollTo({
				top: clampedRatio * contentRef.current.scrollHeight,
				behavior: 'smooth'
			})
		},
		[canScrollY, thumbHeight]
	)

	const handleHTrackPointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!canScrollX || !hTrackRef.current || !contentRef.current) return

			const rect = hTrackRef.current.getBoundingClientRect()

			const ratio =
				(e.clientX - rect.left - thumbWidth / 2) /
				hTrackRef.current.clientWidth

			const clampedRatio = Math.max(0, Math.min(ratio, 1))

			contentRef.current.scrollTo({
				left: clampedRatio * contentRef.current.scrollWidth,
				behavior: 'smooth'
			})
		},
		[canScrollX, thumbWidth]
	)

	const scrollYBy = (delta: number) =>
		contentRef.current?.scrollBy({ top: delta, behavior: 'smooth' })
	const scrollXBy = (delta: number) =>
		contentRef.current?.scrollBy({ left: delta, behavior: 'smooth' })

	// Синхронизируем ползунки
	useEffect(() => {
		const el = contentRef.current

		if (!el) return

		const onScroll = () => {
			if (canScrollY) syncVThumb()
			if (canScrollX) syncHThumb()
		}

		el.addEventListener('scroll', onScroll)

		return () => el.removeEventListener('scroll', onScroll)
	}, [canScrollY, canScrollX, syncVThumb, syncHThumb])

	// Обновляем размеры ползунков при изменении размеров окна
	useEffect(() => {
		const onResize = () => {
			measureOverflow()
			updateThumbSizes()
		}

		window.addEventListener('resize', onResize)

		return () => window.removeEventListener('resize', onResize)
	}, [measureOverflow, updateThumbSizes])

	return {
		refs: {
			contentRef,
			vTrackRef,
			vThumbRef,
			hTrackRef,
			hThumbRef
		} as IRefs,
		state: {
			canScrollY,
			canScrollX,
			thumbHeight,
			thumbWidth,
			isDraggingV,
			isDraggingH
		},
		handlers: {
			handleVTrackPointerDown,
			handleHTrackPointerDown,
			handleVThumbPointerDown,
			handleHThumbPointerDown,
			scrollYBy,
			scrollXBy
		}
	}
}
