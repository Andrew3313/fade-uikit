import type { TIconProps } from './icon.props'

type ArrowDirection = 'left' | 'right' | 'up' | 'down'

export function ArrowIcon({
	className,
	color = 'currentColor',
	size = 20,
	direction = 'right'
}: TIconProps & { direction?: ArrowDirection }) {
	const rotations: Record<ArrowDirection, string> = {
		left: '0deg',
		right: '180deg',
		down: '90deg',
		up: '-90deg'
	}

	return (
		<svg
			className={className}
			viewBox='0 0 20.041 20.0416'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width={size}
			height={size}
			fill='none'
			style={{ transform: `rotate(${rotations[direction]})` }}
		>
			<rect
				id='Rectangle 12'
				width='14.171530'
				height='14.171530'
				x='0.000000'
				y='0.000000'
				transform='matrix(-0.707107,0.707107,-0.707107,-0.707107,20.041,10.0208)'
			/>
			<path
				d='M0 0L14.1715 0L14.1715 14.1715L0 14.1715L0 0ZM0 0L12.1715 0L12.1715 12.1715L0 12.1715L0 0ZM0 0Z'
				fill={color}
				fillRule='evenodd'
				transform='matrix(-0.707107,0.707107,-0.707107,-0.707107,20.041,10.0208)'
			/>
		</svg>
	)
}

{
	/* <svg
			className={className}
			viewBox='0 0 20.041 20.042'
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='none'
			style={{ transform: `rotate(${rotations[direction]})` }}
		>
			<rect
				width='14.171530'
				height='14.171530'
				x='0'
				y='0'
				transform='matrix(-0.707107,0.707107,-0.707107,-0.707107,20.041,10.021)'
				fill={color}
			/>
		</svg> */
}
