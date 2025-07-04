import { useQuery, useQueryClient } from '@tanstack/react-query'
import { LuTruck } from 'react-icons/lu'
import { SaleSummary } from '../../../../../../application/sale_service/types/SaleSummary'
import useDeliveryManState from '../../../../../global_states/delivery_man/deliveryManState'
import GridContainer from '../../../../containers/GridContainer/GridContainer'
import DeliveryRequestCard from './DeliveryRequestCard/DeliveryRequestCard'
import './DeliveryRequestsPage.css'
import { useEffect } from 'react'

const DeliveryRequestsPage = () => {
	const { deliveryService, deliveryServiceSocket } = useDeliveryManState()
	const queryClient = useQueryClient()

	const {
		data: deliveries,
		isLoading,
		refetch,
	} = useQuery<SaleSummary[]>({
		queryKey: ['availableDeliveries'],
		queryFn: async () => await deliveryService.getAvailableDeliveries(),
	})

	useEffect(() => {
		const handleDeliveryRequested = () => {
			console.log('Delivery requested')
			refetch()
		}

		deliveryServiceSocket.on('shipping-requested', handleDeliveryRequested)

		return () => {
			deliveryServiceSocket.off('shipping-requested', handleDeliveryRequested)
		}
	}, [deliveryServiceSocket, refetch])

	const handleAcceptDelivery = async (saleCode: string) => {
		try {
			await deliveryService.acceptDelivery(saleCode)
			// Refetch the available deliveries
			await queryClient.invalidateQueries({ queryKey: ['availableDeliveries'] })
		} catch (error) {
			console.error('Error accepting delivery:', error)
		}
	}

	return (
		<div className='delivery-requests-page page-padding'>
			<div className='page-title'>
				<LuTruck className='page-title-icon' />
				<p>Entregas Disponibles</p>
			</div>

			{deliveries && deliveries.length === 0 && !isLoading && (
				<div className='no-deliveries'>
					<LuTruck className='no-deliveries-icon' />
					<p>No hay entregas disponibles en este momento</p>
				</div>
			)}

			<GridContainer className='deliveries-container'>
				{deliveries?.map(delivery => (
					<DeliveryRequestCard
						key={delivery.code}
						delivery={delivery}
						onAccept={() => handleAcceptDelivery(delivery.code)}
					/>
				))}
				{isLoading &&
					Array.from({ length: 6 }).map((_, index) => (
						<DeliveryRequestCard key={index} />
					))}
			</GridContainer>
		</div>
	)
}

export default DeliveryRequestsPage
