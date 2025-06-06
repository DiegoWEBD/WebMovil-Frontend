import { BsCardChecklist } from 'react-icons/bs'
import { LuSearch, LuUser } from 'react-icons/lu'

import NavElement from '../../../Dashboard/NavElement/NavElement'

type ClientNavMenuProps = {
	className?: string
}

const ClientNavMenu = ({ className }: ClientNavMenuProps) => {
	return (
		<>
			<NavElement
				to='/explorar'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuSearch className='nav-element-icon' />
				<p className='nav-element-text'>Explorar</p>
			</NavElement>

			<NavElement
				to='/pedidos'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<BsCardChecklist className='nav-element-icon' />
				<p className='nav-element-text'>Pedidos</p>
			</NavElement>

			<NavElement
				to='/perfil'
				className={`dashboard-v2-nav-element ${className}`}
			>
				<LuUser className='nav-element-icon' />
				<p className='nav-element-text'>Cuenta</p>
			</NavElement>
		</>
	)
}

export default ClientNavMenu
