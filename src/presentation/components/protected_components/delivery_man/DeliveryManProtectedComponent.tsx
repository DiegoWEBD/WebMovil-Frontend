import { ReactNode } from 'react'

type DeliveryManProtectedComponentProps = {
	children: ReactNode
}

const DeliveryManProtectedComponent = ({
	children,
}: DeliveryManProtectedComponentProps) => {
	return localStorage.getItem('user_type') === 'delivery-man' ? children : null
}

export default DeliveryManProtectedComponent
