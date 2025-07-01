import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type DeliveryManProtectedRouteProps = {
	children: ReactNode
}

const DeliveryManProtectedRoute = ({
	children,
}: DeliveryManProtectedRouteProps) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('user_type') !== 'delivery-man') navigate('/login')
	}, [navigate])

	return localStorage.getItem('user_type') === 'delivery-man' ? (
		<>{children}</>
	) : null
}

export default DeliveryManProtectedRoute
