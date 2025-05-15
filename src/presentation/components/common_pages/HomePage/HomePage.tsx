import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from '../../../global_states/appState'

const HomePage = () => {
	const { basicUserInfo } = useAppState()
	const navigate = useNavigate()

	useEffect(() => {
		navigate(
			basicUserInfo?.userType === 'owner' ? '/locatario/tienda' : '/tiendas'
		)
	}, [navigate, basicUserInfo])

	return null
}

export default HomePage
