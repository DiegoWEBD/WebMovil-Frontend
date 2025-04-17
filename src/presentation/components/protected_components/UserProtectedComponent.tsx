import { ReactNode } from 'react'
import useAppState from '../../global_states/appState'

type UserProtectedComponentProps = {
	children: ReactNode
}

const UserProtectedComponent = ({ children }: UserProtectedComponentProps) => {
	const { userEmail } = useAppState()

	return userEmail ? <>{children}</> : null
}

export default UserProtectedComponent
