import './ProductsViewer.css'

import Product from '../../../domain/Product/Product'
import ProductCard from './ProductCard/ProductCard'
import ProductSkeletonCard from './ProductCard/ProductSkeletonCard/ProductSkeletonCard'

type ProductsViewerProps = {
	products: Product[] | undefined
}

const ProductsViewer = ({ products }: ProductsViewerProps) => {
	return (
		<div className='products-container'>
			{products
				? products.map(product => (
						<ProductCard key={product.getCode()} product={product} />
				  ))
				: Array.from({ length: 10 }).map((_, index) => (
						<ProductSkeletonCard key={index} />
				  ))}
		</div>
	)
}

export default ProductsViewer
