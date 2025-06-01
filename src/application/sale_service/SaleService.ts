import apiClient from '../../utils/axios_client'
import ISaleService, { NewSale } from './SaleService.interface'

export default class SaleService implements ISaleService {
	async registerSale(newSale: NewSale): Promise<void> {
		await apiClient.post('/sales', {
			user_email: newSale.userEmail,
			store_id: newSale.shoppingCart.storeId,
			products: newSale.shoppingCart.productOrders.map(productOrder => ({
				code: productOrder.product.getCode(),
				quantity: productOrder.quantity,
			})),
		})
	}
}
