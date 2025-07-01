import Sale from '../../domain/Sale/Sale'
import { ShoppingCart } from '../../presentation/global_states/customer/shoppingCartState'

export type NewSale = {
	userEmail: string
	shoppingCart: ShoppingCart
	dispatchMethod: 'delivery' | 'pickup'
}

export default interface ISaleService {
	getSaleDetail(saleCode: string): Promise<Sale>
	registerSale(newSale: NewSale): Promise<void>
	createDispatchOrder(saleCode: string): Promise<void>
	dispatch(saleCode: string): Promise<void>
}
