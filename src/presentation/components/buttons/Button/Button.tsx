import './Button.css'

import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: () => void
}

const Button = ({ children, className, onClick }: ButtonProps) => {
	return (
		<button className={`custom-button ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
