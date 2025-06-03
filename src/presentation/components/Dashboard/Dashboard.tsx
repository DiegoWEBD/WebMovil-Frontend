import './Dashboard.css'

import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import ClientNavMenu from '../views/client/ClientNavMenu/ClientNavMenu'
import OwnerNavMenu from '../views/owner/OwnerNavMenu/OwnerNavMenu'

const DashboardV2 = () => {
	return (
		<nav className='dashboard-v2'>
			<OwnerProtectedComponent>
				<OwnerNavMenu />
			</OwnerProtectedComponent>

			<ClientProtectedComponent>
				<ClientNavMenu />
			</ClientProtectedComponent>
		</nav>
	)
}

export default DashboardV2
