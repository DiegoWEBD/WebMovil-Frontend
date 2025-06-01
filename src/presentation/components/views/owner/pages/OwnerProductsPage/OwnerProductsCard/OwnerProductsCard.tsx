import './OwnerProductsCard.css'

import useAppState from '../../../../../../global_states/appState'
import useOwnerState from '../../../../../../global_states/owner/ownerState'
import useInfiniteScrollQuery from '../../../../../../hooks/useInfiniteScrollQuery'
import GridContainer from '../../../../../containers/GridContainer/GridContainer'
import OwnerProductsCardItem from './OwnerProductsCardItem/OwnerProductsCardItem'

const OwnerProductsCard = () => {
	const { stockService } = useAppState()
	const { selectedOwnerStoreSummary } = useOwnerState()

	const {
		items: products,

		isFetching,
		loaderRef,
	} = useInfiniteScrollQuery({
		queryKey: ['owner-store-products', selectedOwnerStoreSummary!.id],
		fetchPage: async page => {
			const result = await stockService.getProducts(
				selectedOwnerStoreSummary!.id,
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
		enabled: !!selectedOwnerStoreSummary,
	})

	return (
		<GridContainer>
			{products.map(product => (
				<OwnerProductsCardItem key={product.getCode()} product={product} />
			))}
			{isFetching &&
				Array.from({ length: 10 }).map((_, index) => (
					<OwnerProductsCardItem key={index} product={undefined} />
				))}
			<div ref={loaderRef} style={{ visibility: 'hidden', height: '1px' }} />
		</GridContainer>
	)
}

export default OwnerProductsCard
