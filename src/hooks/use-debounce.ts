import useTimeoutFn from './use-timeout-fn'
import { type DependencyList, useEffect } from 'react'

export type UseDebounceReturn = [() => boolean | null, () => void]

export default function useDebounce(
	fn: () => void,
	ms: number = 0,
	deps: DependencyList = []
): UseDebounceReturn {
	const { isReady, clear: cancel, set: reset } = useTimeoutFn(fn, ms)

	useEffect(reset, [reset, ...deps])

	return [isReady, cancel]
}
