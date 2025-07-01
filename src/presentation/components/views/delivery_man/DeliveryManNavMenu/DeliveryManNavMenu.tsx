import { useNavigate } from 'react-router-dom'
import { LuTruck } from 'react-icons/lu'
import { FiLogOut } from 'react-icons/fi'
import { clearLocalStorage } from '../../../../../utils/clear_local_storage'
import './DeliveryManNavMenu.css'

const DeliveryManNavMenu = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		clearLocalStorage()
		navigate('/login')
	}

	return (
		<nav className='delivery-man-nav-menu'>
			<div className='nav-header'>
				<LuTruck className='nav-icon' />
				<h2>Repartidor</h2>
			</div>

			<div className='nav-links'>
				<button
					className='nav-link active'
					onClick={() => navigate('/delivery-man/deliveries')}
				>
					<LuTruck className='nav-link-icon' />
					Entregas Disponibles
				</button>
			</div>

			<div className='nav-footer'>
				<button className='logout-button' onClick={handleLogout}>
					<FiLogOut className='logout-icon' />
					Cerrar Sesión
				</button>
			</div>
		</nav>
	)
}

export default DeliveryManNavMenu
