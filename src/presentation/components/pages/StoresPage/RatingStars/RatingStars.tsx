import './RatingStars.css'
import useRatingStars from './hooks/useRatingStars'

type RatingStarsProps = {
	rating: number
}

const RatingStars = ({ rating }: RatingStarsProps) => {
	const { renderStars } = useRatingStars(rating)

	return (
		<div className='rating-average'>
			<p className='feedback-rating'>{rating}</p>
			<div className='star-icons'>{renderStars()}</div>
		</div>
	)
}

export default RatingStars
