import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type OwnerProtectedRouteProps = {
	children: ReactNode
}

const OwnerProtectedRoute = ({ children }: OwnerProtectedRouteProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('user_type') !== 'owner') navigate('/login')
	}, [navigate])

	return localStorage.getItem('user_type') === 'owner' ? <>{children}</> : null
}

export default OwnerProtectedRoute
