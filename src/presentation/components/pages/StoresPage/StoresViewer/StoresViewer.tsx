import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import StoreSummary from '../../../../../application/types/StoreSummary.interface'
import useAppState from '../../../../global_states/appState'
import PageChanger from '../StoresContainer/PageChanger/PageChanger'
import StoresContainer from '../StoresContainer/StoresContainer'

type StoresViewerProps = {
	input: string
}

const StoresViewer = ({ input }: StoresViewerProps) => {
	const { storeService } = useAppState()
	const [page, setPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)

	const { data, error } = useQuery<StoreSummary[]>({
		queryKey: ['stores', page, input],
		queryFn: async () => {
			const response = await storeService.getStores(input, page, 8)

			setTotalPages(response.meta?.total_pages || 1)
			return response.stores
		},
	})

	if (error) return <p>Error al cargar las tiendas disponibles</p>

	return (
		<div>
			<StoresContainer stores={data} />
			{data && (
				<PageChanger page={page} totalPages={totalPages} setPage={setPage} />
			)}
		</div>
	)
}

export default StoresViewer
