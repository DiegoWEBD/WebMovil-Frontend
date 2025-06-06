export default class DispatchOrder {
	protected code: string
	protected issueDate: Date

	constructor(code: string, issueDate: Date) {
		this.code = code
		this.issueDate = issueDate
	}

	getCode(): string {
		return this.code
	}

	getIssueDate(): Date {
		return this.issueDate
	}
}
