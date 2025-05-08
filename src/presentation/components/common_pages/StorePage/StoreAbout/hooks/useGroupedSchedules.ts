import { useMemo } from 'react'

type Schedule = {
	getDay: () => string
	getOpen: () => string
	getClose: () => string
}

export type ScheduleGroup = {
	dayRange: string
	open: string
	close: string
}

const WEEK_DAYS_ORDER = [
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo',
]

function sortByDayOrder(a: string, b: string): number {
	return WEEK_DAYS_ORDER.indexOf(a) - WEEK_DAYS_ORDER.indexOf(b)
}

const useGroupedSchedules = (schedules: Schedule[] = []): ScheduleGroup[] => {
	return useMemo(() => {
		const grouped: { days: string[]; open: string; close: string }[] = []

		schedules.forEach(schedule => {
			const open = schedule.getOpen()
			const close = schedule.getClose()
			const day = schedule.getDay()

			const existingGroup = grouped.find(
				group => group.open === open && group.close === close
			)

			if (existingGroup) {
				existingGroup.days.push(day)
			} else {
				grouped.push({ days: [day], open, close })
			}
		})

		// Ordenar los días dentro de cada grupo
		grouped.forEach(group => {
			group.days.sort(sortByDayOrder)
		})

		// Ordenar grupos por el primer día
		grouped.sort((a, b) => sortByDayOrder(a.days[0], b.days[0]))

		// Mapear a la estructura final con dayRange
		return grouped.map(({ days, open, close }) => {
			const dayRange =
				days.length === 1 ? days[0] : `${days[0]} - ${days[days.length - 1]}`
			return { dayRange, open, close }
		})
	}, [schedules])
}

export default useGroupedSchedules
