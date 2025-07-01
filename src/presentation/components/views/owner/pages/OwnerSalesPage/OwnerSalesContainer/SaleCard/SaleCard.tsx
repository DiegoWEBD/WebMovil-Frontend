import '../OwnerSalesContainer.css'

import { SaleSummary } from '../../../../../../../../application/sale_service/types/SaleSummary'
import { localePrice } from '../../../../../../../../utils/locale_number'
import useModalState from '../../../../../../../global_states/modalState'
import Skeleton from '../../../../../../Skeleton/Skeleton'
import Card from '../../../../../../containers/Card/Card'
import OwnerProtectedComponent from '../../../../../../protected_components/owner/OwnerProtectedComponent'
import SaleDetailView from '../../SaleDetailView/SaleDetailView'
import ClientProtectedComponent from '../../../../../../protected_components/client/ClientProtectedComponent'

type SaleCardProps = {
	sale?: SaleSummary
}

const SaleCard = ({ sale }: SaleCardProps) => {
	const { openModal } = useModalState()

	let statusClass = ''

	if (sale?.status === 'Completada') statusClass = 'completed'
	else if (sale?.status === 'Pendiente') statusClass = 'pending'

	return (
		<Card
			className={`store-sale-card ${sale ? 'clickable' : ''}`}
			onClick={() =>
				sale
					? openModal(<SaleDetailView saleCode={sale.code || ''} />, true)
					: undefined
			}
		>
			<div className='left-side'>
				{sale ? (
					<p className='store-sale-card-code'>{sale.code}</p>
				) : (
					<Skeleton width='60%' />
				)}

				<OwnerProtectedComponent>
					{sale ? (
						<p className='store-sale-card-user'>{sale.userName}</p>
					) : (
						<Skeleton width='80%' />
					)}
				</OwnerProtectedComponent>

				<ClientProtectedComponent>
					{sale ? (
						<p className='store-sale-card-user'>{sale.storeName}</p>
					) : (
						<Skeleton width='80%' />
					)}
				</ClientProtectedComponent>

				<div className='store-sale-card-date-time'>
					{sale ? (
						<p className='store-sale-card-date'>
							{sale.date.toLocaleDateString('es-CL')}
						</p>
					) : (
						<Skeleton width='20%' />
					)}

					{sale ? (
						<p className='store-sale-card-time'>
							{sale.date.toLocaleTimeString('es-CL', {
								hour12: false,
							})}
						</p>
					) : (
						<Skeleton width='20%' />
					)}
				</div>
			</div>

			<div className='right-side'>
				{sale ? (
					<p className='store-sale-card-total'>{localePrice(sale.total)}</p>
				) : (
					<Skeleton width='50%' />
				)}

				{sale ? (
					<p className={`store-sale-card-status ${statusClass}`}>
						{sale.status}
					</p>
				) : (
					<Skeleton width='50%' />
				)}
			</div>
		</Card>
	)
}

export default SaleCard
