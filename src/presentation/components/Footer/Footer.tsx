import './Footer.css'

import OwnerNavMenu from '../views/owner/OwnerNavMenu/OwnerNavMenu'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import ClientNavMenu from '../views/client/ClientNavMenu/ClientNavMenu'

const Footer = () => {
	return (
		<footer className='page-footer'>
			<OwnerProtectedComponent>
				<OwnerNavMenu />
			</OwnerProtectedComponent>

			<ClientProtectedComponent>
				<ClientNavMenu />
			</ClientProtectedComponent>
		</footer>
	)
}

export default Footer
