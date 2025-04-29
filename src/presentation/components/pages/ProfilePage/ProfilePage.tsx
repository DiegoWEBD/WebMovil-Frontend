import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LuCalendar, LuStar, LuStore, LuTags } from 'react-icons/lu'
import { CONSTANTS } from '../../../../utils/constants'
import useAppState from '../../../global_states/appState'
import './ProfilePage.css'
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard'
import User from '../../../../domain/User/User'

const ProfilePage = () => {
	const { userEmail } = useAppState()
	const { data } = useQuery({
		queryKey: ['userData'],
		queryFn: async () => {
			if (!userEmail) return null
			const { data } = await axios.get(
				`${CONSTANTS.API_URL}/users/${encodeURIComponent(userEmail)}`
			)

			return new User(
				data.email,
				data.full_name,
				data.phone,
				data.profile_picture
			)
		},
	})

	return (
		<div className='profile-page'>
			<header className='profile-header'>
				<div className='picture-plus-info'>
					<div className='profile-picture' />
					<div className='profile-header-info'>
						<p className='user-fullname'>{data?.getFullName()}</p>
						<p className='user-email'>{data?.getEmail()}</p>

						<div className='profile-header-resume'>
							<div className='resume-item'>
								<LuTags className='resume-icon' />
								<div className='highlighted-info'>12</div> Ventas
							</div>
							<div className='resume-item'>
								<LuStore className='resume-icon' />
								<div className='highlighted-info'>3</div> Tiendas
							</div>
							<div className='resume-item'>
								<LuStar className='resume-icon' />
								<div className='highlighted-info'>8</div> Reseñas
							</div>
							<div className='resume-item'>
								<LuCalendar className='resume-icon' />
								Miembro desde Abril 2025
							</div>
						</div>
					</div>
				</div>
			</header>
			<PersonalInfoCard data={data} />
		</div>
	)
}

export default ProfilePage
