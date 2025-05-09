import './Root.css'

import { useEffect } from 'react'
import useAppState from '../../../global_states/appState'
import Dashboard from '../../Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'
import AppContainer from '../../AppContainer/AppContainer'
import Footer from '../../Footer/Footer'

const App = () => {
	const { validateAccessToken } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<div className='app'>
			<Dashboard />
			<AppContainer>
				<Outlet />
			</AppContainer>
			<Footer />
		</div>
	)
}

export default App
