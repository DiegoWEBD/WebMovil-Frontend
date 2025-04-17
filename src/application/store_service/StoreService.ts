import Store from '../../domain/Store/Store'
import IStoreService from './IStoreService.interface'
import GetAllStores, { GetStoresResponse } from './use_cases/GetStores'
import GetStoresByOwnerEmail from './use_cases/GetStoresByOwnerEmail'

export default class StoreService implements IStoreService {
	private _getStoresByOwnerEmail: GetStoresByOwnerEmail
	private _getStores: GetAllStores

	constructor() {
		this._getStoresByOwnerEmail = new GetStoresByOwnerEmail()
		this._getStores = new GetAllStores()
	}

	getStores(
		page: number | undefined = 1,
		limit: number | undefined = 10
	): Promise<GetStoresResponse> {
		return this._getStores.execute(page, limit)
	}

	getStoresByOwnerEmail(ownerEmail: string): Promise<Store[]> {
		return this._getStoresByOwnerEmail.execute(ownerEmail)
	}
}
