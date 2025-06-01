import '../OwnerSalesContainer.css'

import Sale from '../../../../../../../../domain/Sale/Sale'
import Skeleton from '../../../../../../Skeleton/Skeleton'
import Card from '../../../../../../containers/Card/Card'

type OwnerSalesCardItemProps = {
	sale: Sale | undefined
}

const OwnerSalesCardItem = ({ sale }: OwnerSalesCardItemProps) => {
	return (
		<Card className='store-sale-card'>
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
					<p className='store-sale-card-total'>${sale.getTotal()}</p>
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

export default OwnerSalesCardItem
