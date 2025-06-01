import './Root.css'

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAppState from '../../../global_states/appState'
import AppContainer from '../../containers/AppContainer/AppContainer'
import PageContentContainer from '../../containers/PageContentContainer/PageContentContainer'
import DashboardV2 from '../../Dashboard/Dashboard'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import UserProtectedComponent from '../../protected_components/UserProtectedComponent'
import ModalContainer from '../../containers/ModalContainer/ModalContainer'

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
			<Header />

			<AppContainer>
				<DashboardV2 />
				<PageContentContainer>
					<Outlet />
				</PageContentContainer>
			</AppContainer>
			<UserProtectedComponent>
				<Footer />
			</UserProtectedComponent>

			<ModalContainer />
		</div>
	)
}

export default App
