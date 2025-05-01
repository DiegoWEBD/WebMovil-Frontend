import axios from 'axios'
import Store from '../../../domain/Store/Store'
import { CONSTANTS } from '../../../utils/constants'
import StoreJSONAdapter from '../../../infrastructure/adapters/StoreJSONAdapter'

export default class GetStoreById {
	async execute(id: string): Promise<Store | undefined> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}

		try {
			const { data } = await axios.get(`${CONSTANTS.API_URL}/stores/${id}`, {
				headers,
			})

			return data ? new StoreJSONAdapter(data) : undefined
		} catch (error) {
			console.error(error)
			return undefined
		}
	}
}
