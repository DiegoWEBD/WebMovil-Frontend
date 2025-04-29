import { ReactNode, useEffect } from 'react'
import useAppState from '../../global_states/appState'
import { useNavigate } from 'react-router-dom'

type UserProtectedRouteProps = {
	children: ReactNode
}

const UserProtectedRoute = ({ children }: UserProtectedRouteProps) => {
	const { userEmail, validateAccessToken } = useAppState()
	const navigate = useNavigate()

	useEffect(() => {
		if (!userEmail) navigate('/login')
	}, [userEmail, navigate])

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return userEmail ? <>{children}</> : null
}

export default UserProtectedRoute
