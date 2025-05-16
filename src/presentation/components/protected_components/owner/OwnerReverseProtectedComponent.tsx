import { ReactNode } from 'react'

type OwnerProtectedComponentProps = {
	children: ReactNode
}

const OwnerReverseProtectedComponent = ({
	children,
}: OwnerProtectedComponentProps) => {
	return localStorage.getItem('user_type') !== 'owner' ? <>{children}</> : null
}

export default OwnerReverseProtectedComponent
