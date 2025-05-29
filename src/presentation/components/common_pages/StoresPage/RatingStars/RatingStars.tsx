import './RatingStars.css'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skeleton from '../../../Skeleton/Skeleton'

type RatingStarsProps = {
	rating?: number
}

const RatingStars = ({ rating }: RatingStarsProps) => {
	const percentage = rating ? Math.round((rating / 5) * 100) : 0

	return (
		<div className='rating-average'>
			{rating ? (
				<p className='feedback-rating'>{rating.toFixed(1)}</p>
			) : (
				<Skeleton height='0.9rem' />
			)}
			<div className='stars-container'>
				<div className='stars-bg'>
					{rating &&
						[...Array(5)].map((_, i) => (
							<FontAwesomeIcon key={i} icon={faStar} className='star' />
						))}
				</div>
				<div className='stars-fg' style={{ width: `${percentage}%` }}>
					{rating &&
						[...Array(5)].map((_, i) => (
							<FontAwesomeIcon key={i} icon={faStar} className='star filled' />
						))}
				</div>
			</div>
		</div>
	)
}

export default RatingStars
