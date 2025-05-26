import { BsCardChecklist } from 'react-icons/bs'
import { IoStorefrontOutline } from 'react-icons/io5'
import { LuSearch, LuUser } from 'react-icons/lu'

import NavElement from '../../../Dashboard/NavElement/NavElement'

type ClientNavMenuProps = {
	className?: string
	setMenuOpen?: (menuOpen: boolean) => void
}

const ClientNavMenu = ({ className, setMenuOpen }: ClientNavMenuProps) => {
	return (
		<>
			<NavElement
				to='/tiendas'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<IoStorefrontOutline className='nav-element-icon' />
				<p className='nav-element-text'>Tiendas</p>
			</NavElement>

			<NavElement
				to='/explorar'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuSearch className='nav-element-icon' />
				<p className='nav-element-text'>Explorar</p>
			</NavElement>

			<NavElement
				to='/pedidos'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<BsCardChecklist className='nav-element-icon' />
				<p className='nav-element-text'>Pedidos</p>
			</NavElement>

			{/*<NavElement
				to='/'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<FaRegChartBar className='nav-element-icon' />
				<p className='nav-element-text'>Estadísticas</p>
			</NavElement>*/}

			<NavElement
				to='/perfil'
				className={`dashboard-v2-nav-element ${className}`}
				onClick={() => {
					if (setMenuOpen) setMenuOpen(false)
				}}
			>
				<LuUser className='nav-element-icon' />
				<p className='nav-element-text'>Cuenta</p>
			</NavElement>
		</>
	)
}

export default ClientNavMenu
