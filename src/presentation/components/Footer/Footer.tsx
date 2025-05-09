import './Footer.css'

import { FaHome, FaStore } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'
import NavElement from '../Dashboard/NavElement/NavElement'

const Footer = () => {
	return (
		<footer className='page-footer'>
			<NavElement to='/' className='footer-nav'>
				<FaHome />
			</NavElement>
			<NavElement to='/tiendas' className='footer-nav'>
				<FaStore />
			</NavElement>

			<NavElement to='/perfil' className='footer-nav'>
				<RxAvatar />
			</NavElement>
		</footer>
	)
}

export default Footer
