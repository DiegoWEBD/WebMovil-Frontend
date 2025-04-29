import { GrLocation, GrPhone } from 'react-icons/gr'
import { LuClock } from 'react-icons/lu'
import { MdMailOutline } from 'react-icons/md'
import Store from '../../../../../domain/Store/Store'
import './StoreContactInformation.css'
import DeliveryMethods from './DeliveryMethods/DeliveryMethods'
import Skeleton from '../../../Skeleton/Skeleton'

type StoreContactInformationProps = {
	store: Store | undefined
}

const StoreContactInformation = ({ store }: StoreContactInformationProps) => {
	return (
		<div className='store-contact-information'>
			<div className='primary-information'>
				<h2 className='title'>Información de contacto</h2>
				<div className='information-item'>
					<GrLocation className='item-logo' />
					{store ? (
						<p className='item-data'>{store.getDirection()}</p>
					) : (
						<Skeleton width='70%' />
					)}
				</div>
				<div className='information-item'>
					<GrPhone className='item-logo' />
					{store ? (
						<p className='item-data'>{store?.getPhone()} </p>
					) : (
						<Skeleton width='40%' />
					)}
				</div>
				<div className='information-item'>
					<MdMailOutline className='item-logo' />
					{store ? (
						<p className='item-data'>tienda@mibarrio.com</p>
					) : (
						<Skeleton width='60%' />
					)}
				</div>
				<div className='information-item'>
					<LuClock className='item-logo' />
					<div className={`time-container ${!store ? 'loading' : ''}`}>
						{store ? (
							<p className='open-time-text'>Abierto ahora</p>
						) : (
							<Skeleton width='80%' />
						)}
						{store ? (
							<p className='time-text'>Cierra a las 19:00</p>
						) : (
							<Skeleton width='75%' height='0.8rem' />
						)}
					</div>
				</div>
			</div>
			<DeliveryMethods />
		</div>
	)
}

export default StoreContactInformation
