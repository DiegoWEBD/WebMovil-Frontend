import '../OwnerSalesContainer.css'

import Sale from '../../../../../../../../domain/Sale/Sale'
import Skeleton from '../../../../../../Skeleton/Skeleton'
import Card from '../../../../../../containers/Card/Card'
import useModalState from '../../../../../../../global_states/modalState'
import SaleDetailView from '../../SaleDetailView/SaleDetailView'
import { localePrice } from '../../../../../../../../utils/locale_number'

type OwnerSaleCardProps = {
	sale: Sale | undefined
}

const OwnerSaleCard = ({ sale }: OwnerSaleCardProps) => {
	const { openModal } = useModalState()

	return (
		<Card
			className='store-sale-card'
			onClick={() =>
				sale
					? openModal(<SaleDetailView saleCode={sale.getCode() || ''} />, true)
					: undefined
			}
		>
			<div className='left-side'>
				{sale ? (
					<p className='store-sale-card-code'>{sale.getCode()}</p>
				) : (
					<Skeleton />
				)}

				{sale ? (
					<p className='store-sale-card-user'>{sale.getUserName()}</p>
				) : (
					<Skeleton />
				)}

				<div className='store-sale-card-date-time'>
					{sale ? (
						<p className='store-sale-card-date'>
							{sale.getDate().toLocaleDateString('es-CL')}
						</p>
					) : (
						<Skeleton />
					)}

					{sale ? (
						<p className='store-sale-card-time'>
							{sale.getDate().toLocaleTimeString('es-CL', {
								hour12: false,
							})}
						</p>
					) : (
						<Skeleton />
					)}
				</div>
			</div>

			<div className='right-side'>
				{sale ? (
					<p className='store-sale-card-total'>
						{localePrice(sale.getTotal())}
					</p>
				) : (
					<Skeleton />
				)}

				{sale ? (
					<p className='store-sale-card-status completed'>Completada</p>
				) : (
					<Skeleton />
				)}
			</div>
		</Card>
	)
}

export default OwnerSaleCard
