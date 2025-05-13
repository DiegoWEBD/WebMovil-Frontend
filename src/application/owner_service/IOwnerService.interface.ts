import OwnerStoreSummary from './types/OwnerStoreSummary'

export default interface IOwnerService {
	getOwnerStores(ownerEmail: string): Promise<OwnerStoreSummary[]>
}
