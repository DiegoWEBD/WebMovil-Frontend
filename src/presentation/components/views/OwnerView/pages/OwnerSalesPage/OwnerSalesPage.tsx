/* eslint-disable @typescript-eslint/no-explicit-any */
import { LuShoppingCart } from 'react-icons/lu'
import OwnerSalesContainer from './OwnerSalesContainer/OwnerSalesContainer'
import OwnerSalesSummary from './OwnerSalesSummary/OwnerSalesSummary'
import { useQuery } from '@tanstack/react-query'
import Sale from '../../../../../../domain/Sale/Sale'
import SaleDetail from '../../../../../../domain/SaleDetail/SaleDetail'
import apiClient from '../../../../../../utils/axios_client'
import useOwnerState from '../../../../../global_states/owner/ownerState'

const OwnerSalesPage = () => {
	const { selectedOwnerStoreSummary } = useOwnerState()

	const { data, isLoading } = useQuery<Sale[] | undefined>({
		queryKey: ['ownerSales', selectedOwnerStoreSummary?.id],
		queryFn: async () => {
			const response = await apiClient.get(
				`/sales?store_id=${selectedOwnerStoreSummary!.id}`
			)
			return response.data.map(
				(sale: any) =>
					new Sale(
						sale.code,
						sale.userEmail,
						sale.storeId,
						sale.total,
						new Date(sale.date),
						sale.details.map(
							(detail: any) =>
								new SaleDetail(
									detail.productCode,
									detail.productName,
									detail.quantity,
									detail.unitPrice
								)
						),
						sale.feedbackId
					)
			)
		},
		enabled: !!selectedOwnerStoreSummary,
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
