import './Dashboard.css'

import { useState } from 'react'
import useAppState from '../../global_states/appState'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import OwnerNavMenu from '../views/OwnerView/OwnerNavMenu/OwnerNavMenu'
import ToggleButton from './ToggleButton/ToggleButton'

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
					<OwnerProtectedComponent>
						<OwnerNavMenu setMenuOpen={setMenuOpen} />
					</OwnerProtectedComponent>
					{/*<UserProtectedComponent>
						<NavElement
							to='/tiendas'
							className='dashboard-v2-nav-element '
							onClick={() => setMenuOpen(false)}
						>
							<LuStore />
							<p className='nav-element-text'>Tiendas</p>
						</NavElement>
					</UserProtectedComponent>*/}
				</ul>
			</div>
		</nav>
	)
}

export default DashboardV2
