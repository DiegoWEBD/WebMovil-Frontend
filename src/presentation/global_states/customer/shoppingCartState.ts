import { create } from 'zustand'
import Product from '../../../domain/Product/Product'

export type ShoppingCart = {
	storeId: string
	productOrders: ProductOrder[]
}

export type ProductOrder = {
	product: Product
	quantity: number
}

type CustomerState = {
	shoppingCarts: ShoppingCart[]
	addToCart: (product: Product, quantity: number, storeId: string) => void
	removeFromCart: (productCode: string, storeId: string) => void
	removeCart: (storeId: string) => void
}

const useShoppingCartState = create<CustomerState>(set => {
	return {
		shoppingCarts: [],
		addToCart: (product: Product, quantity: number, storeId: string) =>
			set(state => {
				const existingCart = state.shoppingCarts.find(
					cart => cart.storeId === storeId
				)
				if (!existingCart)
					return {
						shoppingCarts: [
							...state.shoppingCarts,
							{
								storeId,
								productOrders: [{ product, quantity }],
							},
						],
					}

				const existingProduct = existingCart.productOrders.find(
					item => item.product.getCode() === product.getCode()
				)

				if (existingProduct)
					return {
						shoppingCarts: state.shoppingCarts.map(cart =>
							cart.storeId === storeId
								? {
										...cart,
										productOrders: cart.productOrders.map(item =>
											item.product.getCode() === product.getCode()
												? {
														...item,
														quantity: quantity,
												  }
												: item
										),
								  }
								: cart
						),
					}

				const newProductOrder: ProductOrder = {
					product,
					quantity,
				}

				return {
					shoppingCarts: state.shoppingCarts.map(cart =>
						cart.storeId === storeId
							? {
									...cart,
									productOrders: [...cart.productOrders, newProductOrder],
							  }
							: cart
					),
				}
			}),
		removeFromCart: (productCode: string, storeId: string) =>
			set(state => ({
				shoppingCarts: state.shoppingCarts.map(cart =>
					cart.storeId === storeId
						? {
								...cart,
								products: cart.productOrders.filter(
									item => item.product.getCode() !== productCode
								),
						  }
						: cart
				),
			})),
		removeCart: (storeId: string) =>
			set(state => ({
				shoppingCarts: state.shoppingCarts.filter(
					cart => cart.storeId !== storeId
				),
			})),
	}
})

export default useShoppingCartState
