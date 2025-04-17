import './NavElement.css'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type NavElementProps = {
	to: string
	children: ReactNode
	onClick?: () => void
}

const NavElement = ({ to, children, onClick }: NavElementProps) => {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? 'active link' : 'link')}
				onClick={onClick}
			>
				{children}
			</NavLink>
		</li>
	)
}

export default NavElement
