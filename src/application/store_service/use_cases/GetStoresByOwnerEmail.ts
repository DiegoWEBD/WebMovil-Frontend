import Store from '../../../domain/Store/Store'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'
import StoreJSON from '../../../infrastructure/store/StoreJSON.interface'
import apiClient from '../../../utils/axios_client'

export default class GetStoresByOwnerEmail {
	async execute(ownerEmail: string): Promise<Store[]> {
		const { data } = await apiClient.get(
			`/stores/${encodeURIComponent(ownerEmail)}`
		)

		return data.stores.map(
			(storeJSON: StoreJSON) => new StoreJSONAdapter(storeJSON)
		)
	}
}
