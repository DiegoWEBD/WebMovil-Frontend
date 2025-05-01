import './StoreSkeletonCard.css'

import Card from '../../../../containers/Card/Card'
import Skeleton from '../../../../Skeleton/Skeleton'

const StoreSkeletonCard = () => {
	return (
		<Card className='store-skeleton'>
			<Skeleton height='13rem' />
			<div className='store-skeleton-info'>
				<Skeleton width='60%' height='1.4rem' />
				<Skeleton />
			</div>
			<div className='store-skeleton-footer'>
				<Skeleton width='30%' />
				<Skeleton width='20%' />
			</div>
		</Card>
	)
}

export default StoreSkeletonCard
