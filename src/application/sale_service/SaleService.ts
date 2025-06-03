/* eslint-disable @typescript-eslint/no-explicit-any */
import Sale from '../../domain/Sale/Sale'
import SaleDetail from '../../domain/SaleDetail/SaleDetail'
import apiClient from '../../utils/axios_client'
import ISaleService, { NewSale } from './SaleService.interface'

export default class SaleService implements ISaleService {
	async getSaleDetail(saleCode: string): Promise<Sale> {
		const { data: sale } = await apiClient.get(`/sales/${saleCode}`)

		const saleDetails = sale.details.map(
			(detail: any) =>
				new SaleDetail(
					detail.productCode,
					detail.productName,
					detail.quantity,
					detail.unitPrice
				)
		)

		return new Sale(
			sale.code,
			sale.userEmail,
			sale.userName,
			sale.storeId,
			sale.total,
			new Date(sale.date),
			saleDetails,
			undefined
		)
	}

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
