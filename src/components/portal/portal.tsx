import type { IPortalProps } from './portal.props'
import { createPortal } from 'react-dom'

export function Portal({ children, element = document.body }: IPortalProps) {
	return createPortal(children, element)
}
