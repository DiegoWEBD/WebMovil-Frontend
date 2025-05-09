import './Dashboard.css'

import { useState } from 'react'
import { FaStore } from 'react-icons/fa'
import { LuUser } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import useAppState from '../../global_states/appState'
import Button from '../buttons/Button/Button'
import PageLogo from '../PageLogo/PageLogo'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import UserReverseProtectedComponent from '../protected_components/UserReverseProtectedComponent'
import NavElement from './NavElement/NavElement'
import ToggleButton from './ToggleButton/ToggleButton'

const Dashboard = () => {
	const { basicUserInfo } = useAppState()
	const [menuOpen, setMenuOpen] = useState(true)
	const navigate = useNavigate()

	return (
		<div className='page-header '>
			<ToggleButton
				className='menu-toggle closed-case'
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>

			<PageLogo />

			<nav className={`nav-menu ${basicUserInfo ? 'logged-in' : 'logged-out'}`}>
				<ul className='nav-menu-ul '>
					<UserProtectedComponent>
						<NavElement
							to='/tiendas'
							className='header-nav-element header-padding'
							onClick={() => setMenuOpen(false)}
						>
							<FaStore />
							<p>Tiendas</p>
						</NavElement>

						<NavElement
							to='/perfil'
							className='header-nav-element header-padding'
							onClick={() => setMenuOpen(false)}
						>
							<LuUser />
							<p>Perfil</p>
						</NavElement>
					</UserProtectedComponent>
				</ul>

				<ul className='login-nav header-padding'>
					<UserReverseProtectedComponent>
						<Button
							className='secondary login-button'
							onClick={() => {
								setMenuOpen(false)
								navigate('/login')
							}}
						>
							Iniciar Sesión
						</Button>
					</UserReverseProtectedComponent>
					<UserReverseProtectedComponent>
						<Button
							className='primary register-button'
							onClick={() => {
								setMenuOpen(false)
								navigate('/register')
							}}
						>
							Registrarse
						</Button>
					</UserReverseProtectedComponent>
					<UserProtectedComponent>
						<Button
							className='header-font secondary'
							onClick={() => {
								localStorage.removeItem('access_token')
								navigate('/login')
							}}
						>
							Cerrar Sesión
						</Button>
					</UserProtectedComponent>
				</ul>
			</nav>
		</div>
	)
}

export default Dashboard
