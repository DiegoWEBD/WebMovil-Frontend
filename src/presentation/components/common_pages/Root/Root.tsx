import './Root.css'

import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAppState from '../../../global_states/appState'
import AppContainer from '../../AppContainer/AppContainer'
import DashboardV2 from '../../Dashboard/DashboardV2'
import Footer from '../../Footer/Footer'
import OwnerHeader from '../../views/OwnerView/OwnerHeader/OwnerHeader'
import PageContentContainer from '../../containers/PageContentContainer/PageContentContainer'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'

const App = () => {
	const { validateAccessToken } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<div className='app'>
			<ScrollToTop />
			<OwnerHeader />

			<AppContainer>
				<DashboardV2 />
				<PageContentContainer>
					<Outlet />
				</PageContentContainer>
			</AppContainer>
			<Footer />
		</div>
	)
}

export default App
