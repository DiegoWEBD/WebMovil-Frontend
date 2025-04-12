import axios from 'axios'
import Store from '../../../domain/Store/Store'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'
import StoreJSON from '../../../infrastructure/store/StoreJSON.interface'

export default class GetStoresByOwnerEmail {
	async execute(ownerEmail: string): Promise<Store[]> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}

		const { data } = await axios.get(
			`http://localhost:3000/stores/${encodeURIComponent(ownerEmail)}`,
			{ headers }
		)

		return data.stores.map(
			(storeJSON: StoreJSON) => new StoreJSONAdapter(storeJSON)
		)
	}
}
