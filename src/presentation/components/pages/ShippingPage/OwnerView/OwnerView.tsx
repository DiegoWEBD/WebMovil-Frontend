import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import '../ShippingPage.css'

type OwnerViewProps = {
	socket: Socket | undefined
}

const OwnerView = ({ socket }: OwnerViewProps) => {
	const [shippingState, setShippingState] = useState<string>('')

	useEffect(() => {
		if (!socket) return

		socket.on('accept-shipping', data => {
			console.log(data)
			setShippingState('withdrawal')
		})

		socket.on('change-shipping-state', data => {
			console.log(data)
			setShippingState(data.shipping_state)
		})
	}, [socket])

	const requestShipping = () => {
		socket?.emit('request-shipping', {
			shipping_order_code: '554872154',
			shipping_direction: 'Av. Los Pajaros 1234',
			store_id: '123456789',
		})
	}

	return (
		<div>
			<button onClick={requestShipping}>Solicitar Despacho</button>
			<p>{shippingState}</p>
		</div>
	)
}
export default OwnerView
