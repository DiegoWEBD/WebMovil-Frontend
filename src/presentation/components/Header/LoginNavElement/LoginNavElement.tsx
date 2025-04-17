import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './LoginNavElement.css'

type LoginNavElementProps = {
	to: string
	children: ReactNode
	onClick?: () => void
}

const LoginNavElement = ({ to, children, onClick }: LoginNavElementProps) => {
	return (
		<li className='login-nav-element'>
			<Link to={to} className='login-link' onClick={onClick}>
				{children}
			</Link>
		</li>
	)
}

export default LoginNavElement
