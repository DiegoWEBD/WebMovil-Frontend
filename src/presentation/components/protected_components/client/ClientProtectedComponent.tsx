import { ReactNode } from 'react'

type ClientProtectedComponentProps = {
	children: ReactNode
}

const ClientProtectedComponent = ({
	children,
}: ClientProtectedComponentProps) => {
	return localStorage.getItem('user_type') === 'client' ? <>{children}</> : null
}

export default ClientProtectedComponent
