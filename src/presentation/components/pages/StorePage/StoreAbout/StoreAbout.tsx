import './StoreAbout.css'

import Store from '../../../../../domain/Store/Store'
import Card from '../../../containers/Card/Card'
import useGroupedSchedules, { ScheduleGroup } from './hooks/useGroupedSchedules'

type StoreAboutProps = {
	store: Store | undefined
}

const StoreAbout = ({ store }: StoreAboutProps) => {
	const schedules = store?.getSchedules() ?? []
	const groupedSchedules: ScheduleGroup[] = useGroupedSchedules(schedules)

	return (
		<Card className='store-about'>
			<h2 className='about-title'>Sobre nosotros</h2>
			<p className='about'>{store?.getAbout()}</p>
			<h3>Horarios</h3>

			{groupedSchedules.map(schedule => (
				<div key={schedule.dayRange} className='schedule-container'>
					<div className='schedule-days'>{schedule.dayRange}</div>
					<p className='schedule-time'>
						{schedule.open} - {schedule.close}
					</p>
				</div>
			))}
		</Card>
	)
}

export default StoreAbout
