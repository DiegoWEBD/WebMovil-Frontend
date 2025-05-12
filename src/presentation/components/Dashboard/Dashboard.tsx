import './Dashboard.css'

import { useState } from 'react'
import { LuBox, LuShoppingCart, LuStore } from 'react-icons/lu'
import useAppState from '../../global_states/appState'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import NavElement from './NavElement/NavElement'
import ToggleButton from './ToggleButton/ToggleButton'
import { FaRegChartBar } from 'react-icons/fa6'

const DashboardV2 = () => {
	const { basicUserInfo } = useAppState()
	const [menuOpen, setMenuOpen] = useState(true)

	return (
		<nav
			className={`dashboard-v2 ${basicUserInfo ? 'logged-in' : 'logged-out'}`}
		>
			<div className='dashboard-v2-nav-menu'>
				<ToggleButton
					className='menu-toggle closed-case'
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<ul className='dashboard-v2-nav-menu-ul '>
					<UserProtectedComponent>
						<NavElement
							to='/tiendas'
							className='dashboard-v2-nav-element '
							onClick={() => setMenuOpen(false)}
						>
							<LuStore />
							<p className='nav-element-text'>Tiendas</p>
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
					</UserProtectedComponent>
				</ul>
			</div>
		</nav>
	)
}

export default DashboardV2
