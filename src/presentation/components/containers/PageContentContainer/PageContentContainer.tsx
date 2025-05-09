import './PageContentContainer.css'

import { ReactNode } from 'react'

type PageContentContainerProps = {
	children: ReactNode
}

const PageContentContainer = ({ children }: PageContentContainerProps) => {
	return <div className='page-content'>{children}</div>
}

export default PageContentContainer
