import './ShoppingCartProductCard.css'

import Card from '../../../../containers/Card/Card'
import NotFoundImage from '../../../../NotFoundImage/NotFoundImage'
import useShoppingCartState, {
	ProductOrder,
} from '../../../../../global_states/customer/shoppingCartState'
import { localeNumber } from '../../../../../../utils/locale_number'
import ProductQuantityToOrder from '../../ProductQuantityToOrder/ProductQuantityToOrder'

type ShoppingCartProductCardProps = {
	productOrder: ProductOrder
}

const ShoppingCartProductCard = ({
	productOrder,
}: ShoppingCartProductCardProps) => {
	const { addToCart } = useShoppingCartState()

	return (
		<Card className='shopping-cart-product'>
			<div className='image-container'>
				<NotFoundImage width='100%' height='100%' />
			</div>

			<div className='shopping-cart-product-info'>
				<p className='shopping-cart-product-name'>
					{productOrder.product.getName()}
				</p>

				<p className='shopping-cart-product-code'>
					{productOrder.product.getCode()}
				</p>

				<p className='shopping-cart-product-price'>
					$
					{localeNumber(
						productOrder.product.getPrice() * productOrder.quantity
					)}
				</p>
			</div>

			<ProductQuantityToOrder
				quantityToOrder={productOrder.quantity}
				stock={productOrder.product.getStock()}
				setQuantityToOrder={quantity =>
					addToCart(
						productOrder.product,
						quantity,
						productOrder.product.getStoreId()
					)
				}
				onShoppingCart
			/>
		</Card>
	)
}

export default ShoppingCartProductCard
