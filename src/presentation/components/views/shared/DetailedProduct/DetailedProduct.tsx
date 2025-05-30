import './DetailedProduct.css'

import Product from '../../../../../domain/Product/Product'
import NotFoundImage from '../../../NotFoundImage/NotFoundImage'
import Card from '../../../containers/Card/Card'
import { useQuery } from '@tanstack/react-query'
import useAppState from '../../../../global_states/appState'
import Skeleton from '../../../Skeleton/Skeleton'
import Button from '../../../buttons/Button/Button'

type DetailedProductProps = {
	product: Product
}

const DetailedProduct = ({ product }: DetailedProductProps) => {
	const { storeService } = useAppState()

	const { data } = useQuery({
		queryKey: [
			'detailed-product-store',
			product.getCode(),
			product.getStoreId(),
		],
		queryFn: async () => await storeService.getStoreById(product.getStoreId()),
	})

	return (
		<div className='detailed-product-view'>
			<div className='product-image-container'>
				<NotFoundImage className='product-image' />
			</div>
			<div className='page-padding detailed-product-info-container'>
				<div>
					<h1 className='page-title'>{product.getName()}</h1>
					{data ? (
						<p className='page-subtitle'>{data.getName()}</p>
					) : (
						<Skeleton height='1.2rem' width='14rem' />
					)}
					<p>{product.getDescription()}</p>
				</div>

				<Card className='detailed-product-price-card'>
					<p className='detailed-product-price'>${product.getPrice()}</p>
					<p>Precio por unidad</p>
				</Card>

				<div className='detailed-product-info'>
					<label>Categorías:</label>
					<div className='detailed-product-categories'>
						<p className='detailed-product-category'>Sin glúten</p>
						<p className='detailed-product-category'>Vegano</p>
					</div>
				</div>

				<div className='detailed-product-info'>
					<label>Código de producto:</label>
					<p className='detailed-product-data'>{product.getCode()}</p>
				</div>

				<div className='detailed-product-info'>
					<label>Stock disponible:</label>
					<p className='detailed-product-data'>{product.getStock()}</p>
				</div>
				<div className='add-to-cart-button-container'>
					<Button className='primary add-to-cart-button'>
						Agregar al carro
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DetailedProduct
