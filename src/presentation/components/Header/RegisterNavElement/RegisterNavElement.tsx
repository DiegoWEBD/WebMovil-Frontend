import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './RegisterNavElement.css'

type RegisterNavElementProps = {
	to: string
	children: ReactNode
	onClick?: () => void
}

const RegisterNavElement = ({
	to,
	children,
	onClick,
}: RegisterNavElementProps) => {
	return (
		<li>
			<Link to={to} className='register-link' onClick={onClick}>
				{children}
			</Link>
		</li>
	)
}

export default RegisterNavElement
