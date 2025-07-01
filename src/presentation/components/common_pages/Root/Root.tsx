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
	const { validateAccessToken, isAppInstalled, basicUserInfo } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<div
			className={`app-root 
				${basicUserInfo ? 'active-session' : 'inactive-session'}
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
