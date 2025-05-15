import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserProtectedComponent from './UserProtectedComponent'

type UserProtectedRouteProps = {
	children: ReactNode
}

const UserProtectedRoute = ({ children }: UserProtectedRouteProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (!localStorage.getItem('access_token')) navigate('/login')
	}, [navigate])

	return <UserProtectedComponent>{children}</UserProtectedComponent>
}

export default UserProtectedRoute
