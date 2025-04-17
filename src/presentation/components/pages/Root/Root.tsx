import { useEffect } from 'react'
import useAppState from '../../../global_states/appState'
import Header from '../../Header/Header'

import { Outlet } from 'react-router-dom'
import AppContainer from '../../AppContainer/AppContainer'

const App = () => {
	const { validateAccessToken } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<>
			<Header />
			<AppContainer>
				<Outlet />
			</AppContainer>
		</>
	)
}

export default App
