import { LuShoppingCart, LuUser } from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'

type OwnerNavMenuProps = {
	className?: string
}

const DeliveryManNavMenu = ({ className }: OwnerNavMenuProps) => {
	return (
		<>
			<NavElement
				to='/repartidor/deliveries'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuShoppingCart className='nav-element-icon' />
				<p className='nav-element-text'>Entregas disponibles</p>
			</NavElement>

			<NavElement
				to='/perfil'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuUser className='nav-element-icon' />
				<p className='nav-element-text'>Cuenta</p>
			</NavElement>
		</>
	)
}

export default DeliveryManNavMenu
