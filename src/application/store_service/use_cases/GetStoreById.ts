import Store from '../../../domain/Store/Store'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'
import apiClient from '../../../utils/axios_client'

export default class GetStoreById {
	async execute(id: string): Promise<Store | undefined> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}

		try {
			const { data } = await apiClient.get(`/stores/${id}`, {
				headers,
			})

			return data ? new StoreJSONAdapter(data) : undefined
		} catch (error) {
			console.error(error)
			return undefined
		}
	}
}
