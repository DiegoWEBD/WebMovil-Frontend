import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type ClientProtectedRouteProps = {
	children: ReactNode
}

const ClientProtectedRoute = ({ children }: ClientProtectedRouteProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('user_type') !== 'client') navigate('/login')
	}, [navigate])

	return localStorage.getItem('user_type') === 'client' ? <>{children}</> : null
}

export default ClientProtectedRoute
