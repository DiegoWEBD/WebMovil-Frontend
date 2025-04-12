import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import '../ShippingPage.css'

type DriverViewProps = {
	socket: Socket | undefined
}

interface ShippingRequest {
	shippingOrderCode: string
	storeId: string
	shippingDirection: string
}

const DriverView = ({ socket }: DriverViewProps) => {
	const [requestedShippings, setRequestedShippings] = useState<
		ShippingRequest[]
	>([])

	useEffect(() => {
		if (!socket) return

		socket.on('shipping-requested', data => {
			setRequestedShippings(prev => [
				...prev,
				{
					shippingOrderCode: data.shipping_order_code,
					storeId: data.store_id,
					shippingDirection: data.shipping_direction,
				},
			])
		})
	}, [socket])

	return (
		<div>
			<h2>Solicitudes de Despacho</h2>

			<ul>
				{requestedShippings.map(shipping => (
					<li key={shipping.shippingOrderCode}>
						<p>Codigo de Despacho: {shipping.shippingOrderCode}</p>
						<p>Id de Tienda: {shipping.storeId}</p>
						<p>Dirección de Despacho: {shipping.shippingDirection}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
export default DriverView
