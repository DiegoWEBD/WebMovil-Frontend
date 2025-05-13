import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from '../../../global_states/appState'

type OwnerProtectedRouteProps = {
	children: ReactNode
}

const OwnerProtectedRoute = ({ children }: OwnerProtectedRouteProps) => {
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

export default OwnerProtectedRoute
