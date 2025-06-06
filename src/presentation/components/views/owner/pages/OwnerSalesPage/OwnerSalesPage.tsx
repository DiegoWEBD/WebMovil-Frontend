import { useQuery } from '@tanstack/react-query'
import { LuShoppingCart } from 'react-icons/lu'
import { SaleSummary } from '../../../../../../application/sale_service/types/SaleSummary'
import apiClient from '../../../../../../utils/axios_client'
import useOwnerState from '../../../../../global_states/owner/ownerState'
import OwnerSalesContainer from './OwnerSalesContainer/OwnerSalesContainer'
import OwnerSalesSummary from './OwnerSalesSummary/OwnerSalesSummary'

const OwnerSalesPage = () => {
	const { selectedOwnerStoreSummary, saleServiceSocket } = useOwnerState()

	const { data, isLoading, refetch } = useQuery<SaleSummary[] | undefined>({
		queryKey: ['ownerSales', selectedOwnerStoreSummary?.id],
		queryFn: async () => {
			const response = await apiClient.get(
				`/sales?store_id=${selectedOwnerStoreSummary!.id}`
			)

			return response.data.map((saleSummary: SaleSummary) => ({
				...saleSummary,
				date: new Date(saleSummary.date),
			}))
		},
		enabled: !!selectedOwnerStoreSummary,
	})

	saleServiceSocket.on('new-sale', () => {
		console.log('New sale registered')
		refetch()
	})

	return (
		<div className='owner-sales-page page-padding'>
			<OwnerSalesSummary sales={data} />
			<div className='page-title'>
				<LuShoppingCart className='page-title-icon' />
				<p>Ventas</p>
			</div>
			<OwnerSalesContainer sales={data} isLoading={isLoading} />
		</div>
	)
}

export default OwnerSalesPage
