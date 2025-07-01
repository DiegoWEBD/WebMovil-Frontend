import './Button.css'

import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: () => void
	disabled?: boolean
}

const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
	return (
		<button
			className={`custom-button ${disabled ? 'disabled' : ''} ${
				className || ''
			}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
