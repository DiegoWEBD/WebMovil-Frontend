import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import './ShippingPage.css'
import OwnerView from './OwnerView/OwnerView'
import DriverView from './DriverView/DriverView'

const ShippingPage = () => {
	const [socket, setSocket] = useState<Socket | undefined>(undefined)
	const [registeredAs, setRegisteredAs] = useState<string>('')

	useEffect(() => {
		const newSocket = io('http://localhost:3002')
		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [])

	const registerDeliveryDriver = () => {
		if (!socket) return

		socket.emit('register', {
			user_type: 'driver',
			email: 'diego.maldonado@alumnos.ucn.cl',
		})
		setRegisteredAs('driver')
	}

	const registerStoreOwner = () => {
		if (!socket) return

		socket.emit('register', {
			user_type: 'owner',
			email: 'diego.maldonado.1alsf@gmail.com',
		})
		setRegisteredAs('owner')
	}

	return (
		<div className='page'>
			<h1>Despachos</h1>

			{registeredAs == 'driver' && <DriverView socket={socket} />}
			{registeredAs == 'owner' && <OwnerView socket={socket} />}

			{registeredAs == '' && (
				<div className='buttons-wrapper'>
					<button onClick={registerDeliveryDriver}>Registrar Repartidor</button>
					<button onClick={registerStoreOwner}>Registrar Locatario</button>
				</div>
			)}
		</div>
	)
}

export default ShippingPage
