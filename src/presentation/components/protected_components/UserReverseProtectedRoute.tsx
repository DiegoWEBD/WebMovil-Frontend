import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from '../../global_states/appState'

type UserReverseProtectedRouteProps = {
	children: ReactNode
}

const UserReverseProtectedRoute = ({
	children,
}: UserReverseProtectedRouteProps) => {
	const { userEmail, validateAccessToken } = useAppState()
	const navigate = useNavigate()

	useEffect(() => {
		if (userEmail) navigate('/tiendas')
	}, [userEmail, navigate])

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return !userEmail ? <>{children}</> : null
}

export default UserReverseProtectedRoute
