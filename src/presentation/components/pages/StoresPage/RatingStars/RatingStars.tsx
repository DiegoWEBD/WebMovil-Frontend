import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './RatingStars.css'

type RatingStarsProps = {
	rating: number
}

const RatingStars = ({ rating }: RatingStarsProps) => {
	const percentage = Math.round((rating / 5) * 100)

	return (
		<div className='rating-average'>
			<p className='feedback-rating'>{rating.toFixed(1)}</p>
			<div className='stars-container'>
				<div className='stars-bg'>
					{[...Array(5)].map((_, i) => (
						<FontAwesomeIcon key={i} icon={faStar} className='star' />
					))}
				</div>
				<div className='stars-fg' style={{ width: `${percentage}%` }}>
					{[...Array(5)].map((_, i) => (
						<FontAwesomeIcon key={i} icon={faStar} className='star filled' />
					))}
				</div>
			</div>
		</div>
	)
}

export default RatingStars
