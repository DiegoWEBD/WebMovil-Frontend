import './StoreCard.css'

import StoreSummary from '../../../application/store_service/types/StoreSummary.interface'
import useModalState from '../../global_states/modalState'
import StorePage from '../common_pages/StorePage/StorePage'
import Card from '../containers/Card/Card'
import NotFoundImage from '../NotFoundImage/NotFoundImage'
import RatingStars from '../RatingStars/RatingStars'
import Shimmer from '../Skeleton/Shimmer/Shimmer'
import Skeleton from '../Skeleton/Skeleton'

import { TiLocationOutline } from 'react-icons/ti'

type StoreCardProps = {
	store?: StoreSummary
	className?: string
}

const StoreCard = ({ store, className }: StoreCardProps) => {
	const { openModal } = useModalState()

	return (
		<Card
			className={`store-card store-card-link skeleton-wrapper ${
				store ? 'clickable' : ''
			} ${className}`}
			onClick={() => {
				if (store) openModal(<StorePage storeSummary={store} />)
			}}
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
					{store ? (
						<p className='store-products-count'>
							{store.products_count} Productos
						</p>
					) : (
						<Skeleton height='0.9rem' />
					)}

					<RatingStars rating={store?.feedback_rating} />
				</div>
			</div>

			{!store && <Shimmer />}
		</Card>
	)
}

export default StoreCard
