import './Header.css'

import { useState } from 'react'
import PageLogo from '../PageLogo/PageLogo'
import LoginNavElement from './LoginNavElement/LoginNavElement'
import NavElement from './NavElement/NavElement'
import RegisterNavElement from './RegisterNavElement/RegisterNavElement'
import ToggleButton from './ToggleButton/ToggleButton'
import UserProtectedComponent from '../protected_components/UserProtectedComponent'
import UserReverseProtectedComponent from '../protected_components/UserReverseProtectedComponent'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const navigate = useNavigate()

	return (
		<header className='page-header'>
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
				<ul>
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

						<button
							className='logout-button'
							onClick={() => {
								localStorage.removeItem('access_token')
								navigate('/login')
							}}
						>
							Cerrar Sesión
						</button>
					</UserProtectedComponent>
				</ul>

				<UserReverseProtectedComponent>
					<ul>
						<LoginNavElement to='/login' onClick={() => setMenuOpen(false)}>
							Iniciar Sesión
						</LoginNavElement>
						<RegisterNavElement
							to='/register'
							onClick={() => setMenuOpen(false)}
						>
							Registrarse
						</RegisterNavElement>
					</ul>
				</UserReverseProtectedComponent>
			</nav>
		</header>
	)
}

export default Header
