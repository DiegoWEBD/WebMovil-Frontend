import Store from '../../domain/Store/Store'
import { GetStoresResponse } from './use_cases/GetStores'

export default interface IStoreService {
	getStoreByName(name: string): Promise<Store | undefined>
	getStores(
		nameFilter: string,
		page: number | undefined,
		limit: number | undefined
	): Promise<GetStoresResponse>
	getStoresByOwnerEmail(ownerEmail: string): Promise<Store[]>
	getStoreById(id: string): Promise<Store | undefined>
}
