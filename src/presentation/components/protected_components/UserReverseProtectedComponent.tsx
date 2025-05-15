import { ReactNode } from 'react'

type UserProtectedComponentProps = {
	children: ReactNode
}

const UserReverseProtectedComponent = ({
	children,
}: UserProtectedComponentProps) => {
	return !localStorage.getItem('access_token') ? <>{children}</> : null
}

export default UserReverseProtectedComponent
