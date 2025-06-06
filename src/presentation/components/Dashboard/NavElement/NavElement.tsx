import './NavElement.css'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import useAppState from '../../../global_states/appState'

type NavElementProps = {
	to: string
	children: ReactNode
	className?: string
	onClick?: () => void
}

const NavElement = ({ to, children, className, onClick }: NavElementProps) => {
	const { setDashboardOpen } = useAppState()

	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? `${className} active link` : `${className} link`
			}
			onClick={() => {
				if (onClick) onClick()
				setDashboardOpen(false)
			}}
		>
			{children}
		</NavLink>
	)
}

export default NavElement
