import type { AddPostfix, TAccentColor, TColor, Values } from '@/lib'

export const BadgeVariants = {
	DEFAULT: 'default',
	LABEL: 'label'
} as const

export type TBadgeVariant = Values<typeof BadgeVariants>

export type TBadgeFill = AddPostfix<TColor | 'transparent', '-fill'>

export type TBadgeSize = 'sm' | 'md' | 'lg'

export type TRadius = 'radius-sm' | 'radius-md' | 'radius-lg'

export interface IBadgeProps {
	children: React.ReactNode
	variant?: TBadgeVariant
	size?: TBadgeSize
	radius?: TRadius
	fill?: TBadgeFill
	accentColor?: TAccentColor
	accent?: boolean
	className?: string
}
