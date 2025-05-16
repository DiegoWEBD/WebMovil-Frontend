import './AppContainer.css'

import { ReactNode } from 'react'

type AppContainerProps = {
	children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
	return <div className='app-container'>{children}</div>
}

export default AppContainer
