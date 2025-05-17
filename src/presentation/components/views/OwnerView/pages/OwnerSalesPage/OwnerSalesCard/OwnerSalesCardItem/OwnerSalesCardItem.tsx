import '../OwnerSalesCard.css'

import Sale from '../../../../../../../../domain/Sale/Sale'
import Skeleton from '../../../../../../Skeleton/Skeleton'

type OwnerSalesCardItemProps = {
	sale: Sale | undefined
}

const OwnerSalesCardItem = ({ sale }: OwnerSalesCardItemProps) => {
	return (
		<div className='table-row'>
			<div className='store-sale-card-code'>
				{sale ? <p>{sale.getCode()}</p> : <Skeleton />}
			</div>
			<div className='store-sale-card-date'>
				{sale ? (
					<p>{sale.getDate().toLocaleDateString('es-CL')}</p>
				) : (
					<Skeleton />
				)}
			</div>
			<div className='store-sale-card-time'>
				{sale ? (
					<p>
						{sale.getDate().toLocaleTimeString('es-CL', {
							hour12: false,
						})}
					</p>
				) : (
					<Skeleton />
				)}
			</div>
			<div className='store-sale-card-user'>
				{sale ? <p>María González</p> : <Skeleton />}
			</div>
			<div className='store-sale-card-total'>
				{sale ? <p>${sale.getTotal()}</p> : <Skeleton />}
			</div>
			<div className='store-sale-card-status completed'>
				{sale ? <p>Completada</p> : <Skeleton />}
			</div>
		</div>
	)
}

export default OwnerSalesCardItem
