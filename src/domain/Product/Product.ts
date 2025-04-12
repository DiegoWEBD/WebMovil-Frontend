export default class Product {
	code: string
	name: string
	description: string
	price: number

	constructor(code: string, name: string, description: string, price: number) {
		this.code = code
		this.name = name
		this.price = price
		this.description = description
	}
}
