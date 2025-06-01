import '../OwnerProductsCard.css'

import Product from '../../../../../../../../domain/Product/Product'
import ProductCard from '../../../../../../ProductsViewer/ProductCard/ProductCard'

type OwnerProductsCardItemProps = {
	product: Product | undefined
}

const OwnerProductsCardItem = ({ product }: OwnerProductsCardItemProps) => {
	return <ProductCard product={product} />
}

export default OwnerProductsCardItem
