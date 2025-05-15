import { useQuery } from '@tanstack/react-query'
import Store from '../../../../../../domain/Store/Store'
import OwnerStoreGeneralCard from './OwnerStoreGeneralCard/OwnerStoreGeneralCard'
import useOwnerState from '../../../../../global_states/owner/ownerState'
import useAppState from '../../../../../global_states/appState'

const OwnerStoreProfilePage = () => {
	const { storeService } = useAppState()
	const { selectedOwnerStoreSummary } = useOwnerState()
	const { data } = useQuery<Store | undefined>({
		queryKey: ['ownerStoreData', selectedOwnerStoreSummary],
		queryFn: async () => {
			if (!selectedOwnerStoreSummary) return undefined
			return await storeService.getStoreById(selectedOwnerStoreSummary.id)
		},
	})

	return (
		<div>
			<p className='page-title'>Perfil de Tienda</p>
			<OwnerStoreGeneralCard store={data} />
		</div>
	)
}

export default OwnerStoreProfilePage
