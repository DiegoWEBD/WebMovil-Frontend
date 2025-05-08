import './Header.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../buttons/Button/Button'
import PageLogo from '../PageLogo/PageLogo'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import UserReverseProtectedComponent from '../protected_components/UserReverseProtectedComponent'
import NavElement from './NavElement/NavElement'
import ToggleButton from './ToggleButton/ToggleButton'
import useAppState from '../../global_states/appState'

const Header = () => {
	const { basicUserInfo } = useAppState()
	const [menuOpen, setMenuOpen] = useState(true)
	const navigate = useNavigate()

	return (
		<header className='page-header '>
			<ToggleButton
				className='menu-toggle closed-case'
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
			/>

			<PageLogo className='header-padding' />

			<nav className={`nav-menu ${basicUserInfo ? 'logged-in' : 'logged-out'}`}>
				<ul className='nav-menu-ul'>
					<UserProtectedComponent>
						<NavElement to='/tiendas' onClick={() => setMenuOpen(false)}>
							Tiendas
						</NavElement>

						<NavElement to='/perfil' onClick={() => setMenuOpen(false)}>
							Perfil
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
		</header>
	)
}

export default Header
