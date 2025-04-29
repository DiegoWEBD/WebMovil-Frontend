import axios from 'axios'
import Store from '../../../domain/Store/Store'
import { CONSTANTS } from '../../../utils/constants'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'

export default class GetStoreByName {
	async execute(name: string): Promise<Store | undefined> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}
		const response = await axios.get(
			`${CONSTANTS.API_URL}/stores?name=${encodeURIComponent(name)}`,
			{
				headers,
			}
		)

		return response.data.stores.length > 0
			? new StoreJSONAdapter(response.data.stores[0])
			: undefined
	}
}
