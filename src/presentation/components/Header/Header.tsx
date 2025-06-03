import './Header.css'

import { LuBell } from 'react-icons/lu'
import Button from '../buttons/Button/Button'
import PageLogo from '../PageLogo/PageLogo'
import ClientProtectedComponent from '../protected_components/client/ClientProtectedComponent'
import OwnerProtectedComponent from '../protected_components/owner/OwnerProtectedComponent'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import OwnerStoreSelector from '../views/owner/OwnerStoreSelector/OwnerStoreSelector'
import ToggleDashboard from '../Dashboard/ToggleDashboard/ToggleDashboard'
import { useState, useEffect } from 'react'
import useAppState from '../../global_states/appState'

const Header = () => {
	const { setDashboardOpen } = useAppState()
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 768px)').matches
	)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 850px)')
		const handleChange = () => setIsMobile(mediaQuery.matches)

		mediaQuery.addEventListener('change', handleChange)

		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	useEffect(() => {
		if (isMobile) setDashboardOpen(false)
	}, [isMobile, setDashboardOpen])

	return (
		<header className='header'>
			<div className='header-left'>
				{isMobile && <ToggleDashboard />}
				<OwnerProtectedComponent>
					<OwnerStoreSelector />
				</OwnerProtectedComponent>

				<ClientProtectedComponent>
					<PageLogo />
				</ClientProtectedComponent>
			</div>

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
