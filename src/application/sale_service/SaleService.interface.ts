import { ShoppingCart } from '../../presentation/global_states/customer/shoppingCartState'

export type NewSale = {
	userEmail: string
	shoppingCart: ShoppingCart
}

export default interface ISaleService {
	registerSale(newSale: NewSale): Promise<void>
}
