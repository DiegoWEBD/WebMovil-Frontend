import './Footer.css'

import { FaRegChartBar } from 'react-icons/fa'
import { LuBox, LuShoppingCart, LuStore } from 'react-icons/lu'
import NavElement from '../Dashboard/NavElement/NavElement'

const Footer = () => {
	return (
		<footer className='page-footer'>
			<NavElement to='/tiendas' className='footer-nav'>
				<LuStore />
			</NavElement>

			<NavElement to='/locatario/productos' className='footer-nav'>
				<LuBox />
			</NavElement>

			<NavElement to='/' className='footer-nav'>
				<LuShoppingCart />
			</NavElement>

			<NavElement to='/' className='footer-nav'>
				<FaRegChartBar />
			</NavElement>
		</footer>
	)
}

export default Footer
