import '../ProductCard.css'
import './ProductSkeletonCard.css'

import Skeleton from '../../../Skeleton/Skeleton'
import Card from '../../../containers/Card/Card'

const ProductSkeletonCard = () => {
	return (
		<Card className='product-card skeleton-card'>
			<Skeleton width='80%' />
			<Skeleton width='50%' />
			<Skeleton />
			<Skeleton />
			<Skeleton width='30%' />
		</Card>
	)
}

export default ProductSkeletonCard
