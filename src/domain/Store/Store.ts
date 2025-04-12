export default class Store {
	private id: string | undefined
	private name: string
	private description: string
	private direction: string
	private phone: string
	private ownersEmails: string[]

	constructor(
		name: string,
		description: string,
		direction: string,
		phone: string,
		ownersEmails: string[],
		id: string | undefined = undefined
	) {
		this.id = id
		this.name = name
		this.description = description
		this.direction = direction
		this.phone = phone
		this.ownersEmails = ownersEmails
	}

	public getId(): string | undefined {
		return this.id
	}

	public getName(): string {
		return this.name
	}

	public getDescription(): string {
		return this.description
	}

	public getDirection(): string {
		return this.direction
	}

	public getPhone(): string {
		return this.phone
	}

	public getOwnersEmails(): string[] {
		return this.ownersEmails
	}

	public setId(id: string): void {
		this.id = id
	}
}
