import Store from '../../domain/Store/Store'
import { GetStoresResponse } from './use_cases/GetStores'

export default interface IStoreService {
	getStores(page?: number, limit?: number): Promise<GetStoresResponse>
	getStoresByOwnerEmail(ownerEmail: string): Promise<Store[]>
}
