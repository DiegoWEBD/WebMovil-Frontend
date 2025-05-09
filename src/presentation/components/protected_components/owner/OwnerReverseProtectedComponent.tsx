import { ReactNode } from 'react'
import useAppState from '../../../global_states/appState'

type OwnerProtectedComponentProps = {
	children: ReactNode
}

const OwnerReverseProtectedComponent = ({
	children,
}: OwnerProtectedComponentProps) => {
	const { basicUserInfo } = useAppState()

	return basicUserInfo?.userType !== 'owner' ? <>{children}</> : null
}

export default OwnerReverseProtectedComponent
