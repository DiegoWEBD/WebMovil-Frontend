import axios from 'axios'
import Store from '../../../domain/Store/Store'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'
import StoreJSON from '../../../infrastructure/store/StoreJSON.interface'
import { CONSTANTS } from '../../../utils/constants'
import StoresMetadata from '../StoresMetadata'

export interface GetStoresResponse {
	meta: StoresMetadata
	stores: Store[]
}

export default class GetStores {
	async execute(
		nameFilter: string,
		page: number | undefined = 1,
		limit: number | undefined
	): Promise<GetStoresResponse> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}

		const { data } = await axios.get(
			`${CONSTANTS.API_URL}/stores?name=${nameFilter}&page=${page}&limit=${limit}`,
			{ headers }
		)

		const stores: Store[] = data.stores.map(
			(storeJSON: StoreJSON) => new StoreJSONAdapter(storeJSON)
		)

		return {
			meta: data.meta,
			stores,
		}
	}
}
