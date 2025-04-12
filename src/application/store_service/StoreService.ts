import Store from '../../domain/Store/Store'
import IStoreService from './IStoreService.interface'
import GetStoresByOwnerEmail from './use_cases/GetStoresByOwnerEmail'

export default class StoreService implements IStoreService {
	private _getStoresByOwnerEmail: GetStoresByOwnerEmail

	constructor() {
		this._getStoresByOwnerEmail = new GetStoresByOwnerEmail()
	}

	getStoresByOwnerEmail(ownerEmail: string): Promise<Store[]> {
		return this._getStoresByOwnerEmail.execute(ownerEmail)
	}
}
