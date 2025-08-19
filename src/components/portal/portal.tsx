import { createPortal } from 'react-dom'

interface IPortalProps {
	children: React.ReactNode
	element?: HTMLElement
}

export function Portal({ children, element = document.body }: IPortalProps) {
	return createPortal(children, element)
}
