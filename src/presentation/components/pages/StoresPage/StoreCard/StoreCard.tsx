import './StoreCard.css'

import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StoreSummary from '../../../../../application/types/StoreSummary.interface'
import Card from '../../../containers/Card/Card'

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
					<div className='store-products-count'>
						<p>{store.products_count}</p>
						<p>Productos</p>
					</div>
					<div className='rating-average'>
						<p className='feedback-rating'>{store.feedback_rating}</p>
						<div className='star-outer'>
							<div
								className='star-inner'
								style={{
									width: `${(store.feedback_rating / 5) * 100}%`,
								}}
							/>
						</div>
					</div>
				</div>
			</Link>
		</Card>
	)
}

export default StoreCard
