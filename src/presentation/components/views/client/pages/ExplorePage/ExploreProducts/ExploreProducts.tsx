import useAppState from '../../../../../../global_states/appState'
import useInfiniteScrollQuery from '../../../../../../hooks/useInfiniteScrollQuery'
import GridContainer from '../../../../../containers/GridContainer/GridContainer'
import ProductCard from '../../../../../ProductsViewer/ProductCard/ProductCard'

type ExploreProductsProps = {
	searchInput: string
}

const ExploreProducts = ({ searchInput }: ExploreProductsProps) => {
	const { stockService } = useAppState()
	const {
		items: products,
		error,
		isFetching,
		loaderRef,
	} = useInfiniteScrollQuery({
		queryKey: ['explore-products', searchInput],
		fetchPage: async page => {
			const response = await stockService.getProducts(
				undefined,
				searchInput,
				page,
				10
			)

			return {
				data: response.products,
				nextPage: page + 1,
				totalPages: response.meta?.total_pages || 1,
			}
		},
	})

	if (error) return <p>Error al cargar los productos disponibles</p>

	return (
		<GridContainer className='explore-section'>
			{products.map(product => (
				<ProductCard key={`explore-${product.getCode()}`} product={product} />
			))}
			{isFetching &&
				Array.from({ length: 5 }).map((_, index) => (
					<ProductCard key={index} />
				))}
			<div ref={loaderRef} style={{ height: '1px', visibility: 'hidden' }} />
		</GridContainer>
	)
}

export default ExploreProducts
