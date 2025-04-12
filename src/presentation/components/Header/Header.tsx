import './Header.css'

import { FaStore } from 'react-icons/fa'
import NavElement from './NavElement/NavElement'
import LoginNavElement from './LoginNavElement/LoginNavElement'
import RegisterNavElement from './RegisterNavElement/RegisterNavElement'

const Header = () => {
	return (
		<header>
			<div className='logo-container'>
				<FaStore className='logo' />
				<h1>MiBarrio</h1>
			</div>

			<nav>
				<ul>
					<NavElement to='/'>Inicio</NavElement>
					<NavElement to='/tiendas'>Tiendas</NavElement>
					<NavElement to='/perfil'>Perfil</NavElement>
				</ul>

				<ul>
					<LoginNavElement to='/login'>Iniciar Sesión</LoginNavElement>
					<RegisterNavElement to='/register'>Registrarse</RegisterNavElement>
				</ul>
			</nav>
		</header>
	)
}

export default Header
