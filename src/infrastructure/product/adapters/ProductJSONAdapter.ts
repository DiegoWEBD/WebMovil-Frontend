import Product from '../../../domain/Product/Product'
import ProductJSON from '../ProductJSON.interface'

export default class ProductJSONAdapter extends Product {
	constructor(productJSON: ProductJSON) {
		super(
			productJSON.code,
			productJSON.name,
			productJSON.description,
			productJSON.price,
			productJSON.store_id,
			productJSON.picture,
			productJSON.stock
		)
	}
}
