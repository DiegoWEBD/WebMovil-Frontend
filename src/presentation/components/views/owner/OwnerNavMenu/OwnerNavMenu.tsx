import { LuBox, LuShoppingCart, LuStore, LuUser } from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'

type OwnerNavMenuProps = {
	className?: string
}

const OwnerNavMenu = ({ className }: OwnerNavMenuProps) => {
	return (
		<>
			<NavElement
				to='/locatario/tienda'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuStore className='nav-element-icon' />
				<p className='nav-element-text'>Mi Tienda</p>
			</NavElement>

			<NavElement
				to='/locatario/productos'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuBox className='nav-element-icon' />
				<p className='nav-element-text'>Productos</p>
			</NavElement>

			<NavElement
				to='/locatario/ventas'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuShoppingCart className='nav-element-icon' />
				<p className='nav-element-text'>Ventas</p>
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

export default OwnerNavMenu
