import './StoreShoppingCart.css'

import { localePrice } from '../../../../../utils/locale_number'
import useShoppingCartState from '../../../../global_states/customer/shoppingCartState'
import Button from '../../../buttons/Button/Button'
import ShoppingCartProductCard from './ShoppingCartProductCard/ShoppingCartProductCard'

type StoreShoppingCartProps = {
	storeId: string
	storeName: string
}

const StoreShoppingCart = ({ storeId, storeName }: StoreShoppingCartProps) => {
	const { shoppingCarts } = useShoppingCartState()

	const shoppingCart = shoppingCarts.find(cart => cart.storeId === storeId)

	return (
		<div className='page-padding shopping-cart'>
			<h1 className='page-title'>{storeName}</h1>
			{shoppingCart?.productOrders.map(productOrder => (
				<ShoppingCartProductCard
					key={productOrder.product.getCode()}
					productOrder={productOrder}
				/>
			))}
			<div className='order-subtotal'>
				<label>Subtotal</label>
				<p>
					{localePrice(
						shoppingCart?.productOrders.reduce((acc, order) => {
							return acc + order.product.getPrice() * order.quantity
						}, 0) || 0
					)}
				</p>
			</div>
			<div className='add-to-cart-button-container'>
				<Button className='primary add-to-cart-button'>
					<p>Ir a pagar</p>
				</Button>
			</div>
		</div>
	)
}

export default StoreShoppingCart
