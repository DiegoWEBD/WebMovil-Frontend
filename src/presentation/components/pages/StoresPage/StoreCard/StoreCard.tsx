import './StoreCard.css'

import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StoreSummary from '../../../../../application/types/StoreSummary.interface'
import Card from '../../../containers/Card/Card'
import RatingStars from '../RatingStars/RatingStars'

type StoreCardProps = {
	store: StoreSummary
}

const StoreCard = ({ store }: StoreCardProps) => {
	return (
		<Card className='store-card'>
			<Link
				to={`/tiendas/${encodeURIComponent(store.name)}`}
				className='store-card-link'
				state={{
					storeId: store.id,
				}}
			>
				<div className='store-image-container'>
					<img src='http://localhost:3000/stores_portraits/generic_store_portrait.png' />
				</div>

				<div className='store-info-container resume'>
					<p className='store-card-name'>{store.name}</p>
					<div className='store-direction-container'>
						<TiLocationOutline className='direction-logo' />
						<p className='store-direction'>{store.direction}</p>
					</div>

					<p className='store-description'>{store.description}</p>
				</div>

				<div className='store-info-container extra'>
					<p className='store-products-count-container'>
						<p className='store-products-count'>{store.products_count}</p>
						<p>Productos</p>
					</p>
					<RatingStars rating={store.feedback_rating} />
				</div>
			</Link>
		</Card>
	)
}

export default StoreCard
