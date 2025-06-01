import './StoreCard.css'

import { TiLocationOutline } from 'react-icons/ti'
import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import useModalState from '../../../../global_states/modalState'
import Card from '../../../containers/Card/Card'
import NotFoundImage from '../../../NotFoundImage/NotFoundImage'
import Shimmer from '../../../Skeleton/Shimmer/Shimmer'
import Skeleton from '../../../Skeleton/Skeleton'
import StorePage from '../../StorePage/StorePage'
import RatingStars from '../RatingStars/RatingStars'

type StoreCardProps = {
	store: StoreSummary | undefined
	className?: string
}

const StoreCard = ({ store, className }: StoreCardProps) => {
	const { openModal } = useModalState()

	return (
		<Card
			className={`store-card store-card-link skeleton-wrapper ${className}`}
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
	)
}

export default StoreCard
