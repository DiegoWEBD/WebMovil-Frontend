import './Header.css'

import { LuBell } from 'react-icons/lu'
import Button from '../buttons/Button/Button'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import OwnerStoreSelector from '../views/owner/OwnerStoreSelector/OwnerStoreSelector'
import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import PageLogo from '../PageLogo/PageLogo'

const Header = () => {
	return (
		<header className='owner-header'>
			<OwnerProtectedComponent>
				<OwnerStoreSelector />
			</OwnerProtectedComponent>

			<ClientProtectedComponent>
				<PageLogo />
			</ClientProtectedComponent>

			<UserProtectedComponent>
				<Button>
					<LuBell className='button-icon' />
				</Button>
			</UserProtectedComponent>
		</header>
	)
}

export default Header
