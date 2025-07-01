import './Button.css'

import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	disabled?: boolean
}

const Button = ({
	children,
	className,
	onClick,
	disabled,
	type = 'button',
}: ButtonProps) => {
	return (
		<button
			className={`custom-button ${disabled ? 'disabled' : ''} ${
				className || ''
			}`}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button
