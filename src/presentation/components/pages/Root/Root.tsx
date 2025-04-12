import { useEffect } from 'react'
import useAppState from '../../../global_states/appState'
import Header from '../../Header/Header'

import { Outlet } from 'react-router-dom'

const App = () => {
	const { validateAccessToken } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<>
			<Header />
			<div>
				<Outlet />
			</div>
		</>
	)
}

export default App
