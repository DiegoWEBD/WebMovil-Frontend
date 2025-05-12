import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from '../../global_states/appState'

type UserReverseProtectedRouteProps = {
	children: ReactNode
}

const UserReverseProtectedRoute = ({
	children,
}: UserReverseProtectedRouteProps) => {
	const { basicUserInfo, validateAccessToken } = useAppState()
	const navigate = useNavigate()

	useEffect(() => {
		if (basicUserInfo) navigate('/tiendas')
	}, [basicUserInfo, navigate])

	useEffect(() => {
		validateAccessToken()
	}, [validateAccessToken])

	return !basicUserInfo ? <>{children}</> : null
}

export default UserReverseProtectedRoute
