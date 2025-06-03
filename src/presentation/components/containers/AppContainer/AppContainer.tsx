import useAppState from '../../../global_states/appState'
import useModalState from '../../../global_states/modalState'
import './AppContainer.css'

import { ReactNode } from 'react'

type AppContainerProps = {
	children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
	const { dashboardOpen } = useAppState()
	const { modals } = useModalState()

	const modalOpen = modals.length > 0

	return (
		<div
			className={`app-container scrollbar ${
				!dashboardOpen ? 'dashboard-closed' : ''
			} ${modalOpen ? 'modal-open' : ''}`}
		>
			{children}
		</div>
	)
}

export default AppContainer
