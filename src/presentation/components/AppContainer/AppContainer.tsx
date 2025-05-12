import useAppState from '../../global_states/appState'
import './AppContainer.css'

import { ReactNode } from 'react'

type AppContainerProps = {
	children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
	const { basicUserInfo } = useAppState()
	return (
		<div
			className={`app-container ${
				basicUserInfo ? 'active-session ' : 'inactive-session'
			}`}
		>
			{children}
		</div>
	)
}

export default AppContainer
