import './Root.css'

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAppState from '../../../global_states/appState'
import AppContainer from '../../AppContainer/AppContainer'
import DashboardV2 from '../../Dashboard/Dashboard'
import Footer from '../../Footer/Footer'
import OwnerHeader from '../../views/OwnerView/OwnerHeader/OwnerHeader'
import PageContentContainer from '../../containers/PageContentContainer/PageContentContainer'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import UserProtectedComponent from '../../protected_components/UserProtectedComponent'

const App = () => {
	const { validateAccessToken, isAppInstalled } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<div
			className={`app-root 
				${
					localStorage.getItem('access_token')
						? 'active-session '
						: 'inactive-session'
				} 
				${isAppInstalled() ? 'installed' : 'not-installed'}`}
		>
			<ScrollToTop />
			<OwnerHeader />

			<AppContainer>
				<DashboardV2 />
				<PageContentContainer>
					<Outlet />
				</PageContentContainer>
			</AppContainer>
			<UserProtectedComponent>
				<Footer />
			</UserProtectedComponent>
		</div>
	)
}

export default App
