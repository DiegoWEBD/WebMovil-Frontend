import { ReactNode } from 'react'
import useAppState from '../../global_states/appState'

type UserProtectedComponentProps = {
	children: ReactNode
}

const UserProtectedComponent = ({ children }: UserProtectedComponentProps) => {
	const { basicUserInfo } = useAppState()

	return basicUserInfo ? <>{children}</> : null
}

export default UserProtectedComponent
