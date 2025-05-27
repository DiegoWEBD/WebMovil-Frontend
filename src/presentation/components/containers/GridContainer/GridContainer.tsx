import './GridContainer.css'

import { ReactNode, Ref } from 'react'

type GridContainerProps = {
	children: ReactNode
	ref?: Ref<HTMLDivElement>
	className?: string
}

const GridContainer = ({ children, ref, className }: GridContainerProps) => {
	return (
		<div className={`grid-container ${className}`} ref={ref}>
			{children}
		</div>
	)
}

export default GridContainer
