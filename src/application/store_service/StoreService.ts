import Store from '../../domain/Store/Store'
import IStoreService from './IStoreService.interface'
import GetStoreByName from './use_cases/GetStoreByName'
import GetAllStores, { GetStoresResponse } from './use_cases/GetStores'
import GetStoresByOwnerEmail from './use_cases/GetStoresByOwnerEmail'

export default class StoreService implements IStoreService {
	private _getStoreByName: GetStoreByName
	private _getStoresByOwnerEmail: GetStoresByOwnerEmail
	private _getStores: GetAllStores

	constructor() {
		this._getStoreByName = new GetStoreByName()
		this._getStoresByOwnerEmail = new GetStoresByOwnerEmail()
		this._getStores = new GetAllStores()
	}

	getStoreByName(name: string): Promise<Store | undefined> {
		return this._getStoreByName.execute(name)
	}

	getStores(
		nameFilter: string,
		page: number | undefined = 1,
		limit: number | undefined = 10
	): Promise<GetStoresResponse> {
		return this._getStores.execute(nameFilter, page, limit)
	}

	getStoresByOwnerEmail(ownerEmail: string): Promise<Store[]> {
		return this._getStoresByOwnerEmail.execute(ownerEmail)
	}
}
