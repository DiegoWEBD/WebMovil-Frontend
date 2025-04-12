import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './LoginNavElement.css'

type LoginNavElementProps = {
	to: string
	children: ReactNode
}

const LoginNavElement = ({ to, children }: LoginNavElementProps) => {
	return (
		<li>
			<Link to={to} className='login-link'>
				{children}
			</Link>
		</li>
	)
}

export default LoginNavElement
