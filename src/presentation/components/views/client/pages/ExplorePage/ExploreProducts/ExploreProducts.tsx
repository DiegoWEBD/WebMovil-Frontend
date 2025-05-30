import useAppState from '../../../../../../global_states/appState'
import useInfiniteScrollQuery from '../../../../../../hooks/useInfiniteScrollQuery'
import GridContainer from '../../../../../containers/GridContainer/GridContainer'
import ProductCard from '../../../../../ProductsViewer/ProductCard/ProductCard'

const ExploreProducts = () => {
	const { stockService } = useAppState()
	const {
		items: products,
		error,
		isFetching,
		loaderRef,
	} = useInfiniteScrollQuery({
		queryKey: ['explore-products'],
		fetchPage: async page => {
			const result = await stockService.getProducts(
				undefined,
				undefined,
				page,
				10
			)
			return {
				data: result.products,
				nextPage: page + 1,
				totalPages: result.meta?.total_pages || 1,
			}
		},
	})

	if (error) return <p>Error al cargar los productos disponibles</p>

	return (
		<>
			<GridContainer className='explore-section'>
				{products.map(product => (
					<ProductCard key={`explore-${product.getCode()}`} product={product} />
				))}
				{isFetching &&
					Array.from({ length: 5 }).map((_, index) => (
						<ProductCard key={index} />
					))}
				<div ref={loaderRef} style={{ visibility: 'hidden', height: '1px' }} />
			</GridContainer>
		</>
	)
}

export default ExploreProducts
