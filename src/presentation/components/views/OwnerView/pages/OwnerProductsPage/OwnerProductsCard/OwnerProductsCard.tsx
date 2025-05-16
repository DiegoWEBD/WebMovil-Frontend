import './OwnerProductsCard.css'

import { useQuery } from '@tanstack/react-query'
import Product from '../../../../../../../domain/Product/Product'
import useAppState from '../../../../../../global_states/appState'
import useOwnerState from '../../../../../../global_states/owner/ownerState'
import Card from '../../../../../containers/Card/Card'
import OwnerProductsCardItem from './OwnerProductsCardItem/OwnerProductsCardItem'

const OwnerProductsCard = () => {
	const { stockService } = useAppState()
	const { selectedOwnerStoreSummary } = useOwnerState()

	const { data, isLoading } = useQuery<Product[] | undefined>({
		queryKey: ['ownerStoreProducts', selectedOwnerStoreSummary],
		queryFn: async () => {
			return await stockService.getProductsByStoreId(
				selectedOwnerStoreSummary!.id
			)
		},
		enabled: !!selectedOwnerStoreSummary,
	})

	return (
		<Card className='products-table'>
			<div className='table-header'>
				<div className='store-product-code'>Código</div>
				<div className='store-product-name'>Nombre</div>
				<div className='store-product-category'>Descripción</div>
				<div className='store-product-price'>Precio</div>
				<div className='store-product-stock'>Stock</div>
				<div className='store-product-actions'>Acciones</div>
			</div>
			{isLoading &&
				Array.from({ length: 10 }).map((_, index) => (
					<OwnerProductsCardItem key={index} product={undefined} />
				))}
			{data?.map(product => (
				<OwnerProductsCardItem key={product.getCode()} product={product} />
			))}
		</Card>
	)
}

export default OwnerProductsCard
