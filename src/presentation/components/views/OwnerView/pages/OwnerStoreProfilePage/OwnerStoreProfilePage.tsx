import './OwnerStoreProfilePage.css'

import { useQuery } from '@tanstack/react-query'
import { FiEdit } from 'react-icons/fi'
import Store from '../../../../../../domain/Store/Store'
import useAppState from '../../../../../global_states/appState'
import useOwnerState from '../../../../../global_states/owner/ownerState'
import Button from '../../../../buttons/Button/Button'
import OwnerStoreGeneralCard from './OwnerStoreGeneralCard/OwnerStoreGeneralCard'

const OwnerStoreProfilePage = () => {
	const { storeService } = useAppState()
	const { selectedOwnerStoreSummary } = useOwnerState()
	const { data } = useQuery<Store | undefined>({
		queryKey: ['ownerStoreData', selectedOwnerStoreSummary],
		queryFn: async () =>
			await storeService.getStoreById(selectedOwnerStoreSummary!.id),
		enabled: !!selectedOwnerStoreSummary,
	})

	return (
		<div className='page-padding'>
			<div className='owner-store-profile-header'>
				<p className='page-title'>Perfil de Tienda</p>
				<Button className='primary'>
					<FiEdit className='button-icon' />
					<p>Guardar</p>
				</Button>
			</div>
			<OwnerStoreGeneralCard store={data} />
		</div>
	)
}

export default OwnerStoreProfilePage
