import './ExplorePage.css'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useRef, useState } from 'react'
import useAppState from '../../../../../global_states/appState'
import StoreCard from '../../../../common_pages/StoresPage/StoreCard/StoreCard'
import GridContainer from '../../../../containers/GridContainer/GridContainer'
import { Finder } from '../../../../Finder/Finder'

const ExplorePage = () => {
	const { storeService } = useAppState()
	const [searchInput, setSearchInput] = useState<string>('')
	const [debouncedInput, setDebouncedInput] = useState<string>('')

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedInput(searchInput)
		}, 500)

		return () => clearTimeout(timer)
	}, [searchInput])

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isFetching,
	} = useInfiniteQuery({
		queryKey: ['explore-stores', debouncedInput],
		queryFn: async ({ pageParam = 1 }) => {
			const response = await storeService.getStores(
				debouncedInput,
				pageParam,
				5
			)
			return {
				stores: response.stores,
				nextPage: pageParam + 1,
				totalPages: response.meta?.total_pages || 1,
			}
		},
		initialPageParam: 1,
		getNextPageParam: lastPage =>
			lastPage.nextPage <= lastPage.totalPages ? lastPage.nextPage : undefined,
	})

	const allStores = useMemo(() => {
		return data?.pages.flatMap(page => page.stores) ?? []
	}, [data])

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
		<div className='page-padding'>
			<p className='page-title'>Explorar</p>
			<p className='page-subtitle'>
				Descubre productos o tiendas disponibles en tu vecindario
			</p>
			<Finder
				searchInput={searchInput}
				cbFunction={setSearchInput}
				placeholder='Nombre de la tienda o producto...'
			/>

			<div className='explore-page-content'>
				<GridContainer className='explore-section'>
					{allStores.map(store => (
						<StoreCard
							key={store.id}
							store={store}
							className='explore-section'
						/>
					))}
				</GridContainer>

				<GridContainer ref={loaderRef} className='explore-section'>
					{isFetching &&
						Array.from({ length: 5 }).map((_, index) => (
							<StoreCard
								key={index}
								store={undefined}
								className='explore-section loading'
							/>
						))}
				</GridContainer>
			</div>
		</div>
	)
}

export default ExplorePage
