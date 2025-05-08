import './Root.css'

import { useEffect } from 'react'
import useAppState from '../../../global_states/appState'
import Header from '../../Header/Header'
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
			<Header />
			<AppContainer>
				<Outlet />
			</AppContainer>
			<Footer />
		</div>
	)
}

export default App
