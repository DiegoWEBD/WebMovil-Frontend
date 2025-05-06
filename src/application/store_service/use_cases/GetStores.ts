import axios from 'axios'
import { CONSTANTS } from '../../../utils/constants'
import StoreSummary from '../../types/StoreSummary.interface'
import StoresMetadata from '../StoresMetadata'

export interface GetStoresResponse {
	meta: StoresMetadata
	stores: StoreSummary[]
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

		const response = await axios.get(
			`${CONSTANTS.API_URL}/stores?name=${nameFilter}&page=${page}&limit=${limit}`,
			{ headers }
		)

		const storeSummaries: StoreSummary[] = response.data.stores.map(
			(store: StoreSummary) => ({
				...store,
				//random number between 1 and 5 with 1 decimal
				feedback_rating: parseFloat((Math.random() * 4 + 1).toFixed(1)),
			})
		)

		return {
			meta: response.data.meta,
			stores: storeSummaries,
		}
	}
}
