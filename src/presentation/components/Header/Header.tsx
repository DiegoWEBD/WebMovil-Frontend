import './Header.css'

import { LuBell } from 'react-icons/lu'
import Button from '../buttons/Button/Button'
import PageLogo from '../PageLogo/PageLogo'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import OwnerStoreSelector from '../views/OwnerView/OwnerStoreSelector/OwnerStoreSelector'

const Header = () => {
	return (
		<header className='owner-header'>
			<PageLogo />
			<OwnerProtectedComponent>
				<OwnerStoreSelector />
			</OwnerProtectedComponent>
			<UserProtectedComponent>
				<Button>
					<LuBell className='button-icon' />
				</Button>
			</UserProtectedComponent>
		</header>
	)
}

export default Header
