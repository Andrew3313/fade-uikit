import useTimeoutFn from './use-timeout-fn'
import { type DependencyList, useEffect } from 'react'

export interface IUseDebounceReturn {
	isReady: () => boolean | null
	cancel: () => void
}

export default function useDebounce(
	fn: () => void,
	ms: number = 0,
	deps: DependencyList = []
): IUseDebounceReturn {
	const { isReady, clear: cancel, set: reset } = useTimeoutFn(fn, ms)

	useEffect(reset, [reset, ...deps])

	return {
		isReady,
		cancel
	}
}
