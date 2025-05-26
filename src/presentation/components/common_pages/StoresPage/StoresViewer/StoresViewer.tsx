import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import useAppState from '../../../../global_states/appState'
import StoreSkeletonCard from '../StoreCard/StoreSkeletonCard/StoreSkeletonCard'
import StoresContainer from '../StoresContainer/StoresContainer'

type StoresViewerProps = {
	input: string
}

const StoresViewer = ({ input }: StoresViewerProps) => {
	const { storeService } = useAppState()

	const {
		data,
		error,

		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isFetching,
	} = useInfiniteQuery({
		queryKey: ['stores', input],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await storeService.getStores(input, pageParam, 5)
			return {
				stores: response.stores,
				nextPage: pageParam + 1,
				totalPages: response.meta?.total_pages || 1,
			}
		},
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			return lastPage.nextPage <= lastPage.totalPages
				? lastPage.nextPage
				: undefined
		},
	})

	const loaderRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const target = loaderRef.current

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage()
				}
			},
			{ threshold: 1.0 }
		)

		if (target) observer.observe(target)

		return () => {
			if (target) observer.unobserve(target)
		}
	}, [fetchNextPage, hasNextPage, isFetchingNextPage])

	if (error) return <p>Error al cargar las tiendas disponibles</p>

	return (
		<div>
			<StoresContainer
				stores={data?.pages.flatMap(page => page.stores) || []}
			/>

			<div ref={loaderRef} className='store-list'>
				{isFetching &&
					Array.from({ length: 5 }).map((_, index) => (
						<StoreSkeletonCard key={index} />
					))}
			</div>
		</div>
	)
}

export default StoresViewer
