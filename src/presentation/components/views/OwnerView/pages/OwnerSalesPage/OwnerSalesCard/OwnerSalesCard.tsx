/* eslint-disable @typescript-eslint/no-explicit-any */
import './OwnerSalesCard.css'

import { useQuery } from '@tanstack/react-query'
import Sale from '../../../../../../../domain/Sale/Sale'
import SaleDetail from '../../../../../../../domain/SaleDetail/SaleDetail'
import apiClient from '../../../../../../../utils/axios_client'
import useOwnerState from '../../../../../../global_states/owner/ownerState'
import Card from '../../../../../containers/Card/Card'
import OwnerSalesCardItem from './OwnerSalesCardItem/OwnerSalesCardItem'

const OwnerSalesCard = () => {
	const { selectedOwnerStoreSummary } = useOwnerState()

	const { data, isLoading } = useQuery<Sale[] | undefined>({
		queryKey: ['ownerSales', selectedOwnerStoreSummary!.id],
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
		<Card className='sales-table'>
			<div className='table-header'>
				<div className='store-sale-card-code'>Código</div>
				<div className='store-sale-card-date'>Fecha</div>
				<div className='store-sale-card-time'>Hora</div>
				<div className='store-sale-card-user'>Cliente</div>
				<div className='store-sale-card-total'>Total</div>
				<div className='store-sale-card-status'>Estado</div>
			</div>
			{isLoading &&
				Array.from({ length: 10 }).map((_, index) => (
					<OwnerSalesCardItem key={index} sale={undefined} />
				))}
			{data?.map(sale => (
				<OwnerSalesCardItem key={sale.getCode()} sale={sale} />
			))}
		</Card>
	)
}

export default OwnerSalesCard
