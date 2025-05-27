import './StoreCard.css'

import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import { CONSTANTS } from '../../../../../utils/constants'
import Card from '../../../containers/Card/Card'
import RatingStars from '../RatingStars/RatingStars'

type StoreCardProps = {
	store: StoreSummary
	className?: string
}

const StoreCard = ({ store, className }: StoreCardProps) => {
	return (
		<Card className={`store-card ${className}`}>
			<Link
				to={`/tiendas/${encodeURIComponent(store.name)}`}
				className='store-card-link'
				state={{
					storeId: store.id,
				}}
			>
				<div className='store-image-container'>
					<img
						src={`${CONSTANTS.API_URL}/stores_portraits/generic_store_portrait.webp`}
						alt='Store'
						loading='lazy'
						fetchPriority='high'
						width={300}
						height={200}
						onLoad={() => console.log('Image loaded for', store.name)}
					/>
				</div>

				<div className='store-complete-info-container'>
					<div className='store-info-container resume'>
						<p className='store-card-name'>{store.name}</p>
						<div className='store-direction-container'>
							<TiLocationOutline className='direction-logo' />
							<p className='store-direction'>{store.direction}</p>
						</div>
						<p className='store-description'>{store.description}</p>
					</div>

					<div className='store-info-container extra'>
						<div className='store-products-count-container'>
							<p className='store-products-count'>{store.products_count}</p>
							<p>Productos</p>
						</div>
						<RatingStars rating={store.feedback_rating} />
					</div>
				</div>
			</Link>
		</Card>
	)
}

export default StoreCard
