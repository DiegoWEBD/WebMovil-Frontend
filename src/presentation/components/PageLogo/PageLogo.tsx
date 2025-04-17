import './PageLogo.css'
import { FaStore } from 'react-icons/fa'

type PageLogoProps = {
	className?: string
}

const PageLogo = ({ className }: PageLogoProps) => {
	return (
		<div className={`logo-container ${className}`}>
			<FaStore className='logo' />
			<h1>MiBarrio</h1>
		</div>
	)
}

export default PageLogo
