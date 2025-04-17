import './StoresContainer.css'

import { useQuery } from '@tanstack/react-query'
import Store from '../../../../../domain/Store/Store'
import useAppState from '../../../../global_states/appState'
import StoreCard from '../StoreCard/StoreCard'
import { useState } from 'react'
import PageChanger from './PageChanger/PageChanger'

const StoresContainer = () => {
	const { storeService } = useAppState()
	const [page, setPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)

	const { data, isLoading, error } = useQuery<Store[]>({
		queryKey: ['stores', page],
		queryFn: async () => {
			const response = await storeService.getStores(page, 8)
			setTotalPages(response.meta.total_pages)
			return response.stores
		},
	})

	if (isLoading) return <p>Cargando...</p>
	if (error) return <p>Error al cargar las tiendas disponibles</p>

	return (
		<>
			<div className='store-list'>
				{data?.map(store => (
					<StoreCard key={store.getId()} store={store} />
				))}
			</div>
			<PageChanger page={page} totalPages={totalPages} setPage={setPage} />
		</>
	)
}

export default StoresContainer
