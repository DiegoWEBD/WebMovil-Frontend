import { LuStore } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import './PageLogo.css'

type PageLogoProps = {
	className?: string
}

const PageLogo = ({ className }: PageLogoProps) => {
	return (
		<Link to='/tiendas' className={`logo-container ${className}`}>
			<div className='logo-icon-container'>
				<LuStore className='logo-icon' />
			</div>
		</Link>
	)
}

export default PageLogo
