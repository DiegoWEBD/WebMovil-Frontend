import { FiCalendar, FiUser, FiMapPin, FiNavigation } from 'react-icons/fi'
import { SaleSummary } from '../../../../../../../application/sale_service/types/SaleSummary'
import { localePrice } from '../../../../../../../utils/locale_number'
import Button from '../../../../../buttons/Button/Button'
import Card from '../../../../../containers/Card/Card'
import Skeleton from '../../../../../Skeleton/Skeleton'
import './DeliveryRequestCard.css'

type DeliveryRequestCardProps = {
	delivery?: SaleSummary
	onAccept?: () => void
}

const DeliveryRequestCard = ({
	delivery,
	onAccept,
}: DeliveryRequestCardProps) => {
	if (!delivery) {
		return (
			<Card className='delivery-request-card'>
				<Skeleton />
			</Card>
		)
	}

	return (
		<Card className='delivery-request-card'>
			<div className='delivery-header'>
				<div className='delivery-code'>
					<h3>Pedido #{delivery.code}</h3>
					<span className='delivery-status'>{delivery.status}</span>
				</div>
				<div className='delivery-total'>{localePrice(delivery.total)}</div>
			</div>

			<div className='delivery-info'>
				<div className='info-row'>
					<FiUser className='info-icon' />
					<div>
						<label>Cliente</label>
						<p>{delivery.userName}</p>
					</div>
				</div>

				<div className='info-row'>
					<FiMapPin className='info-icon' />
					<div>
						<label>Tienda</label>
						<p>{delivery.storeName}</p>
					</div>
				</div>

				{delivery.deliveryAddress && (
					<div className='info-row'>
						<FiNavigation className='info-icon' />
						<div>
							<label>Dirección de Entrega</label>
							<p>
								{delivery.deliveryAddress.street}{' '}
								{delivery.deliveryAddress.number}
							</p>
							{delivery.deliveryAddress.instructions && (
								<p className='delivery-instructions'>
									{delivery.deliveryAddress.instructions}
								</p>
							)}
						</div>
					</div>
				)}

				<div className='info-row'>
					<FiCalendar className='info-icon' />
					<div>
						<label>Fecha</label>
						<p>{delivery.date.toLocaleDateString()}</p>
					</div>
				</div>
			</div>

			<div className='delivery-actions'>
				<Button className='accept-button' onClick={onAccept}>
					Aceptar Entrega
				</Button>
			</div>
		</Card>
	)
}

export default DeliveryRequestCard
