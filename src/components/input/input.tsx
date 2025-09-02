import styles from './input.module.css'
import { InputVariants, type IInputProps } from './input.props'
import { cn } from '@/lib'
import { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			variant = InputVariants.DEFAULT,
			className,
			type = 'text',
			caretColor,
			placeholderColor,
			...props
		},
		ref
	) => {
		return (
			<input
				type={type}
				ref={ref}
				className={cn(
					styles.input,
					{
						[styles.ghost]: variant === InputVariants.GHOST
					},
					[className]
				)}
				style={
					{
						'--caret-color': caretColor,
						'--placeholder-color': placeholderColor
					} as React.CSSProperties
				}
				{...props}
			/>
		)
	}
)

Input.displayName = 'Input'

export { Input }
