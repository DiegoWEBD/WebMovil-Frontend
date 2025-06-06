import './StoreShoppingCart.css'

import { localePrice } from '../../../../../utils/locale_number'
import useShoppingCartState from '../../../../global_states/customer/shoppingCartState'
import Button from '../../../buttons/Button/Button'
import ShoppingCartProductCard from './ShoppingCartProductCard/ShoppingCartProductCard'
import { useMutation } from '@tanstack/react-query'
import useAppState from '../../../../global_states/appState'
import useModalState from '../../../../global_states/modalState'

type StoreShoppingCartProps = {
	storeId: string
	storeName: string
}

const StoreShoppingCart = ({ storeId, storeName }: StoreShoppingCartProps) => {
	const { saleService, basicUserInfo } = useAppState()
	const { shoppingCarts, removeCart } = useShoppingCartState()
	const { closeModal } = useModalState()

	const mutation = useMutation({
		mutationFn: saleService.registerSale,
		onSuccess: () => {
			closeModal()
			removeCart(storeId)
		},
		onError: error => {
			console.error('Error registering the sale:', error)
		},
	})

	const shoppingCart = shoppingCarts.find(cart => cart.storeId === storeId)

	if (!shoppingCart) return null

	return (
		<div className='shopping-cart page-padding'>
			<h1 className='page-title'>{storeName}</h1>
			{shoppingCart.productOrders.map(productOrder => (
				<ShoppingCartProductCard
					key={productOrder.product.getCode()}
					productOrder={productOrder}
				/>
			))}
			<div className='order-subtotal'>
				<label>Subtotal</label>
				<p>
					{localePrice(
						shoppingCart.productOrders.reduce((acc, order) => {
							return acc + order.product.getPrice() * order.quantity
						}, 0) || 0
					)}
				</p>
			</div>
			<div className='add-to-cart-button-container'>
				<Button
					className='primary add-to-cart-button'
					onClick={() => {
						if (!basicUserInfo) return
						mutation.mutate({
							userEmail: basicUserInfo.email,
							shoppingCart,
							dispatchMethod: 'delivery',
						})
					}}
				>
					<p>Ir a pagar</p>
				</Button>
			</div>
		</div>
	)
}

export default StoreShoppingCart
