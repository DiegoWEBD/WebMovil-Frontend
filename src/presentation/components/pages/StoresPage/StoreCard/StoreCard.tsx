import './StoreCard.css'

import { TiLocationOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import StoreSummary from '../../../../../application/types/StoreSummary.interface'
import Card from '../../../containers/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

// Función auxiliar para renderizar estrellas
const renderStars = (rating: number) => {
	const stars = []
	const fullStars = Math.floor(rating)
	const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75
	const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<FontAwesomeIcon key={`full-${i}`} icon={fullStar} color='gold' />
		)
	}

	if (hasHalf) {
		stars.push(<FontAwesomeIcon key='half' icon={halfStar} color='gold' />)
	}

	for (let i = 0; i < emptyStars; i++) {
		stars.push(
			<FontAwesomeIcon key={`empty-${i}`} icon={emptyStar} color='gold' />
		)
	}

	return stars
}

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
					<div className='rating-average'>
						<p className='feedback-rating'>{store.feedback_rating}</p>
						<div className='star-icons'>
							{renderStars(store.feedback_rating)}
						</div>
					</div>
				</div>
			</Link>
		</Card>
	)
}

export default StoreCard
