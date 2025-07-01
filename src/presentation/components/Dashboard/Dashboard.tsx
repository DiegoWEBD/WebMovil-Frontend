import './Dashboard.css'

import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import DeliveryManProtectedComponent from '../protected_components/delivery_man/DeliveryManProtectedComponent'
import ClientNavMenu from '../views/client/ClientNavMenu/ClientNavMenu'
import OwnerNavMenu from '../views/owner/OwnerNavMenu/OwnerNavMenu'
import DeliveryManNavMenu from '../views/delivery_man/DeliveryManNavMenu/DeliveryManNavMenu'

const DashboardV2 = () => {
	return (
		<nav className='dashboard-v2'>
			<OwnerProtectedComponent>
				<OwnerNavMenu />
			</OwnerProtectedComponent>

			<ClientProtectedComponent>
				<ClientNavMenu />
			</ClientProtectedComponent>

			<DeliveryManProtectedComponent>
				<DeliveryManNavMenu />
			</DeliveryManProtectedComponent>
		</nav>
	)
}

export default DashboardV2
