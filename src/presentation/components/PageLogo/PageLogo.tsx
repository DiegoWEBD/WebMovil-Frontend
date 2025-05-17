import './PageLogo.css'

import { Link } from 'react-router-dom'
import { PiCurrencyDollarFill } from 'react-icons/pi'

const PageLogo = () => {
	return (
		<Link to='/tiendas' className='logo-container'>
			<PiCurrencyDollarFill className='logo-image' />
		</Link>
	)
}

export default PageLogo
