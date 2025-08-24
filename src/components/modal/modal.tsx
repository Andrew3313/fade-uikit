'use client'

import { CrossIcon } from '../icons'
import { Overlay } from '../overlay'
import { Portal } from '../portal'
import styles from './modal.module.css'
import {
	ModalVariants,
	type IModalProps,
	type IModalSectionProps
} from './modal.props'
import { useModal } from '@/hooks'
import { cn, Positions } from '@/lib'

const ANIMATION_DELAY = 300

export function Modal({
	children,
	onClose,
	isOpen = false,
	variant = ModalVariants.DEFAULT,
	position = Positions.CENTER,
	size = 'md',
	slideFrom = 'center',
	ariaLabel = 'Modal window',
	crossPosition = 'inside',
	showCross = true,
	crossSize,
	lazy,
	crossClassName,
	className
}: IModalProps) {
	const { close, isClosing, isMounted, modalRef } = useModal({
		animationDelay: ANIMATION_DELAY,
		onClose,
		isOpen
	})

	if ((lazy && !isMounted) || !isOpen) {
		return null
	}

	const crossLocation = `cross-${crossPosition}`

	return (
		<Portal element={document.getElementById('modals') ?? document.body}>
			<Overlay onClick={close} position={position}>
				<div
					ref={modalRef}
					role='dialog'
					aria-modal='true'
					aria-label={ariaLabel}
					tabIndex={-1}
					className={cn(
						styles.modal,
						{
							[styles.opened]: isOpen && isMounted && !isClosing,
							[styles.closing]: isClosing,
							[styles.ghost]: variant === ModalVariants.GHOST
						},
						[styles[size], styles[slideFrom], className]
					)}
					onClick={(e) => e.stopPropagation()}
				>
					{showCross && (
						<button
							onClick={close}
							className={cn(styles.cross, {}, [
								styles[crossLocation],
								crossClassName
							])}
						>
							<CrossIcon size={crossSize} color='#fff' />
						</button>
					)}

					<div className={styles['content-wrapper']}>{children}</div>
				</div>
			</Overlay>
		</Portal>
	)
}

Modal.Header = function ModalHeader({
	children,
	className
}: IModalSectionProps) {
	return <div className={cn(styles.header, {}, [className])}>{children}</div>
}

Modal.Body = function ModalBody({ children, className }: IModalSectionProps) {
	return <div className={cn(styles.body, {}, [className])}>{children}</div>
}

Modal.Footer = function ModalFooter({
	children,
	className
}: IModalSectionProps) {
	return <div className={cn(styles.footer, {}, [className])}>{children}</div>
}
