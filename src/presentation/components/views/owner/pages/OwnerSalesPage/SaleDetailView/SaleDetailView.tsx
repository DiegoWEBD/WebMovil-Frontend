import { useQuery, useQueryClient } from '@tanstack/react-query'
import './SaleDetailView.css'

import { FaRegClock, FaRegCreditCard } from 'react-icons/fa'
import { FiCalendar, FiUser } from 'react-icons/fi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { localePrice } from '../../../../../../../utils/locale_number'
import useAppState from '../../../../../../global_states/appState'
import Skeleton from '../../../../../Skeleton/Skeleton'
import Button from '../../../../../buttons/Button/Button'
import Card from '../../../../../containers/Card/Card'
import SaleProductsView from './SaleProductsView/SaleProductsView'

type SaleDetailViewProps = {
	saleCode: string
}

const SaleDetailView = ({ saleCode }: SaleDetailViewProps) => {
	const { saleService } = useAppState()
	const queryClient = useQueryClient()

	const { data, isFetching } = useQuery({
		queryKey: ['saleDetail', saleCode],
		queryFn: async () => await saleService.getSaleDetail(saleCode),
	})

	const handleCreateDispatchOrder = async () => {
		try {
			await saleService.createDispatchOrder(saleCode)
			// Refetch the sale detail to get updated state
			await queryClient.invalidateQueries({
				queryKey: ['saleDetail', saleCode],
			})
			// Also refetch the sales list to update the sales list view
			await queryClient.invalidateQueries({ queryKey: ['ownerSales'] })
		} catch (error) {
			console.error('Error creating dispatch order:', error)
		}
	}

	const handleMarkAsDelivered = async () => {
		try {
			await saleService.dispatch(saleCode)
			// Refetch the sale detail to get updated state
			await queryClient.invalidateQueries({
				queryKey: ['saleDetail', saleCode],
			})
			// Also refetch the sales list to update the sales list view
			await queryClient.invalidateQueries({ queryKey: ['ownerSales'] })
		} catch (error) {
			console.error('Error marking as delivered:', error)
		}
	}

	// Determine button state based on sale data
	const getButtonState = () => {
		if (!data) return null

		const hasDispatchOrder = !!data.getDispatchOrder()
		const hasDispatch = !!data.getDispatch()
		const dispatchMethod = data.getDispatchMethod()

		if (!hasDispatchOrder && !hasDispatch) {
			return {
				type: 'create' as const,
				text: 'Crear orden de entrega',
				onClick: handleCreateDispatchOrder,
				disabled: false,
			}
		}

		if (hasDispatchOrder && !hasDispatch) {
			if (dispatchMethod!.type === 'delivery') {
				return {
					type: 'disabled' as const,
					text: 'En despacho',
					onClick: undefined,
					disabled: true,
				}
			} else if (dispatchMethod!.type === 'pickup') {
				return {
					type: 'mark-delivered' as const,
					text: 'Marcar como entregado',
					onClick: handleMarkAsDelivered,
					disabled: false,
				}
			}
		}

		// If both dispatch order and dispatch exist, no button needed
		return null
	}

	const buttonState = getButtonState()

	console.log(data)

	return (
		<div className='sale-detail-view page-padding'>
			<div className='page-title-header'>
				<HiOutlineDocumentText className='page-title-icon' />
				<h1 className='page-title'>Detalle de Venta</h1>
			</div>

			{!isFetching ? <p className='sale-status'>Completada</p> : <Skeleton />}

			<Card>
				<div className='sale-detail-info'>
					<label>Código de Venta</label>
					{!isFetching ? (
						<p className='sale-code'>{data?.getCode()}</p>
					) : (
						<Skeleton />
					)}
				</div>
				<div className='sale-detail-info'>
					<label>Cliente</label>
					<div className='sale-detail-data user'>
						<FiUser className='sale-detail-icon' />
						<div>
							{!isFetching ? <p>{data?.getUserName()}</p> : <Skeleton />}
							<p className='email'>{data?.getUserEmail()}</p>
						</div>
					</div>
				</div>
				<div className='sale-detail-info'>
					<label>Fecha</label>
					{!isFetching ? (
						<div className='sale-detail-data'>
							<FiCalendar className='sale-detail-icon' />
							<p>{data?.getDate().toLocaleDateString()}</p>
						</div>
					) : (
						<Skeleton />
					)}
				</div>
				<div className='sale-detail-info'>
					<label>Hora</label>
					{!isFetching ? (
						<div className='sale-detail-data'>
							<FaRegClock className='sale-detail-icon' />
							<p>{data?.getDate().toLocaleTimeString()}</p>
						</div>
					) : (
						<Skeleton />
					)}
				</div>

				<SaleProductsView details={data?.getDetails()} />
			</Card>

			<Card className='sale-detail-total-card'>
				{isFetching ? (
					<Skeleton />
				) : (
					<div className='sale-detail-data'>
						<label>Total</label>
						<p className='sale-detail-total'>
							{data ? localePrice(data.getTotal()) : ''}
						</p>
					</div>
				)}
				<Card className='payment-method'>
					<h4>Método de pago</h4>
					<div>
						<FaRegCreditCard className='sale-detail-icon' />
						<p>Tarjeta de Débito</p>
					</div>
				</Card>
			</Card>

			{buttonState && (
				<Card>
					<Button onClick={buttonState.onClick} disabled={buttonState.disabled}>
						{buttonState.text}
					</Button>
				</Card>
			)}
		</div>
	)
}

export default SaleDetailView
