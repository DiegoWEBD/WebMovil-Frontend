import './StoreCard.css'

import { FaStar } from 'react-icons/fa'
import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Store from '../../../../../domain/Store/Store'

type StoreCardProps = {
	store: Store
}

const StoreCard = ({ store }: StoreCardProps) => {
	return (
		<Link
			to={`/tiendas/${encodeURIComponent(store.getName())}`}
			className='store-card'
			state={{
				storeId: store.getId(),
			}}
		>
			<div className='store-image-container'>
				<img src='http://localhost:3000/stores_portraits/generic_store_portrait.png' />
			</div>

			<div className='store-info-container resume'>
				<h2 className='store-name'>{store.getName()}</h2>
				<div className='store-direction-container'>
					<TiLocationOutline className='direction-logo' />
					<p className='store-direction'>{store.getDirection()}</p>
				</div>

				<p className='store-description'>{store.getDescription()}</p>
			</div>

			<div className='store-info-container extra'>
				<p className='store-products-count'>6 productos</p>
				<div className='store-rating'>
					<FaStar className='star' />
					<p>4.5</p>
				</div>
			</div>
		</Link>
	)
}

export default StoreCard
