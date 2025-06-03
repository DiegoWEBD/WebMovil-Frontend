import useAppState from '../../../global_states/appState'
import './ToggleDashboard.css'

import { FaBars } from 'react-icons/fa'

const ToggleDashboard = () => {
	const { dashboardOpen, setDashboardOpen } = useAppState()

	return (
		<button
			className='toggle-dashboard'
			type='button'
			onClick={() => setDashboardOpen(!dashboardOpen)}
			aria-label='Toggle menu'
		>
			<FaBars />
		</button>
	)
}

export default ToggleDashboard
