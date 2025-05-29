import './StoreCard.css'

import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import Card from '../../../containers/Card/Card'
import NotFoundImage from '../../../NotFoundImage/NotFoundImage'
import Skeleton from '../../../Skeleton/Skeleton'
import RatingStars from '../RatingStars/RatingStars'

type StoreCardProps = {
	store: StoreSummary | undefined
	className?: string
}

/*<img
	src={`${CONSTANTS.API_URL}/stores_portraits/generic_store_portrait.webp`}
	alt='Store'
	loading='lazy'
/>*/

const StoreCard = ({ store, className }: StoreCardProps) => {
	return (
		<Card className={`store-card ${className}`}>
			<Link
				to={store ? `/tiendas/${encodeURIComponent(store.name)}` : '#'}
				className='store-card-link'
				state={
					store
						? {
								storeId: store.id,
						  }
						: {}
				}
			>
				<div className='store-image-container'>
					{store ? (
						<NotFoundImage className='store-image' />
					) : (
						<Skeleton width='100%' height='100%' />
					)}
				</div>

				<div className='store-complete-info-container'>
					<div className='store-info-container resume'>
						{store ? (
							<p className='store-card-name'>{store.name}</p>
						) : (
							<Skeleton width='50%' height='1.1rem' />
						)}
						<div className='store-direction-container'>
							{store ? (
								<>
									<TiLocationOutline className='direction-logo' />
									<p className='store-direction'>{store.direction}</p>
								</>
							) : (
								<Skeleton width='40%' height='0.9rem' />
							)}
						</div>
						{store ? (
							<p className='store-description'>{store.description}</p>
						) : (
							<Skeleton width='60%' height='0.9rem' />
						)}
					</div>

					<div className='store-info-container extra'>
						<div className='store-products-count-container'>
							{store ? (
								<>
									<p className='store-products-count'>{store.products_count}</p>
									<p>Productos</p>
								</>
							) : (
								<Skeleton height='0.9rem' />
							)}
						</div>
						<RatingStars rating={store?.feedback_rating} />
					</div>
				</div>
			</Link>
		</Card>
	)
}

export default StoreCard
