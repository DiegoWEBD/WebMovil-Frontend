import Schedule from '../../../../../../../domain/Schedule/Schedule'

const weekDaysMap: Map<number, string> = new Map([
	[0, 'Domingo'],
	[1, 'Lunes'],
	[2, 'Martes'],
	[3, 'Miércoles'],
	[4, 'Jueves'],
	[5, 'Viernes'],
	[6, 'Sábado'],
])

const useDailySchedule = (schedules: Schedule[]) => {
	const now = new Date()
	const weekDay = now.getDay()

	const isOpenNow = () => {
		if (schedules.length === 0) return false

		for (const schedule of schedules) {
			if (weekDaysMap.get(weekDay) === schedule.getDay()) {
				const open = schedule.getOpen()
				const close = schedule.getClose()

				const [openHours, openMinutes] = open.split(':').map(Number)
				const [closeHours, closeMinutes] = close.split(':').map(Number)

				const openDate = new Date(now)
				openDate.setHours(openHours, openMinutes, 0, 0)

				const closeDate = new Date(now)
				closeDate.setHours(closeHours, closeMinutes, 0, 0)

				if (now >= openDate && now <= closeDate) return true
			}
		}
		return false
	}

	const getStateMessage = (): string | null => {
		if (schedules.length === 0) return null

		// Verificar si está abierto ahora mismo
		for (const schedule of schedules) {
			if (weekDaysMap.get(weekDay) === schedule.getDay()) {
				const open = schedule.getOpen()
				const close = schedule.getClose()

				const [openHours, openMinutes] = open.split(':').map(Number)
				const [closeHours, closeMinutes] = close.split(':').map(Number)

				const openDate = new Date(now)
				openDate.setHours(openHours, openMinutes, 0, 0)

				const closeDate = new Date(now)
				closeDate.setHours(closeHours, closeMinutes, 0, 0)

				if (now >= openDate && now <= closeDate) {
					return `Cierra a las ${close}`
				}
			}
		}

		// Sin no está abierto, buscar el siguiente horario
		for (let i = 1; i <= 7; i++) {
			const nextDayIndex = (weekDay + i) % 7
			const nextDayName = weekDaysMap.get(nextDayIndex)

			const schedule = schedules.find(s => s.getDay() === nextDayName)
			if (schedule) {
				const open = schedule.getOpen()
				if (i === 1) {
					return `Abre mañana a las ${open}`
				} else {
					return `Abre el ${nextDayName} a las ${open}`
				}
			}
		}
		return null
	}

	return { isOpenNow, getStateMessage }
}

export default useDailySchedule
