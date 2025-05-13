import './StoreCard.css'

import { useState, useEffect } from 'react'
import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StoreSummary from '../../../../../application/store_service/types/StoreSummary.interface'
import { CONSTANTS } from '../../../../../utils/constants'
import Card from '../../../containers/Card/Card'
import RatingStars from '../RatingStars/RatingStars'
import StoreSkeletonCard from './StoreSkeletonCard/StoreSkeletonCard'

type StoreCardProps = {
	store: StoreSummary
}

const StoreCard = ({ store }: StoreCardProps) => {
	const [imageLoaded, setImageLoaded] = useState<boolean>(false)
	const [imageError, setImageError] = useState<boolean>(false)

	const imageSrc = `${CONSTANTS.API_URL}/stores_portraits/generic_store_portrait.png`

	useEffect(() => {
		// In case image is cached, it might not trigger onLoad
		const img = new Image()
		img.src = imageSrc
		img.onload = () => setImageLoaded(true)
		img.onerror = () => setImageError(true)
	}, [imageSrc])

	if (!imageLoaded || imageError) {
		return <StoreSkeletonCard />
	}

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
					<img
						src={imageSrc}
						alt='Store'
						onLoad={() => setImageLoaded(true)}
						onError={() => setImageError(true)}
					/>
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
					<div className='store-products-count-container'>
						<p className='store-products-count'>{store.products_count}</p>
						<p>Productos</p>
					</div>
					<RatingStars rating={store.feedback_rating} />
				</div>
			</Link>
		</Card>
	)
}

export default StoreCard
