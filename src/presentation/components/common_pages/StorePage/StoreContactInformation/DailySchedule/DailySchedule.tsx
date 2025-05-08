import './DailySchedule.css'

import Store from '../../../../../../domain/Store/Store'
import Skeleton from '../../../../Skeleton/Skeleton'
import useDailySchedule from './hooks/useDailySchedule'

type DailyScheduleProps = {
	store: Store | undefined
	compact?: boolean
}

const DailySchedule = ({ store, compact = false }: DailyScheduleProps) => {
	const { isOpenNow, getStateMessage } = useDailySchedule(
		store?.getSchedules() || []
	)

	return (
		<div
			className={`time-container ${store ? '' : 'loading'} ${
				compact ? 'compact' : ''
			}`}
		>
			{store ? (
				<p
					className={`open-state ${isOpenNow() ? '' : 'closed'} ${
						compact ? 'compact' : ''
					}`}
				>
					{isOpenNow() ? (compact ? 'Abierto' : 'Abierto ahora') : 'Cerrado'}
				</p>
			) : (
				<Skeleton width={compact ? '6rem' : '80%'} />
			)}
			{store ? (
				<p className={`time-text ${compact ? 'compact-main' : ''}`}>
					{getStateMessage()}
				</p>
			) : (
				!compact && <Skeleton width='70%' height='0.8rem' />
			)}
		</div>
	)
}

export default DailySchedule
