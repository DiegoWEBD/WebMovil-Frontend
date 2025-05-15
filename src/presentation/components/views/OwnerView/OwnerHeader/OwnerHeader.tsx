import './OwnerHeader.css'

import PageLogo from '../../../PageLogo/PageLogo'
import OwnerProtectedComponent from '../../../protected_components/owner/OwnerProtectedComponent'
import OwnerStoreSelector from '../OwnerStoreSelector/OwnerStoreSelector'
import { LuBell } from 'react-icons/lu'
import Button from '../../../buttons/Button/Button'

const OwnerHeader = () => {
	return (
		<header className='owner-header'>
			<PageLogo />
			<OwnerProtectedComponent>
				<OwnerStoreSelector />
			</OwnerProtectedComponent>
			<Button>
				<LuBell className='button-icon' />
			</Button>
		</header>
	)
}

export default OwnerHeader
