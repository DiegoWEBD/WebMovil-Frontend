import { ReactNode } from 'react'

type UserProtectedComponentProps = {
	children: ReactNode
}

const UserProtectedComponent = ({ children }: UserProtectedComponentProps) => {
	return localStorage.getItem('access_token') ? children : null
}

export default UserProtectedComponent
