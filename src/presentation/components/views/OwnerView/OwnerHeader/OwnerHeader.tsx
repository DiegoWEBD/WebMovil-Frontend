import './OwnerHeader.css'

import { LuUser } from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'
import PageLogo from '../../../PageLogo/PageLogo'
import UserProtectedComponent from '../../../protected_components/UserProtectedComponent'
import OwnerStoreSelector from '../OwnerStoreSelector/OwnerStoreSelector'
import OwnerProtectedComponent from '../../../protected_components/owner/OwnerProtectedComponent'

const OwnerHeader = () => {
	return (
		<header className='owner-header'>
			<PageLogo />
			<OwnerProtectedComponent>
				<OwnerStoreSelector />
			</OwnerProtectedComponent>
			<UserProtectedComponent>
				<NavElement to='/perfil' className='owner-header-nav-element'>
					<LuUser className='profile-logo' />
				</NavElement>
			</UserProtectedComponent>
		</header>
	)
}

export default OwnerHeader
