import { useQuery } from '@tanstack/react-query'
import Store from '../../../../../domain/Store/Store'
import PageChanger from '../StoresContainer/PageChanger/PageChanger'
import StoresContainer from '../StoresContainer/StoresContainer'
import { useState } from 'react'
import useAppState from '../../../../global_states/appState'

type StoresViewerProps = {
	input: string
}

const StoresViewer = ({ input }: StoresViewerProps) => {
	const { storeService } = useAppState()
	const [page, setPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)

	const { data, isLoading, error } = useQuery<Store[]>({
		queryKey: ['stores', page, input],
		queryFn: async () => {
			const response = await storeService.getStores(input, page, 8)
			setTotalPages(response.meta?.total_pages || 2)
			return response.stores
		},
	})

	if (isLoading) return <p>Cargando...</p>
	if (error) return <p>Error al cargar las tiendas disponibles</p>

	return (
		<div>
			<StoresContainer stores={data} />
			<PageChanger page={page} totalPages={totalPages} setPage={setPage} />
		</div>
	)
}

export default StoresViewer
