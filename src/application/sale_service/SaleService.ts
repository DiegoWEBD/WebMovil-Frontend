/* eslint-disable @typescript-eslint/no-explicit-any */
import Sale from '../../domain/Sale/Sale'
import SaleDetail from '../../domain/SaleDetail/SaleDetail'
import DispatchOrder from '../../domain/DispatchOrder/DispatchOrder'
import Dispatch from '../../domain/Dispatch/Dispatch'
import apiClient from '../../utils/axios_client'
import ISaleService, { NewSale } from './SaleService.interface'
import DeliveryOrder from '../../domain/DispatchOrder/DeliveryOrder'
import PickupOrder from '../../domain/DispatchOrder/PickupOrder'

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

		console.log(sale)
		let dispatchOrder: DispatchOrder | undefined = undefined

		if (sale.dispatchOrder) {
			if (sale.dispatchOrder.type === 'delivery') {
				dispatchOrder = new DeliveryOrder(
					sale.dispatchOrder.id,
					sale.dispatchOrder.street,
					sale.dispatchOrder.number,
					sale.dispatchOrder.customerInstructions
				)
			} else {
				dispatchOrder = new PickupOrder(
					sale.dispatchOrder.id,
					sale.dispatchOrder.storeDirection
				)
			}
		}

		return new Sale(
			sale.code,
			sale.userEmail,
			sale.userName,
			sale.storeId,
			sale.storeName,
			sale.total,
			new Date(sale.date),
			sale.feedbackId,
			saleDetails,
			sale.dispatchMethod,
			dispatchOrder,
			sale.dispatch ? new Dispatch(new Date(sale.dispatch.date)) : undefined
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
			dispatch_method: {
				type: 'delivery',
				street: 'Río Choapa',
				number: '1234',
				customer_instructions: 'Dejar en la puerta',
			},
		})
	}

	async createDispatchOrder(saleCode: string): Promise<void> {
		await apiClient.post(`/sales/${saleCode}/dispatch-order`)
	}

	async dispatch(saleCode: string): Promise<void> {
		await apiClient.post(`/sales/${saleCode}/dispatch`)
	}
}
