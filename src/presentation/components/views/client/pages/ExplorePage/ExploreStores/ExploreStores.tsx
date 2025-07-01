import useAppState from '../../../../../../global_states/appState'
import useInfiniteScrollQuery from '../../../../../../hooks/useInfiniteScrollQuery'
import GridContainer from '../../../../../containers/GridContainer/GridContainer'
import StoreCard from '../../../../../StoreCard/StoreCard'

type ExploreStoresProps = {
	searchInput: string
}

const ExploreStores = ({ searchInput }: ExploreStoresProps) => {
	const { storeService } = useAppState()

	const {
		items: stores,
		error,
		isFetching,
		loaderRef,
	} = useInfiniteScrollQuery({
		queryKey: ['explore-stores', searchInput],
		fetchPage: async page => {
			const response = await storeService.getStores(searchInput, page, 10)

			return {
				data: response.stores,
				nextPage: page + 1,
				totalPages: response.meta?.total_pages || 1,
			}
		},
	})

	if (error) return <p>Error al cargar las tiendas disponibles</p>

	return (
		<GridContainer className='explore-section explore-stores'>
			{stores.map(store => (
				<StoreCard key={store.id} store={store} className='explore-section' />
			))}
			{isFetching &&
				Array.from({ length: 5 }).map((_, index) => (
					<StoreCard
						key={index}
						store={undefined}
						className='explore-section loading'
					/>
				))}
			<div ref={loaderRef} style={{ visibility: 'hidden', height: '1px' }} />
		</GridContainer>
	)
}

export default ExploreStores
