import { FaRegChartBar } from 'react-icons/fa'
import { LuStore, LuBox, LuShoppingCart } from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'

type OwnerNavMenuProps = {
	setMenuOpen: (menuOpen: boolean) => void
}

const OwnerNavMenu = ({ setMenuOpen }: OwnerNavMenuProps) => {
	return (
		<>
			<NavElement
				to='/locatario/tienda'
				className='dashboard-v2-nav-element '
				onClick={() => setMenuOpen(false)}
			>
				<LuStore />
				<p className='nav-element-text'>Perfil de Tienda</p>
			</NavElement>

			<NavElement
				to='/locatario/productos'
				className='dashboard-v2-nav-element'
				onClick={() => setMenuOpen(false)}
			>
				<LuBox />
				<p className='nav-element-text'>Productos</p>
			</NavElement>

			<NavElement
				to='/'
				className='dashboard-v2-nav-element'
				onClick={() => setMenuOpen(false)}
			>
				<LuShoppingCart />
				<p className='nav-element-text'>Ventas</p>
			</NavElement>

			<NavElement
				to='/'
				className='dashboard-v2-nav-element'
				onClick={() => setMenuOpen(false)}
			>
				<FaRegChartBar />
				<p className='nav-element-text'>Estadísticas</p>
			</NavElement>
		</>
	)
}

export default OwnerNavMenu
