import './DailySchedule.css'

import Store from '../../../../../../domain/Store/Store'
import Skeleton from '../../../../Skeleton/Skeleton'
import useDailySchedule from './hooks/useDailySchedule'

type DailyScheduleProps = {
	store: Store | undefined
}

const DailySchedule = ({ store }: DailyScheduleProps) => {
	const { isOpenNow, getStateMessage } = useDailySchedule(
		store?.getSchedules() || []
	)

	return (
		<div className={`time-container ${!store ? 'loading' : ''}`}>
			{store ? (
				<p className={`open-state ${isOpenNow() ? '' : 'closed'}`}>
					{isOpenNow() ? 'Abierto ahora' : 'Cerrado'}
				</p>
			) : (
				<Skeleton width='80%' />
			)}
			{store ? (
				<p className='time-text'>{getStateMessage()}</p>
			) : (
				<Skeleton width='75%' height='0.8rem' />
			)}
		</div>
	)
}

export default DailySchedule
