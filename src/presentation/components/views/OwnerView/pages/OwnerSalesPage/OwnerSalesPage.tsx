import { useQuery } from '@tanstack/react-query'
import apiClient from '../../../../../../utils/axios_client'
import useOwnerState from '../../../../../global_states/owner/ownerState'

const OwnerSalesPage = () => {
	const { selectedOwnerStoreSummary } = useOwnerState()

	const { data } = useQuery({
		queryKey: ['ownerSales', selectedOwnerStoreSummary!.id],
		queryFn: async () => {
			const response = await apiClient.get(
				`/sales?store_id=${selectedOwnerStoreSummary!.id}`
			)
			return response.data
		},
		enabled: !!selectedOwnerStoreSummary,
	})
	console.log(data)
	return (
		<div className='owner-sales-page page-padding'>
			<p className='page-title'>Ventas</p>
		</div>
	)
}

export default OwnerSalesPage
