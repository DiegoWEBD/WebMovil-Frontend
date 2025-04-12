import Store from '../../domain/Store/Store'
import StoreJSON from '../store/StoreJSON.interface'

export default class StoreJSONAdapter extends Store {
	constructor(storeJSON: StoreJSON) {
		super(
			storeJSON.name,
			storeJSON.description,
			storeJSON.direction,
			storeJSON.phone,
			storeJSON.owners_emails,
			storeJSON.id
		)
	}
}
