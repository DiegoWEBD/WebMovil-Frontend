import './PageLogo.css'

import { Link } from 'react-router-dom'
import { IoStorefrontOutline } from 'react-icons/io5'

const PageLogo = () => {
	return (
		<Link to='/explorar' className='logo-container'>
			<IoStorefrontOutline className='logo-icon' />
			<h1>MiBarrio</h1>
		</Link>
	)
}

export default PageLogo
