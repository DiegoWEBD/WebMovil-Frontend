import { ReactNode } from 'react'
import useAppState from '../../global_states/appState'

type UserProtectedComponentProps = {
	children: ReactNode
}

const UserReverseProtectedComponent = ({
	children,
}: UserProtectedComponentProps) => {
	const { userEmail } = useAppState()

	return !userEmail ? <>{children}</> : null
}

export default UserReverseProtectedComponent
