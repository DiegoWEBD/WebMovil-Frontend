import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

const useRatingStars = (rating: number) => {
	const renderStars = () => {
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

	return { renderStars }
}

export default useRatingStars
