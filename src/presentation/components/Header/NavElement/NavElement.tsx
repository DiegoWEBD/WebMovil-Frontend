import './NavElement.css'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type NavElementProps = {
	to: string
	children: ReactNode
	className?: string
	onClick?: () => void
}

const NavElement = ({ to, children, className, onClick }: NavElementProps) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? `${className} active link` : `${className} link`
			}
			onClick={onClick}
		>
			<li>{children}</li>
		</NavLink>
	)
}

export default NavElement
