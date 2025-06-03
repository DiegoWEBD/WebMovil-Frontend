import Sale from '../../domain/Sale/Sale'
import { ShoppingCart } from '../../presentation/global_states/customer/shoppingCartState'

export type NewSale = {
	userEmail: string
	shoppingCart: ShoppingCart
}

export default interface ISaleService {
	getSaleDetail(saleCode: string): Promise<Sale>
	registerSale(newSale: NewSale): Promise<void>
}
