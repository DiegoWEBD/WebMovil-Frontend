import Store from '../../../domain/Store/Store'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'
import apiClient from '../../../utils/axios_client'

export default class GetStoreByName {
	async execute(name: string): Promise<Store | undefined> {
		const response = await apiClient.get(
			`/stores?name=${encodeURIComponent(name)}`
		)

		return response.data.stores.length > 0
			? new StoreJSONAdapter(response.data.stores[0])
			: undefined
	}
}
