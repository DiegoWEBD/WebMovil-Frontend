import './Root.css'

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAppState from '../../../global_states/appState'
import AppContainer from '../../containers/AppContainer/AppContainer'
import ModalContainer from '../../containers/ModalContainer/ModalContainer'
import DashboardV2 from '../../Dashboard/Dashboard'
import Header from '../../Header/Header'
import PageContentContainer from '../../containers/PageContentContainer/PageContentContainer'

const App = () => {
	const { validateAccessToken, isAppInstalled } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	// Check if user is delivery man
	const isDeliveryMan = localStorage.getItem('user_type') === 'delivery-man'
	const hasAccessToken = localStorage.getItem('access_token')

	// If delivery man, render without the main layout (they have their own)
	if (isDeliveryMan && hasAccessToken) {
		return (
			<div
				className={`app-root active-session ${
					isAppInstalled() ? 'installed' : 'not-installed'
				}`}
			>
				<Outlet />
				<ModalContainer />
			</div>
		)
	}

	return (
		<div
			className={`app-root 
				${hasAccessToken ? 'active-session ' : 'inactive-session'} 
				${isAppInstalled() ? 'installed' : 'not-installed'}`}
		>
			<Header />

			<AppContainer>
				<DashboardV2 />
				<PageContentContainer>
					<Outlet />
				</PageContentContainer>
			</AppContainer>
			<ModalContainer />
		</div>
	)
}

export default App
