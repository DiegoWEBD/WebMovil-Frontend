import Schedule from '../../domain/Schedule/Schedule'
import Store from '../../domain/Store/Store'
import StoreJSON from '../store/StoreJSON.interface'

export default class StoreJSONAdapter extends Store {
	constructor(storeJSON: StoreJSON) {
		super(
			storeJSON.name,
			storeJSON.description,
			storeJSON.about,
			storeJSON.direction,
			storeJSON.phone,
			storeJSON.email,
			storeJSON.schedules.map(
				schedule => new Schedule(schedule.day, schedule.open, schedule.close)
			),
			storeJSON.owners_emails,
			storeJSON.image_name,
			storeJSON.id
		)
	}
}
