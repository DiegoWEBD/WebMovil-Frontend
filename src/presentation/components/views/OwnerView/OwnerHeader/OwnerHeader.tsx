import './OwnerHeader.css'

import PageLogo from '../../../PageLogo/PageLogo'
import OwnerProtectedComponent from '../../../protected_components/owner/OwnerProtectedComponent'
import OwnerStoreSelector from '../OwnerStoreSelector/OwnerStoreSelector'

const OwnerHeader = () => {
	return (
		<header className='owner-header'>
			<PageLogo />
			<OwnerProtectedComponent>
				<OwnerStoreSelector />
			</OwnerProtectedComponent>
		</header>
	)
}

export default OwnerHeader
