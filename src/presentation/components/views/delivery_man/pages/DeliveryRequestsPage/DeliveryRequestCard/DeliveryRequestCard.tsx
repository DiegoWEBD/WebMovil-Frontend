import { FiCalendar, FiMapPin, FiNavigation } from 'react-icons/fi'
import { SaleSummary } from '../../../../../../../application/sale_service/types/SaleSummary'
import { localePrice } from '../../../../../../../utils/locale_number'
import Button from '../../../../../buttons/Button/Button'
import Card from '../../../../../containers/Card/Card'
import Skeleton from '../../../../../Skeleton/Skeleton'
import './DeliveryRequestCard.css'
import DeliveryData from '../../../../../../../domain/DispatchMethod/DeliveryData/DeliveryData'

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
	console.log(delivery)

	return (
		<Card className='delivery-request-card'>
			<div className='delivery-header'>
				<div className='delivery-code'>
					<h3>Pedido {delivery.code}</h3>
					<span className='delivery-status'>{delivery.status}</span>
				</div>
				<div className='delivery-total'>{localePrice(delivery.total)}</div>
			</div>

			<div className='delivery-info'>
				<div className='info-row'>
					<FiMapPin className='info-icon' />
					<div>
						<label>Tienda</label>
						<p>{delivery.storeName}</p>
					</div>
				</div>

				{delivery.dispatchMethod && (
					<div className='info-row'>
						<FiNavigation className='info-icon' />
						<div>
							<label>Dirección de Entrega</label>
							<p>
								{(delivery.dispatchMethod as DeliveryData).getStreet()}{' '}
								{(delivery.dispatchMethod as DeliveryData).getNumber()}
							</p>
							{(
								delivery.dispatchMethod as DeliveryData
							).getCustomerInstructions() && (
								<p className='delivery-instructions'>
									{(
										delivery.dispatchMethod as DeliveryData
									).getCustomerInstructions()}
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
