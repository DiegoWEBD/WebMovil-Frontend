import './NavElement.css'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type NavElementProps = {
	to: string
	children: ReactNode
}

const NavElement = ({ to, children }: NavElementProps) => {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? 'active link' : 'link')}
			>
				{children}
			</NavLink>
		</li>
	)
}

export default NavElement
