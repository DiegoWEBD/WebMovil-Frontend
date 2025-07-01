import apiClient from '../../utils/axios_client'
import IDeliveryService from './IDeliveryService.interface'
import { SaleSummary } from '../sale_service/types/SaleSummary'

export default class DeliveryService implements IDeliveryService {
	async getAvailableDeliveries(): Promise<SaleSummary[]> {
		const { data } = await apiClient.get('/sales')
		console.log(data)

		return data
			.filter((saleSummary: SaleSummary) => saleSummary.status !== 'Completada')
			.map((saleSummary: SaleSummary) => ({
				...saleSummary,
				date: new Date(saleSummary.date),
			}))
	}

	async acceptDelivery(saleCode: string): Promise<void> {
		await apiClient.post(`/sales/${saleCode}/dispatch`)
	}
}
