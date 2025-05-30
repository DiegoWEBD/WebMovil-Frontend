import './AppContainer.css'

import { ReactNode } from 'react'

type AppContainerProps = {
	children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
	return <div className='app-container scrollbar'>{children}</div>
}

export default AppContainer
