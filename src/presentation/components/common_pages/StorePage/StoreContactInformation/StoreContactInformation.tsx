import './StoreContactInformation.css'

import { GrLocation, GrPhone } from 'react-icons/gr'
import { LuClock } from 'react-icons/lu'
import { MdMailOutline } from 'react-icons/md'
import Store from '../../../../../domain/Store/Store'
import DeliveryMethods from './DeliveryMethods/DeliveryMethods'
import Skeleton from '../../../Skeleton/Skeleton'
import Card from '../../../containers/Card/Card'
import DailySchedule from './DailySchedule/DailySchedule'

type StoreContactInformationProps = {
	store: Store | undefined
	className?: string
}

const StoreContactInformation = ({
	store,
	className,
}: StoreContactInformationProps) => {
	return (
		<Card className={`store-contact-information ${className}`}>
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
						<p className='item-data'>{store.getPhone()} </p>
					) : (
						<Skeleton width='40%' />
					)}
				</div>
				<div className='information-item'>
					<MdMailOutline className='item-logo' />
					{store ? (
						<p className='item-data'>{store.getEmail()}</p>
					) : (
						<Skeleton width='60%' />
					)}
				</div>
				<div className='information-item '>
					<LuClock className='item-logo' />
					<DailySchedule store={store} />
				</div>
			</div>
			<DeliveryMethods isLoading={store === undefined} />
		</Card>
	)
}

export default StoreContactInformation
