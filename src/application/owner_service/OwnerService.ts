import IOwnerService from './IOwnerService.interface'
import OwnerStoreSummary from './types/OwnerStoreSummary'
import GetOwnerStores from './use_cases/GetOwnerStores'

export default class OwnerService implements IOwnerService {
	private _getOwnerStores: GetOwnerStores

	constructor() {
		this._getOwnerStores = new GetOwnerStores()
	}

	getOwnerStores(ownerEmail: string): Promise<OwnerStoreSummary[]> {
		return this._getOwnerStores.execute(ownerEmail)
	}
}
