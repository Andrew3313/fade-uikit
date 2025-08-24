import type { TIconProps } from './icon.props'

export function CrossIcon({
	className,
	color = 'currentColor',
	size = 18
}: TIconProps) {
	return (
		<svg
			className={className}
			viewBox='0 0 18.4844 17.7148'
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='none'
		>
			<g>
				<path
					d='M0 0L22.2132 0'
					stroke={color}
					strokeLinecap='round'
					strokeWidth='2'
					transform='matrix(0.707107,0.707107,-0.707107,0.707107,1.77344,1.00391)'
				/>
				<path
					d='M0 0L22.2132 0'
					stroke={color}
					strokeLinecap='round'
					strokeWidth='2'
					transform='matrix(0.707107,-0.707107,0.707107,0.707107,1.00391,16.7109)'
				/>
			</g>
		</svg>
	)
}
