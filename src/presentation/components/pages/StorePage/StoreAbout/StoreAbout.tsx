import './StoreAbout.css'

import Store from '../../../../../domain/Store/Store'
import Card from '../../../containers/Card/Card'
import RatingStars from '../../StoresPage/RatingStars/RatingStars'
import useGroupedSchedules, { ScheduleGroup } from './hooks/useGroupedSchedules'

type StoreAboutProps = {
	store: Store | undefined
}

const StoreAbout = ({ store }: StoreAboutProps) => {
	const schedules = store?.getSchedules() ?? []
	const groupedSchedules: ScheduleGroup[] = useGroupedSchedules(schedules)

	return (
		<Card className='store-about'>
			<div className='about-section'>
				<h3 className='about-title'>Sobre nosotros</h3>
				<p className='about'>{store?.getAbout()}</p>
			</div>

			<div className='about-section'>
				<h3>Horarios</h3>
				{groupedSchedules.map(schedule => (
					<div key={schedule.dayRange} className='schedule-container'>
						<div className='schedule-days'>{schedule.dayRange}</div>
						<p className='schedule-time'>
							{schedule.open} - {schedule.close}
						</p>
					</div>
				))}
			</div>

			<div className='about-section'>
				<h3>Valoración</h3>
				<RatingStars rating={4.2} />
			</div>
		</Card>
	)
}

export default StoreAbout
