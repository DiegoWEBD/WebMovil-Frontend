import {
	LuBox,
	LuSearch,
	LuShoppingCart,
	LuStore,
	LuUser,
} from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'

type OwnerNavMenuProps = {
	className?: string
	setMenuOpen?: (menuOpen: boolean) => void
}

const OwnerNavMenu = ({ className, setMenuOpen }: OwnerNavMenuProps) => {
	return (
		<>
			<NavElement
				to='/locatario/tienda'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuStore className='nav-element-icon' />
				<p className='nav-element-text'>Mi Tienda</p>
			</NavElement>

			<NavElement
				to='/locatario/productos'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuBox className='nav-element-icon' />
				<p className='nav-element-text'>Productos</p>
			</NavElement>

			<NavElement
				to='/tiendas'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuSearch className='nav-element-icon' />
				<p className='nav-element-text'>Explorar</p>
			</NavElement>

			<NavElement
				to='/'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuShoppingCart className='nav-element-icon' />
				<p className='nav-element-text'>Ventas</p>
			</NavElement>

			{/*<NavElement
				to='/'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<FaRegChartBar className='nav-element-icon' />
				<p className='nav-element-text'>Estadísticas</p>
			</NavElement>*/}

			<NavElement
				to='/perfil'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuUser className='nav-element-icon' />
				<p className='nav-element-text'>Cuenta</p>
			</NavElement>
		</>
	)
}

export default OwnerNavMenu
