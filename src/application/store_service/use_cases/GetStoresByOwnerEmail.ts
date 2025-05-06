import axios from 'axios'
import Store from '../../../domain/Store/Store'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'
import StoreJSON from '../../../infrastructure/store/StoreJSON.interface'
import { CONSTANTS } from '../../../utils/constants'

export default class GetStoresByOwnerEmail {
	async execute(ownerEmail: string): Promise<Store[]> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}

		const { data } = await axios.get(
			`${CONSTANTS.API_URL}/stores/${encodeURIComponent(ownerEmail)}`,
			{ headers }
		)

		return data.stores.map(
			(storeJSON: StoreJSON) => new StoreJSONAdapter(storeJSON)
		)
	}
}
