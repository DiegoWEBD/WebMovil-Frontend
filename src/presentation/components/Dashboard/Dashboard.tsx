import './Dashboard.css'

import { useState } from 'react'
import useAppState from '../../global_states/appState'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import OwnerNavMenu from '../views/owner/OwnerNavMenu/OwnerNavMenu'
import ToggleButton from './ToggleButton/ToggleButton'
import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import ClientNavMenu from '../views/client/ClientNavMenu/ClientNavMenu'

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

					<ClientProtectedComponent>
						<ClientNavMenu setMenuOpen={setMenuOpen} />
					</ClientProtectedComponent>
				</ul>
			</div>
		</nav>
	)
}

export default DashboardV2
