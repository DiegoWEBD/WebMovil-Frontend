import './StorePage.css'

import StoresContainer from './StoresContainer/StoresContainer'

const StorePage = () => {
	return (
		<>
			<div className='page-title-container'>
				<h1 className='page-title'>Tiendas</h1>
				<p className='page-subtitle'>Descubre las tiendas de tu vecindario</p>
			</div>
			<StoresContainer />
		</>
	)
}

export default StorePage
