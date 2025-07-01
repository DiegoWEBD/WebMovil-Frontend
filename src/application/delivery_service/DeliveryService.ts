/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from '../../utils/axios_client'
import IDeliveryService from './IDeliveryService.interface'
import { SaleSummary } from '../sale_service/types/SaleSummary'
import DeliveryData from '../../domain/DispatchMethod/DeliveryData/DeliveryData'

export default class DeliveryService implements IDeliveryService {
	async getAvailableDeliveries(): Promise<SaleSummary[]> {
		const { data } = await apiClient.get('/sales?status=Buscando%20repartidor')

		console.log(data)

		return data
			.filter((saleSummary: SaleSummary) => saleSummary.status !== 'Completada')
			.map((saleSummary: SaleSummary) => ({
				...saleSummary,
				date: new Date(saleSummary.date),
				dispatchMethod: new DeliveryData(
					(saleSummary.dispatchMethod as any).id,
					(saleSummary.dispatchMethod as any).street,
					(saleSummary.dispatchMethod as any).number,
					(saleSummary.dispatchMethod as any).customerInstructions
				),
			}))
	}

	async acceptDelivery(saleCode: string): Promise<void> {
		await apiClient.post(`/sales/${saleCode}/dispatch`, {
			delivery_man_email: localStorage.getItem('user_email'),
		})
	}
}
