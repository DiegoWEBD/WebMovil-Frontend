import Store from '../../domain/Store/Store'

export default interface IStoreService {
	getStoresByOwnerEmail(ownerEmail: string): Promise<Store[]>
}
