import { create } from 'zustand'
import IDeliveryService from '../../../application/delivery_service/IDeliveryService.interface'
import DeliveryService from '../../../application/delivery_service/DeliveryService'
import { io, Socket } from 'socket.io-client'

type DeliveryManState = {
	deliveryService: IDeliveryService
	deliveryServiceSocket: Socket
}

const useDeliveryManState = create<DeliveryManState>(() => {
	const socket = io('http://localhost:3002')

	socket.on('connect', () => {
		console.log('Connected to delivery-service socket.io')

		if (
			localStorage.getItem('user_email') &&
			localStorage.getItem('user_type')
		) {
			socket.emit('register', {
				email: localStorage.getItem('user_email'),
				user_type: localStorage.getItem('user_type'),
			})
		}
	})

	return {
		deliveryService: new DeliveryService(),
		deliveryServiceSocket: socket,
	}
})

export default useDeliveryManState
