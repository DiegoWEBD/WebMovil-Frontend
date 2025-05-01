import axios from 'axios'
import Product from '../../domain/Product/Product'
import IStockService from './IStockService.interface'
import { CONSTANTS } from '../../utils/constants'
import ProductJSON from '../../infrastructure/product/ProductJSON.interface'
import ProductJSONAdapter from '../../infrastructure/product/adapters/ProductJSONAdapter'

export default class StockService implements IStockService {
	async getProductsByStoreId(storeId: string): Promise<Product[]> {
		const headers = {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		}

		const response = await axios.get(
			`${CONSTANTS.API_URL}/stock?store_id=${storeId}`,
			{
				headers,
			}
		)

		return response.data.map(
			(product: ProductJSON) => new ProductJSONAdapter(product)
		)
	}
}
