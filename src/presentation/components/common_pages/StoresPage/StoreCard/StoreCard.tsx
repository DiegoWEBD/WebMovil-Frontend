import './StoreCard.css'

import { useState } from 'react'
import { TiLocationOutline } from 'react-icons/ti'
import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import Card from '../../../containers/Card/Card'
import Modal from '../../../Modal/Modal'
import NotFoundImage from '../../../NotFoundImage/NotFoundImage'
import Shimmer from '../../../Skeleton/Shimmer/Shimmer'
import Skeleton from '../../../Skeleton/Skeleton'
import StorePage from '../../StorePage/StorePage'
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
	const [showDetailedStore, setShowDetailedStore] = useState(false)

	return (
		<>
			<Card
				className={`store-card store-card-link skeleton-wrapper ${className}`}
				onClick={() => setShowDetailedStore(true)}
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

				{!store && <Shimmer />}
			</Card>

			{showDetailedStore && store && (
				<Modal
					show={showDetailedStore}
					onClose={() => setShowDetailedStore(false)}
				>
					<StorePage
						storeSummary={store}
						closePage={() => setShowDetailedStore(false)}
					/>
				</Modal>
			)}
		</>
	)
}

export default StoreCard
