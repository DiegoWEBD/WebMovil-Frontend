import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef } from 'react'

type FetchPageFn<T> = (pageParam: number) => Promise<{
	data: T[]
	nextPage: number
	totalPages: number
}>

interface UseInfiniteScrollQueryProps<T> {
	queryKey: unknown[]
	fetchPage: FetchPageFn<T>
	initialPageParam?: number
	enabled?: boolean
}

function useInfiniteScrollQuery<T>({
	queryKey,
	fetchPage,
	initialPageParam = 1,
	enabled = true,
}: UseInfiniteScrollQueryProps<T>) {
	const loaderRef = useRef<HTMLDivElement | null>(null)

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isFetching,
		status,
	} = useInfiniteQuery({
		queryKey,
		queryFn: async ({ pageParam = initialPageParam }) => {
			const pageData = await fetchPage(pageParam)
			return {
				items: pageData.data,
				nextPage: pageData.nextPage,
				totalPages: pageData.totalPages,
			}
		},
		initialPageParam,
		getNextPageParam: lastPage =>
			lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
		enabled,
	})

	const items = useMemo(() => {
		return data?.pages.flatMap(page => page.items) ?? []
	}, [data])

	useEffect(() => {
		const target = loaderRef.current
		if (!target) return

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage()
				}
			},
			{ threshold: 1.0 }
		)

		observer.observe(target)

		return () => {
			observer.disconnect()
		}
	}, [fetchNextPage, hasNextPage, isFetchingNextPage])

	return {
		items,
		error,
		status,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		loaderRef,
	}
}

export default useInfiniteScrollQuery
