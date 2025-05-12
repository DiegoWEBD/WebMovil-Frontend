import { ReactNode, useEffect } from 'react'
import useAppState from '../../global_states/appState'
import { useNavigate } from 'react-router-dom'

type UserProtectedRouteProps = {
	children: ReactNode
}

const UserProtectedRoute = ({ children }: UserProtectedRouteProps) => {
	const { basicUserInfo, validateAccessToken } = useAppState()
	const navigate = useNavigate()

	useEffect(() => {
		if (!basicUserInfo) navigate('/login')
	}, [basicUserInfo, navigate])

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return basicUserInfo ? <>{children}</> : null
}

export default UserProtectedRoute
