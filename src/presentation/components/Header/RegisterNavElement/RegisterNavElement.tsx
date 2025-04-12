import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './RegisterNavElement.css'

type RegisterNavElementProps = {
	to: string
	children: ReactNode
}

const RegisterNavElement = ({ to, children }: RegisterNavElementProps) => {
	return (
		<li>
			<Link to={to} className='register-link'>
				{children}
			</Link>
		</li>
	)
}

export default RegisterNavElement
