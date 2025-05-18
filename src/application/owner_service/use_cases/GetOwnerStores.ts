import StoreJSON from '../../../infrastructure/store/StoreJSON.interface'
import apiClient from '../../../utils/axios_client'
import OwnerStoreSummary from '../types/OwnerStoreSummary'

export default class GetOwnerStores {
	async execute(ownerEmail: string): Promise<OwnerStoreSummary[]> {
		try {
			const { data } = await apiClient.get(
				`/stores/owner/${encodeURIComponent(ownerEmail)}`
			)

			return data.stores.map((store: StoreJSON) => ({
				id: store.id,
				name: store.name,
				isActive: Math.random() < 0.5,
			}))
		} catch (error) {
			console.log('Error fetching owner stores:', error)
			return []
		}
	}
}
