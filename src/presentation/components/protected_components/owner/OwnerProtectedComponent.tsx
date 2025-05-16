import { ReactNode } from 'react'

type OwnerProtectedComponentProps = {
	children: ReactNode
}

const OwnerProtectedComponent = ({
	children,
}: OwnerProtectedComponentProps) => {
	return localStorage.getItem('user_type') === 'owner' ? <>{children}</> : null
}

export default OwnerProtectedComponent
