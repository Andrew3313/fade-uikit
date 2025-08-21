export function calcOverflow(el: HTMLElement) {
	return {
		needY: el.scrollHeight - el.clientHeight > 1,
		needX: el.scrollWidth - el.clientWidth > 1
	}
}

export function calcThumbSize(client: number, scroll: number, track: number) {
	return Math.max((client / scroll) * track, 20)
}

export function calcThumbPosition(
	scroll: number,
	scrollSize: number,
	client: number,
	track: number,
	thumbSize: number
) {
	const ratio = scrollSize - client === 0 ? 0 : scroll / (scrollSize - client)

	return Math.max(0, Math.min(ratio * (track - thumbSize), track - thumbSize))
}
