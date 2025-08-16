import type {
	AddPostfix,
	AddPrefix,
	TAccentColor,
	TColor,
	TSize,
	Values
} from '@/lib'

export const BadgeVariants = {
	DEFAULT: 'default',
	LABEL: 'label'
} as const

export type TBadgeVariant = Values<typeof BadgeVariants>

export type TBadgeFill = AddPostfix<TColor | 'transparent', '-fill'>

export type TRadius = AddPrefix<TSize, 'radius-'>

export interface IBadgeProps {
	children: React.ReactNode
	variant?: TBadgeVariant
	size?: TSize
	radius?: TRadius
	fill?: TBadgeFill
	accentColor?: TAccentColor
	accent?: boolean
	className?: string
}
