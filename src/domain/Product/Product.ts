export default class Product {
	private code: string
	private name: string
	private description: string
	private price: number

	constructor(code: string, name: string, description: string, price: number) {
		this.code = code
		this.name = name
		this.price = price
		this.description = description
	}

	public getCode(): string {
		return this.code
	}

	public getName(): string {
		return this.name
	}

	public getDescription(): string {
		return this.description
	}

	public getPrice(): number {
		return this.price
	}
}
