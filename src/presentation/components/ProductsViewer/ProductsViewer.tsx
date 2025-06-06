import Product from '../../../domain/Product/Product'
import ProductCard from './ProductCard/ProductCard'
import ProductSkeletonCard from './ProductCard/ProductSkeletonCard/ProductSkeletonCard'
import GridContainer from '../containers/GridContainer/GridContainer'

type ProductsViewerProps = {
	products: Product[] | undefined
}

const ProductsViewer = ({ products }: ProductsViewerProps) => {
	return (
		<GridContainer>
			{products
				? products.map(product => (
						<ProductCard key={product.getCode()} product={product} />
				  ))
				: Array.from({ length: 10 }).map((_, index) => (
						<ProductSkeletonCard key={index} />
				  ))}
		</GridContainer>
	)
}

export default ProductsViewer
