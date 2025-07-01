import { Outlet } from 'react-router-dom'
import DeliveryManNavMenu from '../DeliveryManNavMenu/DeliveryManNavMenu'
import './DeliveryManLayout.css'

const DeliveryManLayout = () => {
	return (
		<div className='delivery-man-layout'>
			<DeliveryManNavMenu />
			<main className='delivery-man-content'>
				<Outlet />
			</main>
		</div>
	)
}

export default DeliveryManLayout
