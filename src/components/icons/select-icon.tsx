import type { TIconProps } from './icon.props'

export function SelectIcon({
	className,
	color = 'currentColor',
	size = 8
}: TIconProps) {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<mask id='path-1-inside-1_2410_1811' fill='white'>
				<path d='M5.51074 0L11.0212 5.51041L5.51074 11.0208L0.000333495 5.51041L5.51074 0Z' />
			</mask>
			<path
				d='M5.51074 11.0208L4.80364 11.7279L5.51074 12.435L6.21785 11.7279L5.51074 11.0208ZM11.0212 5.51041L10.314 4.8033L4.80364 10.3137L5.51074 11.0208L6.21785 11.7279L11.7283 6.21752L11.0212 5.51041ZM5.51074 11.0208L6.21785 10.3137L0.70744 4.8033L0.000333495 5.51041L-0.706773 6.21752L4.80364 11.7279L5.51074 11.0208Z'
				fill={color}
				mask='url(#path-1-inside-1_2410_1811)'
			/>
		</svg>
	)
}
