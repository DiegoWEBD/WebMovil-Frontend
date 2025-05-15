import { Link } from 'react-router-dom'
import './PageLogo.css'

const PageLogo = () => {
	return (
		<Link to='/tiendas' className='logo-container'>
			<img src='/page_logo.jpeg' alt='MiBarrio' className='logo-image' />
		</Link>
	)
}

export default PageLogo
