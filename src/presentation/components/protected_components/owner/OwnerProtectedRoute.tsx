import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppState from '../../../global_states/appState'

type OwnerProtectedRouteProps = {
	children: ReactNode
}

const OwnerProtectedRoute = ({ children }: OwnerProtectedRouteProps) => {
	const { basicUserInfo } = useAppState()
	const navigate = useNavigate()

	useEffect(() => {
		if (basicUserInfo?.userType !== 'owner') navigate('/login')
	}, [basicUserInfo, navigate])

	return basicUserInfo ? <>{children}</> : null
}

export default OwnerProtectedRoute
