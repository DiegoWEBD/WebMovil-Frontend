import { useQuery } from '@tanstack/react-query'
import { SaleSummary } from '../../../../../../application/sale_service/types/SaleSummary'
import apiClient from '../../../../../../utils/axios_client'
import useAppState from '../../../../../global_states/appState'
import GridContainer from '../../../../containers/GridContainer/GridContainer'
import OwnerSaleCard from '../../../owner/pages/OwnerSalesPage/OwnerSalesContainer/SaleCard/SaleCard'

const OrdersPage = () => {
	const { basicUserInfo } = useAppState()

	const { data, isFetching } = useQuery<SaleSummary[] | undefined>({
		queryKey: ['customer-purchases', basicUserInfo!.email],
		queryFn: async () => {
			const response = await apiClient.get(
				`/sales?user_email=${basicUserInfo!.email}`
			)

			return response.data.map((saleSummary: SaleSummary) => ({
				...saleSummary,
				date: new Date(saleSummary.date),
			}))
		},
		enabled: !!basicUserInfo,
	})

	return (
		<div className='page-padding'>
			<p className='page-title'>Mis Compras</p>
			<GridContainer className='fr'>
				{data?.map(sale => (
					<OwnerSaleCard key={sale.code} sale={sale} />
				))}
				{isFetching &&
					Array.from({ length: 6 }).map((_, index) => (
						<OwnerSaleCard key={index} />
					))}
			</GridContainer>
		</div>
	)
}

export default OrdersPage
