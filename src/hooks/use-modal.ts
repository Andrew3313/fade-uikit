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

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true)

			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, animationDelay)
		}
	}, [onClose, animationDelay])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		},
		[close]
	)

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

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
		}
	}, [isOpen, onKeyDown])

	return {
		isClosing,
		isMounted,
		close
	}
}
