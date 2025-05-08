import Skeleton from '../../../../Skeleton/Skeleton'
import './DeliveryMethods.css'

type DeliveryMethodsProps = {
	isLoading?: boolean
}

const DeliveryMethods = ({ isLoading = true }: DeliveryMethodsProps) => {
	return (
		<div className='delivery-methods'>
			<h2 className='title'>Métodos de entrega</h2>
			<div className='methods-container'>
				<div className='information-item method-item'>
					{!isLoading ? (
						<p className='method'>Retiro en tienda</p>
					) : (
						<Skeleton width='7rem' />
					)}
					{!isLoading ? (
						<p className='item-data'>Gratis</p>
					) : (
						<Skeleton width='3rem' />
					)}
				</div>
				<div className='information-item method-item'>
					{!isLoading ? (
						<p className='method'>Delivery</p>
					) : (
						<Skeleton width='5rem' />
					)}
					{!isLoading ? (
						<p className='item-data'>$1500</p>
					) : (
						<Skeleton width='3rem' />
					)}
				</div>
			</div>
		</div>
	)
}

export default DeliveryMethods
