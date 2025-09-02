import { useCallback, useEffect, useRef } from 'react'

export interface IUseTimeoutFnReturn {
	isReady: () => boolean | null
	clear: () => void
	set: () => void
}

export default function useTimeoutFn(
	fn: () => void,
	ms: number = 0
): IUseTimeoutFnReturn {
	const ready = useRef<boolean | null>(false)
	const timeout = useRef<ReturnType<typeof setTimeout>>(null)
	const callback = useRef(fn)

	const isReady = useCallback(() => ready.current, [])

	const set = useCallback(() => {
		ready.current = false

		if (timeout.current) {
			clearTimeout(timeout.current)
		}

		timeout.current = setTimeout(() => {
			ready.current = true
			callback.current()
		}, ms)
	}, [ms])

	const clear = useCallback(() => {
		ready.current = null

		if (timeout.current) {
			clearTimeout(timeout.current)
			timeout.current = null
		}
	}, [])

	useEffect(() => {
		callback.current = fn
	}, [fn])

	useEffect(() => {
		set()

		return clear
	}, [ms, set, clear])

	return {
		isReady,
		clear,
		set
	}
}
