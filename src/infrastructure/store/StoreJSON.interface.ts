type ScheduleData = {
	day:
		| 'Lunes'
		| 'Martes'
		| 'Miércoles'
		| 'Jueves'
		| 'Viernes'
		| 'Sábado'
		| 'Domingo'
	open: string
	close: string
}

export default interface StoreJSON {
	id: string | undefined
	name: string
	description: string
	about: string
	direction: string
	phone: string
	email: string
	schedules: ScheduleData[]
	owners_emails: string[]
	image_name: string | undefined
}
