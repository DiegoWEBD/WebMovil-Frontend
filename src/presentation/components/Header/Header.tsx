import './Header.css'

import { LuBell } from 'react-icons/lu'
import Button from '../buttons/Button/Button'
import PageLogo from '../PageLogo/PageLogo'
import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import OwnerStoreSelector from '../views/owner/OwnerStoreSelector/OwnerStoreSelector'

const Header = () => {
	return (
		<header className='owner-header'>
			<OwnerProtectedComponent>
				<OwnerStoreSelector />
			</OwnerProtectedComponent>

			<ClientProtectedComponent>
				<PageLogo />
			</ClientProtectedComponent>

			<div className='header-actions'>
				<UserProtectedComponent>
					<Button>
						<LuBell className='button-icon' />
					</Button>
				</UserProtectedComponent>
			</div>
		</header>
	)
}

export default Header
