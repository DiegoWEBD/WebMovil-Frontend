import './SecondaryButton.css'

import { ReactNode } from 'react'

type SecondaryButtonProps = {
	children: ReactNode
	onClick?: () => void
}

const SecondaryButton = ({ children, onClick }: SecondaryButtonProps) => {
	return (
		<button className='secondary-button' onClick={onClick}>
			{children}
		</button>
	)
}

export default SecondaryButton
