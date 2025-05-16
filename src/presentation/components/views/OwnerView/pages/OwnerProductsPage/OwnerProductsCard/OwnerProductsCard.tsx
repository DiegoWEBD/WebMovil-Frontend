import './OwnerProductsCard.css'

import { useQuery } from '@tanstack/react-query'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import Product from '../../../../../../../domain/Product/Product'
import useAppState from '../../../../../../global_states/appState'
import useOwnerState from '../../../../../../global_states/owner/ownerState'
import Card from '../../../../../containers/Card/Card'

const OwnerProductsCard = () => {
	const { stockService } = useAppState()
	const { selectedOwnerStoreSummary } = useOwnerState()

	const { data } = useQuery<Product[] | undefined>({
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
			{data?.map(product => (
				<div className='table-row' key={product.getCode()}>
					<div className='store-product-code'>{product.getCode()}</div>
					<div className='store-product-name'>{product.getName()}</div>
					<div className='store-product-category'>
						{product.getDescription()}
					</div>
					<div className='store-product-price'>${product.getPrice()}</div>
					<div className='store-product-stock'>{product.getStock()}</div>
					<div className='store-product-actions'>
						<button className='action-button'>
							<FiEdit className='action-button-icon' />
						</button>
						<button className='action-button'>
							<FaRegTrashAlt className='action-button-icon delete-product-button' />
						</button>
					</div>
				</div>
			))}
		</Card>
	)
}

export default OwnerProductsCard
