import './OwnerView.css'
import { useQuery } from '@tanstack/react-query'
import useAppState from '../../../global_states/appState'
import StoreCard from '../StoreCard/StoreCard'
import Store from '../../../../domain/Store/Store'

const OwnerView = () => {
	const { userEmail, storeService } = useAppState()

	const { data, isLoading, error } = useQuery<Store[]>({
		queryKey: ['owner_stores'],
		queryFn: async () => {
			if (!userEmail) return []
			return await storeService.getStoresByOwnerEmail(userEmail)
		},
	})

	if (isLoading) return <p>Cargando...</p>
	if (error) return <p>Error al cargar las tiendas del locatario</p>

	return (
		<div className='owner-view'>
			<h1>Tiendas del locatario</h1>
			<div className='store-list'>
				{data?.map(store => (
					<StoreCard key={store.getId()} store={store} />
				))}
			</div>
		</div>
	)
}

export default OwnerView
