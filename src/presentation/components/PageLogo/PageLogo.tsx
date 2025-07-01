import './PageLogo.css'

import { Link } from 'react-router-dom'
import { IoStorefrontOutline } from 'react-icons/io5'
import { LuTruck } from 'react-icons/lu'

type PageLogoProps = {
	type?: string
}

const PageLogo = ({ type }: PageLogoProps) => {
	return (
		<Link to='/explorar' className='logo-container'>
			{type === 'delivery-man' ? (
				<LuTruck className='logo-icon' />
			) : (
				<IoStorefrontOutline className='logo-icon' />
			)}
			<h1>MiBarrio - Repartidor</h1>
		</Link>
	)
}

export default PageLogo
