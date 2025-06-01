import './DetailedProduct.css'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Product from '../../../../../domain/Product/Product'
import { localeNumber, localePrice } from '../../../../../utils/locale_number'
import useAppState from '../../../../global_states/appState'
import useShoppingCartState from '../../../../global_states/customer/shoppingCartState'
import NotFoundImage from '../../../NotFoundImage/NotFoundImage'
import Skeleton from '../../../Skeleton/Skeleton'
import Button from '../../../buttons/Button/Button'
import Card from '../../../containers/Card/Card'
import ProductQuantityToOrder from '../../client/ProductQuantityToOrder/ProductQuantityToOrder'
import { TbPointFilled } from 'react-icons/tb'
import useModalState from '../../../../global_states/modalState'

type DetailedProductProps = {
	product: Product
}

const DetailedProduct = ({ product }: DetailedProductProps) => {
	const { storeService } = useAppState()
	const { addToCart } = useShoppingCartState()
	const { closeModal } = useModalState()
	const [quantityToOrder, setQuantityToOrder] = useState(1)

	const { data } = useQuery({
		queryKey: [
			'detailed-product-store',
			product.getCode(),
			product.getStoreId(),
		],
		queryFn: async () => await storeService.getStoreById(product.getStoreId()),
	})

	return (
		<div className='detailed-product-view '>
			<div className='product-image-container'>
				<NotFoundImage className='product-image' />
			</div>
			<div className='detailed-product-info-container page-padding'>
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
					<p className='detailed-product-price'>
						{localePrice(product.getPrice())}
					</p>
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

				<ProductQuantityToOrder
					quantityToOrder={quantityToOrder}
					setQuantityToOrder={setQuantityToOrder}
					stock={product.getStock()}
				/>

				<div className='add-to-cart-button-container'>
					<Button
						className='primary add-to-cart-button'
						onClick={() => {
							addToCart(product, quantityToOrder, product.getStoreId())
							closeModal()
						}}
					>
						<p>Agregar {quantityToOrder} al carro</p>
						<TbPointFilled className='separator' />
						<p>${localeNumber(quantityToOrder * product.getPrice())}</p>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DetailedProduct
