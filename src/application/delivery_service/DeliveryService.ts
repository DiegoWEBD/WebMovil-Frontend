import apiClient from '../../utils/axios_client'
import IDeliveryService from './IDeliveryService.interface'
import { SaleSummary } from '../sale_service/types/SaleSummary'

export default class DeliveryService implements IDeliveryService {
	async getAvailableDeliveries(): Promise<SaleSummary[]> {
		const { data } = await apiClient.get('/sales/available-for-delivery')

		return data.map((saleSummary: SaleSummary) => ({
			...saleSummary,
			date: new Date(saleSummary.date),
		}))
	}

	async acceptDelivery(saleCode: string): Promise<void> {
		await apiClient.post(`/sales/${saleCode}/dispatch`)
	}
}
