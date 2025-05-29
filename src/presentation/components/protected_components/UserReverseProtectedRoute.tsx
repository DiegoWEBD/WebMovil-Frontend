import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserReverseProtectedComponent from './UserReverseProtectedComponent'

type UserReverseProtectedRouteProps = {
	children: ReactNode
}

const UserReverseProtectedRoute = ({
	children,
}: UserReverseProtectedRouteProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('access_token')) navigate('/explorar')
	}, [navigate])

	return (
		<UserReverseProtectedComponent>{children}</UserReverseProtectedComponent>
	)
}

export default UserReverseProtectedRoute
