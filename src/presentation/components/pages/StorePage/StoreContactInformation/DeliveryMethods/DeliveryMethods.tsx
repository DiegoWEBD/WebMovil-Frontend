import './DeliveryMethods.css'

const DeliveryMethods = () => {
	return (
		<div className='delivery-methods'>
			<h2 className='title'>Métodos de entrega</h2>
			<div className='methods-container'>
				<div className='information-item'>
					<p className='method'>Retiro en tienda</p>
					<p className='item-data'>Gratis</p>
				</div>
				<div className='information-item'>
					<p className='method'>Delivery</p>
					<p className='item-data'>$1.500</p>
				</div>
			</div>
		</div>
	)
}

export default DeliveryMethods
