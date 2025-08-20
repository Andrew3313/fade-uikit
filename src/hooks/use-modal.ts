import { getFocusableElements, trapFocus } from '@/lib'
import { useCallback, useEffect, useRef, useState } from 'react'

interface IUseModalProps {
	onClose?: () => void
	isOpen?: boolean
	animationDelay: number
}

export function useModal({ animationDelay, isOpen, onClose }: IUseModalProps) {
	const [isMounted, setIsMounted] = useState(false)
	const [isClosing, setIsClosing] = useState(false)

	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const modalRef = useRef<HTMLDivElement>(null)
	const lastFocusedElement = useRef<HTMLElement | null>(null)

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true)

			timerRef.current = setTimeout(() => {
				onClose()

				setIsMounted(false)
				setIsClosing(false)
			}, animationDelay)
		}
	}, [onClose, animationDelay])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}

			if (e.key === 'Tab' && modalRef.current) {
				trapFocus(e, modalRef.current)
			}
		},
		[close]
	)

	// Монтируем модалку и устанавливаем фокус
	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)

			lastFocusedElement.current = document.activeElement as HTMLElement

			if (modalRef.current) {
				const focusable = getFocusableElements(modalRef.current)

				if (focusable.length > 0) {
					focusable[0].focus()
				} else {
					modalRef.current.focus()
				}
			}
		}
	}, [isOpen])

	// Слушаем Escape и Tab
	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
				timerRef.current = null
			}

			window.removeEventListener('keydown', onKeyDown)
			lastFocusedElement.current?.focus()
		}
	}, [isOpen, onKeyDown])

	// Блокируем скролл страницы при открытой модалке
	useEffect(() => {
		if (isOpen) {
			const originalOverflow = window.getComputedStyle(
				document.body
			).overflow

			document.body.style.overflow = 'hidden'

			return () => {
				document.body.style.overflow = originalOverflow
			}
		}
	}, [isOpen])

	return { isClosing, isMounted, close, modalRef }
}
