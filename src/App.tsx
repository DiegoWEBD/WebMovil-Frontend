import { useEffect } from 'react'
import './App.css'
import useAppState from './presentation/global_states/appState'
import LoginForm from './presentation/pages/AuthPage/LoginForm/LoginForm'
import RegisterForm from './presentation/pages/AuthPage/RegisterForm/RegisterForm'
import OwnerView from './presentation/pages/StorePage/OwnerView/OwnerView'

function App() {
	const { userEmail, validateAccessToken } = useAppState()

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return (
		<>
			{userEmail ? (
				<OwnerView />
			) : (
				<>
					<LoginForm />
					<RegisterForm />
				</>
			)}
		</>
	)
}

export default App
