import { LuBox, LuShoppingCart, LuStore, LuUser } from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'
import useAppState from '../../../../global_states/appState'

type OwnerNavMenuProps = {
	className?: string
}

const OwnerNavMenu = ({ className }: OwnerNavMenuProps) => {
	const { setDashboardOpen } = useAppState()

	return (
		<>
			<NavElement
				to='/locatario/tienda'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => setDashboardOpen(false)}
			>
				<LuStore className='nav-element-icon' />
				<p className='nav-element-text'>Mi Tienda</p>
			</NavElement>

			<NavElement
				to='/locatario/productos'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => setDashboardOpen(false)}
			>
				<LuBox className='nav-element-icon' />
				<p className='nav-element-text'>Productos</p>
			</NavElement>

			<NavElement
				to='/locatario/ventas'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => setDashboardOpen(false)}
			>
				<LuShoppingCart className='nav-element-icon' />
				<p className='nav-element-text'>Ventas</p>
			</NavElement>

			<NavElement
				to='/perfil'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => setDashboardOpen(false)}
			>
				<LuUser className='nav-element-icon' />
				<p className='nav-element-text'>Cuenta</p>
			</NavElement>
		</>
	)
}

export default OwnerNavMenu
