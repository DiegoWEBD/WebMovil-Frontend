import './ProductCard.css'

import Product from '../../../../domain/Product/Product'
import Card from '../../containers/Card/Card'
import NotFoundImage from '../../NotFoundImage/NotFoundImage'
import Modal from '../../Modal/Modal'
import { useState } from 'react'
import Skeleton from '../../Skeleton/Skeleton'
import Shimmer from '../../Skeleton/Shimmer/Shimmer'
import DetailedProduct from '../../views/shared/DetailedProduct/DetailedProduct'

type ProductCardProps = {
	product?: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	const [showDetailedProduct, setShowDetailedProduct] = useState(false)

	return (
		<>
			<Card
				className={`product-card skeleton-wrapper ${product ? 'loaded' : ''}`}
				onClick={product ? () => setShowDetailedProduct(true) : undefined}
			>
				<div className='product-img-container'>
					{product ? (
						<NotFoundImage className='product-img' />
					) : (
						<Skeleton height='100%' width='100%' />
					)}
				</div>
				<div className='product-info-container'>
					{product ? (
						<p className='product-info title'>{product.getName()}</p>
					) : (
						<Skeleton />
					)}

					{product ? (
						<p className='product-info description'>
							{product.getDescription()}
						</p>
					) : (
						<Skeleton />
					)}

					{product ? (
						<p className='product-info price text-highlight'>
							${product.getPrice()}
						</p>
					) : (
						<Skeleton />
					)}
				</div>
				{!product && <Shimmer />}
			</Card>
			{product && (
				<Modal
					show={showDetailedProduct}
					onClose={() => {
						setShowDetailedProduct(false)
					}}
				>
					<DetailedProduct product={product} />
				</Modal>
			)}
		</>
	)
}

export default ProductCard
