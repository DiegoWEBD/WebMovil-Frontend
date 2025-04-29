import { Link } from 'react-router-dom'
import './PageLogo.css'
import { FaStore } from 'react-icons/fa'

type PageLogoProps = {
	className?: string
}

const PageLogo = ({ className }: PageLogoProps) => {
	return (
		<Link to='/' className={`logo-container ${className}`}>
			<FaStore className='logo' />
			<h1 className={className}>MiBarrio</h1>
		</Link>
	)
}

export default PageLogo
