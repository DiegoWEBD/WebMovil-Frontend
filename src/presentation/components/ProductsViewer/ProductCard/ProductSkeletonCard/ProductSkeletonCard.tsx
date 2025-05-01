import '../ProductCard.css'
import './ProductSkeletonCard.css'

import Skeleton from '../../../Skeleton/Skeleton'
import Card from '../../../containers/Card/Card'

const ProductSkeletonCard = () => {
	return (
		<Card className='product-skeleton'>
			<Skeleton height='19rem' />
			<div className='product-skeleton-info'>
				<Skeleton width='80%' />
				<Skeleton width='45%' height='0.9rem' />
				<Skeleton height='0.9rem' />
				<Skeleton width='20%' height='0.9rem' />
				<Skeleton height='2.5rem' />
			</div>
		</Card>
	)
}

export default ProductSkeletonCard
