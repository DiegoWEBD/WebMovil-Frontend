import Product from '../../domain/Product/Product'
import ProductJSON from '../../infrastructure/product/ProductJSON.interface'
import ProductJSONAdapter from '../../infrastructure/product/adapters/ProductJSONAdapter'
import apiClient from '../../utils/axios_client'
import IStockService from './IStockService.interface'

export default class StockService implements IStockService {
	async getProductsByStoreId(storeId: string): Promise<Product[]> {
		const response = await apiClient.get(`/stock?store_id=${storeId}`)

		return response.data.map(
			(product: ProductJSON) => new ProductJSONAdapter(product)
		)
	}
}
