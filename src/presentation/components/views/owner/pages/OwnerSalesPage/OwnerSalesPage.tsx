import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { SaleSummary } from '../../../../../../application/sale_service/types/SaleSummary'
import { filterSalesByStatus } from '../../../../../../utils/filterSales'
import apiClient from '../../../../../../utils/axios_client'
import useOwnerState from '../../../../../global_states/owner/ownerState'
import SalesFilter, {
	SaleStatus,
} from '../../../shared/SalesFilter/SalesFilter'
import OwnerSalesContainer from './OwnerSalesContainer/OwnerSalesContainer'
import OwnerSalesSummary from './OwnerSalesSummary/OwnerSalesSummary'

const OwnerSalesPage = () => {
	const { selectedOwnerStoreSummary, saleServiceSocket } = useOwnerState()
	const [selectedStatus, setSelectedStatus] = useState<SaleStatus | 'Todas'>(
		'Todas'
	)

	const { data, isLoading, refetch } = useQuery<SaleSummary[] | undefined>({
		queryKey: ['ownerSales', selectedOwnerStoreSummary!.id],
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

	// Filter sales based on selected status
	const filteredSales = filterSalesByStatus(data, selectedStatus)

	useEffect(() => {
		const handleNewSale = () => {
			refetch()
		}

		const handleSaleUpdated = () => {
			refetch()
		}

		saleServiceSocket.on('new-sale', handleNewSale)
		saleServiceSocket.on('sale-updated', handleSaleUpdated)

		return () => {
			saleServiceSocket.off('new-sale', handleNewSale)
			saleServiceSocket.off('sale-updated', handleSaleUpdated)
		}
	}, [saleServiceSocket, refetch])

	return (
		<div className='owner-sales-page page-padding'>
			<OwnerSalesSummary sales={data} />
			<div className='page-title'>
				<LuShoppingCart className='page-title-icon' />
				<p>Ventas</p>
			</div>
			<SalesFilter
				selectedStatus={selectedStatus}
				onStatusChange={setSelectedStatus}
			/>
			<OwnerSalesContainer sales={filteredSales} isLoading={isLoading} />
		</div>
	)
}

export default OwnerSalesPage
