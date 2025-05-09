import './OwnerHeader.css'

import { LuUser } from 'react-icons/lu'
import NavElement from '../../../Dashboard/NavElement/NavElement'
import PageLogo from '../../../PageLogo/PageLogo'

const OwnerHeader = () => {
	return (
		<header className='owner-header'>
			<PageLogo />
			<NavElement to='/perfil' className='owner-header-nav-element'>
				<LuUser className='profile-logo' />
			</NavElement>
		</header>
	)
}

export default OwnerHeader
