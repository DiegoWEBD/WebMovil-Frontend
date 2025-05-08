import './Header.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../buttons/Button/Button'
import PageLogo from '../PageLogo/PageLogo'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import UserReverseProtectedComponent from '../protected_components/UserReverseProtectedComponent'
import NavElement from './NavElement/NavElement'
import ToggleButton from './ToggleButton/ToggleButton'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const navigate = useNavigate()

	return (
		<header className='page-header '>
			<div className='header-container'>
				<ToggleButton
					className='menu-toggle closed-case'
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<PageLogo />

				{menuOpen && (
					<div className='nav-overlay' onClick={() => setMenuOpen(false)} />
				)}

				<nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
					<ToggleButton
						className='menu-toggle open-case'
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
					/>
					<PageLogo className='small-screen' />
					<ul className='nav-menu-ul'>
						<NavElement to='/' onClick={() => setMenuOpen(false)}>
							Inicio
						</NavElement>
						<UserProtectedComponent>
							<NavElement to='/tiendas' onClick={() => setMenuOpen(false)}>
								Tiendas
							</NavElement>

							<NavElement to='/perfil' onClick={() => setMenuOpen(false)}>
								Perfil
							</NavElement>

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

					<UserReverseProtectedComponent>
						<ul className='login-nav'>
							<Button
								className='secondary login-button'
								onClick={() => {
									setMenuOpen(false)
									navigate('/login')
								}}
							>
								Iniciar Sesión
							</Button>
							<Button
								className='primary register-button'
								onClick={() => {
									setMenuOpen(false)
									navigate('/register')
								}}
							>
								Registrarse
							</Button>
						</ul>
					</UserReverseProtectedComponent>
				</nav>
			</div>
		</header>
	)
}

export default Header
